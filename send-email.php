<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $payload): void {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['success' => false, 'message' => 'Method not allowed.']);
}

$name = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$subject = trim((string)($_POST['subject'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));
$honeypot = trim((string)($_POST['website'] ?? ''));

if ($honeypot !== '') {
    respond(200, ['success' => true, 'message' => 'Message received.']);
}
if ($name === '' || strlen($name) > 200 || !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    strlen($email) > 254 || $subject === '' || strlen($subject) > 300 ||
    $message === '' || strlen($message) > 10000) {
    respond(422, ['success' => false, 'message' => 'Please check the form fields and try again.']);
}

$smtpHost = getenv('PORTFOLIO_SMTP_HOST') ?: 'smtp.gmail.com';
$smtpUser = getenv('PORTFOLIO_SMTP_USER');
$smtpPass = getenv('PORTFOLIO_SMTP_PASS');
$recipient = getenv('PORTFOLIO_CONTACT_TO') ?: 'c2muhammadtayyab@gmail.com';

if (!$smtpUser || !$smtpPass || !filter_var($recipient, FILTER_VALIDATE_EMAIL)) {
    error_log('Portfolio contact mail is not configured.');
    respond(503, ['success' => false, 'message' => 'The contact service is temporarily unavailable. Please email me directly.']);
}

$autoload = __DIR__ . '/vendor/autoload.php';
if (is_file($autoload)) {
    require_once $autoload;
} else {
    foreach (['Exception.php', 'PHPMailer.php', 'SMTP.php'] as $file) {
        $path = __DIR__ . '/PHPMailer/src/' . $file;
        if (!is_file($path)) {
            error_log('Portfolio contact mail dependency is missing.');
            respond(503, ['success' => false, 'message' => 'The contact service is temporarily unavailable. Please email me directly.']);
        }
        require_once $path;
    }
}

try {
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUser;
    $mail->Password = $smtpPass;
    $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = (int)(getenv('PORTFOLIO_SMTP_PORT') ?: 587);
    $mail->Timeout = 10;
    $mail->CharSet = 'UTF-8';
    $mail->setFrom($smtpUser, 'Portfolio Website');
    $mail->addAddress($recipient);
    $mail->addReplyTo($email, $name);
    $mail->isHTML(true);

    $safeName = htmlspecialchars($name, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $safeEmail = htmlspecialchars($email, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $safeSubject = htmlspecialchars($subject, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));
    $mail->Subject = 'Portfolio contact: ' . $subject;
    $mail->Body = "<h2>New portfolio message</h2><p><b>Name:</b> {$safeName}</p><p><b>Email:</b> {$safeEmail}</p><p><b>Subject:</b> {$safeSubject}</p><p>{$safeMessage}</p>";
    $mail->AltBody = "Name: {$name}\nEmail: {$email}\nSubject: {$subject}\n\n{$message}";
    $mail->send();
    respond(200, ['success' => true, 'message' => 'Message sent.']);
} catch (Throwable $error) {
    error_log('Portfolio contact mail failed: ' . get_class($error));
    respond(502, ['success' => false, 'message' => 'Unable to send your message right now. Please email me directly.']);
}

<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request'
    ]);
    exit;
}

try {
    $mail = new PHPMailer(true);

    // SMTP Settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;

    // Your Gmail Address
    $mail->Username = 'c2muhammadtayyab@gmail.com';

    // Paste your Gmail App Password here
    $mail->Password = 'fdvw wyaw hstk avod';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Sender
    $mail->setFrom('c2muhammadtayyab@gmail.com', 'Portfolio Website');

    // Receiver
    $mail->addAddress('c2muhammadtayyab@gmail.com');

    // Reply to visitor
    $mail->addReplyTo($_POST['email'], $_POST['name']);

    $mail->isHTML(true);

    $mail->Subject = 'Portfolio Contact - ' . $_POST['subject'];

    $mail->Body = "
        <h2>New Contact Form Message</h2>

        <p><strong>Name:</strong> {$_POST['name']}</p>

        <p><strong>Email:</strong> {$_POST['email']}</p>

        <p><strong>Subject:</strong> {$_POST['subject']}</p>

        <p><strong>Message:</strong></p>

        <p>{$_POST['message']}</p>
    ";

    $mail->send();

    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully!'
    ]);

} catch (Exception $e) {

    echo json_encode([
        'success' => false,
        'message' => $mail->ErrorInfo
    ]);
}
# Muhammad Tayyab's Portfolio Website

A modern, fully responsive dark-mode portfolio website built with HTML5, CSS3, and JavaScript.

## 📁 Files Overview

- **index.html** - Main portfolio page (contains all sections)
- **styles.css** - Complete dark-mode styling
- **script.js** - Interactive features and animations
- **send-email.php** - Backend email handler for contact form
- **index.php** - XAMPP router (already exists)

## ✨ Features Implemented

### Contact Form Email Functionality
- **Email Destination:** c2muhammadtayyab@gmail.com
- **Form Handler:** send-email.php (PHP backend)
- **Validation:** Client-side and server-side
- **Success Feedback:** Visual confirmation message
- **Security:** Input sanitization and email validation

### Social Media Links
Integrated your social profiles:
- **GitHub:** https://github.com/8220340684231
- **LinkedIn:** https://www.linkedin.com/in/muhammad-tayyab-37b22b394/
- **Instagram:** https://www.instagram.com/7ayyab_khan/
- **Email:** c2muhammadtayyab@gmail.com

### Website Sections
1. **Navigation Bar** - Sticky navbar with your initials (MT)
2. **Hero Section** - Eye-catching introduction with animated box
3. **About Me** - Personal bio with stats
4. **Projects** - 6 featured project cards
5. **Skills** - Categorized skills with progress bars
6. **Experience** - Timeline of work history
7. **Blog** - Latest article previews
8. **Contact** - Email form + contact info + social links
9. **Footer** - Quick links and social media icons

## 🚀 How to Test

1. Open your browser and go to: `http://localhost/tayyab/`
2. Fill out the contact form and click "Send Message"
3. Check your email inbox at **c2muhammadtayyab@gmail.com**
4. Click social media icons in footer to verify links work

## ⚙️ Email Configuration

**Current Setup:**
- PHP mail() function sends directly from your server
- Emails are sent to: c2muhammadtayyab@gmail.com
- Sender email: whatever email is entered in the form

**If emails don't arrive:**

### Option 1: Configure XAMPP Mail (Recommended)
1. Open `C:\xampp\php\php.ini`
2. Find the `[mail function]` section
3. Update SMTP settings:
   ```ini
   SMTP = smtp.gmail.com
   smtp_port = 587
   sendmail_from = c2muhammadtayyab@gmail.com
   ```
4. Restart XAMPP

### Option 2: Use Gmail SMTP with Authentication
Edit `send-email.php` and replace with Gmail integration (requires additional libraries)

### Option 3: Use Third-Party Email Service
- Formspree.io (free, automatic setup)
- FormSubmit.co (free, no setup needed)
- Sendgrid (paid, most reliable)

## 🎨 Customization Tips

### Change Colors
Edit `styles.css` root colors:
```css
:root {
    --primary-color: #00d4ff;      /* Cyan accent */
    --secondary-color: #667eea;    /* Purple accent */
    --dark-bg: #0a0e27;            /* Background */
    --card-bg: #1a1e3f;            /* Card background */
}
```

### Update Personal Info
- **Name:** Change "Muhammad Tayyab" in `index.html` (multiple locations)
- **Contact Info:** Update email and phone in contact section
- **Projects:** Edit project descriptions and links
- **Skills:** Modify skill categories and proficiency levels

### Add More Projects
Copy the `.project-card` div and customize with your own projects.

## 📱 Responsive Design

- **Desktop:** Full layout with all animations
- **Tablet:** Optimized grid layout
- **Mobile:** Single column, hamburger menu

## 🔐 Security Features

- Input sanitization (PHP)
- Email validation (HTML5 + JavaScript + PHP)
- CSRF protection ready (can add if needed)
- No direct database access

## 📊 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✅ Testing Checklist

- [ ] Email form sends successfully
- [ ] Email arrives in inbox
- [ ] Social links open in new tabs
- [ ] Mobile hamburger menu works
- [ ] Smooth scroll navigation
- [ ] Form validation works
- [ ] Animations display smoothly

## 💡 Tips for Best Results

1. **Test form sending:** Try submitting a test message immediately after setup
2. **Check spam folder:** Sometimes emails go to spam
3. **Enable JavaScript:** Portfolio requires JS for animations
4. **Use HTTPS in production:** For security and email reliability
5. **Update your content:** Replace placeholder projects with your real work

## 🔄 Next Steps

1. Customize the content with your actual projects and experience
2. Add high-quality images for projects
3. Deploy to a live server (hosting + domain)
4. Set up proper email service if local mail fails
5. Add Google Analytics for traffic tracking

## 📞 Support

For email issues:
- Check XAMPP logs in `C:\xampp\apache\logs\`
- Verify your email address is correct
- Test with a simple PHP mail script first
- Check your email spam/promotions folder

---

**Last Updated:** January 2024
**Portfolio Status:** ✅ Complete and Ready to Use

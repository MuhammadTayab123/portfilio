# Portfolio Customization Guide

## Quick Color Customization

To change the color scheme, edit the CSS variables at the top of `styles.css`:

```css
:root {
    --primary-color: #00d4ff;        /* Main accent color - Change this */
    --primary-dark: #0099cc;
    --secondary-color: #667eea;       /* Secondary accent color */
    --accent-color: #00ffff;          /* Bright accent for hover states */
    --dark-bg: #0a0e27;               /* Main background */
    --darker-bg: #05070f;             /* Darker background */
    --card-bg: #1a1e3f;               /* Card background */
}
```

### Popular Color Schemes to Try:

**Modern Pink & Purple:**
```css
--primary-color: #ff006e;
--secondary-color: #8338ec;
--accent-color: #fb5607;
```

**Deep Ocean:**
```css
--primary-color: #0091ad;
--secondary-color: #00b4d8;
--accent-color: #00d9ff;
```

**Tech Green:**
```css
--primary-color: #00ff9a;
--secondary-color: #6bcf7f;
--accent-color: #00ff88;
```

## Typography Customization

### Change Font Family
In `styles.css`, modify the `body` font-family:

```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

Recommended web-safe fonts:
- `Georgia, serif` - Classic
- `Trebuchet MS, sans-serif` - Modern
- `Courier New, monospace` - Code-like

### Adjust Font Sizes
Scale the entire site by changing root font-size:

```css
html {
    font-size: 16px;  /* Change to 15px for smaller, 17px for larger */
}
```

## Spacing Adjustments

### Section Padding
Find and adjust section padding:

```css
.hero {
    padding: 140px 0 100px;  /* Increase for more space */
}

.about {
    padding: 120px 0;
}
```

### Gap Between Elements
Find grid gap values:

```css
.projects-grid {
    gap: 2.5rem;  /* Increase for more spacing between cards */
}
```

## Content Updates

### Update Navigation Links
Edit in `index.html`:

```html
<ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <!-- Add or modify links here -->
</ul>
```

### Update Hero Section
Edit in `index.html`:

```html
<h1 class="hero-title">Your Headline</h1>
<p class="hero-subtitle">Your Subtitle</p>
<p class="hero-description">Your description text</p>
```

### Update Project Cards
Find and duplicate this structure in `index.html`:

```html
<div class="project-card">
    <div class="project-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="project-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="link-icon"><i class="fas fa-eye"></i></a>
            <a href="#" class="link-icon"><i class="fas fa-code"></i></a>
        </div>
    </div>
</div>
```

### Update Skills
Edit skill categories in `index.html`:

```html
<div class="skill-category">
    <h3>Frontend</h3>
    <div class="skill-items">
        <div class="skill-item">
            <span>Technology Name</span>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
            </div>
        </div>
    </div>
</div>
```

### Update Experience Timeline
Modify timeline items in `index.html`:

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h3>Job Title</h3>
        <p class="company">Company Name • Year Range</p>
        <p>Job description and achievements</p>
    </div>
</div>
```

## Animation Adjustments

### Slow Down Animations
In `styles.css`, increase animation durations:

```css
@keyframes float {
    /* Change from 6s to 8s or higher */
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-30px) rotate(3deg);
    }
}
```

### Adjust Hover Effects
Change hover effects in CSS:

```css
.project-card:hover {
    transform: translateY(-8px);  /* Increase/decrease movement */
    box-shadow: 0 20px 48px rgba(0, 212, 255, 0.2);  /* Adjust shadow */
}
```

## Adding New Sections

### Create a New Section
```html
<section id="section-name" class="section-name">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

### Add CSS for New Section
```css
.section-name {
    padding: 120px 0;
    background-color: var(--dark-bg);
}

/* Your custom styles */
```

## Performance Optimization Tips

1. **Optimize Images**: Use WebP format or compress PNGs
2. **Lazy Load Images**: They're already lazy loaded via Intersection Observer
3. **Minify CSS/JS**: Use online minifiers for production
4. **Cache Busting**: Add version numbers to file names if deploying updates

## Browser Testing

Test your changes in:
- Chrome/Edge
- Firefox
- Safari
- Mobile Safari (iOS)
- Chrome Mobile

## Common Issues & Solutions

### Logo Not Showing
- Ensure `logo.svg` is in the root directory
- Check file permissions
- Verify path is correct: `href="logo.svg"`

### Colors Not Updating
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh page (Ctrl+F5 on Windows, Cmd+Shift+R on Mac)
- Ensure CSS variables are updated in `:root`

### Mobile Menu Not Working
- Check that `script.js` is loaded
- Verify hamburger and nav-links elements exist in HTML
- Check browser console for JavaScript errors

### Form Not Sending Emails
- Verify `send-email.php` is in root directory
- Check Gmail app password is correct
- Enable "Less secure app access" if needed
- Check SMTP settings are correct

## SEO Customization

Update in `index.html` head:

```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="keyword1, keyword2, keyword3">
<meta name="author" content="Your Name">
```

## Social Media Links

Update in `index.html` footer:

```html
<a href="https://github.com/yourprofile" target="_blank"><i class="fab fa-github"></i></a>
<a href="https://linkedin.com/in/yourprofile" target="_blank"><i class="fab fa-linkedin"></i></a>
<a href="https://twitter.com/yourprofile" target="_blank"><i class="fab fa-twitter"></i></a>
```

## Contact Information

Update in HTML:

```html
<p><a href="mailto:your-email@example.com">your-email@example.com</a></p>
<p><a href="tel:+1234567890">+1 (234) 567-8900</a></p>
```

## Using Font Awesome Icons

Available icon categories:
- `fas fa-*` - Solid icons
- `fab fa-*` - Brand icons
- `far fa-*` - Regular icons

Example: `<i class="fas fa-code"></i>` for code icon

See all icons at: https://fontawesome.com/icons

## Deployment Checklist

- [ ] Update all personal information
- [ ] Change email addresses in form handler
- [ ] Update social media links
- [ ] Test form submission
- [ ] Test responsive design on mobile
- [ ] Check all links work
- [ ] Optimize images
- [ ] Update meta tags for SEO
- [ ] Test in multiple browsers
- [ ] Remove sensitive information
- [ ] Clear console.log() debug statements if any

## Advanced Customization

### Add Dark/Light Mode Toggle
Create a button and add this JavaScript:

```javascript
const toggle = document.querySelector('.theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});
```

Then add in CSS:

```css
body.light-mode {
    --dark-bg: #ffffff;
    --text-primary: #000000;
    --text-secondary: #555555;
}
```

### Add Animations on Scroll
Already implemented! Elements animate when scrolled into view using Intersection Observer.

## Support & Troubleshooting

1. Check browser console for errors (F12 → Console tab)
2. Verify all files are in correct directories
3. Ensure proper file permissions
4. Clear browser cache and hard refresh
5. Test in incognito/private mode to avoid cache issues

---

**Need Help?**
- Check REDESIGN_SUMMARY.md for overview
- View the HTML structure for reference
- Study existing CSS patterns for consistency
- Test changes in browser DevTools first

**Happy customizing! 🎉**

# My Portfolio V2.0

Hi 👋 I'm Mohamed 👨‍💻 <br>
I created this portfolio for people and companies who want to explore my skills, projects, and professional background.  
I recommend checking the changes from version one to version two to see my progress in front-end development.

## 🚀 Live Demo
You can view my portfolio here 👉 [Click to Visit](https://code-mo-dev.github.io/Portfolio/)

# Portfolio Project - Technologies Used

## 📋 Front-End Technologies

### 1. HTML5
- Building basic page structure
- Using Semantic HTML
- Meta tags for SEO and Open Graph

### 2. CSS3
- User interface design
- Responsive Design
- Animations and Transitions
- Flexbox and Grid Layout

### 3. SCSS/SASS (Dart Sass)
- Advanced CSS processor
- Using Variables and Mixins
- Modular SCSS structure
- Partial Files:
  * `_root.scss`
  * `_header.scss`
  * `_home-section.scss`
  * `_career-objective-section.scss`
  * `_skills-section.scss`
  * `_work-section.scss`
  * `_education-section.scss`
  * `_languages-section.scss`
  * `_contact-section.scss`
  * `_footer-section.scss`
  * `_var.scss`
  * `_media-responsive.scss`

### 4. JavaScript (ES6+)
- Adding interactivity to the page
- DOM Manipulation
- Event Handling
- Scroll Animations
- Typing Effect
- Counter Animations
- Intersection Observer API
- Clipboard API

### 5. SVG (Scalable Vector Graphics)
- Icons and illustrations
- React Icon, Tailwind Icon, Vue Icon
- LinkedIn, YouTube, GitHub Icons

## 📚 External Libraries & Tools

### 6. Font Awesome
- Icon library
- File: `all.min.css`
- Usage: `fa-brands`, `fa-solid`

### 7. Normalize.css (v8.0.1)
- CSS Reset Library
- Standardizing styles across browsers

## 🛠️ Build Tools & Development

### 8. Prepros
- Project build and compilation tool
- Compiling SCSS to CSS
- Auto-compilation
- Live Reload

### 9. Autoprefixer
- Automatic Vendor Prefixes
- Support for last 2 browser versions

### 10. Babel (Component)
- JavaScript Transpiler
- `@babel/preset-env`
- `@babel/preset-react` (Component)

### 11. Minification Tools
- CSS Minification
- JavaScript Minification
- HTML Minification

## 🌐 Modern APIs & Features

### 12. Intersection Observer API
- Monitoring element visibility
- Scroll-triggered Animations
- Progress Circle Animations

### 13. Clipboard API
- Copying text to clipboard
- Used in certificates page

### 14. Web APIs
- Window API
- Document API
- Navigator API

## 📁 Project Structure

### 15. File Organization
- Modular CSS Structure
- Separated JavaScript Files
- Organized Asset Folders
- Photos/Images Directory
- Webfonts Directory

### 16. Version Control
- Git
- GitHub

## 🎨 Design Technologies

### 17. Responsive Design
- Mobile First Approach
- Media Queries
- Flexible Layouts
- Breakpoints:
  * Mobile (max-width: 480px)
  * Tablet (max-width: 768px)
  * Desktop (min-width: 993px)

### 18. CSS Features
- CSS Variables (Custom Properties)
- CSS Grid
- Flexbox
- CSS Animations
- CSS Transitions
- Conic Gradients (for Progress Circles)

## 📝 Development Standards

### 19. Code Quality
- Semantic HTML
- Clean Code Structure
- Comments in Code
- Organized File Structure

### 20. Performance
- Optimized Images
- Minified CSS/JS
- Efficient Animations
- Lazy Loading (Intersection Observer)

## 🌍 Modern Web Technologies

### 21. Meta Tags & SEO
- Open Graph Tags
- Twitter Cards
- Canonical URLs
- Theme Color
- Viewport Meta Tag

### 22. Accessibility
- Semantic HTML
- Alt Text for Images
- ARIA Labels (implicit)

---

## 📝 Additional Notes

• Project uses Vanilla JavaScript (without frameworks)  
• No usage of Node.js or npm packages  
• Design inspired by Figma  
• Project ready for deployment on GitHub Pages  
• All files professionally organized  

---

**Creation Date: 2025**

## ✨ Features in Version 2.0

This is the second version of my personal portfolio website, built with HTML, SCSS, and JavaScript.  
It includes new animations, improved responsiveness, and a better-organized structure.

The project includes:
- Main portfolio page with sections for home, skills, education, work, etc.
- Certifications page with interactive certificate viewing
- Responsive design for multiple screen sizes
- Modern UI components and animations
- Font Awesome icons integration
- SCSS preprocessing with organized partials


## 📁 File structure V2.0

```bash
Portfolio Project Structure
============================

Portfolio/
├── index.html                          # Main portfolio page
├── README.md                           # Project documentation
├── prepros.config                      # Prepros configuration file
│
├── css/                                # Stylesheets directory
│   ├── Global Style/                   # Global CSS files
│   │   ├── all.min.css                # Minified CSS library
│   │   └── normalize.css              # CSS reset/normalize
│   │
│   ├── Main_Style/                     # Main SCSS files
│   │   ├── _career-objective-section.scss
│   │   ├── _contact-section.scss
│   │   ├── _education-section.scss
│   │   ├── _footer-section.scss
│   │   ├── _header.scss
│   │   ├── _home-section.scss
│   │   ├── _languages-section.scss
│   │   ├── _media-responsive.scss
│   │   ├── _root.scss
│   │   ├── _skills-section.scss
│   │   ├── _var.scss
│   │   ├── _work-section.scss
│   │   ├── main.css                    # Compiled main CSS
│   │   └── main.scss                   # Main SCSS file
│   │
│   ├── certifications page/            # Certifications page styles
│   │   ├── certifications.css         # Compiled CSS
│   │   └── certifications.scss        # SCSS source
│   │
│   └── webfonts/                       # Font Awesome files
│       ├── fa-brands-400.ttf
│       ├── fa-brands-400.woff2
│       ├── fa-regular-400.ttf
│       ├── fa-regular-400.woff2
│       ├── fa-solid-900.ttf
│       ├── fa-solid-900.woff2
│       ├── fa-v4compatibility.ttf
│       └── fa-v4compatibility.woff2
│
├── html/                               # HTML pages directory
│   ├── certifications.html            # Certifications page
│   ├── error_page.html                # Error page
│   ├── mo_ui_components_gallery_maintenance.html # This page is temporarily available.
│   └── Privacy.html                   # Privacy policy page
│
├── javaScript/                         # JavaScript files
│   ├── certifications.js              # Certifications page logic
│   └── main.js                        # Main portfolio logic
│
└── photos/                            # Images and assets directory
    ├── avatar_career.svg
    ├── avatar_contact.png
    ├── bookmark-fav-dynamic-color.png
    ├── brush-dynamic-color.png
    ├── cursor_32.png
    ├── fire-dynamic-color.png
    ├── Logo.png
    ├── maintenance.svg
    ├── my edu.jpg
    ├── notebook-dynamic-color.png
    ├── pointer_32.png
    ├── profile-img.png
    ├── undraw_private-files_m2bw.svg
    ├── undraw_server-error_syuz.png
    ├── vue.png
    ├── web side icon.png
    │
    └── Certificals/                   # Certificates images
        ├── git&github-certificate.png
        ├── HTML CERTIFICAL.png
        └── IBM - Certifical.png

File Types Summary:
==================
- HTML Files: 5 files
- CSS/SCSS Files: 15 files
- JavaScript Files: 2 files
- Image Files: 18 files
- Font Files: 8 files
- Configuration Files: 2 files
- Documentation: 1 file

Total Files: 51 files

```


## 🛎️ Customization Offer
If you'd like me to customize this portfolio template for your own website — including your name, links, and branding — feel free to contact me.  
I'll prepare a ready-to-use version for you 🔥


## 📬 Contact

Feel free to get in touch with me if you have any questions or just want to chat about web development!

- 📧 Email: [@code-mo](mailto:codemo2004@gmail.com)
- 🐙 GitHub: [@code-mo-dev](https://github.com/code-mo-dev)
- 💼 LinkedIn: [@‏Mohamed_Mahmoud‏](https://www.linkedin.com/in/mohamed-mahmoud-024714335/)



# Shiva Narayan PS - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a clean design, smooth animations, and a learning timeline for tracking daily progress.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Timeline**: Add and track your daily learning progress
- **Contact Form**: Functional contact form with validation
- **Smooth Scrolling**: Enhanced navigation experience
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Performance Optimized**: Fast loading and smooth interactions

## 📁 File Structure

```
portfolio/
├── index.html                              # Main HTML file
├── styles.css                              # CSS styles and responsive design
├── script.js                               # JavaScript functionality
├── README.md                               # This file
├── DEPLOYMENT.md                           # Quick deployment guide
├── ShivaNarayanPS_DevOpsEngineer.txt      # Resume in text format
└── ShivaNarayanPS_DevOpsEngineer.pdf      # Resume in PDF format
```

## 🚀 Quick Start

1. **Download/Clone** the files to your local machine
2. **Open** `index.html` in your web browser
3. **Customize** the content to match your information
4. **Deploy** to your preferred hosting platform

## 🎨 Customization

### Personal Information
Edit the following sections in `index.html`:

- **Name and Title**: Update in the hero section
- **About Me**: Modify the description in the about section
- **Skills**: Add/remove skills in the skills section
- **Projects**: Update project details and links
- **Contact Information**: Update email, phone, and social links

### Styling
Modify `styles.css` to customize:

- **Colors**: Update the color scheme by changing CSS variables
- **Fonts**: Change the font family in the body selector
- **Layout**: Adjust spacing and grid layouts
- **Animations**: Modify transition effects and animations

### Functionality
Edit `script.js` to customize:

- **Form Handling**: Modify contact form submission logic
- **Timeline**: Customize timeline entry functionality
- **Animations**: Adjust scroll animations and effects

## 🌐 Hosting Options

### Free Hosting Platforms

#### 1. **GitHub Pages** (Recommended)
```bash
# Create a new repository
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# Enable GitHub Pages in repository settings
# Your site will be available at: https://yourusername.github.io/portfolio
```

#### 2. **Netlify**
- Drag and drop your portfolio folder to [Netlify](https://netlify.com)
- Or connect your GitHub repository for automatic deployments

#### 3. **Vercel**
- Install Vercel CLI: `npm i -g vercel`
- Run `vercel` in your portfolio directory
- Follow the prompts to deploy

#### 4. **Firebase Hosting**
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize Firebase
firebase init hosting

# Deploy
firebase deploy
```

### Custom Domain Setup

1. **Purchase Domain**: Buy a domain from GoDaddy, Namecheap, or similar
2. **Configure DNS**: Point your domain to your hosting provider
3. **SSL Certificate**: Most hosting platforms provide free SSL certificates

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- **Desktop**: 1200px+ screens
- **Tablet**: 768px - 1199px screens  
- **Mobile**: 320px - 767px screens

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📊 Performance Features

- **Optimized Images**: Use WebP format when possible
- **Minified CSS/JS**: Consider minifying for production
- **Lazy Loading**: Images load as needed
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Debounced Events**: Optimized scroll and resize handlers

## 🎯 SEO Optimization

Add the following meta tags to `index.html` for better SEO:

```html
<meta name="description" content="Shiva Narayan PS - DevOps & Software Engineer with expertise in cloud-native infrastructure, CI/CD pipelines, and AI/ML deployment workflows">
<meta name="keywords" content="DevOps, Cloud, AWS, Docker, Kubernetes, CI/CD, Terraform, Ansible">
<meta name="author" content="Shiva Narayan PS">
<meta property="og:title" content="Shiva Narayan PS - DevOps Engineer">
<meta property="og:description" content="DevOps & Software Engineer with 1.5+ years experience in cloud infrastructure and CI/CD automation">
<meta property="og:image" content="path-to-your-image.jpg">
```

## 🔒 Security Considerations

- **Form Validation**: Client-side validation implemented
- **XSS Protection**: Input sanitization in JavaScript
- **HTTPS**: Use HTTPS in production
- **Content Security Policy**: Consider adding CSP headers

## 📈 Analytics

Add Google Analytics or similar tracking:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🛠️ Development

### Local Development
1. Clone the repository
2. Open `index.html` in your browser
3. Use a local server for better development experience:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```

### Code Structure
- **HTML**: Semantic markup with accessibility features
- **CSS**: Modular CSS with BEM methodology
- **JavaScript**: Vanilla JS with modern ES6+ features

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions, please open an issue.

## 📞 Support

If you need help with:
- **Customization**: Check the comments in the code
- **Hosting**: Refer to the hosting section above
- **Issues**: Open a GitHub issue

## 🎉 Features to Add

Consider adding these features to enhance your portfolio:

- [ ] Blog section
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Portfolio filters
- [ ] Testimonials section
- [ ] Download resume button
- [ ] Social media integration
- [ ] Newsletter signup
- [ ] Portfolio analytics
- [ ] A/B testing capabilities

## 📊 Performance Checklist

Before deploying, ensure:

- [ ] Images are optimized
- [ ] CSS/JS is minified
- [ ] Meta tags are added
- [ ] Favicon is included
- [ ] 404 page is created
- [ ] SSL certificate is enabled
- [ ] Analytics is configured
- [ ] Social media previews work
- [ ] Mobile testing is complete
- [ ] Cross-browser testing is done

## 👨‍💻 About Shiva Narayan PS

**DevOps & Software Engineer** with 1.5+ years of hands-on experience in building cloud-native infrastructure, automating CI/CD pipelines, and managing scalable, secure DevOps workflows in production environments.

### Key Achievements:
- **50+ Critical Issues Resolved**: Proven track record of resolving infrastructure and CI/CD issues
- **99.99% Uptime**: Achieved high availability for production services
- **AWS Security Improvement**: Enhanced cloud security posture from 69% to 82%
- **80% Reduction**: Automated merge operations reducing manual work significantly

### Technical Expertise:
- **Cloud Platforms**: AWS (EC2, EKS, Lambda), Azure, GCP
- **DevOps Tools**: Jenkins, Docker, Kubernetes, Terraform, Ansible
- **Programming**: Python, Java, C/C++, Bash, JavaScript
- **Monitoring**: SumoLogic, Zabbix, Redash, Kafka
- **AI/ML Deployment**: RAG, Transformer models, AI Agents

### Current Role:
**Software Engineer at Ushur** (June 2024 - Present)
- Designing and automating CI/CD pipelines
- Provisioning and optimizing AWS infrastructure
- Building scalable AI/ML application deployment workflows

---

**Built with ❤️ for showcasing DevOps expertise and continuous learning journey.**

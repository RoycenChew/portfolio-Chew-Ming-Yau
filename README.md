# 🚀 Roycen Chew Ming Yau - Portfolio Website

A modern, interactive portfolio website built with React and TaiwindCSS, featuring stunning animations, 3D effects, and cutting-edge web technologies. 
Using https://www.reactbits.dev/ to build the component. It is user friendly to first time user.

## ✨ Features

- 🎨 **Modern Design**: Sleek, purple-themed UI with glassmorphism effects
- ⚡ **Smooth Animations**: GSAP-powered transitions and scroll animations
- 🎭 **Interactive Components**: 
  - Animated navigation with card expansion
  - Glitching letter background effect
  - Particle effects on skill cards
  - Spotlight hover effects on projects
  - Scroll-stacking experience timeline
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- 🎯 **Sections**:
  - About Me with animated text
  - Experience timeline with scroll effects
  - Skills showcase with magic bento grid
  - Featured projects with chroma grid
  - Contact form with newsletter signup
- 🌐 **SEO Optimized**: Semantic HTML and proper meta tags

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Animation Libraries
- **GSAP (GreenSock Animation Platform)** - Professional-grade animations
  - ScrollTrigger - Scroll-based animations
  - SplitText - Text animation effects
- **Three.js** - 3D graphics (optional for advanced effects)
- **Lenis** - Smooth scrolling

### Additional Libraries
- **react-icons** - Icon library (Font Awesome, Simple Icons)
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helpers for Three.js
- **meshline** - Custom line rendering

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### Step 2: Install Dependencies
```bash
npm install
```

Or with yarn:
```bash
yarn install
```

### Step 3: Install Required Packages
```bash
# Core dependencies
npm install react react-dom

# Animation libraries
npm install gsap @gsap/react lenis

# Icons
npm install react-icons

# Three.js (if using 3D components)
npm install three @react-three/fiber @react-three/drei @react-three/rapier meshline

# Additional utilities
npm install papaparse
```

### Step 4: Start Development Server
```bash
npm run dev
```

Your site will be available at `http://localhost:5173`

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── resume.pdf              # Your CV/Resume
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── aboutSection.jsx    # About me section
│   │   ├── CardNav.jsx         # Animated navigation
│   │   ├── ChromaGrid.jsx      # Projects spotlight grid
│   │   ├── contactSection.jsx  # Contact form
│   │   ├── electric.jsx        # Electric border effect
│   │   ├── experienceSection.jsx # Experience timeline
│   │   ├── LetterGlitch.jsx    # Background animation
│   │   ├── MagicBento.jsx      # Skills bento grid
│   │   ├── projectsSection.jsx # Projects showcase
│   │   ├── ScrollStack.jsx     # Scroll stacking effect
│   │   ├── Shuffle.jsx         # Text shuffle animation
│   │   ├── skillsSection.jsx   # Skills section
│   │   └── word.jsx            # Gradient text effect
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Customization Guide

### 1. Update Personal Information

**src/components/aboutSection.jsx**
```javascript
// Change your name
<Word>Your Name Here</Word>

// Update your bio
<p>Your description here...</p>

// Update profile image
<img src="your-image-url.jpg" alt="Your Name" />

// Update interests
const interests = [
  { icon: '☁️', name: 'Your Interest', color: 'from-blue-500 to-cyan-500' },
  // Add more...
];
```

### 2. Add Your Experience

**src/components/experienceSection.jsx**
```javascript
const experiences = [
  {
    id: 'exp-1',
    title: 'Your Job Title',
    company: 'Company Name',
    date: 'Start - End',
    description: 'What you did...',
    image: 'image-url.jpg',
    color: 'from-blue-600 to-blue-900',
    icon: '💼'
  },
  // Add more experiences...
];
```

### 3. Update Your Skills

**src/components/MagicBento.jsx**
```javascript
const cardData = [
  {
    color: '#1e293b',
    title: 'Your Skill',
    description: 'Description of your skill',
    label: 'Category',
    icon: YourIcon, // Import from react-icons
    iconColor: '#yourcolor'
  },
  // Add more skills...
];
```

### 4. Add Your Projects

**src/components/projectsSection.jsx**
```javascript
const projects = [
  {
    image: 'project-screenshot.jpg',
    title: 'Project Name',
    subtitle: 'Short description',
    handle: 'Tech Stack',
    location: 'Status',
    borderColor: '#3b82f6',
    gradient: 'linear-gradient(145deg, #1e40af, #000)',
    url: 'https://github.com/yourproject'
  },
  // Add more projects...
];
```

### 5. Update Contact Information

**src/components/contactSection.jsx**
```javascript
// Update email
<a href="mailto:your-email@example.com">

// Update phone
<a href="tel:+1234567890">

// Update social links
<a href="https://linkedin.com/in/yourprofile">
<a href="https://github.com/yourusername">
```

### 6. Change Color Theme

**src/App.jsx**
```javascript
// Change background glitch colors
<LetterGlitch 
  glitchColors={['#your-color-1', '#your-color-2', '#your-color-3']} 
/>

// Change navigation colors
<CardNav
  baseColor="rgba(15, 15, 25, 0.85)"
  menuColor="#your-accent-color"
  buttonBgColor="#your-button-color"
/>
```

**src/index.css**
```css
/* Update primary colors */
:root {
  --primary: #7c3aed;    /* Change to your brand color */
  --secondary: #a78bfa;
}
```

### 7. Add Your Resume

1. Export your resume as PDF
2. Name it `resume.pdf`
3. Place it in the `public` folder
4. The download button will automatically work!

## 🎯 Performance Optimization

### Tips for Better Performance

1. **Optimize Images**
   - Use WebP format
   - Compress images before uploading
   - Use appropriate sizes (don't use 4K images for thumbnails)

2. **Lazy Loading**
   ```javascript
   import { lazy, Suspense } from 'react';
   
   const HeavyComponent = lazy(() => import('./HeavyComponent'));
   
   <Suspense fallback={<div>Loading...</div>}>
     <HeavyComponent />
   </Suspense>
   ```

3. **Code Splitting**
   - Vite automatically handles this
   - Keep components modular


## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📧 Contact

**Roycen Chew Ming Yau**
- Email: mingyauchew@gmail.com
- LinkedIn: [ming-yau-chew](https://www.linkedin.com/in/ming-yau-chew-06675b354)
---

**Made with ❤️ by Roycen Chew Ming Yau**

⭐ Star this repo if you found it helpful!

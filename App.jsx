import AboutSection from './components/aboutSection';
import ExperienceSection from './components/experienceSection';
import ContactSection from './components/contactSection';
import SkillsSection from './components/skillsSection';
import ProjectsSection from './components/projectsSection';
import LetterGlitch from './components/LetterGlitch';
import CardNav from './components/CardNav';

export default function App() {
  const logoUrl = '/picture/LOGO.png';
  
  const navItems = [
    {
      label: 'About Me',
      bgColor: '#1e1b4b',
      textColor: '#ffffff',
      links: [
        { label: 'About', href: '#about', ariaLabel: 'Go to About section' },
        { label: 'Experience', href: '#experience', ariaLabel: 'Go to Experience section' },
        { label: 'Skills', href: '#skills', ariaLabel: 'Go to Skills section' }
      ]
    },
    {
      label: 'My Work',
      bgColor: '#3730a3',
      textColor: '#ffffff',
      links: [
        { label: 'Projects', href: '#projects', ariaLabel: 'Go to Projects section' },
        { label: 'Contact', href: '#contact', ariaLabel: 'Go to Contact section' }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Enhanced Background with gradient overlay */}
      <div className="fixed inset-0 z-0">
        <LetterGlitch 
          glitchColors={['#4c1d95', '#5b21b6', '#7c3aed']} 
          glitchSpeed={70}
          outerVignette={true}
          centerVignette={false}
          smooth={true}
        />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black/50 pointer-events-none" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Enhanced Navigation */}
        <CardNav
          logo={logoUrl}
          logoAlt="Roycen Chew Portfolio"
          items={navItems}
          ease="power3.out"
          baseColor="rgba(15, 15, 25, 0.85)"
          menuColor="#a78bfa"
          buttonBgColor="#7c3aed"
          buttonTextColor="#ffffff"
        />

        {/* Sections with spacing */}
        <div className="pt-24">
          <AboutSection />
          
          {/* Divider */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-16" />
          </div>
          
          <ExperienceSection />
          
          {/* Divider */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-16" />
          </div>
          
          <SkillsSection />
          
          {/* Divider */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-16" />
          </div>
          
          <ProjectsSection />
          
          {/* Divider */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent my-16" />
          </div>
          
          <ContactSection />
          
          {/* Footer */}
          <footer className="py-12 px-4 text-center">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col items-center gap-4">
                <p className="text-gray-400 text-sm">
                  © 2025 Roycen Chew Ming Yau. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ming-yau-chew-06675b354" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="mailto:mingyauchew@gmail.com"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Email
                  </a>
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  Built with React, Tailwind CSS, GSAP & Three.js
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

// Scroll to Top Component
function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="width" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
}

// Add React import for ScrollToTop
import React from 'react';
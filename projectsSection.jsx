import ChromaGrid from './ChromaGrid';
import Shuffle from './Shuffle';

export default function ProjectsSection() {
  const projects = [
    {
      image: '/picture/portfolio_picture.png',
      title: 'Portfolio Website',
      subtitle: 'Beginning level of web design',
      handle: 'React + Tailwind.CSS',
      location: 'View Live',
      borderColor: '#3b82f6',
      gradient: 'linear-gradient(145deg, #1e40af, #000)',
      url: 'https://github.com/RoycenChew/portfolio-Chew-Ming-Yau'
    },

        {
      image: '/picture/ibm.png',
      title: 'Agentic AI Hackathon with IBM watson',
      subtitle: 'Beginning level of AI Agent',
      handle: 'IBM watsonx Orchestrate',
      location: 'View README (SERVICE CLOSE IN 24/11)',
      borderColor: '#3b82f6',
      gradient: 'linear-gradient(145deg, #1e40af, #000)',
      url: 'https://github.com/RoycenChew/enterprise-guardian-watsonx.git'
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-4 py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <Shuffle
            text="FEATURED PROJECTS"
            className="text-5xl md:text-6xl font-black mb-4"
            shuffleDirection="right"
            duration={0.4}
            shuffleTimes={3}
            colorFrom="#6366f1"
            colorTo="#a78bfa"
            stagger={0.05}
            scrambleCharset="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '0.05em'
            }}
          />
          <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Hover over any project to explore and click to view details
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full mt-4" />
        </div>
        
        <div className="min-h-[600px]">
          <ChromaGrid 
            items={projects}
            radius={350}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            className="py-8"
          />
        </div>
      </div>
    </section>
  );
}
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import Shuffle from './Shuffle';

export default function ExperienceSection() {
  const experiences = [
    {
      id: 'exp-1',
      title: 'UCSI Computer Science Student',
      company: 'UCSI Kuala Lumpur Campus',
      date: '2025 - Present',
      description: 'Student in UCSI, studying Bachelor of Computer Science with Honours',
      image: 'https://www.myeducationrepublic.com/wp-content/uploads/2021/07/UCSI-University.jpg',
      color: 'from-blue-600 to-blue-900',
      icon: '🏢'
    },
    {
      id: 'exp-2',
      title: 'Great AI Hackathon Malaysia 2025',
      company: 'AWS',
      date: '2025',
      description: 'After my first semester, I led Flying High in a hackathon, improving my skills and gaining AWS project experience.',
      image: 'https://media.licdn.com/dms/image/v2/D4E22AQEKUMXJ4ChHew/feedshare-shrink_2048_1536/B4EZm5MpzvHEAw-/0/1759748727293?e=1764201600&v=beta&t=Pfp7Li_w_jzvnJDLYZ4J8vd3lh7m8nD7iN67ajrKUQU',
      color: 'from-purple-600 to-purple-900',
      icon: '🚀'
    },
    {
      id: 'exp-3',
      title: 'High School',
      company: 'Seremban Chung Hua High School',
      date: '2019 - 2024',
      description: 'Passed SPM and UEC with credit; served as discipline leader of prefects, organized training camps, and joined a school exchange camp.',
      image: 'https://www.ecmlibrafoundation.com/wp-content/uploads/2020/05/CHHS-img-31.jpg',
      color: 'from-green-600 to-green-900',
      icon: '🌱'
    },

    {
      id: 'exp-4',
      title: 'Capture The Flag UCSI 2025',
      company: 'UCSI University',
      date: '2025',
      description: 'Team Leader of Team 404 NotFound, 7th Place, First Time Joining CTF Hackthon',
      image: 'https://media.licdn.com/dms/image/v2/D4E22AQH0ZUU8asuqNg/feedshare-shrink_1280/B4EZqCbie3HoA0-/0/1763124849110?e=1765411200&v=beta&t=M4v5gwnj9NP1zJtQOo_7YhI4zxLz7QoqD2-h0zU1lMw',
      color: 'from-orange-600 to-orange-900',
      icon: '🚀'
    },

        {
      id: 'exp-5',
      title: 'Agentic AI Hackathon with IBM watsonx',
      company: 'IBM, LabLab.ai',
      date: '2025',
      description: 'Use IBM watsonx Orchestrate Platform, Creating a Enterprise Guardian AI intelligent audit agent. ',
      image: 'https://lablab.ai/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Flablab-static-eu%2Fimages%2Fevents%2Fcmfqx77uw000e357i7h3waw9n%2Fcmfqx77uw000e357i7h3waw9n_imageLink_36c4v0wzf.jpg&w=1080&q=75',
      color: 'from-purple-600 to-purple-900',
      icon: '🚀'
    },

  ];

  return (
    <section id="experience" className="min-h-screen py-20 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Title with Shuffle */}
        <div className="text-center mb-12">
          <Shuffle
            text="MY JOURNEY"
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
          <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional experience and growth in the tech industry
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full mt-4" />
        </div>
        
        {/* Scrollable Experience Cards */}
        <div className="relative">
          <style>{`
            .scroll-stack-container::-webkit-scrollbar {
              display: none;
            }
            .scroll-stack-container {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          
          <ScrollStack
            itemDistance={60}
            itemScale={0.05}
            itemStackDistance={45}
            stackPosition="20%"
            scaleEndPosition="10%"
            baseScale={0.92}
            rotationAmount={0}
            blurAmount={0}
            useWindowScroll={false}
            className="h-screen scroll-stack-container"
          >
            {experiences.map((exp) => (
              <ScrollStackItem 
                key={exp.id}
                itemClassName={`bg-gradient-to-br ${exp.color} shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-300`}
              >
                <div className="flex flex-col md:flex-row gap-6 h-full p-2">
                  {/* Image Section */}
                  <div className="md:w-2/5 h-48 md:h-full rounded-2xl overflow-hidden relative group">
                    <img 
                      src={exp.image} 
                      alt={exp.company}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-6xl opacity-80">
                      {exp.icon}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:w-3/5 flex flex-col justify-center text-white p-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 w-fit">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      {exp.date}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-0.5 bg-white/50" />
                      <p className="text-xl md:text-2xl opacity-90 font-light">
                        {exp.company}
                      </p>
                    </div>
                    
                    <p className="text-base md:text-lg opacity-80 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm">
                        ContinuousLearning
                      </span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm">
                        Student
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
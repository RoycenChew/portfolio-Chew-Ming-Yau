import Electric from './electric';
import Word from './word';
import Shuffle from './Shuffle';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Title with Shuffle Animation */}
        <div className="text-center mb-16">
          <Shuffle
            text="ABOUT ME"
            className="text-6xl md:text-7xl font-black mb-4"
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
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Main Container with Image on Left */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          
          {/* Left Side - Profile Image with glow effect */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[45%] opacity-50 blur-2xl group-hover:opacity-75 transition duration-500" />
            <div className="relative">
              <img 
                className="w-72 h-96 rounded-[40%] border-4 border-purple-400 shadow-2xl object-cover transform transition duration-500 group-hover:scale-105 group-hover:rotate-2"
                src="/picture/real-picture.jpg" 
                alt="Roycen Chew Ming Yau" 
              />
              {/* Animated border */}
              <div className="absolute inset-0 rounded-[40%] border-2 border-purple-400/50 animate-pulse" />
            </div>
          </div>

          {/* Right Side - Card with Electric Border */}
          <div className="flex-1 w-full">
            <Electric
              color="#7c3aed"
              speed={0.8}
              chaos={1.2}
              thickness={3}
              style={{ borderRadius: 24 }}
            >
              <div className="bg-gradient-to-br from-gray-900/90 via-purple-900/20 to-gray-900/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-700/50">
                <div className="flex flex-col lg:flex-row gap-8">
                  
                  {/* Center Content - Name and About */}
                  <div className="flex-1">
                    {/* Name Box with gradient */}
                    <div className="mb-6 p-6 bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-2xl border border-purple-500/30 shadow-lg">
                      <Word
                        colors={["#a78bfa", "#c084fc", "#e0a2fe", "#c084fc", "#a78bfa"]}
                        animationSpeed={4}
                        showBorder={false}
                        className="text-4xl font-extrabold text-center tracking-wide"
                      > 
                        Roycen Chew Ming Yau
                      </Word>
                    </div>
                    
                    {/* About Me Box */}
                    <div className="p-6 bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                        <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                          About Me
                        </h4>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">🎓</span>
                          <p className="text-xl text-blue-300 font-semibold">UCSI Student | Computer Science</p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">📅</span>
                          <p className="text-gray-400 text-sm font-medium">2025 - Present</p>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <p className="text-gray-300 text-base leading-relaxed">
                            Hello! I'm a passionate student currently seeking an internship opportunity. 
                            I love exploring new technologies and applying my skills to real-world projects. 
                            Let's build something amazing together! 🚀
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - Area of Interest */}
                  <div className="lg:w-80">
                    <div className="p-6 bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl border border-purple-500/30 shadow-lg h-full">
                      <div className="flex items-center gap-2 mb-6">
                        <span className="text-3xl">✨</span>
                        <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                          Areas of Interest
                        </h4>
                      </div>
                      
                      <div className="space-y-4">
                        {[
                          { icon: '☁️', name: 'Cloud Computing', color: 'from-blue-500 to-cyan-500' },
                          { icon: '🖥️', name: 'Artificial Intelligence', color: 'from-purple-500 to-pink-500' },
                          { icon: '💻', name: 'Software Development', color: 'from-green-500 to-emerald-500' },
                          { icon: '🔧', name: 'Computer Hardware', color: 'from-orange-500 to-red-500' }
                        ].map((item, index) => (
                          <div 
                            key={index}
                            className="group p-4 bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                                {item.icon}
                              </span>
                              <p className={`text-lg font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover:animate-pulse`}>
                                {item.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </Electric>
          </div>

        </div>
      </div>
    </section>
  );
}
import MagicBento from './MagicBento';
import Shuffle from './Shuffle';

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen px-4 py-20 flex items-center justify-center relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full flex flex-col items-center relative z-10">
        <div className="text-center mb-12">
          <Shuffle
            text="SKILLS & EXPERTISE"
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
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Technologies and tools I work with to bring ideas to life
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full mt-4" />
        </div>
        
        <MagicBento
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          disableAnimations={false}
          spotlightRadius={300}
          particleCount={8}
          enableTilt={true}
          glowColor="124, 58, 237"
          clickEffect={true}
          enableMagnetism={true}
        />
      </div>
    </section>
  );
}
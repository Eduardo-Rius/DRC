import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Scale, Building2 } from 'lucide-react';

export default function WhyNow() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Card 1: Comes from Top Left
  const card1X = useTransform(scrollYProgress, [0, 0.4], ['-150%', '0%']);
  const card1Y = useTransform(scrollYProgress, [0, 0.4], ['-100%', '0%']);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5], [0, 1, 1, 0]);

  // Card 2: Comes from Top Right
  const card2X = useTransform(scrollYProgress, [0, 0.4], ['150%', '0%']);
  const card2Y = useTransform(scrollYProgress, [0, 0.4], ['-100%', '0%']);
  const card2Opacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5], [0, 1, 1, 0]);

  // Card 3: Comes from Bottom
  const card3Y = useTransform(scrollYProgress, [0, 0.4], ['150%', '0%']);
  const card3Opacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5], [0, 1, 1, 0]);

  // General Text (Why Now?) Opacity
  const introOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Glow / Impact Opacity
  const impactOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.8], [0, 1, 1]);
  const impactScale = useTransform(scrollYProgress, [0.4, 0.6], [0.5, 1.5]);

  // Final Reveal Opacity
  const finalRevealOpacity = useTransform(scrollYProgress, [0.55, 0.7, 1], [0, 1, 1]);
  const finalRevealY = useTransform(scrollYProgress, [0.55, 0.7], [50, 0]);

  return (
    <section className="bg-primary relative">
      <div ref={containerRef} className="h-[350vh] w-full relative">
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-primary flex items-center justify-center">
          
          {/* Background Oceanic Waves */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496284427489-f59461d8a8e6?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/80" />

          {/* Intro Text */}
          <motion.div 
            style={{ opacity: introOpacity }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center w-full z-10 px-6"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">Why Now?</h2>
            <p className="text-xl md:text-3xl text-gray-400 font-light">Three global trends are converging.</p>
          </motion.div>

          {/* Trend Card 1: AI */}
          <motion.div 
            style={{ x: card1X, y: card1Y, opacity: card1Opacity }}
            className="absolute z-20 w-[90%] max-w-sm glass-panel p-8 rounded-3xl border border-accent-cyan/30 shadow-[0_0_40px_rgba(0,217,255,0.15)]"
          >
            <div className="bg-accent-blue/20 w-12 h-12 flex items-center justify-center rounded-full mb-6">
              <Cpu className="text-accent-cyan w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">AI Has Matured</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Computer vision is now accurate enough for real-time aquatic prediction with zero latency.
            </p>
          </motion.div>

          {/* Trend Card 2: Liability */}
          <motion.div 
            style={{ x: card2X, y: card2Y, opacity: card2Opacity }}
            className="absolute z-20 w-[90%] max-w-sm glass-panel p-8 rounded-3xl border border-accent-red/30 shadow-[0_0_40px_rgba(255,59,59,0.15)]"
          >
            <div className="bg-accent-red/20 w-12 h-12 flex items-center justify-center rounded-full mb-6">
              <Scale className="text-accent-red w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">Exploding Liability</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Liability costs are exploding. Operators can no longer afford reactive safety measures.
            </p>
          </motion.div>

          {/* Trend Card 3: Budgets */}
          <motion.div 
            style={{ y: card3Y, opacity: card3Opacity }}
            className="absolute z-20 w-[90%] max-w-sm glass-panel p-8 rounded-3xl border border-accent-green/30 shadow-[0_0_40px_rgba(24,255,138,0.15)]"
          >
            <div className="bg-accent-green/20 w-12 h-12 flex items-center justify-center rounded-full mb-6">
              <Building2 className="text-accent-green w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">Infrastructure Budgets</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Smart infrastructure budgets are growing. Governments are actively funding AI-based public safety.
            </p>
          </motion.div>

          {/* Impact Glow / Collision */}
          <motion.div 
            style={{ opacity: impactOpacity, scale: impactScale }}
            className="absolute z-10 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(0,217,255,0.4)_0%,_transparent_70%)] rounded-full mix-blend-screen pointer-events-none"
          />

          {/* Final Reveal */}
          <motion.div 
            style={{ opacity: finalRevealOpacity, y: finalRevealY }}
            className="absolute z-30 text-center px-6 w-full max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 mb-8 backdrop-blur-md">
              <span className="text-sm font-bold text-accent-cyan tracking-widest uppercase">The Inevitable Evolution</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter uppercase">
              A Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-turquoise to-white glow-text-cyan">Storm.</span>
            </h2>
            <p className="mt-8 text-xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto">
              DRC is the exact platform at the exact right moment in history.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

function Counter({ from, to, duration = 2, suffix = "", prefix = "", decimals = 0 }: CounterProps) {
  const [value, setValue] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setValue(latest);
        }
      });
      return controls.stop;
    }
  }, [from, to, duration, isInView]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TheOpportunity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scene Opacities
  const scene1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const scene2Opacity = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0]);
  const scene3Opacity = useTransform(scrollYProgress, [0.35, 0.4, 0.55, 0.6], [0, 1, 1, 0]);
  const scene4Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
  const scene5Opacity = useTransform(scrollYProgress, [0.75, 0.8, 0.95, 1], [0, 1, 1, 0]);

  // Specific Scales / Transforms for cinematic feel
  const scene1Scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const scene2Scale = useTransform(scrollYProgress, [0.15, 0.4], [1, 1.1]);
  const scene3Scale = useTransform(scrollYProgress, [0.35, 0.6], [0.9, 1]);
  const scene4Scale = useTransform(scrollYProgress, [0.55, 0.8], [1.1, 1]);
  const scene5Scale = useTransform(scrollYProgress, [0.75, 1], [0.9, 1.1]);

  return (
    <section className="bg-black relative">
      {/* SCROLLYTELLING CONTAINER */}
      <div ref={containerRef} className="h-[500vh] w-full relative">
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-black">
          
          {/* SCENE 1: Child Playing / Warm */}
          <motion.div 
            style={{ opacity: scene1Opacity, scale: scene1Scale }} 
            className="absolute inset-0 flex items-center justify-center text-center"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519315901367-f34f927e7049?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
            <div className="relative z-10 px-6">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
                A Child Drowns <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Every 90 Seconds.</span>
              </h2>
            </div>
          </motion.div>

          {/* SCENE 2: Submersion / Silence */}
          <motion.div 
            style={{ opacity: scene2Opacity, scale: scene2Scale }} 
            className="absolute inset-0 flex items-center justify-center text-center"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 px-6 max-w-4xl">
              <h3 className="text-3xl md:text-5xl font-light text-gray-300 tracking-wide leading-relaxed">
                The world spends billions <br className="hidden md:block"/>reacting to aquatic tragedies.
              </h3>
            </div>
          </motion.div>

          {/* SCENE 3: Black Screen / Huge Text */}
          <motion.div 
            style={{ opacity: scene3Opacity, scale: scene3Scale }} 
            className="absolute inset-0 bg-black flex items-center justify-center text-center"
          >
            <div className="relative z-10 px-6">
              <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-white leading-[1.1] tracking-tighter">
                236,000 <br />
                <span className="text-4xl md:text-6xl text-gray-500 font-bold tracking-tight">
                  PEOPLE DIE FROM <br />DROWNING EVERY YEAR.
                </span>
              </h1>
            </div>
          </motion.div>

          {/* SCENE 4: DRC Solution Overlay */}
          <motion.div 
            style={{ opacity: scene4Opacity, scale: scene4Scale }} 
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574627250645-03dc8ec51b14?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-primary/80" />
            
            {/* Simulated UI over the pool */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80vw] h-[60vh] md:w-[60vw] md:h-[50vh] border border-accent-cyan/30 bg-accent-cyan/5 rounded-3xl relative backdrop-blur-sm flex flex-col items-center justify-center shadow-[0_0_100px_rgba(0,217,255,0.1)]">
                
                {/* Tech targeting squares */}
                <div className="absolute w-32 h-32 border-2 border-dashed border-accent-cyan animate-pulse rounded-lg flex items-center justify-center bg-accent-cyan/10">
                   <div className="w-2 h-2 bg-accent-cyan rounded-full shadow-[0_0_10px_#00D9FF]" />
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black text-white mt-48 text-center px-4">
                  DRC is building the intelligence layer <br className="hidden md:block" />
                  <span className="text-accent-cyan">that prevents them before they happen.</span>
                </h3>
              </div>
            </div>
          </motion.div>

          {/* SCENE 5: Closure */}
          <motion.div 
            style={{ opacity: scene5Opacity, scale: scene5Scale }} 
            className="absolute inset-0 bg-black flex items-center justify-center text-center"
          >
            <div className="relative z-10 px-6">
              <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight">
                What if drowning became <br />
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white">predictable?</span>
              </h2>
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* KPI CARDS SECTION */}
      <div className="bg-black py-32 relative z-20 -mt-10 border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-accent-cyan/40 hover:bg-white/5 transition-all duration-500 group shadow-lg hover:shadow-[0_0_40px_rgba(0,217,255,0.1)]">
              <h4 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:glow-text-cyan transition-all">
                <Counter from={0} to={236000} duration={2.5} />
              </h4>
              <p className="text-sm font-bold text-gray-500 tracking-widest uppercase">Annual Deaths</p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-accent-cyan/40 hover:bg-white/5 transition-all duration-500 group shadow-lg hover:shadow-[0_0_40px_rgba(0,217,255,0.1)]">
              <h4 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:glow-text-cyan transition-all">
                <Counter from={0} to={12} duration={2.5} prefix="$" suffix="B+" />
              </h4>
              <p className="text-sm font-bold text-gray-500 tracking-widest uppercase">Global Liability Exposure</p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-accent-cyan/40 hover:bg-white/5 transition-all duration-500 group shadow-lg hover:shadow-[0_0_40px_rgba(0,217,255,0.1)]">
              <h4 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:glow-text-cyan transition-all">
                <Counter from={0} to={1.2} decimals={1} duration={2.5} suffix="s" />
              </h4>
              <p className="text-sm font-bold text-gray-500 tracking-widest uppercase">Average Alert Time</p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-accent-cyan/40 hover:bg-white/5 transition-all duration-500 group shadow-lg hover:shadow-[0_0_40px_rgba(0,217,255,0.1)]">
              <h4 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:glow-text-cyan transition-all">
                <Counter from={0} to={80} duration={2.5} suffix="%" />
              </h4>
              <p className="text-sm font-bold text-gray-500 tracking-widest uppercase">Response Time Reduction</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

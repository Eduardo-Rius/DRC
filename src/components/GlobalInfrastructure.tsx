import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

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

export default function GlobalInfrastructure() {
  const nodes = [
    { name: 'Cancún', x: 23, y: 45, labelPos: 'top' },
    { name: 'Miami', x: 25, y: 38, labelPos: 'bottom' },
    { name: 'Barcelona', x: 50, y: 35, labelPos: 'top' },
    { name: 'Monaco', x: 52, y: 32, labelPos: 'bottom' },
    { name: 'Dubai', x: 65, y: 42, labelPos: 'top' },
    { name: 'Maldives', x: 70, y: 52, labelPos: 'bottom' },
    { name: 'Singapore', x: 80, y: 55, labelPos: 'top' },
    { name: 'Gold Coast', x: 88, y: 75, labelPos: 'bottom' }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#03172c] via-[#052446] to-[#03172c] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.15)_0%,_transparent_70%)] pointer-events-none" />
      
      {/* Global CSS Injection for Glowing/Flowing Line effect */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseFlow {
          0% {
            stroke-dashoffset: 600;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .pulse-line {
          animation: pulseFlow 10s linear infinite;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Massive Title */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono font-bold text-accent-cyan tracking-widest uppercase bg-accent-cyan/10 border border-accent-cyan/20 px-3 py-1 rounded-full mb-6 inline-block">
              GLOBAL INFRASTRUCTURE
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 uppercase leading-none">
              The €10 Billion <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-turquoise to-white glow-text-cyan">Opportunity.</span>
            </h2>
            <p className="text-xl md:text-3xl font-light text-gray-300 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              The infrastructure already exists. <br/>
              <span className="font-bold text-accent-cyan glow-text-cyan">DRC monetizes the intelligence layer on top of it.</span>
            </p>
          </motion.div>
        </div>

        {/* Full Width Giant Map with Luminous Connections */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[450px] md:h-[650px] w-full rounded-[2.5rem] overflow-hidden bg-[#021124] border border-accent-cyan/20 shadow-[0_0_80px_rgba(34,211,238,0.15)] mb-12"
        >
          {/* Blue-hued world map background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021124] via-transparent to-[#021124]/80" />
          
          {/* Animated SVG Connections using ViewBox for absolute browser scaling */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 600" preserveAspectRatio="none">
            {/* Define Gradients */}
            <defs>
              <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* CONNECTION PATHS: Base Glow + Flowing Pulse */}
            {/* Miami - Cancun */}
            <path d="M 230 270 L 250 228" fill="none" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1.5" />
            
            {/* Miami - Barcelona */}
            <path d="M 250 228 Q 375 100 500 210" fill="none" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="1.5" />
            <path d="M 250 228 Q 375 100 500 210" fill="none" stroke="#22D3EE" strokeWidth="2.5" strokeDasharray="15 150" className="pulse-line" />

            {/* Barcelona - Monaco */}
            <path d="M 500 210 Q 510 198 520 192" fill="none" stroke="rgba(34, 211, 238, 0.4)" strokeWidth="1.5" />

            {/* Monaco - Dubai */}
            <path d="M 520 192 Q 585 160 650 252" fill="none" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="1.5" />
            <path d="M 520 192 Q 585 160 650 252" fill="none" stroke="#22D3EE" strokeWidth="2.5" strokeDasharray="15 150" className="pulse-line" />

            {/* Dubai - Maldives */}
            <path d="M 650 252 Q 675 282 700 312" fill="none" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="1.5" />
            <path d="M 650 252 Q 675 282 700 312" fill="none" stroke="#67E8F9" strokeWidth="2.5" strokeDasharray="15 120" className="pulse-line" />

            {/* Maldives - Singapore */}
            <path d="M 700 312 Q 750 321 800 330" fill="none" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="1.5" />
            <path d="M 700 312 Q 750 321 800 330" fill="none" stroke="#22D3EE" strokeWidth="2.5" strokeDasharray="20 150" className="pulse-line" />

            {/* Singapore - Gold Coast */}
            <path d="M 800 330 Q 840 400 880 450" fill="none" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="1.5" />
            <path d="M 800 330 Q 840 400 880 450" fill="none" stroke="#67E8F9" strokeWidth="2.5" strokeDasharray="15 180" className="pulse-line" />
          </svg>

          {/* Nodes Overlay */}
          {nodes.map((node, i) => (
            <motion.div
              key={i}
              className="absolute z-20 flex flex-col items-center"
              style={{ top: `${node.y}%`, left: `${node.x}%`, transform: 'translate(-50%, -50%)' }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.08), duration: 0.5 }}
            >
              <div className="relative flex justify-center items-center group cursor-pointer">
                {/* Glowing Core */}
                <div className="w-3.5 h-3.5 bg-white rounded-full z-10 shadow-[0_0_15px_#fff] group-hover:scale-125 transition-transform" />
                <div className="absolute w-10 h-10 rounded-full bg-accent-cyan/40 animate-ping" />
                <div className="absolute w-20 h-20 rounded-full bg-accent-blue/10 animate-pulse" />
              </div>
              <span className={`text-[10px] md:text-xs font-mono font-bold text-white bg-primary/95 px-2.5 py-1 rounded-md border border-accent-cyan/30 backdrop-blur-md shadow-lg tracking-wider uppercase whitespace-nowrap mt-2`}>
                📍 {node.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* 4 GIANT KPI CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-accent-cyan/40 hover:bg-white/5 transition-all duration-500 group shadow-lg text-center"
          >
            <h4 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:glow-text-cyan transition-all">
              <Counter from={0} to={500} duration={2} suffix="M+" />
            </h4>
            <p className="text-sm font-bold text-gray-400 tracking-widest uppercase">Annual Visitors</p>
            <p className="text-xs text-gray-500 mt-2">to monitored aquatic environments</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-accent-cyan/40 hover:bg-white/5 transition-all duration-500 group shadow-lg text-center"
          >
            <h4 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:glow-text-cyan transition-all">
              <Counter from={0} to={650} duration={2} prefix="€" suffix="B+" />
            </h4>
            <p className="text-sm font-bold text-gray-400 tracking-widest uppercase">Addressable Market</p>
            <p className="text-xs text-gray-500 mt-2">combined global market size</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-accent-cyan/40 hover:bg-white/5 transition-all duration-500 group shadow-lg text-center"
          >
            <h4 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:glow-text-cyan transition-all">
              <Counter from={0} to={40000} duration={2} suffix="+" />
            </h4>
            <p className="text-sm font-bold text-gray-400 tracking-widest uppercase">Potential Locations</p>
            <p className="text-xs text-gray-500 mt-2">enterprise & municipal facilities</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-accent-cyan/40 hover:bg-white/5 transition-all duration-500 group shadow-lg text-center"
          >
            <h4 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:glow-text-cyan transition-all">
              <Counter from={0} to={10} duration={2} prefix="€" suffix="B+" />
            </h4>
            <p className="text-sm font-bold text-gray-400 tracking-widest uppercase">Value Potential</p>
            <p className="text-xs text-gray-500 mt-2">platform infrastructure value</p>
          </motion.div>

        </div>

        {/* The Final Message */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-5xl font-light text-gray-300 leading-tight">
            We are not selling hardware.<br/>
            We are not selling cameras.<br/>
            We are not selling wearables.<br/>
            <span className="font-black text-white glow-text-cyan block mt-6 uppercase tracking-tight">
              We are building the intelligence layer that connects all global aquatic infrastructure.
            </span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
}

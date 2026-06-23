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
    { name: 'Cancún', x: 23, y: 45 },
    { name: 'Miami', x: 25, y: 40 },
    { name: 'Barcelona', x: 50, y: 35 },
    { name: 'Monaco', x: 52, y: 34 },
    { name: 'Dubai', x: 65, y: 42 },
    { name: 'Maldives', x: 70, y: 52 },
    { name: 'Singapore', x: 80, y: 55 },
    { name: 'Gold Coast', x: 88, y: 75 }
  ];

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,107,255,0.15)_0%,_var(--color-primary)_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Massive Title */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tighter mb-6">
              The €10 Billion Opportunity.
            </h2>
            <p className="text-2xl md:text-4xl font-light text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The infrastructure already exists. <br/>
              <span className="font-bold text-accent-cyan glow-text-cyan">DRC monetizes the intelligence layer.</span>
            </p>
          </motion.div>
        </div>

        {/* Full Width Palantir Map */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative h-[500px] md:h-[700px] w-full rounded-3xl overflow-hidden glass-panel shadow-[0_0_80px_rgba(0,107,255,0.2)] border-accent-cyan/20 mb-12"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
          
          {/* Animated SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="none">
            {/* Americas to Europe */}
            <motion.path
              d="M 25% 40% Q 35% 20% 50% 35%"
              fill="none"
              stroke="rgba(0, 217, 255, 0.6)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* Europe to Middle East */}
            <motion.path
              d="M 52% 34% Q 60% 30% 65% 42%"
              fill="none"
              stroke="rgba(0, 217, 255, 0.6)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />
            {/* Middle East to Asia */}
            <motion.path
              d="M 65% 42% Q 75% 40% 80% 55%"
              fill="none"
              stroke="rgba(0, 217, 255, 0.6)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
            />
            {/* Asia to Australia */}
            <motion.path
              d="M 80% 55% Q 85% 65% 88% 75%"
              fill="none"
              stroke="rgba(0, 217, 255, 0.6)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
            />
            
            {/* Local Hub Connections */}
            <motion.path d="M 23% 45% L 25% 40%" fill="none" stroke="rgba(0, 217, 255, 0.8)" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} />
            <motion.path d="M 50% 35% L 52% 34%" fill="none" stroke="rgba(0, 217, 255, 0.8)" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} />
            <motion.path d="M 65% 42% L 70% 52%" fill="none" stroke="rgba(0, 217, 255, 0.8)" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.1 }} />
            <motion.path d="M 70% 52% L 80% 55%" fill="none" stroke="rgba(0, 217, 255, 0.8)" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.3 }} />
          </svg>

          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.div
              key={i}
              className="absolute z-20 flex flex-col items-center"
              style={{ top: `${node.y}%`, left: `${node.x}%`, transform: 'translate(-50%, -50%)' }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
            >
              <div className="relative flex justify-center items-center">
                <div className="w-4 h-4 bg-white rounded-full z-10 shadow-[0_0_15px_#fff]" />
                <div className="absolute w-12 h-12 rounded-full bg-accent-cyan/30 animate-ping" />
                <div className="absolute w-24 h-24 rounded-full bg-accent-blue/10 animate-pulse" />
              </div>
              <span className="text-xs md:text-sm font-black text-white mt-2 bg-primary/90 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md shadow-lg tracking-wider uppercase">
                {node.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* 4 GIANT KPI CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-accent-cyan/40 hover:bg-white/5 transition-all duration-500 group shadow-lg text-center"
          >
            <h4 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:glow-text-cyan transition-all">
              <Counter from={0} to={500} duration={2} suffix="M+" />
            </h4>
            <p className="text-sm font-bold text-gray-400 tracking-widest uppercase">Annual Visitors</p>
            <p className="text-xs text-gray-500 mt-2">to monitored aquatic environments</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-accent-cyan/40 hover:bg-white/5 transition-all duration-500 group shadow-lg text-center"
          >
            <h4 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:glow-text-cyan transition-all">
              <Counter from={0} to={650} duration={2} prefix="€" suffix="B+" />
            </h4>
            <p className="text-sm font-bold text-gray-400 tracking-widest uppercase">Addressable Market</p>
            <p className="text-xs text-gray-500 mt-2">combined global market size</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-accent-cyan/40 hover:bg-white/5 transition-all duration-500 group shadow-lg text-center"
          >
            <h4 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:glow-text-cyan transition-all">
              <Counter from={0} to={40000} duration={2} suffix="+" />
            </h4>
            <p className="text-sm font-bold text-gray-400 tracking-widest uppercase">Potential Locations</p>
            <p className="text-xs text-gray-500 mt-2">enterprise & municipal facilities</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-accent-cyan/40 hover:bg-white/5 transition-all duration-500 group shadow-lg text-center"
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
          <h3 className="text-3xl md:text-5xl font-light text-gray-400 leading-tight">
            We are not selling hardware.<br/>
            We are not selling cameras.<br/>
            We are not selling wearables.<br/>
            <span className="font-black text-white glow-text-cyan block mt-6">
              We are building the intelligence layer that connects all global aquatic infrastructure.
            </span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
}

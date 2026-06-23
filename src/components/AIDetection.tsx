import { motion } from 'framer-motion';
import { Crosshair, Activity, Cpu } from 'lucide-react';

export default function AIDetection() {
  return (
    <section className="py-40 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual: Simulated AI Tracking */}
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-accent-cyan/30 aspect-square lg:aspect-[4/3] shadow-[0_0_50px_rgba(0,217,255,0.15)] group">
            {/* Background Image of underwater swimmer */}
            <div className="absolute inset-0 bg-black/40 z-10 mix-blend-multiply" />
            <img 
              src="https://images.unsplash.com/photo-1518331589139-389fcc52e519?q=80&w=2940&auto=format&fit=crop" 
              alt="Underwater swimmer tracking" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
            />
            
            {/* HUD Overlays */}
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
              
              {/* Top HUD */}
              <div className="flex justify-between items-start">
                <div className="bg-black/60 backdrop-blur-md border border-accent-red/50 px-4 py-2 rounded flex items-center gap-2">
                  <Activity className="w-4 h-4 text-accent-red animate-pulse" />
                  <span className="text-xs font-mono font-bold text-accent-red tracking-widest uppercase">
                    Distress Signature Detected
                  </span>
                </div>
                <div className="bg-black/60 backdrop-blur-md border border-white/10 p-2 rounded">
                  <Cpu className="w-5 h-5 text-accent-cyan opacity-80" />
                </div>
              </div>

              {/* Bounding Box / Skeleton tracking simulation */}
              <motion.div 
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 border-2 border-accent-red/80 bg-accent-red/10 rounded flex flex-col justify-end p-2"
              >
                {/* Crosshairs */}
                <Crosshair className="absolute -top-3 -left-3 w-6 h-6 text-accent-cyan" />
                <Crosshair className="absolute -top-3 -right-3 w-6 h-6 text-accent-cyan" />
                <Crosshair className="absolute -bottom-3 -left-3 w-6 h-6 text-accent-cyan" />
                <Crosshair className="absolute -bottom-3 -right-3 w-6 h-6 text-accent-cyan" />

                {/* Simulated Skeleton Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
                   <motion.path 
                     initial={{ pathLength: 0 }}
                     whileInView={{ pathLength: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1 }}
                     d="M 50 20 L 50 40 L 30 60 M 50 40 L 70 60 M 50 40 L 50 70 L 35 95 M 50 70 L 65 95" 
                     fill="none" 
                     stroke="rgba(0, 217, 255, 0.8)" 
                     strokeWidth="1.5" 
                     strokeDasharray="2,2" 
                   />
                </svg>

                {/* Target Data */}
                <div className="flex flex-col gap-1 z-10">
                   <span className="text-[10px] font-mono text-white bg-black/80 px-1 w-fit">CONFIDENCE: 98.7%</span>
                   <span className="text-[10px] font-mono text-white bg-black/80 px-1 w-fit">DEPTH: 2.4m</span>
                   <span className="text-[10px] font-mono text-accent-red bg-black/80 px-1 w-fit font-bold">RESPONSE ETA: 1.2s</span>
                </div>
              </motion.div>
              
            </div>
          </div>

          {/* Text Content */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 mb-6">
                <Crosshair className="w-4 h-4 text-accent-cyan" />
                <span className="text-xs font-bold text-accent-cyan tracking-widest uppercase">Predictive Intelligence</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
                Computer Vision that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan glow-text-cyan">Never Blinks.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-400 font-light mb-8 leading-relaxed">
                Human lifeguards face visual fatigue, glare, and blind spots. DRC’s proprietary AI processes thousands of frames per second, isolating distress kinematics from normal swimming behavior instantly.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="glass-panel p-6 rounded-2xl border border-white/5">
                  <h4 className="text-3xl font-black text-white mb-1 tracking-tighter">99.9%</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Accuracy</p>
                </div>
                <div className="glass-panel p-6 rounded-2xl border border-white/5">
                  <h4 className="text-3xl font-black text-white mb-1 tracking-tighter">&lt;200ms</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Latency</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

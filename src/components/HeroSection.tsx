import { motion } from 'framer-motion';
import { ShieldAlert, Crosshair, Activity, Cpu, ChevronDown, Radio } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-primary overflow-hidden select-none flex items-center justify-center">
      
      {/* LAYER 1: 4K BRIGHT BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
        {/* Maximum 30% overlay to keep it bright and colorful */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/40 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-tr from-turquoise/15 via-transparent to-aqua/10 z-10 mix-blend-screen" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1546022830-671c6d328498?q=80&w=2940&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-95 scale-100"
        >
          {/* Authentic cinematic underwater swimmer with turquoise crystal water and sunlight */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-swimmer-underwater-in-a-pool-2273-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* LAYER 2 & 3: AI TRACKING & TELEMETRY OVERLAYS */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* HUD Box Frame */}
        <div className="absolute inset-6 md:inset-10 border border-accent-cyan/20 rounded-3xl" />
        
        {/* Top HUD Stats Panel */}
        <div className="absolute top-24 left-8 md:left-12 flex flex-col md:flex-row gap-3 pointer-events-auto">
          <div className="bg-primary/60 backdrop-blur-xl border border-accent-cyan/30 px-4 py-2 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <Radio className="w-4 h-4 text-accent-cyan animate-pulse" />
            <span className="text-xs font-mono font-bold text-white tracking-widest">DRC SYSTEM ACTIVE</span>
          </div>
          <div className="bg-primary/60 backdrop-blur-xl border border-accent-green/30 px-4 py-2 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(52,211,153,0.15)]">
            <Activity className="w-4 h-4 text-accent-green animate-pulse" />
            <span className="text-xs font-mono font-bold text-accent-green tracking-widest">TELEMETRY: NOMINAL</span>
          </div>
        </div>

        {/* Top Right System Status */}
        <div className="absolute top-24 right-8 md:right-12 pointer-events-auto">
          <div className="bg-primary/60 backdrop-blur-xl border border-white/10 p-3 rounded-xl flex items-center gap-3">
            <Cpu className="w-5 h-5 text-accent-cyan" />
            <span className="text-xs font-mono text-gray-300">GPU NODE: 89.2%</span>
          </div>
        </div>

        {/* Dynamic Target Bounding Box (Layer 2 - Moves on screen overlaying the swimmer) */}
        <motion.div
          animate={{
            x: ['-10%', '15%', '-5%', '10%', '-10%'],
            y: ['-5%', '10%', '-10%', '5%', '-5%'],
            scale: [1, 1.05, 0.95, 1.02, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 pointer-events-auto"
        >
          {/* Outer target bounding box */}
          <div className="absolute inset-0 border-2 border-accent-cyan/60 rounded-2xl bg-accent-cyan/5 shadow-[0_0_40px_rgba(34,211,238,0.1)]">
            {/* Target Corners */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-accent-cyan" />
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-accent-cyan" />
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-accent-cyan" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-accent-cyan" />
            
            {/* Reticle */}
            <Crosshair className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-accent-cyan opacity-80 animate-spin" style={{ animationDuration: '20s' }} />
            
            {/* Skeletal tracking wireframe overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0.8, 1, 0.9, 1, 0.8] }}
                transition={{ duration: 4, repeat: Infinity }}
                d="M 50 25 L 50 45 L 35 60 M 50 45 L 65 60 M 50 45 L 50 70 L 40 90 M 50 70 L 60 90" 
                fill="none" 
                stroke="#67E8F9" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
              <circle cx="50" cy="25" r="4" fill="#22D3EE" className="animate-ping" />
              <circle cx="50" cy="25" r="2" fill="#22D3EE" />
              <circle cx="35" cy="60" r="1.5" fill="#22D3EE" />
              <circle cx="65" cy="60" r="1.5" fill="#22D3EE" />
              <circle cx="40" cy="90" r="1.5" fill="#22D3EE" />
              <circle cx="60" cy="90" r="1.5" fill="#22D3EE" />
            </svg>
            
            {/* Scan Line */}
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-cyan to-transparent shadow-[0_0_10px_#22D3EE]"
            />
          </div>

          {/* LAYER 3: Dynamic Telemetry Feed */}
          <div className="absolute -right-36 top-6 bg-primary/80 backdrop-blur-md border border-accent-cyan/20 p-3 rounded-xl flex flex-col gap-1 w-32 shadow-xl">
            <span className="text-[10px] font-mono text-accent-cyan font-bold tracking-widest">OBJ_ID: #4992</span>
            <span className="text-[10px] font-mono text-white">DEPTH: 1.4m</span>
            <span className="text-[10px] font-mono text-white">VELOCITY: 0.6 m/s</span>
            <span className="text-[10px] font-mono text-accent-green font-bold">STATE: STABLE</span>
          </div>

          <div className="absolute -left-36 bottom-6 bg-primary/80 backdrop-blur-md border border-accent-cyan/20 p-3 rounded-xl flex flex-col gap-1 w-32 shadow-xl">
            <span className="text-[10px] font-mono text-accent-cyan font-bold tracking-widest">ANALYSIS</span>
            <span className="text-[10px] font-mono text-white">CONF: 99.4%</span>
            <span className="text-[10px] font-mono text-white">RESP: NOMINAL</span>
            <span className="text-[10px] font-mono text-accent-cyan">HAPTIC: ON STANDBY</span>
          </div>
        </motion.div>

        {/* Lower Left Warning Alert (Layer 3 - Simulates occasional predictive analysis) */}
        <div className="absolute bottom-24 left-8 md:left-12 pointer-events-auto">
          <motion.div 
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-primary/80 backdrop-blur-xl border border-accent-cyan/30 p-4 rounded-2xl flex items-center gap-4 max-w-sm shadow-[0_0_30px_rgba(34,211,238,0.15)]"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/30">
              <ShieldAlert className="w-5 h-5 text-accent-cyan animate-bounce" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-accent-cyan tracking-wider">PREDICTIVE PRE-EMPTION</p>
              <p className="text-xs text-gray-300 font-light mt-0.5">Continuous kinematic modeling active.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* LAYER 4: STATIC TEXT AND CALL TO ACTION (Always visible and overlaying) */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center justify-center text-center h-full pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-none drop-shadow-[0_4px_16px_rgba(3,23,44,0.8)]">
            The Moment Before <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-turquoise to-white glow-text-cyan">Everything Changes.</span>
          </h1>
          <p className="text-xl md:text-3xl text-white/90 font-light max-w-3xl mb-10 drop-shadow-[0_2px_8px_rgba(3,23,44,0.9)] leading-relaxed">
            DRC gives rescuers the seconds that save lives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <button 
              onClick={() => {
                const target = document.querySelector('#investors');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full bg-accent-cyan text-primary font-bold text-lg hover:bg-white shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Request Investor Demo
            </button>
            <button 
              onClick={() => {
                const target = document.querySelector('#solution');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full bg-primary/40 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              See IA in Action
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce cursor-pointer" onClick={() => document.querySelector('#problem')?.scrollIntoView({ behavior: 'smooth' })}>
        <ChevronDown className="text-accent-cyan w-8 h-8 filter drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
      </div>

    </section>
  );
}


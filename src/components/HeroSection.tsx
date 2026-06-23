import { motion } from 'framer-motion';
import { Activity, Target, ShieldCheck, PlayCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image / Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary z-10" />
        <img 
          src="https://images.unsplash.com/photo-1572528731388-1fa75225dcb5?q=80&w=2940&auto=format&fit=crop" 
          alt="Underwater view" 
          className="w-full h-full object-cover opacity-60"
        />
        
        {/* Mock AI Targeting Overlay Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-2 border-accent-cyan/40 rounded-lg z-20 flex flex-col justify-between p-4"
        >
          {/* Corner brackets */}
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-accent-cyan" />
          <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-accent-cyan" />
          <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-accent-cyan" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-accent-cyan" />
          
          <div className="bg-primary/80 backdrop-blur-sm border border-accent-cyan/30 text-[10px] md:text-xs text-accent-cyan px-2 py-1 inline-flex rounded w-max font-mono">
            SWIMMER_01 DETECTED
          </div>
          <div className="flex justify-end mt-auto">
             <div className="bg-accent-green/20 border border-accent-green/40 text-accent-green text-[10px] md:text-xs px-2 py-1 rounded font-mono shadow-[0_0_10px_rgba(24,255,138,0.3)]">
              STATUS: SAFE
             </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Status Panel */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="hidden md:flex absolute right-12 top-1/3 flex-col gap-4 z-30"
      >
        <div className="glass-panel rounded-xl p-5 flex flex-col gap-4 w-64">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs text-gray-400 font-semibold tracking-wider font-mono">LIVE TELEMETRY</span>
            <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          </div>
          
          <div className="flex items-center gap-3">
            <Target className="text-accent-cyan w-5 h-5" />
            <div>
              <p className="text-[10px] text-gray-400 font-mono">TRACKING</p>
              <p className="text-sm font-semibold text-white">Active (99.8%)</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Activity className="text-accent-red w-5 h-5" />
            <div>
              <p className="text-[10px] text-gray-400 font-mono">HEART RATE</p>
              <p className="text-sm font-semibold text-white">126 BPM</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Activity className="text-accent-blue w-5 h-5" />
            <div>
              <p className="text-[10px] text-gray-400 font-mono">DEPTH</p>
              <p className="text-sm font-semibold text-white">2.1 m</p>
            </div>
          </div>

          <div className="mt-2 bg-accent-green/10 border border-accent-green/20 rounded p-2 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent-green" />
            <span className="text-xs font-bold text-accent-green font-mono">STATUS: NORMAL</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 md:pt-0 pointer-events-none">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent-cyan glow-text-cyan" />
            <span className="text-xs font-semibold text-accent-cyan tracking-wider uppercase">AI-Powered Aquatic Safety</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 tracking-tight">
            EVERY SECOND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue">
              MATTERS
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
            DRC uses artificial intelligence, advanced sensors, and real-time monitoring to prevent drownings and protect lives in any aquatic environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-bold text-base hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-300">
              Request Private Demo
            </button>
            <button className="px-8 py-4 rounded-full bg-secondary/50 border border-white/10 text-white font-semibold text-base flex items-center justify-center gap-2 hover:bg-secondary transition-all duration-300 backdrop-blur-sm group">
              <PlayCircle className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              Watch Video
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

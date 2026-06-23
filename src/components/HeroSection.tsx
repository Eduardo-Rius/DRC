import { motion } from 'framer-motion';
import { Activity, Target, ShieldCheck, PlayCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image / Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary z-10" />
        <img 
          src="https://images.unsplash.com/photo-1572528731388-1fa75225dcb5?q=80&w=2940&auto=format&fit=crop" 
          alt="Underwater view" 
          className="w-full h-full object-cover opacity-50"
        />
        
        {/* Mock AI Targeting Overlay Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-accent-cyan/20 rounded-lg z-20 flex flex-col justify-between p-4"
        >
          {/* Corner brackets */}
          <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-accent-cyan shadow-[0_0_15px_rgba(0,217,255,0.5)]" />
          <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-accent-cyan shadow-[0_0_15px_rgba(0,217,255,0.5)]" />
          <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-accent-cyan shadow-[0_0_15px_rgba(0,217,255,0.5)]" />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-accent-cyan shadow-[0_0_15px_rgba(0,217,255,0.5)]" />
          
          <div className="bg-primary/90 backdrop-blur-md border border-accent-cyan/40 text-[10px] md:text-xs text-accent-cyan px-3 py-1.5 inline-flex rounded w-max font-mono shadow-[0_0_10px_rgba(0,217,255,0.2)]">
            TARGET_ACQUIRED: ID-8942
          </div>
          <div className="flex justify-end mt-auto">
             <div className="bg-accent-green/20 border border-accent-green/50 text-accent-green text-[10px] md:text-xs px-3 py-1.5 rounded font-mono shadow-[0_0_15px_rgba(24,255,138,0.4)]">
              BIOMETRICS: NOMINAL
             </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Status Panel */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="hidden lg:flex absolute right-16 top-1/3 flex-col gap-4 z-30"
      >
        <div className="glass-panel rounded-xl p-6 flex flex-col gap-5 w-72 border-accent-cyan/20">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs text-gray-400 font-bold tracking-widest font-mono uppercase">Live Telemetry</span>
            <div className="w-2.5 h-2.5 rounded-full bg-accent-green animate-pulse shadow-[0_0_10px_rgba(24,255,138,0.6)]" />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-accent-cyan/10 p-2 rounded-lg">
              <Target className="text-accent-cyan w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-mono tracking-wider">TRACKING STATUS</p>
              <p className="text-sm font-bold text-white">Active (99.8% Conf.)</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-accent-red/10 p-2 rounded-lg">
              <Activity className="text-accent-red w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-mono tracking-wider">HEART RATE</p>
              <p className="text-sm font-bold text-white">126 BPM</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-accent-blue/10 p-2 rounded-lg">
              <Activity className="text-accent-blue w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-mono tracking-wider">DEPTH ANALYSIS</p>
              <p className="text-sm font-bold text-white">2.1 m / Stable</p>
            </div>
          </div>

          <div className="mt-3 bg-accent-green/10 border border-accent-green/30 rounded-lg p-3 flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5 text-accent-green" />
            <span className="text-xs font-bold text-accent-green font-mono tracking-wider">SYSTEM OPTIMAL</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 lg:pt-0 pointer-events-none">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-cyan/30 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,107,255,0.15)]">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan glow-text-cyan animate-pulse" />
            <span className="text-xs font-bold text-accent-cyan tracking-widest uppercase">Autonomous Aquatic Security</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.1] mb-8 tracking-tight">
            INTELLIGENCE THAT <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-blue">
              PROTECTS LIVES.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl font-light leading-relaxed">
            DRC deploys military-grade computer vision and real-time telemetry to mitigate liability, prevent submersions, and orchestrate emergency response across global aquatic environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-bold text-base hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] hover:scale-[1.02] transition-all duration-300">
              Request Investor Demo
            </button>
            <button className="px-8 py-4 rounded-full bg-secondary/60 border border-white/20 text-white font-semibold text-base flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-md group">
              <PlayCircle className="w-5 h-5 text-accent-cyan group-hover:scale-110 transition-transform" />
              Watch Platform Overview
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Crosshair, Activity, Watch, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [scene, setScene] = useState(0);

  // 20 Second Loop (5 scenes, 4s each)
  useEffect(() => {
    const interval = setInterval(() => {
      setScene((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden select-none">
      
      {/* BASE BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10 mix-blend-multiply" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1546022830-671c6d328498?q=80&w=2940&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-80 scale-105"
        >
          {/* Authentic cinematic underwater swimmer */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-swimmer-underwater-in-a-pool-2273-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* STATIC HEADLINE & SUBHEADLINE (Always visible except in Scene 5) */}
      <AnimatePresence>
        {scene !== 4 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl">
              The Moment Before <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Everything Changes.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 font-light max-w-3xl drop-shadow-lg">
              DRC gives rescuers the seconds that save lives.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SCENE STATE MACHINE OVERLAYS */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <AnimatePresence mode="wait">
          
          {/* SCENE 2: HUD Overlay */}
          {scene === 1 && (
            <motion.div
              key="scene2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              {/* HUD Frame */}
              <div className="absolute inset-8 border border-white/10 rounded-3xl" />
              <div className="absolute top-12 left-12 flex gap-4">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-accent-cyan" />
                  <span className="text-xs font-mono text-white tracking-widest">SCANNING SECTOR 4</span>
                </div>
              </div>
              
              {/* Target Tracker */}
              <motion.div 
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-accent-cyan/40 bg-accent-cyan/5 rounded-full flex items-center justify-center"
              >
                <Crosshair className="w-8 h-8 text-accent-cyan opacity-50" />
                {/* Telemetry data */}
                <div className="absolute -right-32 top-10 flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-accent-cyan tracking-widest">OBJ_ID: #4992</span>
                  <span className="text-[10px] font-mono text-gray-400">KINEMATICS: NOMINAL</span>
                  <span className="text-[10px] font-mono text-gray-400">DEPTH: 1.2m</span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* SCENE 3: PREDICTIVE ALERT DETECTED */}
          {scene === 2 && (
            <motion.div
              key="scene3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-accent-red/20 mix-blend-overlay"
            >
              {/* Red Flashing Screen Overlay */}
              <motion.div 
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="absolute inset-0 bg-accent-red mix-blend-color"
              />
              <div className="absolute inset-8 border-4 border-accent-red/50 rounded-3xl" />
              
              {/* Target Box Red */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-accent-red bg-accent-red/10 rounded-lg flex items-end p-2">
                 <span className="text-xs font-black text-accent-red bg-black/80 px-2 py-1">CRITICAL SUBMERSION</span>
              </div>

              {/* Massive Alert Text */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute bottom-24 flex flex-col items-center gap-2"
              >
                <ShieldAlert className="w-16 h-16 text-accent-red animate-bounce" />
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-widest uppercase drop-shadow-[0_0_20px_rgba(255,59,59,0.8)]">
                  Predictive Alert Detected
                </h2>
              </motion.div>
            </motion.div>
          )}

          {/* SCENE 4: Rescuer Reaction */}
          {scene === 3 && (
            <motion.div
              key="scene4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Haptic Dispatch Simulation */}
              <div className="absolute top-12 right-12 bg-accent-cyan/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-accent-cyan/30 flex items-center gap-4 shadow-[0_0_40px_rgba(0,217,255,0.2)]">
                <div className="relative">
                  <Watch className="w-8 h-8 text-accent-cyan" />
                  <div className="absolute inset-0 rounded-full bg-accent-cyan animate-ping opacity-50" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-accent-cyan font-bold tracking-widest">HAPTIC DISPATCH SENT</span>
                  <span className="text-xs font-mono text-white">RESCUER_04 EN ROUTE</span>
                </div>
              </div>
              
              <div className="w-[300px] h-[300px] rounded-full border border-white/5 bg-white/5 backdrop-blur-sm flex items-center justify-center mt-32">
                 <div className="flex flex-col items-center text-center gap-2">
                    <span className="text-sm font-bold text-accent-green tracking-widest">T-MINUS 2 SECONDS</span>
                    <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: "0%" }}
                         animate={{ width: "100%" }}
                         transition={{ duration: 4 }}
                         className="h-full bg-accent-green"
                       />
                    </div>
                 </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 5: Successful Rescue / Logo Fade */}
          {scene === 4 && (
            <motion.div
              key="scene5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary z-40 flex items-center justify-center"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter drop-shadow-[0_0_50px_rgba(0,217,255,0.4)]">
                  DRC
                </h1>
                <p className="text-xl md:text-2xl font-light text-accent-cyan tracking-widest uppercase mt-4">
                  Digital Rescue Control
                </p>
              </motion.div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce">
        <ChevronDown className="text-white/50 w-8 h-8" />
      </div>

    </section>
  );
}

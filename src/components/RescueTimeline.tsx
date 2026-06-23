import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldAlert, CheckCircle, Crosshair, RotateCcw } from 'lucide-react';

export default function RescueTimeline() {
  const timeline = [
    { time: "00:00", event: "Movement anomaly detected", desc: "AI flags abnormal kinematics in Sector 4", type: "neutral" },
    { time: "00:04", event: "AI identifies risk", desc: "Submersion pattern verified against 10k pool profiles", type: "neutral" },
    { time: "00:07", event: "Confidence reaches 92%", desc: "Telemetry confirms critical state. Auto-escalating threat.", type: "neutral" },
    { time: "00:09", event: "Alert sent to lifeguard", desc: "Haptic wristband dispatched. Direct coordinates mapped.", type: "critical" },
    { time: "00:14", event: "Response team activated", desc: "First responder on route. Telemetry tracks live distance.", type: "neutral" },
    { time: "00:18", event: "Rescue initiated", desc: "Swimmer recovered. System logs nominal status.", type: "success" },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [progress, setProgress] = useState(0); // 0 to 100

  // Run mission timeline simulation loop
  useEffect(() => {
    if (!isInView) {
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0; // Restart loop
        return prev + 1;
      });
    }, 100); // Takes ~10s for full cycle

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-40 bg-gradient-to-b from-[#03172c] via-[#052446] to-[#03172c] relative overflow-hidden">
      
      {/* Background soft grids and water reflections */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.08)_0%,_transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(34,211,238,0.03)_1px,_transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono font-bold text-accent-cyan tracking-widest uppercase bg-accent-cyan/10 border border-accent-cyan/20 px-3 py-1 rounded-full mb-6 inline-block">
              TACTICAL TIMELINE
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 leading-none uppercase">
              Every Second <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-turquoise glow-text-cyan">Matters.</span>
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
              Simulated sequence of a real rescue operation. The timeline operates in milliseconds, bridging predictive AI with human action.
            </p>
          </motion.div>
        </div>

        {/* Mission Timeline Dashboard */}
        <div className="relative bg-primary/40 border border-accent-cyan/20 rounded-[2.5rem] p-8 md:p-16 shadow-[0_0_60px_rgba(34,211,238,0.05)] backdrop-blur-xl">
          
          {/* Mission Status Header */}
          <div className="flex justify-between items-center mb-16 border-b border-white/10 pb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 bg-accent-cyan rounded-full animate-ping" />
              <span className="text-xs font-mono font-bold tracking-widest text-accent-cyan uppercase">MISSION DISPATCH MODE: LIVE</span>
            </div>
            <div className="flex items-center gap-6 font-mono text-xs text-gray-400">
              <span>ELAPSED: {(progress * 0.18).toFixed(1)}s</span>
              <button 
                onClick={() => setProgress(0)}
                className="flex items-center gap-1.5 text-accent-cyan hover:text-white cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>RESET</span>
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Base Vertical Line */}
            <div className="absolute left-[39px] md:left-1/2 top-4 bottom-4 w-1 bg-white/10 md:-translate-x-1/2 rounded-full" />
            
            {/* Animated Luminous Line (SpaceX Style progress) */}
            <div 
              style={{ height: `${progress}%` }}
              className="absolute left-[39px] md:left-1/2 top-4 w-1 bg-gradient-to-b from-accent-cyan via-accent-red to-accent-green md:-translate-x-1/2 rounded-full z-0 transition-all duration-100 ease-linear shadow-[0_0_15px_#22D3EE]" 
            />

            <div className="space-y-16">
              {timeline.map((item, index) => {
                const nodePercent = (index / (timeline.length - 1)) * 90; // Approx threshold
                const isActivated = progress >= nodePercent;
                
                const isCritical = item.type === 'critical';
                const isSuccess = item.type === 'success';
                
                // Colors based on state
                const nodeBorder = isCritical ? 'border-accent-red' : isSuccess ? 'border-accent-green' : 'border-accent-cyan';
                const nodeBg = isCritical ? 'bg-accent-red/20' : isSuccess ? 'bg-accent-green/20' : 'bg-accent-cyan/20';
                const textGlow = isCritical ? 'glow-text-red' : isSuccess ? 'glow-text-green' : 'glow-text-cyan';
                
                return (
                  <div 
                    key={index}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 transition-all duration-500 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    } ${isActivated ? 'opacity-100' : 'opacity-30'}`}
                  >
                    
                    {/* Node with Clock Indicator */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10 mt-1 md:mt-0">
                      <motion.div 
                        animate={isActivated ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 0.4 }}
                        className={`w-20 h-20 rounded-full border-4 ${isActivated ? nodeBorder + ' ' + nodeBg : 'border-white/10 bg-[#03172c]'} flex flex-col items-center justify-center transition-all duration-300 shadow-xl`}
                      >
                        <span className={`font-mono font-bold text-lg ${isActivated ? (isCritical ? 'text-accent-red' : isSuccess ? 'text-accent-green' : 'text-accent-cyan') : 'text-gray-500'}`}>
                          {item.time}
                        </span>
                        <span className="text-[8px] font-mono text-gray-400">SEC</span>
                      </motion.div>
                    </div>

                    {/* Content Panel */}
                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-20 text-left md:text-right' : 'md:pl-20 text-left'}`}>
                      <div className={`glass-panel p-6 rounded-2xl border ${
                        isActivated 
                          ? (isCritical ? 'border-accent-red/50 bg-accent-red/5' : isSuccess ? 'border-accent-green/50 bg-accent-green/5' : 'border-accent-cyan/30 bg-accent-cyan/5') 
                          : 'border-white/5 bg-transparent'
                      } transition-all duration-300`}>
                        
                        <div className="flex items-center gap-2 mb-2 justify-start md:justify-start lg:justify-start" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                          {isCritical && <ShieldAlert className="w-4 h-4 text-accent-red animate-pulse" />}
                          {isSuccess && <CheckCircle className="w-4 h-4 text-accent-green animate-pulse" />}
                          {!isCritical && !isSuccess && <Crosshair className="w-4 h-4 text-accent-cyan" />}
                          
                          <span className={`text-xs font-mono font-bold uppercase tracking-widest ${isActivated ? textGlow : 'text-gray-500'}`}>
                            {isCritical ? 'CRITICAL DISPATCH' : isSuccess ? 'RESCUE COMPLETE' : 'SYSTEM SCAN'}
                          </span>
                        </div>

                        <h3 className={`text-2xl font-black tracking-tight ${isActivated ? 'text-white' : 'text-gray-500'}`}>
                          {item.event}
                        </h3>
                        
                        <p className={`text-sm mt-2 font-light ${isActivated ? 'text-gray-300' : 'text-gray-600'}`}>
                          {item.desc}
                        </p>

                        {/* Telemetry coordinate simulation */}
                        {isActivated && (
                          <div className="mt-4 flex gap-3 text-[10px] font-mono text-gray-500 justify-start" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                            <span>LAT: 21.1619° N</span>
                            <span>LNG: 86.8515° W</span>
                            <span>CH: 04</span>
                          </div>
                        )}
                        
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


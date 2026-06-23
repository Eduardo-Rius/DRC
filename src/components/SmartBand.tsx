import { motion } from 'framer-motion';
import { Watch, HeartPulse, Wifi, ShieldAlert } from 'lucide-react';

export default function SmartBand() {
  const specs = [
    { icon: <HeartPulse className="w-5 h-5 text-accent-cyan" />, label: 'Biometric Telemetry', desc: 'Continuous heart rate & SpO2 monitoring.' },
    { icon: <Wifi className="w-5 h-5 text-accent-cyan" />, label: 'Ultra-Low Latency', desc: 'Sub-second alert delivery via local mesh network.' },
    { icon: <ShieldAlert className="w-5 h-5 text-accent-cyan" />, label: 'Haptic Dispatch', desc: 'Vibration alerts cut through noisy environments.' },
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-blue/10 via-primary to-primary pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 w-max mb-2">
              <Watch className="w-4 h-4 text-accent-cyan" />
              <span className="text-xs font-bold text-accent-cyan tracking-widest uppercase">Hardware</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              The DRC Smart Band. <br />
              <span className="text-gray-500">Your First Responder.</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-light mt-4">
              Designed for lifeguards and rescue personnel. When the AI detects a critical event, the DRC Band delivers a high-intensity haptic alert and exact location coordinates in under 1.2 seconds, ensuring immediate action.
            </p>
            
            <div className="flex flex-col gap-6 mt-8">
              {specs.map((spec, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:border-accent-cyan/30 transition-colors">
                  <div className="bg-accent-blue/10 p-3 rounded-lg h-max">
                    {spec.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{spec.label}</h4>
                    <p className="text-sm text-gray-400">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3D / Floating Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center h-[500px]"
          >
            {/* Glowing background behind watch */}
            <div className="absolute w-64 h-64 bg-accent-cyan/20 rounded-full blur-[100px]" />
            <div className="absolute w-48 h-48 bg-accent-blue/30 rounded-full blur-[80px]" />
            
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-sm rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,107,255,0.2)] border border-white/10 bg-primary"
            >
              <img 
                src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2944&auto=format&fit=crop" 
                alt="DRC Smart Band" 
                className="w-full h-[400px] object-cover opacity-80"
              />
              {/* Overlay simulation UI on the watch face */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-primary/40">
                <div className="w-32 h-40 border-2 border-accent-red bg-primary/90 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,59,59,0.5)] animate-pulse">
                  <ShieldAlert className="w-8 h-8 text-accent-red" />
                  <span className="text-white font-bold text-center leading-tight">ALERT<br/>ZONE 4</span>
                  <span className="text-xs text-gray-400 font-mono mt-1">1.2s AGO</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

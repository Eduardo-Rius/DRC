import { motion } from 'framer-motion';
import { Activity, Zap, Shield, Droplet, MapPin } from 'lucide-react';
import wearableRescue from '../assets/wearable_rescue.png';

export default function SmartBand() {
  const features = [
    { icon: <Activity className="w-5 h-5 text-accent-cyan" />, label: 'Biometric Telemetry' },
    { icon: <Zap className="w-5 h-5 text-accent-cyan" />, label: 'Ultra-Low Latency' },
    { icon: <Shield className="w-5 h-5 text-accent-cyan" />, label: 'Haptic Emergency Alerts' },
    { icon: <Droplet className="w-5 h-5 text-accent-cyan" />, label: 'Waterproof Design' },
    { icon: <MapPin className="w-5 h-5 text-accent-cyan" />, label: 'Location Awareness' },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#03172c] via-[#052446] to-[#03172c] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.05)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual: Proprietary Tactical Wearable */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-accent-cyan/15 blur-[100px] rounded-full max-w-[500px]" />
            <img 
              src={wearableRescue} 
              alt="Proprietary DRC Tactical Wearable Device" 
              className="relative z-10 w-full max-w-[500px] aspect-square object-cover rounded-[2.5rem] border border-accent-cyan/20 shadow-[0_0_60px_rgba(34,211,238,0.2)] bg-primary/20 backdrop-blur-sm"
            />
            {/* Glowing UI Element over the band */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary/95 backdrop-blur-md px-6 py-3.5 rounded-full border border-accent-red/50 flex items-center gap-3 z-20 shadow-2xl">
              <div className="w-3 h-3 bg-accent-red rounded-full animate-ping" />
              <span className="text-sm font-mono font-bold text-accent-red tracking-widest uppercase">HAPTIC DISPATCH ENGAGED</span>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 mb-6 backdrop-blur-md">
              <span className="text-xs font-bold text-accent-cyan tracking-widest uppercase">Proprietary Hardware</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-4 uppercase">
              DRC Smart Band. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-turquoise to-white glow-text-cyan">Always Connected. Always Protected.</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 font-light mb-12 leading-relaxed">
              The crucial link between AI prediction and human reaction. When a distress signature is verified, the network instantly dispatches a directed haptic alert to the nearest responder. Designed specifically for tactical marine rescue.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 glass-panel p-4 rounded-2xl border border-white/5 hover:border-accent-cyan/30 transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 border border-white/5">
                    {feature.icon}
                  </div>
                  <span className="text-lg font-medium text-white">{feature.label}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

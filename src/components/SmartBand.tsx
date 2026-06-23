import { motion } from 'framer-motion';
import { Activity, Zap, Shield, Droplet, MapPin } from 'lucide-react';

export default function SmartBand() {
  const features = [
    { icon: <Activity className="w-5 h-5 text-accent-cyan" />, label: 'Biometric Telemetry' },
    { icon: <Zap className="w-5 h-5 text-accent-cyan" />, label: 'Ultra-Low Latency' },
    { icon: <Shield className="w-5 h-5 text-accent-cyan" />, label: 'Haptic Emergency Alerts' },
    { icon: <Droplet className="w-5 h-5 text-accent-cyan" />, label: 'Waterproof Design' },
    { icon: <MapPin className="w-5 h-5 text-accent-cyan" />, label: 'Location Awareness' },
  ];

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual: 3D Premium Wearable Render */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent-cyan/10 blur-[100px] rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?q=80&w=2940&auto=format&fit=crop" 
              alt="Premium DRC Smart Band 3D Render" 
              className="relative z-10 w-full h-[600px] object-cover rounded-[2rem] glass-panel border border-white/10 shadow-[0_0_50px_rgba(0,217,255,0.15)]"
            />
            {/* Glowing UI Element over the band */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-accent-red/50 flex items-center gap-3 z-20">
              <div className="w-3 h-3 bg-accent-red rounded-full animate-ping" />
              <span className="text-sm font-mono font-bold text-accent-red tracking-widest uppercase">Haptic Trigger: Incoming</span>
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
              <span className="text-xs font-bold text-accent-cyan tracking-widest uppercase">Lifeguard Extension</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-4">
              DRC Smart Band. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Always Connected. Always Protected.</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-400 font-light mb-12">
              The crucial link between AI prediction and human reaction. When a distress signature is verified, the network instantly dispatches a directed haptic alert to the nearest responder.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 glass-panel p-4 rounded-xl border border-white/5 hover:border-accent-cyan/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 border border-white/5">
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

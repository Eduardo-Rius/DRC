import { motion } from 'framer-motion';
import { ShieldAlert, Users, Camera, Activity, MapPin, AlertTriangle } from 'lucide-react';

export default function CommandCenter() {
  const kpis = [
    { label: "Connected Cameras", value: "14,205", icon: <Camera /> },
    { label: "Active Wearables", value: "89,430", icon: <Activity /> },
    { label: "Emergency Teams Online", value: "1,240", icon: <Users /> },
    { label: "Active Lifeguards", value: "3,400", icon: <ShieldAlert /> },
    { label: "Incidents Prevented", value: "12,045", icon: <Activity /> },
    { label: "Network Uptime", value: "99.99%", icon: <Activity /> },
  ];

  return (
    <section className="py-40 bg-gradient-to-b from-[#03172c] via-[#052446] to-[#03172c] relative overflow-hidden">
      
      {/* Subtle organic water movement background video at 10% opacity */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#03172c]/90 z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-sea-waves-breaking-on-a-sandy-43160-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono font-bold text-accent-cyan tracking-widest uppercase bg-accent-cyan/10 border border-accent-cyan/20 px-3 py-1 rounded-full mb-6 inline-block">
              GLOBAL COMMAND
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter mb-4 uppercase">
              Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-turquoise to-white glow-text-cyan">Command Center.</span>
            </h2>
            <p className="text-xl font-light text-gray-300">
              Total visibility over global aquatic infrastructure in real time.
            </p>
          </motion.div>
        </div>

        {/* Global Map Display */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] w-full rounded-[2.5rem] glass-panel border border-accent-cyan/20 overflow-hidden mb-12 shadow-[0_0_80px_rgba(34,211,238,0.1)]"
        >
          {/* Map Image Base */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/80" />

          {/* Network Online Indicator */}
          <div className="absolute top-6 left-6 bg-primary/80 backdrop-blur-md border border-accent-green/30 px-4 py-2 rounded-full flex items-center gap-3">
            <div className="w-3.5 h-3.5 rounded-full bg-accent-green animate-pulse shadow-[0_0_10px_#34D399]" />
            <span className="text-xs font-mono font-bold text-accent-green tracking-widest uppercase">
              Riviera Maya Network Online
            </span>
          </div>

          {/* Floating Panels: Live Incident */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute top-24 right-8 md:right-12 bg-primary/95 backdrop-blur-xl border border-accent-red/50 rounded-2xl p-5 w-72 shadow-[0_0_30px_rgba(248,113,113,0.2)]"
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-accent-red animate-bounce" />
              <span className="text-sm font-bold text-accent-red tracking-widest uppercase">Live Incident</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400">LOC:</span>
                <span className="text-white">Cancun Resort Sector 4</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400">TYPE:</span>
                <span className="text-white">Submersion Risk</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400">CONFIDENCE:</span>
                <span className="text-accent-red font-bold">99.1%</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Panels: Dispatch */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="absolute bottom-24 left-8 md:left-12 bg-primary/95 backdrop-blur-xl border border-accent-cyan/40 rounded-2xl p-5 w-72 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
          >
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-accent-cyan animate-pulse" />
              <span className="text-sm font-bold text-accent-cyan tracking-widest uppercase">Emergency Team Dispatched</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400">UNIT:</span>
                <span className="text-white">Lifeguard Alpha</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400">ETA:</span>
                <span className="text-accent-green font-bold">00:12s</span>
              </div>
            </div>
          </motion.div>

          {/* Map Node Ping */}
          <div className="absolute top-[45%] left-[23%] flex items-center justify-center">
            <MapPin className="w-6 h-6 text-accent-red absolute z-20" />
            <div className="absolute w-16 h-16 bg-accent-red/30 rounded-full animate-ping z-10" />
          </div>

        </motion.div>

        {/* Global KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {kpis.map((kpi, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-5 rounded-2xl border border-white/5 text-center flex flex-col items-center justify-center hover:border-accent-cyan/30 transition-all duration-300 shadow-md"
            >
              <div className="text-accent-cyan mb-2 opacity-70">{kpi.icon}</div>
              <h4 className="text-2xl font-black text-white mb-1">{kpi.value}</h4>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">{kpi.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

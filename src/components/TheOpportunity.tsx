import { motion } from 'framer-motion';

export default function TheOpportunity() {
  return (
    <section className="py-40 bg-black relative overflow-hidden flex flex-col justify-center min-h-[90vh]">
      {/* Background Image: Lifeguard tower at night or dark pool */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=2940&auto=format&fit=crop" 
          alt="Dark Pool" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* The Bold Statement */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 uppercase drop-shadow-2xl">
              Drowning is <span className="text-gray-500">silent.</span>
            </h2>
            <h3 className="text-4xl md:text-6xl font-light text-accent-red glow-text-red">
              Detection cannot be.
            </h3>
          </motion.div>
        </div>

        {/* 4 Massive KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="glass-panel p-10 rounded-3xl border border-white/5 border-t-accent-red/30 hover:bg-white/5 transition-all text-center shadow-2xl"
          >
            <h4 className="text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter">236,000</h4>
            <p className="text-sm font-bold text-accent-red tracking-widest uppercase">Annual Deaths</p>
            <p className="text-gray-400 text-xs mt-4 font-light">Global preventable aquatic tragedies</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-panel p-10 rounded-3xl border border-white/5 border-t-accent-red/30 hover:bg-white/5 transition-all text-center shadow-2xl"
          >
            <h4 className="text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter">$12B+</h4>
            <p className="text-sm font-bold text-accent-red tracking-widest uppercase">Liability Exposure</p>
            <p className="text-gray-400 text-xs mt-4 font-light">Litigation and insurance costs</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-panel p-10 rounded-3xl border border-white/5 border-t-accent-cyan/30 hover:bg-white/5 transition-all text-center shadow-2xl"
          >
            <h4 className="text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter">1.2s</h4>
            <p className="text-sm font-bold text-accent-cyan tracking-widest uppercase">Avg Alert Time</p>
            <p className="text-gray-400 text-xs mt-4 font-light">DRC detection latency</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass-panel p-10 rounded-3xl border border-white/5 border-t-accent-cyan/30 hover:bg-white/5 transition-all text-center shadow-2xl"
          >
            <h4 className="text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter">80%</h4>
            <p className="text-sm font-bold text-accent-cyan tracking-widest uppercase">Response Cut</p>
            <p className="text-gray-400 text-xs mt-4 font-light">Reduction in lifeguard reaction time</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

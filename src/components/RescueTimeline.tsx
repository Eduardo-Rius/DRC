import { motion } from 'framer-motion';

export default function RescueTimeline() {
  const timeline = [
    { time: "00:00", event: "Movement anomaly detected", type: "neutral" },
    { time: "00:04", event: "AI identifies risk", type: "neutral" },
    { time: "00:07", event: "Confidence reaches 92%", type: "neutral" },
    { time: "00:09", event: "Alert sent to lifeguard", type: "critical" },
    { time: "00:14", event: "Response team activated", type: "neutral" },
    { time: "00:18", event: "Rescue initiated", type: "success" },
  ];

  return (
    <section className="py-40 bg-secondary relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
              From Detection to Rescue <span className="text-accent-cyan">in Seconds.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Because every millisecond matters.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Base Vertical Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 md:-translate-x-1/2 rounded-full" />
          
          {/* Animated Glow Line */}
          <motion.div 
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "linear" }}
            className="absolute left-[39px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-accent-cyan via-accent-red to-accent-green md:-translate-x-1/2 rounded-full z-0 drop-shadow-[0_0_10px_rgba(0,217,255,0.5)]" 
          />

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const isCritical = item.type === 'critical';
              const isSuccess = item.type === 'success';
              const colorClass = isCritical ? 'text-accent-red' : isSuccess ? 'text-accent-green' : 'text-accent-cyan';
              const glowClass = isCritical ? 'shadow-[0_0_20px_rgba(255,59,59,0.5)]' : isSuccess ? 'shadow-[0_0_20px_rgba(24,255,138,0.5)]' : 'shadow-[0_0_20px_rgba(0,217,255,0.3)]';

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10 mt-1 md:mt-0">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.4 }}
                      className={`w-20 h-20 rounded-full bg-primary border-4 border-white/10 flex items-center justify-center ${glowClass}`}
                    >
                      <span className={`font-mono font-bold text-lg ${colorClass}`}>{item.time}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-20 text-left md:text-right' : 'md:pl-20 text-left'}`}>
                    <div className={`glass-panel p-6 rounded-2xl border ${isCritical ? 'border-accent-red/30 bg-accent-red/5' : isSuccess ? 'border-accent-green/30 bg-accent-green/5' : 'border-white/5 hover:border-accent-cyan/30'} transition-all`}>
                      <h3 className={`text-2xl font-black tracking-tight ${isCritical || isSuccess ? 'text-white' : 'text-gray-300'}`}>
                        {item.event}
                      </h3>
                      {isCritical && <span className="inline-block mt-2 text-xs font-mono font-bold text-accent-red tracking-widest uppercase bg-accent-red/10 px-2 py-1 rounded">Critical Action</span>}
                      {isSuccess && <span className="inline-block mt-2 text-xs font-mono font-bold text-accent-green tracking-widest uppercase bg-accent-green/10 px-2 py-1 rounded">Protocol Engaged</span>}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

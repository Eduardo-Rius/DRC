import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function Comparison() {
  const traditional = [
    'Human-only or basic cameras',
    'High liability & blind spots',
    'Isolated, single-location systems',
    'Reactive (after the event)',
    'Operational cost center'
  ];

  const drc = [
    'Autonomous AI + Sensor Fusion',
    'Complete liability mitigation',
    'Global centralized network',
    'Proactive submersion prevention',
    'SaaS revenue generator'
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#03172c] via-[#052446] to-[#03172c] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Redefining the Standard</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Legacy systems wait for emergencies to happen. DRC proactively prevents them while mitigating institutional liability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-white/5 bg-primary/30"
          >
            <h3 className="text-xl font-bold text-gray-500 mb-8 border-b border-white/5 pb-4">Legacy Solutions</h3>
            <ul className="space-y-6">
              {traditional.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-500">
                  <div className="bg-white/5 p-1 rounded-full"><X className="w-4 h-4" /></div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* DRC Advantage */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl border-2 border-accent-cyan/40 bg-primary/80 relative overflow-hidden shadow-[0_0_40px_rgba(0,217,255,0.15)]"
          >
            <div className="absolute top-0 right-0 p-4">
              <div className="inline-flex items-center gap-1 bg-accent-blue/20 text-accent-cyan px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                The DRC Advantage
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Digital Rescue Control</h3>
            <ul className="space-y-6">
              {drc.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white">
                  <div className="bg-accent-cyan/20 p-1 rounded-full text-accent-cyan shadow-[0_0_15px_rgba(0,217,255,0.5)]"><Check className="w-5 h-5" /></div>
                  <span className="font-semibold text-lg tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

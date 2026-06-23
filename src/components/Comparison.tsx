import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function Comparison() {
  const traditional = [
    'Only cameras',
    'Limited to clear water',
    'Single location',
    'Reactive',
    'Cost center'
  ];

  const drc = [
    'AI + Sensors + Wearable',
    'Works in any condition',
    'Global network',
    'Proactive prevention',
    'Revenue generator'
  ];

  return (
    <section className="py-24 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Why DRC Wins</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            We are redefining the standard. Old systems wait for emergencies; DRC prevents them.
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
            <h3 className="text-xl font-bold text-gray-400 mb-8 border-b border-white/5 pb-4">Traditional Solutions</h3>
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
            className="p-8 rounded-3xl border-2 border-accent-cyan/30 bg-primary/50 relative overflow-hidden shadow-[0_0_30px_rgba(0,217,255,0.1)]"
          >
            <div className="absolute top-0 right-0 p-4">
              <div className="inline-flex items-center gap-1 bg-accent-blue/20 text-accent-cyan px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                The DRC Advantage
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Digital Rescue Control</h3>
            <ul className="space-y-6">
              {drc.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white">
                  <div className="bg-accent-cyan/20 p-1 rounded-full text-accent-cyan shadow-[0_0_10px_rgba(0,217,255,0.4)]"><Check className="w-5 h-5" /></div>
                  <span className="font-semibold text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

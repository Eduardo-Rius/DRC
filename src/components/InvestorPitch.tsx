import { motion } from 'framer-motion';
import { TrendingUp, Shield, Globe2 } from 'lucide-react';

export default function InvestorPitch() {
  const blocks = [
    {
      icon: <Shield className="w-6 h-6 text-accent-cyan" />,
      title: 'Safety Impact',
      desc: 'Reducing response times by up to 80% and practically eliminating undetected submersions.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-accent-blue" />,
      title: 'Recurring Platform Revenue',
      desc: 'B2B SaaS model with predictable MRR from hotels, municipalities, and water parks.'
    },
    {
      icon: <Globe2 className="w-6 h-6 text-accent-green" />,
      title: 'Global Expansion Potential',
      desc: 'A massively underserved market ready for a unified, data-driven safety standard.'
    }
  ];

  return (
    <section id="investors" className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-10 md:p-16 border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Built to Scale Globally</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-16">
              DRC transforms aquatic safety into a scalable, data-driven and monetizable platform for resorts, municipalities, sports facilities, water parks and natural environments.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {blocks.map((block, i) => (
                <div key={i} className="bg-secondary/50 p-6 rounded-2xl border border-white/5">
                  <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    {block.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{block.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{block.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <button className="px-8 py-4 rounded-full bg-white text-primary font-bold text-base hover:bg-gray-200 transition-colors duration-300">
                Access Investor Deck
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight, Download, ShieldCheck } from 'lucide-react';

export default function InvestorPitch() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,107,255,0.15)_0%,_transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-12 md:p-20 rounded-[3rem] border border-accent-cyan/20 shadow-[0_0_100px_rgba(0,107,255,0.15)] relative overflow-hidden group hover:border-accent-cyan/40 transition-colors duration-500"
        >
          {/* Animated glow inside the card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 mb-8">
            <ShieldCheck className="w-8 h-8 text-accent-cyan" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            The Future of Aquatic Safety <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan glow-text-cyan">Starts Now.</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            DRC is building the intelligent safety network for every pool, resort, beach and aquatic venue in the world.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-cyan text-black font-bold tracking-wide hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,217,255,0.4)]">
              Request Investor Demo
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-medium hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Access Investor Deck
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

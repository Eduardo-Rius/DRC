import { motion } from 'framer-motion';

export default function EmotionalImpact() {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?q=80&w=2940&auto=format&fit=crop" 
          alt="Dark dramatic water" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Every Second <span className="text-accent-red">Matters.</span>
          </h2>
          <p className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed mb-12">
            In an aquatic emergency, time is the only currency that counts. DRC bridges the gap between human limitation and machine precision to guarantee nobody slips beneath the surface unnoticed.
          </p>
          <div className="inline-block p-[1px] bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-blue rounded-full">
            <button className="px-8 py-4 bg-primary rounded-full text-white font-bold tracking-wide hover:bg-transparent transition-colors duration-300">
              Join the Mission
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

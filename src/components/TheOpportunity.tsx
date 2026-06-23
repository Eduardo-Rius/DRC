import { motion } from 'framer-motion';

export default function TheOpportunity() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center py-32 bg-primary">
      
      {/* MASSIVE BG PHOTO - Child underwater in crystal blue/turquoise pool with light rays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1518331589139-389fcc52e519?q=80&w=2940&auto=format&fit=crop" 
          alt="Child swimming underwater in crystal blue water" 
          className="w-full h-full object-cover opacity-90 scale-100 object-center"
        />
        
        {/* Subtle HUD scanning lines to tie back to the aquatic safety theme */}
        <div className="absolute inset-12 border border-accent-cyan/10 rounded-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
        <div className="max-w-3xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs font-mono font-bold text-accent-cyan tracking-widest uppercase bg-accent-cyan/10 border border-accent-cyan/20 px-3 py-1 rounded-full mb-6 inline-block">
              THE HARD REALITY
            </span>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-none uppercase">
              Drowning <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red via-accent-cyan to-white glow-text-red">
                doesn't look like drowning.
              </span>
            </h2>
            
            <p className="text-xl md:text-3xl text-gray-200 font-light mb-8 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              No splashing. No waving. No screaming. It happens silently, in seconds, under the light of a sunny afternoon.
            </p>

            <div className="h-px w-32 bg-gradient-to-r from-accent-cyan to-transparent mb-8" />

            <h3 className="text-2xl md:text-3xl text-white font-bold tracking-tight mb-4">
              A Child Drowns Every 90 Seconds.
            </h3>
            
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              The world spends billions reacting to aquatic tragedies after they occur. <br className="hidden md:block"/>
              DRC is building the intelligent prevention layer that stops them before they happen.
            </p>
          </motion.div>

        </div>
      </div>
      
    </section>
  );
}


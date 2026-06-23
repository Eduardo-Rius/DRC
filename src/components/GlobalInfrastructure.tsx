import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function GlobalInfrastructure() {
  const nodes = [
    { name: 'Miami', x: 25, y: 40 },
    { name: 'Cancún', x: 23, y: 45 },
    { name: 'Barcelona', x: 50, y: 35 },
    { name: 'Dubai', x: 65, y: 42 },
    { name: 'Singapore', x: 80, y: 55 },
    { name: 'Gold Coast', x: 88, y: 75 }
  ];

  const markets = [
    { title: 'Hotels & Resorts', value: '€450B Industry' },
    { title: 'Municipal Beaches', value: '€120B Industry' },
    { title: 'Water Parks', value: '€70B Industry' },
    { title: 'Olympic Facilities', value: '€40B Industry' },
    { title: 'Smart Cities', value: '€500B+' }
  ];

  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-blue/10 via-primary to-primary pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Section */}
        <div className="text-center md:text-left mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-cyan/30 mb-6 backdrop-blur-md">
              <span className="text-xs font-bold text-accent-cyan tracking-widest uppercase">From Pool Safety To Global Infrastructure</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tight">
              DRC is not a product. <br />
              <span className="text-gray-500">DRC is a new category.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: 3D Map Visualization */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden glass-panel shadow-[0_0_50px_rgba(0,107,255,0.15)] border-accent-cyan/20"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            
            {/* SVG Lines between nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="none">
              <motion.path
                d="M 25% 40% Q 35% 20% 50% 35% T 65% 42% T 80% 55% T 88% 75%"
                fill="none"
                stroke="rgba(0, 217, 255, 0.4)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M 23% 45% Q 24% 42% 25% 40%"
                fill="none"
                stroke="rgba(0, 217, 255, 0.4)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              />
            </svg>

            {/* Nodes */}
            {nodes.map((node, i) => (
              <motion.div
                key={i}
                className="absolute z-20 flex flex-col items-center"
                style={{ top: `${node.y}%`, left: `${node.x}%`, transform: 'translate(-50%, -50%)' }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (i * 0.2), duration: 0.5 }}
              >
                <div className="relative flex justify-center items-center">
                  <MapPin className="text-accent-cyan w-6 h-6 drop-shadow-[0_0_10px_rgba(0,217,255,1)]" />
                  <div className="absolute w-8 h-8 rounded-full bg-accent-cyan/20 animate-ping" />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-white mt-1 bg-primary/80 px-2 py-0.5 rounded border border-white/10 backdrop-blur-md">
                  {node.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: Market Industries */}
          <div className="flex flex-col h-full justify-center">
            <div className="space-y-4 mb-12">
              {markets.map((market, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex justify-between items-center glass-panel p-5 md:p-6 rounded-2xl border border-white/5 hover:border-accent-cyan/40 hover:bg-white/5 transition-all duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.1)]"
                >
                  <span className="text-lg md:text-xl font-bold text-gray-300 group-hover:text-white transition-colors">{market.title}</span>
                  <span className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue font-mono group-hover:glow-text-cyan tracking-tight">
                    {market.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* The Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="pl-6 border-l-4 border-accent-blue"
            >
              <h3 className="text-2xl md:text-3xl font-light text-gray-400 leading-snug">
                We don't sell cameras.<br/>
                We don't sell sensors.<br/>
                We don't sell wearables.<br/>
                <span className="font-black text-white glow-text-cyan mt-2 block">
                  We sell a global network.
                </span>
              </h3>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

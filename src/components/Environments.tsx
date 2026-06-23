import { motion } from 'framer-motion';

export default function Environments() {
  const envs = [
    { title: 'Sports Pools', desc: 'High performance and competition centers.', img: 'https://images.unsplash.com/photo-1519315901367-f34f927e7049?q=80&w=2940&auto=format&fit=crop' },
    { title: 'Hotels & Resorts', desc: 'Safety and peace of mind for guests.', img: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=2835&auto=format&fit=crop' },
    { title: 'Water Parks', desc: 'High traffic areas with maximum control.', img: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?q=80&w=2940&auto=format&fit=crop' },
    { title: 'Beaches', desc: 'Open water monitoring in real time.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2946&auto=format&fit=crop' },
    { title: 'Lakes & Nature', desc: 'Protection in natural recreational areas.', img: 'https://images.unsplash.com/photo-1439800994963-71ccaace515e?q=80&w=2940&auto=format&fit=crop' },
  ];

  return (
    <section className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Built for Every Environment</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">Scalable from a single hotel pool to an entire municipal beachfront.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {envs.map((env, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/5"
            >
              <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110`} style={{ backgroundImage: `url(${env.img})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">{env.title}</h3>
                <p className="text-sm text-gray-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{env.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

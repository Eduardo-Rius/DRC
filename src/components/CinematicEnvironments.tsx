import { motion } from 'framer-motion';

export default function CinematicEnvironments() {
  const environments = [
    {
      id: "resorts",
      title: "Luxury Resorts",
      desc: "Maldives • Cancún • Dubai",
      colSpan: "md:col-span-2",
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beautiful-resort-with-a-pool-and-2287-large.mp4",
      poster: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2940&auto=format&fit=crop"
    },
    {
      id: "beaches",
      title: "Municipal Beaches",
      desc: "High-density public monitoring",
      colSpan: "md:col-span-1",
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-people-on-a-beach-at-sunset-1033-large.mp4",
      poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2946&auto=format&fit=crop"
    },
    {
      id: "olympic",
      title: "Olympic Facilities",
      desc: "Professional training & competition",
      colSpan: "md:col-span-1",
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-swimmer-in-a-pool-doing-the-butterfly-stroke-2035-large.mp4",
      poster: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2940&auto=format&fit=crop"
    },
    {
      id: "parks",
      title: "Water Parks",
      desc: "High-risk family environments",
      colSpan: "md:col-span-1",
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-kids-playing-in-a-fountain-with-water-jets-1237-large.mp4",
      poster: "https://images.unsplash.com/photo-1582650567115-4ba81f62b25c?q=80&w=2940&auto=format&fit=crop"
    },
    {
      id: "lakes",
      title: "Natural Lakes",
      desc: "Remote aquatic environments",
      colSpan: "md:col-span-1",
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-beautiful-landscape-of-a-lake-and-mountains-1215-large.mp4",
      poster: "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-40 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter mb-4">
              Deployable <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan glow-text-cyan">Anywhere.</span>
            </h2>
            <p className="text-xl md:text-3xl font-light text-gray-400">
              A universal intelligence layer for every body of water.
            </p>
          </motion.div>
        </div>

        {/* Cinematic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {environments.map((env, index) => (
            <motion.div 
              key={env.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-primary h-[400px] shadow-2xl hover:shadow-[0_0_60px_rgba(0,217,255,0.2)] hover:border-accent-cyan/30 transition-all duration-700 ${env.colSpan}`}
            >
              
              {/* Background Video */}
              <div className="absolute inset-0 z-0">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster={env.poster}
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity scale-100 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000 ease-out"
                >
                  <source src={env.videoSrc} type="video/mp4" />
                </video>
              </div>

              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
                <h3 className="text-3xl font-black text-white tracking-tight mb-2 drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {env.title}
                </h3>
                <p className="text-gray-300 font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {env.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

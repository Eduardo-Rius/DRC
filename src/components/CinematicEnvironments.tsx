import { motion } from 'framer-motion';

export default function CinematicEnvironments() {
  const environments = [
    {
      id: "resorts",
      title: "Luxury Resorts",
      desc: "Maldives • Cancún • Dubai",
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beautiful-resort-with-a-pool-and-2287-large.mp4",
      poster: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2940&auto=format&fit=crop"
    },
    {
      id: "beaches",
      title: "Municipal Beaches",
      desc: "High-density public safety networks",
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-beach-aerial-drone-shot-43224-large.mp4",
      poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2946&auto=format&fit=crop"
    },
    {
      id: "parks",
      title: "Water Parks",
      desc: "High-risk family environments",
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-pool-water-with-ripples-40439-large.mp4",
      poster: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2940&auto=format&fit=crop"
    },
    {
      id: "olympic",
      title: "Olympic Centers",
      desc: "Professional training facilities",
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-swimmer-in-a-pool-doing-the-butterfly-stroke-2035-large.mp4",
      poster: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2940&auto=format&fit=crop"
    },
    {
      id: "lakes",
      title: "Natural Lakes",
      desc: "Remote open-water protection",
      videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-beautiful-landscape-of-a-lake-and-mountains-1215-large.mp4",
      poster: "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-40 bg-gradient-to-b from-[#03172c] via-[#052446] to-[#03172c] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.06)_0%,_transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono font-bold text-accent-cyan tracking-widest uppercase bg-accent-cyan/10 border border-accent-cyan/20 px-3 py-1 rounded-full mb-6 inline-block">
              SECTOR ANALYSIS
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter mb-4 uppercase">
              Deployable <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-turquoise to-white glow-text-cyan">Anywhere.</span>
            </h2>
            <p className="text-xl md:text-3xl font-light text-gray-300">
              A universal intelligence layer for every body of water.
            </p>
          </motion.div>
        </div>

        {/* Cinematic Vertical Video Grid - 5 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {environments.map((env, index) => (
            <motion.div 
              key={env.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              style={{ backgroundImage: `url(${env.poster})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-accent-cyan/15 bg-primary/40 h-[500px] shadow-2xl hover:shadow-[0_0_50px_rgba(34,211,238,0.25)] hover:border-accent-cyan/40 transition-all duration-700 cursor-pointer"
            >
              
              {/* Background Video - Full Color, Bright, Zoom on Hover */}
              <div className="absolute inset-0 z-0">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster={env.poster}
                  className="w-full h-full object-cover opacity-75 scale-100 group-hover:scale-110 group-hover:opacity-100 transition-all duration-[1200ms] ease-out"
                >
                  <source src={env.videoSrc} type="video/mp4" />
                </video>
              </div>

              {/* Luminous/Aqua Sunbeam Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/0 via-accent-cyan/5 to-white/0 group-hover:from-accent-cyan/10 group-hover:via-accent-cyan/5 group-hover:to-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 pointer-events-none" />

              {/* Vignette Overlay (Darker at bottom for text readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent z-20 transition-all duration-500" />

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-30 flex flex-col justify-end h-full">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-[10px] font-mono font-bold text-accent-cyan tracking-widest uppercase mb-1 block">
                    SECTOR // 0{index + 1}
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight mb-2 drop-shadow-md">
                    {env.title}
                  </h3>
                  <p className="text-gray-300 font-light text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 leading-snug">
                    {env.desc}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


import { motion } from 'framer-motion';
import { TrendingUp, MapPin } from 'lucide-react';

export default function PathToBillion() {
  const phases = [
    {
      id: "PHASE 1",
      title: "Luxury Resorts",
      desc: "Cancún • Riviera Maya • Dubai • Maldives",
      color: "text-accent-cyan",
      borderColor: "border-accent-cyan"
    },
    {
      id: "PHASE 2",
      title: "Water Parks",
      desc: "Global expansion & commercial facilities",
      color: "text-accent-blue",
      borderColor: "border-accent-blue"
    },
    {
      id: "PHASE 3",
      title: "Municipal Beaches",
      desc: "Smart Cities & dense public locations",
      color: "text-white",
      borderColor: "border-gray-500"
    },
    {
      id: "PHASE 4",
      title: "National Safety Networks",
      desc: "Large-scale government deployments",
      color: "text-gray-300",
      borderColor: "border-gray-600"
    },
    {
      id: "PHASE 5",
      title: "Global Intelligence Layer",
      desc: "Worldwide aquatic coverage standard",
      color: "text-accent-cyan",
      borderColor: "border-accent-cyan"
    }
  ];

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.1)_0%,_transparent_75%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/30 mb-6 backdrop-blur-md">
              <span className="text-xs font-bold text-accent-blue tracking-widest uppercase">Path to €1 Billion</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter uppercase">
              From First Deployment <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-turquoise to-white glow-text-cyan">To Global Standard.</span>
            </h2>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto mb-32">
          {/* Vertical connecting line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 md:-translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <div className={`w-14 h-14 rounded-full bg-primary border-4 ${phase.borderColor} flex items-center justify-center z-10`}>
                    <MapPin className={`w-5 h-5 ${phase.color}`} />
                  </div>
                  {index === 0 || index === 4 ? (
                    <div className="absolute w-full h-full rounded-full bg-accent-cyan/20 animate-ping opacity-50" />
                  ) : null}
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className={`glass-panel p-6 rounded-2xl border-l-4 ${phase.borderColor} hover:bg-white/5 transition-colors`}>
                    <div className={`text-xs font-mono font-bold tracking-widest mb-2 ${phase.color}`}>{phase.id}</div>
                    <h3 className="text-2xl font-black text-white tracking-tight mb-2">{phase.title}</h3>
                    <p className="text-gray-400 font-light">{phase.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Financial Growth Visualization */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative max-w-5xl mx-auto glass-panel border border-white/10 rounded-[2rem] p-8 md:p-16 text-center overflow-hidden"
        >
          {/* Subtle grid background for chart feel */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy-dark.png')] opacity-20 pointer-events-none" />
          
          <div className="relative z-10">
            <TrendingUp className="w-12 h-12 text-accent-cyan mx-auto mb-6 opacity-80" />
            
            <h3 className="text-3xl md:text-5xl font-light text-white leading-tight mb-12">
              Every deployment strengthens the network.<br/>
              Every network increases the moat.<br/>
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-turquoise to-white glow-text-cyan block mt-4 uppercase">
                Every moat increases enterprise value.
              </span>
            </h3>

            {/* SVG Exponential Curve */}
            <div className="relative h-[250px] w-full mt-12">
              {/* Gradient fill under the curve */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent-cyan/10 to-transparent clip-path-curve opacity-50" />
              
              <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Axes */}
                <line x1="0" y1="100" x2="100" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <line x1="0" y1="100" x2="0" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                
                {/* Exponential Line */}
                <motion.path
                  d="M 0 100 Q 40 95 60 70 T 90 20 T 100 0"
                  fill="none"
                  stroke="url(#cyan-gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 2, ease: "easeIn" }}
                  className="drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                />
                
                {/* Gradient Def */}
                <defs>
                  <linearGradient id="cyan-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#22D3EE" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

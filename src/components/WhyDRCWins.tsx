import { motion } from 'framer-motion';
import { Database, Network, Zap, RefreshCw, Lock } from 'lucide-react';

export default function WhyDRCWins() {
  const cards = [
    {
      id: "01",
      title: "Data Advantage",
      icon: <Database className="w-8 h-8" />,
      color: "text-accent-cyan",
      bg: "bg-accent-cyan/10",
      content: (
        <ul className="space-y-2">
          <li className="text-gray-300 font-light text-xl">Every deployment makes the AI smarter.</li>
          <li className="text-gray-500 font-light text-lg">More locations.</li>
          <li className="text-gray-500 font-light text-lg">More swimmers.</li>
          <li className="text-gray-500 font-light text-lg">More telemetry.</li>
          <li className="text-white font-bold text-lg mt-4">More prediction accuracy.</li>
        </ul>
      )
    },
    {
      id: "02",
      title: "Network Effect",
      icon: <Network className="w-8 h-8" />,
      color: "text-accent-blue",
      bg: "bg-accent-blue/10",
      content: (
        <ul className="space-y-2">
          <li className="text-gray-300 font-light text-xl">Each new location strengthens the platform.</li>
          <li className="text-white font-bold text-xl mt-4">Customers improve the product for all customers.</li>
        </ul>
      )
    },
    {
      id: "03",
      title: "First Mover Advantage",
      icon: <Zap className="w-8 h-8" />,
      color: "text-accent-cyan",
      bg: "bg-accent-cyan/10",
      content: (
        <ul className="space-y-2">
          <li className="text-gray-300 font-light text-xl">No global aquatic intelligence platform exists today.</li>
          <li className="text-white font-bold text-xl mt-4 glow-text-cyan">DRC defines the category.</li>
        </ul>
      )
    },
    {
      id: "04",
      title: "Recurring Revenue",
      icon: <RefreshCw className="w-8 h-8" />,
      color: "text-accent-blue",
      bg: "bg-accent-blue/10",
      content: (
        <ul className="space-y-2 text-xl font-light text-gray-400">
          <li>SaaS subscriptions.</li>
          <li>Monitoring services.</li>
          <li>Analytics.</li>
          <li className="text-white font-bold mt-2">Risk reduction programs.</li>
        </ul>
      )
    },
    {
      id: "05",
      title: "High Switching Costs",
      icon: <Lock className="w-8 h-8" />,
      color: "text-accent-cyan",
      bg: "bg-accent-cyan/10",
      content: (
        <ul className="space-y-2">
          <li className="text-gray-300 font-light text-xl">Once integrated into safety operations.</li>
          <li className="text-white font-black text-2xl mt-4 tracking-tight">Customers do not leave.</li>
        </ul>
      )
    }
  ];

  return (
    <section className="py-40 bg-gradient-to-b from-[#03172c] via-[#052446] to-[#03172c] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(34,211,238,0.08)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Section */}
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-6">
              Built For A Market <br className="hidden md:block" />
              <span className="text-gray-500">That Doesn't Exist Yet.</span>
            </h2>
            <p className="text-xl md:text-3xl font-light text-gray-400">
              The biggest companies are built before categories become obvious.
            </p>
          </motion.div>
        </div>

        {/* 5 Horizontal Cards */}
        <div className="space-y-8">
          {cards.map((card, index) => (
            <motion.div 
              key={card.id}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col md:flex-row gap-8 items-start md:items-center bg-primary/40 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[2rem] hover:bg-white/5 hover:border-accent-cyan/20 transition-all duration-500 shadow-2xl hover:shadow-[0_0_50px_rgba(0,217,255,0.05)]"
            >
              
              {/* Left Column: Icon & Title */}
              <div className="md:w-1/3 flex flex-col gap-6">
                <div className={`w-16 h-16 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center border border-white/5`}>
                  {card.icon}
                </div>
                <div>
                  <span className={`text-sm font-mono font-bold ${card.color} mb-2 block`}>{card.id} //</span>
                  <h3 className="text-3xl font-black text-white tracking-tight">{card.title}</h3>
                </div>
              </div>

              {/* Divider Line Mobile */}
              <div className="w-full h-px bg-white/5 block md:hidden" />
              
              {/* Divider Line Desktop */}
              <div className="hidden md:block w-px h-32 bg-white/5 mx-8 group-hover:bg-accent-cyan/20 transition-colors" />

              {/* Right Column: Content */}
              <div className="md:w-2/3">
                {card.content}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

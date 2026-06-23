import { motion } from 'framer-motion';
import { Eye, ActivitySquare, Brain, RefreshCw } from 'lucide-react';

export default function AIDetection() {
  const features = [
    { icon: <Eye className="w-5 h-5 text-accent-cyan" />, text: 'Underwater Detection' },
    { icon: <ActivitySquare className="w-5 h-5 text-accent-cyan" />, text: 'Behavior Recognition' },
    { icon: <Brain className="w-5 h-5 text-accent-cyan" />, text: 'Predictive Analytics' },
    { icon: <RefreshCw className="w-5 h-5 text-accent-cyan" />, text: 'Continuous Learning' },
  ];

  return (
    <section id="technology" className="py-24 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10 group"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546022830-671c6d328498?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-primary/60" />
            
            {/* Tracking overlays */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-32 h-48 md:w-48 md:h-64 border-2 border-dashed border-accent-cyan rounded-lg relative"
                >
                  <div className="absolute -right-2 -top-2 w-3 h-3 rounded-full bg-accent-cyan" />
                  <div className="absolute -left-2 -bottom-2 w-3 h-3 rounded-full bg-accent-cyan" />
                </motion.div>
                
                {/* Lateral panel */}
                <div className="absolute top-0 left-full ml-4 md:ml-12 bg-primary/90 backdrop-blur-md border border-accent-red/30 p-4 rounded-xl shadow-[0_0_20px_rgba(255,59,59,0.2)] w-48 md:w-56 hidden sm:block">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                    <div className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
                    <span className="text-[10px] md:text-xs font-bold text-accent-red uppercase tracking-widest font-mono">Distress Detected</span>
                  </div>
                  <div className="space-y-2 text-xs md:text-sm font-mono">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Confidence:</span>
                      <span className="text-white">98.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Depth:</span>
                      <span className="text-white">2.3 m</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">To Alert:</span>
                      <span className="text-accent-red font-bold">2.1s</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Detect. Analyze. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Prevent.</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              Our proprietary computer vision models are trained on millions of hours of aquatic data to instantly distinguish between normal swimming patterns and signs of distress. 
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 glass-panel p-4 rounded-xl border border-white/5">
                  <div className="bg-accent-blue/10 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-semibold text-white">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

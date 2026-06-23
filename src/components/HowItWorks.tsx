import { motion } from 'framer-motion';
import { Camera, BrainCircuit, BellRing } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Camera className="w-8 h-8 text-accent-cyan" />,
      title: '1. AI Vision',
      description: 'Smart cameras and sensors continuously monitor every aquatic environment in real time.'
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-accent-blue" />,
      title: '2. Behavior Analysis',
      description: 'AI analyzes movements, patterns and risk signals before they become critical.'
    },
    {
      icon: <BellRing className="w-8 h-8 text-accent-red" />,
      title: '3. Instant Alert',
      description: 'Alerts are sent in seconds to lifeguards, emergency teams and the command center.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-secondary relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-blue/5 via-primary to-primary pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">How DRC Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">A seamless pipeline from detection to response, engineered to act faster than humanly possible.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-accent-cyan/30 transition-colors group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

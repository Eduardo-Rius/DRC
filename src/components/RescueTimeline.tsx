import { motion } from 'framer-motion';
import { Camera, BrainCircuit, Watch, LifeBuoy } from 'lucide-react';

export default function RescueTimeline() {
  const steps = [
    {
      time: 'T-0.0s',
      title: 'Anomaly Detected',
      desc: 'Optical sensors identify abnormal kinematic behavior below the surface.',
      icon: <Camera className="w-6 h-6" />,
      color: 'text-accent-cyan',
      bg: 'bg-accent-cyan/10',
      border: 'border-accent-cyan'
    },
    {
      time: 'T-0.5s',
      title: 'AI Verification',
      desc: 'Deep learning models confirm submersion distress signature with 99.8% confidence.',
      icon: <BrainCircuit className="w-6 h-6" />,
      color: 'text-accent-blue',
      bg: 'bg-accent-blue/10',
      border: 'border-accent-blue'
    },
    {
      time: 'T-1.2s',
      title: 'Wearable Alert',
      desc: 'Haptic feedback and exact coordinates delivered to the nearest active lifeguard.',
      icon: <Watch className="w-6 h-6" />,
      color: 'text-accent-red',
      bg: 'bg-accent-red/10',
      border: 'border-accent-red'
    },
    {
      time: 'T-2.0s',
      title: 'Lifeguard Dispatched',
      desc: 'Response protocol initiated before irreversible damage occurs.',
      icon: <LifeBuoy className="w-6 h-6" />,
      color: 'text-accent-green',
      bg: 'bg-accent-green/10',
      border: 'border-accent-green'
    }
  ];

  return (
    <section className="py-24 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Sub-Second Response Architecture</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            While human lifeguards take an average of 10-60 seconds to notice a submerged victim, DRC operates in milliseconds.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 md:-translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <div className={`w-20 h-20 rounded-full bg-primary border-4 border-secondary flex items-center justify-center z-10 ${step.color}`}>
                    {step.icon}
                  </div>
                  <div className={`absolute w-full h-full rounded-full ${step.bg} animate-ping opacity-20`} />
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className={`glass-panel p-6 rounded-2xl border-l-4 ${step.border} shadow-lg`}>
                    <div className={`font-mono text-xl font-black mb-2 ${step.color}`}>{step.time}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

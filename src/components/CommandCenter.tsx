import { motion } from 'framer-motion';
import { ShieldCheck, ShieldAlert, Radio, Globe, MapPin } from 'lucide-react';

export default function CommandCenter() {
  const alerts = [
    { location: 'Riviera Maya / Hotel Xcaret', status: 'Safe', swimmers: '1,248', type: 'safe' },
    { location: 'Cancun / Water Park', status: 'Safe', swimmers: '2,317', type: 'safe' },
    { location: 'Playa del Carmen / Public Beach', status: 'Submersion Detected', time: '14 sec', type: 'alert' },
  ];

  const kpis = [
    { label: 'Connected Cameras', value: '14,205' },
    { label: 'Active Wearables', value: '8,432' },
    { label: 'Emergency Teams Online', value: '142' },
    { label: 'Active Lifeguards', value: '450' },
    { label: 'Incidents Prevented', value: '23' },
    { label: 'Network Uptime', value: '99.9%' },
    { label: 'False Positive Rate', value: '< 0.1%' },
  ];

  // Map nodes simulation
  const nodes = [
    { top: '30%', left: '20%', type: 'safe' },
    { top: '45%', left: '25%', type: 'safe' },
    { top: '35%', left: '45%', type: 'safe' },
    { top: '60%', left: '30%', type: 'alert' },
    { top: '20%', left: '70%', type: 'safe' },
    { top: '50%', left: '80%', type: 'safe' },
    { top: '70%', left: '60%', type: 'safe' },
  ];

  return (
    <section id="command-center" className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-cyan/30 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,107,255,0.15)]">
            <Radio className="w-4 h-4 text-accent-cyan animate-pulse" />
            <span className="text-xs font-bold text-accent-cyan tracking-widest uppercase">Live Operations</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Global Command Center</h2>
          <p className="text-gray-400 max-w-2xl text-lg font-light">
            Centralized operational intelligence. Our platform scales from single high-performance facilities to entire municipal networks, providing unprecedented visibility and orchestrated response.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Map / Visualization Area */}
          <div className="lg:col-span-2 glass-panel rounded-2xl p-6 md:p-8 min-h-[600px] flex flex-col relative border-accent-cyan/20 shadow-[0_0_30px_rgba(0,107,255,0.05)] overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop')] bg-cover bg-center opacity-20 rounded-2xl mix-blend-screen" />
            <div className="absolute inset-0 bg-primary/70 rounded-2xl" />
            
            {/* Simulated Map Nodes */}
            {nodes.map((node, idx) => (
              <motion.div 
                key={`node-${idx}`}
                className="absolute z-10"
                style={{ top: node.top, left: node.left }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className={`relative flex items-center justify-center ${node.type === 'alert' ? 'animate-pulse' : ''}`}>
                  <MapPin className={`w-6 h-6 ${node.type === 'alert' ? 'text-accent-red' : 'text-accent-cyan'}`} />
                  <div className={`absolute w-full h-full rounded-full opacity-50 blur-sm ${node.type === 'alert' ? 'bg-accent-red shadow-[0_0_20px_red]' : 'bg-accent-cyan'}`} />
                </div>
              </motion.div>
            ))}
            
            <div className="relative z-20 w-full flex flex-col h-full pointer-events-none">
              <div className="flex items-center gap-3 mb-8 pointer-events-auto">
                <Globe className="w-6 h-6 text-accent-cyan" />
                <h3 className="text-xl font-bold text-white font-mono tracking-widest">NODE_TRACKING_SYS</h3>
              </div>
              
              <div className="space-y-4 mt-auto pointer-events-auto">
                {alerts.map((alert, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i}
                    className={`p-5 rounded-xl border backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all ${
                      alert.type === 'safe' 
                        ? 'bg-accent-green/5 border-accent-green/20 hover:bg-accent-green/10' 
                        : 'bg-accent-red/10 border-accent-red/40 shadow-[0_0_20px_rgba(255,59,59,0.3)] hover:bg-accent-red/20'
                    }`}
                  >
                    <div>
                      <p className="text-white font-bold tracking-wide">{alert.location}</p>
                      <p className="text-sm text-gray-400 font-mono mt-1">ID: LOC-{Math.floor(Math.random() * 9000) + 1000}</p>
                    </div>
                    <div className="flex items-center gap-8">
                      {alert.type === 'safe' ? (
                        <>
                          <div className="text-right hidden sm:block">
                            <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">Swimmers</p>
                            <p className="text-white font-mono text-lg">{alert.swimmers}</p>
                          </div>
                          <div className="flex items-center gap-2 bg-accent-green/20 border border-accent-green/30 px-4 py-2 rounded-lg text-accent-green font-bold text-xs font-mono tracking-wider">
                            <ShieldCheck className="w-4 h-4" /> SECURE
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-right hidden sm:block">
                            <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">Response</p>
                            <p className="text-accent-red font-mono font-bold text-lg">{alert.time}</p>
                          </div>
                          <div className="flex items-center gap-2 bg-accent-red/20 border border-accent-red/40 px-4 py-2 rounded-lg text-accent-red font-bold text-xs font-mono tracking-wider animate-pulse shadow-[0_0_15px_rgba(255,59,59,0.5)]">
                            <ShieldAlert className="w-4 h-4" /> {alert.status.toUpperCase()}
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* KPIs Sidebar */}
          <div className="glass-panel rounded-2xl p-8 border-accent-cyan/10 flex flex-col gap-6">
            <h3 className="text-sm font-bold text-accent-cyan tracking-widest font-mono mb-2 uppercase">System Telemetry</h3>
            <div className="flex flex-col gap-6 h-full justify-center">
              {kpis.map((kpi, i) => (
                <div key={i} className="flex justify-between items-end border-b border-white/5 pb-3">
                  <span className="text-sm text-gray-400 font-medium">{kpi.label}</span>
                  <span className="text-xl font-mono font-bold text-white tracking-tight">{kpi.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

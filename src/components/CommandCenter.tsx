import { motion } from 'framer-motion';
import { ShieldCheck, ShieldAlert, Radio, Globe } from 'lucide-react';

export default function CommandCenter() {
  const alerts = [
    { location: 'Riviera Maya / Hotel Xcaret', status: 'Safe', swimmers: '1,248', type: 'safe' },
    { location: 'Cancun / Water Park', status: 'Safe', swimmers: '2,317', type: 'safe' },
    { location: 'Playa del Carmen / Public Beach', status: 'Alert Detected', time: '14 sec', type: 'alert' },
    { location: 'Miami Beach / Public Beach', status: 'Safe', swimmers: '3,842', type: 'safe' },
  ];

  const kpis = [
    { label: 'Lives Protected Today', value: '12,458' },
    { label: 'Active Facilities', value: '387' },
    { label: 'AI Monitored Swimmers', value: '45,228' },
    { label: 'Alerts Today', value: '23' },
    { label: 'Facilities Online', value: '92%' },
    { label: 'Avg Response Time', value: '18 sec' },
    { label: 'Alerts Resolved', value: '98%' },
  ];

  return (
    <section id="command-center" className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-6">
            <Radio className="w-4 h-4 text-accent-cyan animate-pulse" />
            <span className="text-xs font-semibold text-accent-cyan tracking-wider uppercase">Live Operations</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Global Command Center</h2>
          <p className="text-gray-400 max-w-2xl text-lg font-light">
            Centralized monitoring of all deployments worldwide. AI detects anomalies and alerts the nearest responders instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Map / Visualization Area */}
          <div className="lg:col-span-2 glass-panel rounded-2xl p-6 min-h-[500px] flex flex-col relative border-white/10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop')] bg-cover bg-center opacity-10 rounded-2xl" />
            <div className="absolute inset-0 bg-primary/70 rounded-2xl" />
            
            <div className="relative z-10 w-full flex flex-col h-full">
              <div className="flex items-center gap-3 mb-8">
                <Globe className="w-6 h-6 text-accent-cyan" />
                <h3 className="text-xl font-bold text-white font-mono">NODE_TRACKING_SYS</h3>
              </div>
              
              <div className="space-y-4 mt-auto">
                {alerts.map((alert, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i}
                    className={`p-4 rounded-lg border backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                      alert.type === 'safe' 
                        ? 'bg-accent-green/5 border-accent-green/20' 
                        : 'bg-accent-red/10 border-accent-red/30 shadow-[0_0_15px_rgba(255,59,59,0.2)]'
                    }`}
                  >
                    <div>
                      <p className="text-white font-semibold">{alert.location}</p>
                      <p className="text-sm text-gray-400 font-mono mt-1">ID: LOC-{Math.floor(Math.random() * 9000) + 1000}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      {alert.type === 'safe' ? (
                        <>
                          <div className="text-right hidden sm:block">
                            <p className="text-xs text-gray-400 font-mono">SWIMMERS</p>
                            <p className="text-white font-mono">{alert.swimmers}</p>
                          </div>
                          <div className="flex items-center gap-2 bg-accent-green/20 px-3 py-1 rounded text-accent-green font-bold text-xs font-mono">
                            <ShieldCheck className="w-4 h-4" /> SAFE
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-right hidden sm:block">
                            <p className="text-xs text-gray-400 font-mono">RESPONSE</p>
                            <p className="text-accent-red font-mono font-bold">{alert.time}</p>
                          </div>
                          <div className="flex items-center gap-2 bg-accent-red/20 px-3 py-1 rounded text-accent-red font-bold text-xs font-mono animate-pulse">
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
          <div className="glass-panel rounded-2xl p-6 border-white/10 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-gray-400 tracking-wider font-mono mb-4">SYSTEM METRICS</h3>
            {kpis.map((kpi, i) => (
              <div key={i} className="flex justify-between items-end border-b border-white/5 pb-3">
                <span className="text-sm text-gray-300">{kpi.label}</span>
                <span className="text-lg font-mono font-bold text-white">{kpi.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ShieldAlert } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-20 overflow-hidden bg-secondary border-t border-white/5">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="flex justify-center mb-10">
          <div className="relative">
            <ShieldAlert className="w-16 h-16 text-accent-cyan" />
            <div className="absolute inset-0 bg-accent-cyan blur-xl opacity-30"></div>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          A SAFER WORLD <span className="text-accent-blue">STARTS NOW</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
          Join us in revolutionizing aquatic safety and protecting millions of lives globally.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-bold text-base hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all duration-300">
            Request Private Demo
          </button>
          <button className="px-8 py-4 rounded-full bg-transparent border border-accent-cyan/50 text-accent-cyan font-bold text-base hover:bg-accent-cyan/10 transition-all duration-300">
            See the Future of Aquatic Safety
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-sm">
          <p>© 2026 Digital Rescue Control. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

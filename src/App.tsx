import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import CommandCenter from './components/CommandCenter';
import AIDetection from './components/AIDetection';
import Environments from './components/Environments';
import Comparison from './components/Comparison';
import InvestorPitch from './components/InvestorPitch';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-primary min-h-screen text-white font-sans selection:bg-accent-cyan/30">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <CommandCenter />
      <AIDetection />
      <Environments />
      <Comparison />
      <InvestorPitch />
      <Footer />
    </main>
  );
}

export default App;

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EmotionalImpact from './components/EmotionalImpact';
import HowItWorks from './components/HowItWorks';
import AIDetection from './components/AIDetection';
import RescueTimeline from './components/RescueTimeline';
import CommandCenter from './components/CommandCenter';
import SmartBand from './components/SmartBand';
import Environments from './components/Environments';
import Comparison from './components/Comparison';
import InvestorPitch from './components/InvestorPitch';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-primary min-h-screen text-white font-sans selection:bg-accent-cyan/30">
      <Navbar />
      <HeroSection />
      <EmotionalImpact />
      <HowItWorks />
      <AIDetection />
      <RescueTimeline />
      <CommandCenter />
      <SmartBand />
      <Environments />
      <Comparison />
      <InvestorPitch />
      <Footer />
    </main>
  );
}

export default App;

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TheOpportunity from './components/TheOpportunity';
import AIDetection from './components/AIDetection';
import RescueTimeline from './components/RescueTimeline';
import CommandCenter from './components/CommandCenter';
import SmartBand from './components/SmartBand';
import GlobalInfrastructure from './components/GlobalInfrastructure';
import Comparison from './components/Comparison';
import InvestorPitch from './components/InvestorPitch';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-primary min-h-screen text-white font-sans selection:bg-accent-cyan/30">
      <Navbar />
      <HeroSection />
      <TheOpportunity />
      <AIDetection />
      <RescueTimeline />
      <CommandCenter />
      <SmartBand />
      <GlobalInfrastructure />
      <Comparison />
      <InvestorPitch />
      <Footer />
    </main>
  );
}

export default App;

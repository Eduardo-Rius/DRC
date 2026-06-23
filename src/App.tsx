import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TheOpportunity from './components/TheOpportunity';
import AIDetection from './components/AIDetection';
import RescueTimeline from './components/RescueTimeline';
import CommandCenter from './components/CommandCenter';
import SmartBand from './components/SmartBand';
import GlobalInfrastructure from './components/GlobalInfrastructure';
import WhyDRCWins from './components/WhyDRCWins';
import PathToBillion from './components/PathToBillion';
import CinematicEnvironments from './components/CinematicEnvironments';
import Comparison from './components/Comparison';
import InvestorPitch from './components/InvestorPitch';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-primary min-h-screen text-white font-sans selection:bg-accent-cyan/30">
      <Navbar />
      <HeroSection />
      
      <div id="problem">
        <TheOpportunity />
      </div>
      
      <div id="solution">
        <AIDetection />
        <RescueTimeline />
      </div>
      
      <div id="command-center">
        <CommandCenter />
        <SmartBand />
      </div>
      
      <div id="opportunity">
        <GlobalInfrastructure />
        <PathToBillion />
      </div>
      
      <div id="use-cases">
        <CinematicEnvironments />
        <WhyDRCWins />
      </div>
      
      <div id="investors">
        <Comparison />
        <InvestorPitch />
      </div>
      
      <Footer />
    </main>
  );
}

export default App;

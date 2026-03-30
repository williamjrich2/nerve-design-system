import Starfield from './components/Starfield';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import FeatureSection from './components/FeatureSection';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30">
      <Starfield />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <VideoShowcase />
        <FeatureSection />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8 px-6 text-center text-white/40 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} AnovaGrowth. NERVE Design System v3 — Dark Mode Reference.</p>
      </footer>
    </div>
  );
}

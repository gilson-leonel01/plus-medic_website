import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HowItHelps from "./components/HowItHelps/HowItHelps";
import Uses from "./components/Uses/Uses";
import Trust from "./components/Trust/Trust";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <main className="overflow-x-hidden ">
      <Navbar />
      <Hero />
      <HowItHelps />
      <Uses />
      <Trust />
      <Footer />
    </main>
  );
};

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Founders } from "./components/Founders";
import { RoboBuild } from "./components/RoboBuild";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Founders />
        <RoboBuild />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

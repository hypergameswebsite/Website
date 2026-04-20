import { motion } from "motion/react";
import { Gamepad2 } from "lucide-react";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-secondary"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Gamepad2 className="w-8 h-8 text-primary" />
          <span className="text-xl">
            <span className="text-primary">HYPER</span>
            <span className="text-white"> GAMES</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("robobuild")}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            RoboBuild
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-black px-6 py-2 rounded-lg hover:bg-accent transition-all duration-300"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-primary">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </motion.header>
  );
}

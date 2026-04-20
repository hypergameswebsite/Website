import { motion } from "motion/react";
import { Bot, Wrench, Zap, Trophy } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function RoboBuild() {
  const features = [
    {
      icon: Bot,
      title: "Build Your Robot",
      description: "Customize every part of your robot with hundreds of components",
    },
    {
      icon: Wrench,
      title: "Advanced Engineering",
      description: "Design complex mechanisms and test your creations in real-time",
    },
    {
      icon: Zap,
      title: "Epic Battles",
      description: "Compete against other players in intense robot combat arenas",
    },
    {
      icon: Trophy,
      title: "Climb the Ranks",
      description: "Rise through the leaderboards and become a legendary builder",
    },
  ];

  return (
    <section id="robobuild" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_#1a3d2e_0%,_transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="text-primary">ROBOBUILD</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The ultimate robot construction and combat simulator
          </p>
        </motion.div>

        {/* Game showcase image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
          <div className="relative border-2 border-primary rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1659605199215-83f8b3a8b5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwcm9ib3QlMjBidWlsZGluZyUyMGdhbWV8ZW58MXx8fHwxNzc2Njc1MjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="RoboBuild Game"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div>
                <span className="inline-block bg-primary text-black px-4 py-1 rounded-full text-sm mb-2">
                  Coming Soon
                </span>
                <p className="text-white text-lg">Experience the next generation of robot building</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-primary/10 rounded-xl blur-xl group-hover:bg-primary/20 transition-all duration-300"></div>
                <div className="relative bg-card border border-secondary rounded-xl p-6 hover:border-primary transition-all duration-300">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-primary text-black px-8 py-4 rounded-lg hover:bg-accent transition-all duration-300 hover:scale-105">
            Join the Waitlist
          </button>
        </motion.div>
      </div>
    </section>
  );
}

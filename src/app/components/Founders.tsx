import { motion } from "motion/react";
import { Users } from "lucide-react";

export function Founders() {
  const founders = [
    {
      name: "Joshua Dunn",
      role: "Co-Founder & Lead Developer",
    },
    {
      name: "Erik's Dancitis",
      role: "Co-Founder & Creative Director",
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl">
              <span className="text-white">Our </span>
              <span className="text-primary">Founders</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built by passionate gamers who understand what the community truly wants
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-card border-2 border-secondary rounded-xl p-8 hover:border-primary transition-all duration-300">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <span className="text-2xl text-primary">{founder.name.charAt(0)}</span>
                </div>
                <h3 className="text-2xl mb-2">{founder.name}</h3>
                <p className="text-primary">{founder.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-secondary/30 border border-primary/30 rounded-xl p-8">
            <h3 className="text-xl mb-4 text-primary">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              At Hyper Games, we're dedicated to creating immersive gaming experiences 
              that push the boundaries of creativity and innovation. We believe in 
              building games that gamers actually want to play - because we are gamers ourselves.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Mail className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl">
              <span className="text-white">Get in </span>
              <span className="text-primary">Touch</span>
            </h2>
          </div>
          <p className="text-muted-foreground">
            Have questions or want to collaborate? We'd love to hear from you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl blur-2xl"></div>
          <div className="relative bg-card border-2 border-secondary rounded-xl p-8 md:p-12 hover:border-primary transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <Send className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl mb-4">Contact Us</h3>
              
              <div className="bg-secondary/30 border border-primary/30 rounded-lg px-8 py-4 mb-6">
                <a
                  href="mailto:hyper.games.company@gmail.com"
                  className="text-primary hover:text-accent transition-colors duration-300 text-lg"
                >
                  hyper.games.company@gmail.com
                </a>
              </div>

              <p className="text-muted-foreground max-w-md">
                Whether you're interested in our games, partnership opportunities, 
                or just want to say hi - drop us an email and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick info cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-secondary/20 border border-secondary rounded-lg p-6 text-center"
          >
            <h4 className="text-primary mb-2">Business Inquiries</h4>
            <p className="text-sm text-muted-foreground">Partnerships & collaborations</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-secondary/20 border border-secondary rounded-lg p-6 text-center"
          >
            <h4 className="text-primary mb-2">Support</h4>
            <p className="text-sm text-muted-foreground">Technical assistance & help</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-secondary/20 border border-secondary rounded-lg p-6 text-center"
          >
            <h4 className="text-primary mb-2">Feedback</h4>
            <p className="text-sm text-muted-foreground">Share your ideas with us</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

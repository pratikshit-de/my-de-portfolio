import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">06. Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm currently open to new opportunities. Whether you have a question or just
            want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-glass rounded-3xl p-6 md:p-12 glow-border"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's work together
              </h3>

              <motion.a
                href="mailto:pratikshit.singh1708@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium break-all">pratikshit.singh1708@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919336576495"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+91 9336576495</p>
                </div>
              </motion.a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Bengaluru, India</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Connect with me
              </h3>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://linkedin.com/in/pratikshits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin size={24} className="text-primary" />
                  <span className="font-medium">LinkedIn</span>
                </motion.a>

                <motion.a
                  href="https://github.com/pratikshit-de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github size={24} className="text-primary" />
                  <span className="font-medium">GitHub</span>
                </motion.a>
              </div>

              <motion.a
                href="mailto:pratikshit.singh1708@gmail.com"
                className="w-full flex items-center justify-center gap-3 p-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_40px_hsl(190_95%_55%/0.5)] transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                Send me an email
              </motion.a>

              <p className="text-center text-muted-foreground text-sm">
                I typically respond within 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

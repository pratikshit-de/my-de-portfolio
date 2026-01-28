import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-mono text-primary border border-primary/30 glow-border">
            Digital Specialist Engineer @ Infosys
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">Hi, I'm </span>
          <br className="sm:hidden" />
          <span className="text-gradient">Pratikshit</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Data Engineer crafting{" "}
          <span className="text-primary">scalable ETL pipelines</span> &{" "}
          <span className="text-secondary">analytics solutions</span> using
          PySpark, Databricks & Cloud technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#contact"
            className="group px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg flex items-center gap-2 glow-border hover:shadow-[0_0_40px_hsl(190_95%_55%/0.5)] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            Get in Touch
          </motion.a>

          <motion.a
            href="#experience"
            className="px-8 py-4 rounded-xl border border-border text-foreground font-semibold text-lg hover:border-primary/50 hover:bg-muted/20 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-6"
        >
          <motion.a
            href="https://linkedin.com/in/pratikshits"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/pratikshit-de"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="mailto:pratikshit.singh1708@gmail.com"
            className="p-3 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted-foreground"
          >
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 mx-auto flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
            <p className="mt-2 text-sm">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

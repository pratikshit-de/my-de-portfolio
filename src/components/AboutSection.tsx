import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Award } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">01. About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-semibold">Data Engineer</span> with
              combined experience across data engineering, software development, and
              full-stack automation. Currently specializing in building scalable ETL
              pipelines and analytics solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across <span className="text-secondary font-semibold">PySpark</span>,
              <span className="text-secondary font-semibold"> SQL</span>,
              <span className="text-secondary font-semibold"> Python</span>,
              <span className="text-secondary font-semibold"> Databricks</span>, and cloud
              technologies. I'm passionate about building robust, maintainable solutions
              that drive business value.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span>Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span>+91 9336576495</span>
              </div>
              <div className="sm:col-span-2 flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span className="break-all">pratikshit.singh1708@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {[
              { title: "Databricks Certified", desc: "Data Engineer Associate" },
              { title: "Microsoft Azure", desc: "DP-900 Certified" },
              { title: "Oracle Certified", desc: "Data Platform 2025 Foundations" },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="card-glass rounded-xl p-5 glow-border-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
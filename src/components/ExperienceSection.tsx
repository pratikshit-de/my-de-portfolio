import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, ArrowRight } from "lucide-react";

const experiences = [
  {
    company: "Infosys Limited",
    role: "Digital Specialist Engineer (Data Engineer)",
    period: "Nov 2024 – Present",
    location: "Mysore, India",
    highlights: [
      "Engineered a scalable Medallion Lakehouse Architecture on Databricks with fault-tolerant pipelines",
      "Developed optimized Python/PySpark logic for complex transformations and multi-table joins",
      "Performed deep performance tuning - optimizing partitions, caching strategies, and Z-Ordering",
      "Led requirement analysis with stakeholders ensuring production stability through CI/CD practices",
    ],
    color: "primary",
  },
  {
    company: "Nagarro Software Pvt. Ltd.",
    role: "Associate Software Engineer",
    period: "Mar 2023 – Aug 2023",
    location: "India, Remote",
    highlights: [
      "Developed Python-based automation workflows reducing manual errors by ~40%",
      "Integrated Angular-based user interfaces with backend services",
      "Wrote optimized SQL queries for backend reports and historical data comparisons",
      "Built custom scripts to extract, transform, and validate employee logs",
    ],
    color: "secondary",
  },
  {
    company: "DuoGeeks",
    role: "Junior Web Developer",
    period: "Jan 2020 – Mar 2023",
    location: "India, Remote",
    highlights: [
      "Built dynamic user interfaces using React.js with component-based architecture",
      "Engineered mobile-first, responsive web applications using CSS3, HTML5, and Bootstrap",
      "Optimized web performance achieving faster load times and better SEO rankings",
      "Worked directly with clients gathering requirements and improving UI features",
    ],
    color: "accent",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">02. Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Where I've Worked
          </h2>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Timeline Line */}
          <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"
                }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute top-6 w-4 h-4 rounded-full bg-${exp.color} glow-border pulse-glow left-0 -translate-x-1/2 md:left-auto ${index % 2 === 0 ? "md:right-[48%] md:translate-x-1/2" : "md:left-[48%] md:-translate-x-1/2"
                }`} />

              <div className="card-glass rounded-2xl p-6 md:p-8 glow-border-hover transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 size={18} className="text-primary" />
                      <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                    </div>
                    <p className="text-primary font-medium">{exp.role}</p>
                  </div>
                  <div className="text-left md:text-right shrink-0">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      <span className="whitespace-nowrap">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <ArrowRight size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

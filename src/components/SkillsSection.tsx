import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Big Data & Distributed",
    skills: ["PySpark", "Spark SQL", "Spark Streaming", "Databricks", "Delta Lake"],
    color: "primary",
  },
  {
    title: "Cloud & ETL",
    skills: ["Azure Data Factory", "Azure", "AWS", "REST APIs"],
    color: "secondary",
  },
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "Shell Scripting", "Java", "SQL"],
    color: "accent",
  },
  {
    title: "Databases",
    skills: ["SQL", "NoSQL", "Data Warehousing", "Dimensional Modeling"],
    color: "primary",
  },
  {
    title: "Web Development",
    skills: ["React.js", "Angular", "Node.js", "HTML5", "CSS3"],
    color: "secondary",
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Selenium WebDriver", "CI/CD", "Agile/Scrum"],
    color: "accent",
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">03. Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            My Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning data engineering, cloud platforms, and web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="card-glass rounded-2xl p-6 glow-border-hover transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className={`text-lg font-semibold mb-4 text-${category.color}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-muted/50 text-foreground border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-6 text-foreground">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Data Structures & Algorithms", "Data Cleaning & Transformation", "REST API Integration", "Performance Tuning", "Cross-team Collaboration"].map((competency, i) => (
              <motion.span
                key={competency}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="px-4 py-2 rounded-full text-sm font-medium border border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
              >
                {competency}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

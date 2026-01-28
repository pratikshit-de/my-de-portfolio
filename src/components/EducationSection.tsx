import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    institution: "Dr. APJ Abdul Kalam Technical University",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    period: "Aug 2019 - Aug 2023",
    location: "Lucknow, UP",
    grade: "CGPA: 7.79/10.0",
  },
  {
    institution: "Kendriya Vidyalaya No.1 AFS Chakeri",
    degree: "Intermediate (Class XII)",
    field: "",
    period: "2019",
    location: "Kanpur, UP",
    grade: "Percentage: 84.40%",
  },
  {
    institution: "Kendriya Vidyalaya No.1 AFS Chakeri",
    degree: "Secondary School (Class X)",
    field: "",
    period: "2017",
    location: "Kanpur, UP",
    grade: "CGPA: 10.0/10.0",
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">05. Education</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Academic Journey
          </h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution + edu.degree}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-glass rounded-2xl p-6 md:p-8 glow-border-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="p-4 rounded-xl bg-primary/10 self-start">
                  <GraduationCap className="text-primary" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {edu.degree}
                    {edu.field && <span className="text-muted-foreground"> • {edu.field}</span>}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-sm self-start">
                  {edu.grade}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

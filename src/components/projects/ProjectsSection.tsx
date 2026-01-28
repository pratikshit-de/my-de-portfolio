import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        id: "1",
        title: "ReliefMesh",
        shortDescription: "Real-time disaster response coordination platform",
        fullDescription: "ReliefMesh is an end-to-end data engineering platform designed to resolve the \"Last Mile\" logistics gap in humanitarian crises. It ingests high-velocity, unstructured communications (SMS, WhatsApp, Hinglish text) and uses GenAI Agents to instantly standardize them into actionable insights for relief commanders.",
        techStack: ["PySpark", "Databricks", "Python", "Next.js", "TypeScript", "Delta Lake", "TailwindCSS", "Groq AI"],
        liveUrl: "https://relief-mesh.vercel.app/",
        githubUrl: "https://github.com/pratikshit-de/ReliefMesh",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        status: "live" as const,
    },
    {
        id: "2",
        title: "CryptoTracker",
        shortDescription: "Live cryptocurrency portfolio manager",
        fullDescription: "Track your crypto investments in real-time with this sleek portfolio manager. Features include price alerts, historical charts, and multi-wallet support.",
        techStack: ["Next.js", "Prisma", "PostgreSQL", "CoinGecko API"],
        liveUrl: "https://crypto-tracker-demo.vercel.app",
        githubUrl: "https://github.com/yourusername/crypto-tracker",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
        status: "live" as const,
    },
    {
        id: "3",
        title: "DevFlow",
        shortDescription: "Developer productivity toolkit",
        fullDescription: "An all-in-one developer toolkit featuring code snippets, project templates, and workflow automation. Integrates with GitHub and VS Code.",
        techStack: ["React", "Node.js", "MongoDB", "GitHub API"],
        liveUrl: "https://devflow-app.vercel.app",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
        status: "development" as const,
    },
    {
        id: "4",
        title: "EcoTrack",
        shortDescription: "Carbon footprint calculator",
        fullDescription: "Calculate and offset your carbon footprint with personalized recommendations. Features gamification elements and community challenges.",
        techStack: ["Vue.js", "Firebase", "D3.js"],
        liveUrl: "https://ecotrack.vercel.app",
        githubUrl: "https://github.com/yourusername/ecotrack",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop",
        status: "live" as const,
    },
];

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="py-32 px-6" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-mono text-sm mb-4 block">04. Projects</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                        My Works
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto opacity-80">
                        Click any project to expand details • All projects are live on Vercel
                    </p>
                </motion.div>

                {/* Project Cards */}
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
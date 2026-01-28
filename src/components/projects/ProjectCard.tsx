import { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    techStack: string[];
    liveUrl: string;
    githubUrl?: string;
    image: string;
    status: "live" | "development" | "archived";
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const statusColors = {
        live: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        development: "bg-amber-500/20 text-amber-400 border-amber-500/30",
        archived: "bg-muted text-muted-foreground border-border",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
        >
            <div
                className={`
          glass-card rounded-xl overflow-hidden project-card-hover
          ${isExpanded ? "ring-2 ring-primary/50" : ""}
        `}
            >
                {/* Compact Header - Always Visible */}
                <div
                    className="flex items-center gap-4 p-4 cursor-pointer select-none"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {/* Project Thumbnail */}
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Title & Short Description */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-foreground truncate group-hover:text-gradient transition-all">
                                {project.title}
                            </h3>
                            <span className={`px-2 py-0.5 text-xs rounded-full border ${statusColors[project.status]}`}>
                                {project.status}
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                            {project.shortDescription}
                        </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex items-center gap-2">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                            aria-label="View live site"
                        >
                            <ExternalLink className="w-4 h-4" />
                        </a>

                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                                aria-label="View source code"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        )}

                        <button
                            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
                            aria-label={isExpanded ? "Collapse" : "Expand"}
                        >
                            {isExpanded ? (
                                <ChevronUp className="w-4 h-4" />
                            ) : (
                                <ChevronDown className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Expandable Details */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="px-4 pb-4 pt-0 border-t border-border/50">
                                {/* Full Description */}
                                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                                    {project.fullDescription}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-muted-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
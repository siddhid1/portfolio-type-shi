"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

export function Projects() {
  const projects = [
    {
      name: "Queue-Forge",
      description:
        "a distributed job queue platform from scratch - backend system that accepts, schedules, and executes async background jobs across multiple worker processes with fault tolerance, retries, and an operator dashboard for monitoring  .",
      tech: ["Node", "Redis", "PostgreSQL", "Prometheus", "Grafana", "Docker"],
      github: "https://github.com/siddhid1/queue-forge-v2",
      demo: "#",
    },
    {
      name: "Log-Pilot",
      description:
        "  Production-ready monitoring SaaS from scratch, handling 2M+ logs/minute with sub-50ms search latency as a lightweight alternative to Datadog/Sentry.",
      tech: ["Node.js", "NestJS", "NATS JetStream", "Redis", "ClickHouse"],
      github: "https://github.com/siddhid1/log-pilot",
      demo: "#",
    },
    {
      name: "Rail-Grid",
      description:
        "   train booking platform comprising 8 independent microservices with autonomous deployment and service isolation.",
      tech: [
        "Nest.js",
        "Docker",
        "PostgreSql",
        "Redis",
        "Kafka",
        "Elasticsearch",
        "JWT",
        "OAuth2.0",
      ],
      github: "https://github.com/siddhid1/rail-grid",
      demo: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-foreground mb-12 font-mono"
          >
            Featured Projects
          </motion.h2>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="group p-6 bg-card border border-border hover:border-primary transition-all duration-200"
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground font-mono group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-secondary font-mono mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-background border border-border text-foreground rounded-full font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-xs font-mono text-secondary hover:text-primary transition-colors"
                    >
                      <GitBranch size={14} />
                      Code
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        className="inline-flex items-center gap-2 text-xs font-mono text-secondary hover:text-primary transition-colors"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={itemVariants}
            className="text-sm text-secondary font-mono mt-12 text-center"
          >
            Want to see more?{" "}
            <a
              href="https://github.com/siddhid1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Check out my GitHub
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

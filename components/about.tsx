"use client";

import { motion } from "framer-motion";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
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
            About
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="text-foreground leading-relaxed space-y-4"
            >
              <p>
                I&apos;m a Backend Engineer passionate about building scalable
                systems and production-grade software. Currently studying at the
                International Institute of Information Technology Bhubaneswar
                (IIIT-BH) pursuing Information Technology with a CGPA of 8.49.
              </p>

              <p>
                My interests span distributed systems, cloud infrastructure, and
                system design. I have a deep passion for understanding
                databases, networking, operating systems, and scalable
                architecture. I enjoy diving into complex problems and finding
                elegant solutions.
              </p>

              <p>
                Currently, I&apos;m exploring the intersection of backend
                engineering and GenAI, working on projects that leverage
                advanced AI techniques to solve real-world problems.
              </p>

              <p>
                Beyond code, I&apos;m passionate about manga, movies (cult
                classics), and philosophy . I believe that understanding design
                and aesthetics—both in software and life—leads to better
                engineering decisions and better mental health.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border"
            >
              <div>
                <p className="text-2xl font-mono font-bold text-primary mb-2">
                  2022–2026
                </p>
                <p className="text-xs text-secondary font-mono">
                  Bachelor of Technology
                </p>
              </div>
              <div>
                <p className="text-2xl font-mono font-bold text-primary mb-2">
                  8.49
                </p>
                <p className="text-xs text-secondary font-mono">CGPA</p>
              </div>
              <div>
                <p className="text-2xl font-mono font-bold text-primary mb-2">
                  IIIT-BH
                </p>
                <p className="text-xs text-secondary font-mono">Institute</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

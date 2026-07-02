"use client";

import { motion } from "framer-motion";
import { GitBranch, Rss, X, Code2 } from "lucide-react";

export function Hero() {
  const socialLinks = [
    { icon: GitBranch, href: "https://github.com/siddhid1", label: "GitHub" },
    {
      icon: Rss,
      href: "https://www.linkedin.com/in/siddhid-sambrut-dani-325143271/",
      label: "LinkedIn",
    },
    { icon: X, href: "https://x.com/_siddhid", label: "Twitter" },
    {
      icon: Code2,
      href: "https://leetcode.com/u/danisiddhid1",
      label: "LeetCode",
    },
  ];

  const interests = [
    "Go",
    "Distributed Systems",
    "System Design",
    "Cloud Infrastructure",
  ];

  return (
    <section id="hero" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-4 font-mono">
            Siddhid Sambrut Dani
          </h1>
          <p className="text-xl text-secondary font-mono mb-4">
            Backend Engineer
          </p>
          <p className="text-lg text-foreground leading-relaxed max-w-2xl mb-8">
            I build scalable backend systems, distributed architectures, and
            production-grade software.
          </p>

          {/* Interests */}
          <div className="mb-12">
            <p className="text-sm text-secondary font-mono mb-4">
              Current interests:
            </p>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex items-center gap-2 text-sm font-mono text-foreground"
                >
                  <span className="text-primary">•</span>
                  {interest}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex gap-6 flex-wrap"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border text-foreground hover:text-primary hover:border-primary transition-all duration-200 text-sm font-mono group"
                  title={link.label}
                >
                  <Icon
                    size={16}
                    className="group-hover:translate-y-[-2px] transition-transform"
                  />
                  {link.label}
                </a>
              );
            })}
          </motion.div>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8"
          >
            <a
              href="https://drive.google.com/file/d/1kr-4lcVS5cTw8VrA7ZejIwDDyopqwFUk/view?usp=sharing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background hover:opacity-90 transition-opacity text-sm font-mono font-bold"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

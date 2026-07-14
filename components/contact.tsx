"use client";

import { motion } from "framer-motion";
import { GitBranch, Rss, X, Mail } from "lucide-react";
import InstagramIcon from "@/components/ui/insta";

export function Contact() {
  const contactLinks = [
    {
      icon: GitBranch,
      label: "GitHub",
      href: "https://github.com/siddhid1",
      text: "github.com/siddhid1",
    },
    {
      icon: Rss,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/siddhidsambrutdani/",
      text: "linkedin.com/in/siddhid-...",
    },
    {
      icon: X,
      label: "Twitter",
      href: "https://x.com/_siddhid",
      text: "x.com/_siddhid",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:b422054+nospam[at]@iiit-bh.ac.in",
      text: "b422054+nospam[at]@iiit-bh.ac.in",
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      href: "https://www.instagram.com/_siddhid/",
      text: "instagram.com/_siddhid  || thats not me in pfp tho",
      // text: "pfp my best friend",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="contact"
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
            className="text-3xl font-bold text-foreground mb-4 font-mono"
          >
            Let&apos;s build something.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-secondary font-mono mb-12 max-w-2xl"
          >
            I&apos;m always interested in hearing about new projects and
            opportunities. Feel free to reach out!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={
                    link.label !== "Email" ? "noopener noreferrer" : undefined
                  }
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="p-4 bg-card border border-border hover:border-primary transition-all duration-200 group flex items-center gap-4"
                >
                  <Icon
                    size={20}
                    className="text-secondary group-hover:text-primary transition-colors flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-secondary font-mono mb-1">
                      {link.label}
                    </p>
                    <p className="text-sm text-foreground font-mono truncate">
                      {link.text}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

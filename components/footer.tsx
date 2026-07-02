"use client";

import { motion } from "framer-motion";
import { GitBranch, Rss, X } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: GitBranch, href: "https://github.com/siddhid1", label: "GitHub" },
    {
      icon: Rss,
      href: "https://www.linkedin.com/in/siddhid-sambrut-dani-325143271/",
      label: "LinkedIn",
    },
    { icon: X, href: "https://x.com/_siddhid", label: "Twitter" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <p className="text-xs text-secondary font-mono">
            © {currentYear} Siddhid Sambrut Dani. All rights reserved.
          </p>

          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-secondary hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>

          <p className="text-xs text-secondary font-mono">
            One day at a time. <span className="text-primary">Good</span>{" "}
            <span className="text-primary">Vibez</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

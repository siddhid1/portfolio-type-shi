"use client";

import { motion } from "framer-motion";
import { Music } from "lucide-react";

export function Uses() {
  const useItems = [
    {
      label: "Editor",
      value: "Neovim ❤️ | VS Code",
      description: "I dibble dabble between these two ",
    },
    {
      label: "Terminal",
      value: "kitty + tmux",
      description: "GPU-accelerated terminal with session management",
    },
    {
      label: "Shell",
      value: "bash",
      description: "Classic shell configured for productivity",
    },
    {
      label: "Theme",
      value: "gruvbox",
      description: "Warm color scheme for extended coding sessions",
    },
    {
      label: "OS",
      value: "Fedora 40",
      description: "Linux distribution optimized for development",
    },
    {
      label: "Font",
      value: "Keeps changing",
      description: "Monospace font designed for code",
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
      id="uses"
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
            Uses
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {useItems.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="p-5 bg-card border border-border hover:border-primary transition-colors duration-200"
              >
                <p className="text-xs font-mono text-secondary mb-2">
                  {item.label}
                </p>
                <p className="text-lg font-mono font-bold text-foreground mb-2">
                  {item.value}
                </p>
                <p className="text-xs text-secondary font-mono">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Reading & Entertainment */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <motion.div
              variants={itemVariants}
              className="p-6 bg-card border border-border"
            >
              <h3 className="text-sm font-mono font-bold text-primary mb-4">
                Reading
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-mono text-secondary mb-2">Manga</p>
                  <ul className="text-sm text-foreground space-y-1 font-mono">
                    <li>• Akametsu</li>
                    <li>• Vagabond</li>
                    <li>• D.Gray-man</li>
                    <li>• The Climber</li>
                    <li>• Neon Genesis Evangelion</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-mono text-secondary mb-2">Films</p>
                  <ul className="text-sm text-foreground space-y-1 font-mono">
                    <li>• Tarantino films</li>
                    <li>• Fincher films</li>
                    <li>• Old Hong Kong films</li>
                    <li>• 12 Angry Men</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 bg-card border border-border"
            >
              <h3 className="text-sm font-mono font-bold text-primary mb-4 flex items-center gap-2">
                <Music size={16} />
                Music
              </h3>
              <p className="text-xs text-secondary font-mono mb-4">
                I curate playlists that complement my coding sessions:
              </p>
              <div className="space-y-2">
                <a
                  href="https://music.youtube.com/playlist?list=PLSrhF_lV6Vq_tonwReODyKJRRJi12aQ1w&si=l214a3P2E4den--C"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline font-mono"
                >
                  → My Music Taste
                </a>
              </div>
              <div className="space-y-2 mt-3">
                <a
                  href="https://music.youtube.com/playlist?list=PLSrhF_lV6Vq_jD_PAookezEQAoXMDfo0L&si=-azsR1qOutbo5g_p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline font-mono"
                >
                  → Driving With Hindi vibe
                </a>
              </div>
              <div className="space-y-2 mt-3">
                <a
                  href="https://music.youtube.com/playlist?list=PLSrhF_lV6Vq_Cb334RmtPynvsZqeCdgYE&si=KayBHuNQxaWp7xD6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline font-mono"
                >
                  → Jay Park (One of my favorite artists)
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client'

import { motion } from 'framer-motion'

export function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Go', 'C/C++'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'NestJS', 'Flask', 'GraphQL', 'REST APIs', 'gRPC', 'Socket.io', 'WebSockets', 'WebRTC'],
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Material UI', 'Recoil'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'ClickHouse', 'Mongoose', 'Prisma'],
    },
    {
      category: 'Messaging & Distributed Systems',
      skills: ['Kafka', 'RabbitMQ', 'BullMQ', 'ZooKeeper', 'NATS JetStream'],
    },
    {
      category: 'DevOps & Infrastructure',
      skills: ['Docker', 'AWS', 'Azure', 'GitHub Actions', 'Nginx', 'Prometheus', 'Grafana'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-foreground mb-12 font-mono">
            Skills & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <motion.div key={category.category} variants={itemVariants}>
                <h3 className="text-sm font-mono font-bold text-primary mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-background border border-border text-foreground text-xs font-mono rounded-full hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

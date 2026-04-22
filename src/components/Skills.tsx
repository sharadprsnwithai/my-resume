"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Database,
  Server,
  Container,
  GitBranch,
  Terminal,
  Shield
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code2 size={24} />,
      skills: [
        { name: "Java (1.4 - 17)", level: 98, color: "from-red-500 to-orange-500" },
        { name: "Spring Boot", level: 95, color: "from-green-500 to-emerald-500" },
        { name: "Spring MVC", level: 92, color: "from-green-600 to-teal-500" },
        { name: "Spring Batch", level: 88, color: "from-green-700 to-green-500" },
        { name: "Spring AOP/IOC", level: 90, color: "from-green-600 to-green-500" },
        { name: "Hibernate", level: 85, color: "from-blue-600 to-indigo-500" },
      ],
    },
    {
      title: "Streaming & Data Processing",
      icon: <Server size={24} />,
      skills: [
        { name: "Apache Beam", level: 92, color: "from-blue-500 to-cyan-500" },
        { name: "Google Dataflow", level: 90, color: "from-blue-600 to-purple-500" },
        { name: "Apache Storm", level: 88, color: "from-red-600 to-orange-500" },
        { name: "Kafka", level: 85, color: "from-indigo-500 to-purple-500" },
        { name: "Google Pub/Sub", level: 90, color: "from-cyan-500 to-blue-500" },
        { name: "JMS", level: 85, color: "from-purple-500 to-pink-500" },
      ],
    },
    {
      title: "Cloud & Containerization",
      icon: <Cloud size={24} />,
      skills: [
        { name: "GKE (Kubernetes)", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "Cloud Run", level: 85, color: "from-cyan-500 to-blue-500" },
        { name: "BigQuery", level: 82, color: "from-yellow-500 to-red-500" },
        { name: "Docker", level: 92, color: "from-blue-600 to-indigo-500" },
        { name: "Terraform", level: 85, color: "from-purple-600 to-pink-500" },
      ],
    },
    {
      title: "Databases & Caching",
      icon: <Database size={24} />,
      skills: [
        { name: "MongoDB", level: 88, color: "from-green-500 to-emerald-500" },
        { name: "Redis", level: 85, color: "from-red-500 to-pink-500" },
        { name: "Oracle 11g", level: 82, color: "from-blue-600 to-indigo-500" },
        { name: "MySQL", level: 80, color: "from-blue-500 to-cyan-500" },
      ],
    },
    {
      title: "DevOps & CI/CD",
      icon: <Terminal size={24} />,
      skills: [
        { name: "Jenkins", level: 88, color: "from-red-500 to-orange-500" },
        { name: "Ansible", level: 82, color: "from-green-600 to-teal-500" },
        { name: "Git", level: 95, color: "from-slate-600 to-slate-800" },
        { name: "Vagrant", level: 75, color: "from-green-700 to-green-500" },
        { name: "Service Discovery", level: 78, color: "from-blue-500 to-purple-500" },
      ],
    },
    {
      title: "Web Services & Frontend",
      icon: <Code2 size={24} />,
      skills: [
        { name: "REST APIs", level: 95, color: "from-blue-500 to-purple-500" },
        { name: "SOAP Web Services", level: 88, color: "from-indigo-500 to-cyan-500" },
        { name: "Angular", level: 75, color: "from-red-600 to-red-500" },
        { name: "Node.js", level: 72, color: "from-green-500 to-emerald-500" },
        { name: "Apache CXF", level: 82, color: "from-blue-600 to-blue-500" },
      ],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            18+ years of expertise spanning streaming data, cloud platforms, and enterprise Java
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-center text-slate-400 mb-6">Also experienced with:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Microservices", "SOA", "Solace", "Fidessa", "Summit", "BBG-TOMs",
              "BBG", "TW", "ION", "Service Discovery", "Vagrant", "JMeter",
              "Load Testing", "Agile", "SCRUM", "Code Review", "System Design",
              "Technical Leadership", "Requirement Gathering", "Client Communication",
              "Mentoring", "Unit Testing", "Performance Optimization", "High Availability"
            ].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm hover:bg-white/10 hover:border-blue-500/50 transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { User, Award, Lightbulb, Target } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "18+" },
    { label: "Real-time Data Processing", value: "7+" },
    { label: "Microservices Design", value: "10+" },
    { label: "Team Leadership", value: "7+" },
  ];

  const highlights = [
    {
      icon: <Award className="text-yellow-400" size={24} />,
      title: "Real-time Data Processing Expert",
      description: "7+ years with Apache Storm, MongoDB, Apache Beam, Google Dataflow, Kafka, Docker & Kubernetes",
    },
    {
      icon: <Lightbulb className="text-cyan-400" size={24} />,
      title: "Microservices & Spring Boot Specialist",
      description: "Extensive experience designing and building applications using Spring Boot, Spring MVC, Spring AOP, Spring ORM, and JMS",
    },
    {
      icon: <Target className="text-green-400" size={24} />,
      title: "Infrastructure as Code & DevOps",
      description: "Hands-on experience with Ansible, Terraform, Jenkins, Docker, Kubernetes, and GKE for cloud-native deployments",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile/Image area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <motion.div
                className="absolute inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl border border-white/10"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.2)",
                    "0 0 40px rgba(139, 92, 246, 0.3)",
                    "0 0 20px rgba(59, 130, 246, 0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              {/* Placeholder for your image */}
              <div className="absolute inset-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-white/5">
                <User size={80} className="text-slate-600" />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Associate Director at HSBC
            </h3>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              I have 18 years of professional experience in software engineering, with around 7 years in real-time data processing
              using Apache Storm, MongoDB, Apache Beam, Google Dataflow, Kafka, Docker, and Kubernetes. Currently at HSBC since May 2018,
              I lead technical initiatives for post-trade applications that consume raw messages from Fidessa and convert them through
              real-time processing engines like Apache Beam.
            </p>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              My expertise includes microservices architecture with Spring Boot, SOA with SOAP and REST web services, caching with Redis,
              and infrastructure as code using Ansible, Terraform, and Jenkins. I have strong experience in designing and developing
              applications using Spring Boot, Spring MVC, JMS, and working with databases like Oracle and MongoDB. I excel at requirement
              gathering, solution design, and mentoring teams while delivering robust technical solutions.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 card-hover"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

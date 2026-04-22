"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Server, Cloud, ShoppingCart, MessageSquare, Database } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "PRISM - Post Trade Processing",
      description: "Real-time post-trade application consuming raw messages from Fidessa via Solace, converting to Fixed messages through Apache Beam processing engine, and exposing to downstream systems (Triana, Surveillance, ETP) through Google Pub/Sub.",
      image: "/projects/prism.jpg",
      icon: <Server size={32} />,
      technologies: ["Java 17", "Apache Beam", "Google Dataflow", "Pub/Sub", "BigQuery", "Terraform", "Spring Boot", "Docker", "Kubernetes"],
      features: [
        "Real-time message conversion using Apache Beam",
        "High-throughput, low-latency trade processing",
        "Integration with Google Pub/Sub for downstream systems",
        "Infrastructure as Code with Terraform on GCP",
      ],
      links: {
        github: null,
        demo: null,
      },
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Fixed Income STP - Trade Enrichment",
      description: "Straight-Through Processing system for Fixed Income trades that enriches trade details from market sources (TW, BBG) and feeds to PTS (Summit, BBG-TOMs). Microservices architecture acting as intermediary for global trading operations.",
      image: "/projects/stp.jpg",
      icon: <Cloud size={32} />,
      technologies: ["Java 1.8", "Apache Storm", "Spring Boot", "Redis", "MongoDB", "Jenkins", "Ansible", "Vagrant", "Service Discovery"],
      features: [
        "Real-time trade enrichment from multiple golden sources",
        "Microservices architecture with Spring Boot",
        "Third-party integration with ION and other systems",
        "Distributed caching with Redis for performance",
      ],
      links: {
        github: null,
        demo: null,
      },
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Finance Workstation - Exception Management",
      description: "Enterprise exception management system aggregating exceptions from 6 downstream projects. Enables business users to verify exceptions and communicate approvals through LPA workflow via SOAP web services and JMS.",
      image: "/projects/finance.jpg",
      icon: <Code2 size={32} />,
      technologies: ["Java 1.8", "MongoDB", "Spring Boot", "Spring Batch", "Spring REST", "Node.js", "Angular 2", "SOAP", "JMS"],
      features: [
        "Centralized exception tracking and management",
        "Integration with LPA approval workflow",
        "Real-time communication via JMS messaging",
        "Modern UI with Angular 2 and Node.js backend",
      ],
      links: {
        github: null,
        demo: null,
      },
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Market Risk Reporting - CCAR & FDIC",
      description: "Regulatory reporting system for retail risk calculations submitted to CCAR and FDIC. Processes monthly retail data from multiple countries, validates, enriches, and aggregates for annual and quarterly regulatory reports.",
      image: "/projects/risk.jpg",
      icon: <Database size={32} />,
      technologies: ["Java 1.7", "Spring 3.0", "Hibernate 3.0", "jQuery", "Oracle 11g", "JBoss 7.0", "Spring Batch", "Spring MVC"],
      features: [
        "Batch processing for large-scale retail data",
        "Data validation and enrichment pipelines",
        "Aggregation by reporting period, country, and business function",
        "Regulatory report generation for CCAR and FDIC",
      ],
      links: {
        github: null,
        demo: null,
      },
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Offer Distribution System (ODS)",
      description: "Real-time offer generation system based on customer purchase history and transaction amounts. Designed for high resilience during peak traffic periods like holiday seasons with SOAP-based communications.",
      image: "/projects/ods.jpg",
      icon: <ShoppingCart size={32} />,
      technologies: ["Java 1.7", "Spring", "MongoDB", "Apache CXF", "JAXB", "jQuery", "AngularJS", "JMeter"],
      features: [
        "Real-time offer generation on purchases",
        "Purchase history-based offer selection",
        "High resilience during peak traffic periods",
        "Load tested with JMeter for holiday traffic",
      ],
      links: {
        github: null,
        demo: null,
      },
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Network Orchestration System (NOS)",
      description: "Network management product for managing network elements including faults, configuration, performance, and security management. Backend feature development for comprehensive network orchestration.",
      image: "/projects/nos.jpg",
      icon: <Server size={32} />,
      technologies: ["Java 1.7", "Spring", "Hibernate", "MySQL", "Liquibase", "RESTful Web Services", "Jersey"],
      features: [
        "Network element fault and configuration management",
        "Performance and security management features",
        "RESTful backend with Jersey implementation",
        "Database version control with Liquibase",
      ],
      links: {
        github: null,
        demo: null,
      },
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Cloud-native solutions built with Java and Google Cloud Platform
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 card-hover overflow-hidden">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Header */}
                <div className="relative flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center glow`}>
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <Code2 size={20} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="relative text-slate-400 mb-4">{project.description}</p>

                {/* Features */}
                <ul className="relative space-y-2 mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="relative flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 text-sm">
            Note: These are enterprise projects built during my professional career.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

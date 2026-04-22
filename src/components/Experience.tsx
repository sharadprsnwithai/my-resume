"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Technical Lead - PRISM",
      company: "HSBC, Pune",
      location: "Pune, India",
      period: "May 2018 - Present",
      description: "Post-trade application consuming raw messages from Fidessa (via Solace), converting to Fixed messages through Apache Beam real-time processing engine, and exposing to downstream systems (Triana, Surveillance, ETP) through Google Pub/Sub.",
      achievements: [
        "Building high-throughput, low-latency applications for trade processing",
        "Responsible for technical solutions, client deliveries, and team mentoring",
        "Conducting code reviews and participating in requirement gathering",
        "Involved in finding bottlenecks and improving system performance",
      ],
      technologies: ["Java 17", "Apache Beam", "Google Dataflow", "Pub/Sub", "BigQuery", "Terraform", "Spring Boot", "Docker", "Kubernetes"],
    },
    {
      title: "Technical Lead - Fixed Income STP",
      company: "HSBC, Pune",
      location: "Pune, India",
      period: "May 2018 - Aug 2021",
      description: "Fixed Income trades mediator system that enriches trade details from market sources (TW, BBG) and feeds to PTS (Summit, BBG-TOMs). Microservices architecture acting as intermediary for trade enrichment.",
      achievements: [
        "Built high-throughput, low-latency microservices for trade enrichment",
        "Integrated third-party systems like ION for seamless data flow",
        "Responsible for technical solutions, client deliveries, and team mentoring",
        "Conducting code reviews and improving system performance",
      ],
      technologies: ["Java 1.8", "Apache Storm", "Spring Boot", "Redis", "MongoDB", "Jenkins", "Ansible", "Vagrant", "Service Discovery"],
    },
    {
      title: "Technical Lead - Finance Workstation",
      company: "Credit Suisse, Pune",
      location: "Pune, India",
      period: "Sep 2015 - May 2018",
      description: "Downstream project aggregating exceptions from 6 other projects for business users. Communicates with LPA approval workflow through SOAP web services and JMS for exception handling and approval processes.",
      achievements: [
        "Built high-throughput, low-latency exception handling system",
        "Participated in requirement gathering and technical design",
        "Responsible for technical solutions and team mentoring",
        "Conducting code reviews and performance optimization",
      ],
      technologies: ["Java 1.8", "MongoDB", "Spring Boot", "Spring Batch", "Spring REST", "Node.js", "Angular 2", "SOAP", "JMS"],
    },
    {
      title: "Technical Lead - Market Risk Reporting (CCAR, FDIC)",
      company: "Citi Bank / EverBank, USA",
      location: "Remote",
      period: "May 2014 - Sep 2015",
      description: "Retail risk calculation system for regulatory submissions (CCAR & FDIC). Processes monthly retail data snapshots from multiple countries, validates, enriches, and aggregates for annual and quarterly reports to regulating authorities.",
      achievements: [
        "Designed and developed batch processing solutions with Spring Batch",
        "Developed presentation layer using Spring MVC, JSP, AJAX, JSON, HTML, CSS, and JavaScript",
        "Responsible for technical solutions and team mentoring",
        "Participated in requirement gathering and technical documentation",
      ],
      technologies: ["Java 1.7", "Spring 3.0", "Hibernate 3.0", "jQuery", "Log4J", "JUnit", "JBoss 7.0", "Oracle 11g", "HTML5", "CSS3"],
    },
    {
      title: "Technical Lead - Offer Distribution System (ODS)",
      company: "Sears Holding",
      location: "Remote",
      period: "Dec 2012 - May 2014",
      description: "Real-time offer generation system based on purchase history and amount. System generates offers on each purchase with resilience during high-traffic periods like holiday seasons.",
      achievements: [
        "Built resilient real-time system handling high traffic during peak seasons",
        "All communications through SOAP web services with JMeter load testing",
        "Participated in requirement gathering and technical documentation",
        "Engaged in coding and unit testing",
      ],
      technologies: ["Java 1.7", "Spring (IOC, AOP, Data, REST)", "MongoDB", "Apache CXF", "JAXB", "jQuery", "AngularJS", "JMeter"],
    },
    {
      title: "Developer - Network Orchestration System (NOS)",
      company: "IP-Access",
      location: "Remote",
      period: "May 2012 - Dec 2012",
      description: "Product NOS managing network elements including faults, configuration, performance, and security management. Feature development for network orchestration and device management.",
      achievements: [
        "Developed backend using RESTful Web Services (Jersey implementation)",
        "Database version management through Liquibase",
        "Feature development for network element management",
      ],
      technologies: ["Java 1.7", "Spring (IOC, AOP)", "Hibernate", "MySQL", "Liquibase", "RESTful Web Services", "Jersey"],
    },
    {
      title: "Software Engineer - Vodacom, South Africa",
      company: "iNautix / BNY",
      location: "Remote",
      period: "May 2011 - Nov 2012",
      description: "Money Markets, OnBalance and OffBalance transactions tracking system for Domestic and International customers. Data retrieval from BWH tables for daily transaction monitoring and tracking.",
      achievements: [
        "Apache Flex UI development for transaction tracking",
        "Involved in both server-side and client-side development",
        "Engaged in coding and unit testing",
      ],
      technologies: ["Java 1.6", "Spring", "iBatis", "Servlets", "JAXB", "Apache Flex"],
    },
    {
      title: "Software Engineer - Automated Underwriting Process (AUP)",
      company: "Cognizant / United Health Group",
      location: "Remote",
      period: "Sep 2007 - May 2011",
      description: "Web-based application for automatic customer underwriting. Allows underwriters to automatically underwrite customers with access to Block and Underwriter details.",
      achievements: [
        "Monitoring jobs on Control-M for batch processing",
        "Dealing with client requests and solving application anomalies",
        "Modifying code as per client requirements",
      ],
      technologies: ["Java 1.4", "JSF", "Control-M"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-16 ${
                "md:text-left md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-slate-900 glow ${
                  index % 2 === 0
                    ? "left-0 md:left-1/2 md:-translate-x-1/2"
                    : "left-0 md:left-1/2 md:-translate-x-1/2"
                }`}
              />

              {/* Content card */}
              <div
                className={`ml-8 md:ml-0 w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                }`}
              >
                <motion.div
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 card-hover"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Header */}
                  <div className="flex flex-col gap-2 mb-4">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-400">
                      <Briefcase size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4 text-slate-400 text-sm">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ArrowRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Heart, Code2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          {/* Logo */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <Code2 size={20} />
          </div>

          {/* Copyright */}
          <p className="text-slate-400 text-sm text-center">
            © {currentYear} Sharad Prasoon. All rights reserved.
          </p>

          {/* Built with love */}
          <p className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Built with</span>
            <Heart size={14} className="text-red-500 animate-pulse" />
            <span>using Next.js & Framer Motion</span>
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {["Next.js 14", "TypeScript", "Framer Motion", "Tailwind CSS", "GCP"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

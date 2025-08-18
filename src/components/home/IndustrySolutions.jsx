
import React from 'react';
import {
  Home,
  FileText,
  ShieldCheck,
  Wrench,
  HeartPulse,
  BriefcaseMedical
} from "lucide-react";
import { motion } from 'framer-motion';

const industries = [
  { icon: Home, name: "Real Estate", accent: "#00839C" },
  { icon: ShieldCheck, name: "Insurance", accent: "#DB07b5" },
  { icon: BriefcaseMedical, name: "Medical", accent: "#E501E4" },
  { icon: Wrench, name: "Home Services", accent: "#00839C" },
  { icon: FileText, name: "Mortgage", accent: "#DB07b5" },
  { icon: HeartPulse, name: "Wellness", accent: "#E501E4" }
];

export default function IndustrySolutions() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#00839C]/5 via-white/10 to-[#DB07b5]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Purpose-Built for Your{" "}
            <span className="relative inline-block">
              Industry
              <svg
                className="absolute -bottom-2 sm:-bottom-4 left-0 w-full"
                viewBox="0 0 250 15"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 10.5C52.5 5.5 152.5 0.5 247.5 7.5"
                  stroke="#DB07b5"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M2.5 12.5C52.5 7.5 152.5 2.5 247.5 9.5"
                  stroke="#DB07b5"
                  strokeWidth="3"
                  strokeOpacity="0.6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            MERGE AI is not a one-size-fits-all solution. Our agents are trained on industry-specific data to deliver unparalleled results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="dark-card p-6 text-center rounded-2xl gradient-hover aspect-square flex flex-col justify-center items-center group transition-all duration-300 hover:border-white/30">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border border-white/10 group-hover:scale-110 transition-all duration-300"
                  style={{ backgroundColor: `${industry.accent}20` }}
                >
                  <industry.icon className="w-8 h-8" style={{ color: industry.accent }} />
                </div>
                <h3 className="text-lg font-bold text-white">{industry.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

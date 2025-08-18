import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  "78% of buyers choose the vendor who replies first",
  "A 5-minute delay drops conversion by 80%",
  "42% of leads are lost to slow follow-up",
  "Never miss a call, text, or email again",
  "24/7/365 lead engagement"
];

const marqueeVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export default function StatsMarquee() {
  return (
    <div className="relative w-full py-8 overflow-x-hidden border-y border-[#00839C]/20 bg-gradient-to-r from-[#00839C]/5 via-transparent to-[#DB07b5]/5">
      <motion.div
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...stats, ...stats].map((stat, index) => (
          <div key={index} className="flex items-center px-12">
            <span className="text-lg font-medium text-gray-300">{stat}</span>
            <span className="mx-12 w-2 h-2 rounded-full bg-[#00839C]"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
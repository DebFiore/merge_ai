import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Circle } from "lucide-react";

const messages = [
  { from: "user", text: "Hello! I'm interested in scheduling a property viewing for the lakeside property." },
  { from: "ai", text: "Hi there! I'd be happy to help you schedule a viewing. We have openings tomorrow at 2PM or Friday at 10AM. Which would work better for you?" },
  { from: "user", text: "Friday at 10AM works great!" },
  { from: "ai", text: "Perfect! I've scheduled your viewing for Friday at 10AM. You'll receive a confirmation email shortly." },
];

export default function ChatMockup() {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages(prev => {
        if (currentIndex < messages.length) {
          setCurrentIndex(prev => prev + 1);
          return [...prev, messages[currentIndex]];
        } else {
          // Reset animation
          setCurrentIndex(0);
          return [];
        }
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-4 max-w-md mx-auto border border-white/20">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#DB07b5] to-[#E501E4] flex items-center justify-center mr-3">
            <span className="font-bold text-white text-sm">M</span>
          </div>
          <div>
            <h3 className="font-semibold text-white">MERGE AI Assistant</h3>
            <div className="flex items-center text-xs text-green-400">
              <Circle className="w-2 h-2 fill-current mr-1" />
              Online 24/7
            </div>
          </div>
        </div>
        <Phone className="w-5 h-5 text-gray-300" />
      </div>

      <div className="h-80 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {visibleMessages.map((msg, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`flex ${msg.from === 'ai' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs rounded-2xl px-4 py-3 ${
                  msg.from === 'ai'
                    ? 'bg-gray-200 text-gray-800 rounded-bl-none'
                    : 'bg-gradient-to-r from-[#DB07b5] to-[#E501E4] text-white rounded-br-none'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="pt-3 border-t border-white/10">
        <div className="bg-white/10 rounded-full p-2 flex items-center">
          <input
            type="text"
            placeholder="Your message..."
            className="bg-transparent w-full focus:outline-none px-2 text-white placeholder-gray-400"
            disabled
          />
          <button className="bg-gradient-to-r from-[#DB07b5] to-[#E501E4] rounded-full px-4 py-1 text-sm font-semibold">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
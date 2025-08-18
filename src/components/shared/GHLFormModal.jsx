import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GHLFormModal({ isOpen, onClose }) {
  if (typeof document === 'undefined') {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative bg-[#0f0e3e] rounded-xl shadow-2xl w-full max-w-2xl h-[640px] max-h-[90vh] border border-white/20 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 bg-white/10 text-white rounded-full p-2 z-10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src="https://link.mergemedia.ai/widget/form/hLBGhYjyR49nr9KWOFeh"
              style={{ width: '100%', height: '100%', border: 'none' }}
              id="inline-hLBGhYjyR49nr9KWOFeh"
              title="MERGE LP"
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
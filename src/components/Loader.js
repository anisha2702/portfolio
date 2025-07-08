'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1800); // 1.8 seconds

    return () => clearTimeout(timeout);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
      >
        Anisha Kumari
      </motion.h1>
    </motion.div>
  );
}

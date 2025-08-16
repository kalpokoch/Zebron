// components/RouteWrapper.js
import React from 'react';
import { motion } from 'framer-motion';
import Loader from "@/components/Loader";
import useImageLoader from '../hooks/useImageLoader';

const RouteWrapper = ({ children }) => {
  const { loading } = useImageLoader();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <Loader />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default RouteWrapper;
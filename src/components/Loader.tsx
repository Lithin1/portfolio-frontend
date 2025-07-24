import React from "react";
import { motion } from "framer-motion";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-slate-100 dark:bg-slate-900">
      <motion.div
        className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
};

export default Loader;

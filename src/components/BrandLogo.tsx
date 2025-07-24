// components/Logo.tsx
import React from "react";
import { MdMemory } from "react-icons/md";

export const BrandLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <MdMemory className="text-cyan-500 text-3xl dark:text-teal-400" />
      <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
        LSM
      </h1>
    </div>
  );
};

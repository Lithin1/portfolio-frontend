import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiGitlab,
  SiGit,
  SiPostman,
  SiJira,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const SkillSet: React.FC = () => {
  const techStacks = {
    Frontend: [
      { icon: <SiReact />, name: "React" },
      { icon: <SiJavascript />, name: "Javascript" },
      { icon: <SiMui />, name: "Material-UI" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    ],
    Backend: [
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiGitlab />, name: "GitLab CI / CD" },
    ],
    Tools: [
      { icon: <SiGit />, name: "Git" },
      { icon: <VscVscode />, name: "VS Code" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiJira />, name: "Jira" },
    ],
  };

  const TreeBranch = ({ label, techs }: { label: string; techs: any[] }) => (
    <div className="flex flex-col items-center w-full max-w-sm relative">
      <h3 className="text-xl font-bold mb-4 text-sky-700 dark:text-cyan-400">
        {label}
      </h3>

      <div className="relative flex flex-col items-center h-13 w-1 bg-slate-400 dark:bg-slate-600 overflow-hidden">
        <motion.div
          animate={{ top: ["0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500 left-1/2 -translate-x-1/2"
        />
      </div>
      <div className="w-4 h-4 rounded-full bg-cyan-500 my-2"></div>

      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between w-full gap-4 mt-2">
        {techs.map((tech, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <div className="relative w-1 h-12 bg-slate-400 dark:bg-slate-600 overflow-hidden mb-1">
              <motion.div
                animate={{ top: ["0%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                  delay: 3,
                }}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500 left-1/2 -translate-x-1/2"
              />
            </div>

            {/* Desktop View with Tooltip */}
            <Tooltip title={tech.name} arrow className="hidden md:block">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="text-4xl cursor-pointer text-sky-700 dark:text-cyan-400 hidden md:block"
              >
                {tech.icon}
              </motion.div>
            </Tooltip>

            {/* Mobile View without Tooltip */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="text-4xl cursor-pointer text-sky-700 dark:text-cyan-400 md:hidden"
            >
              {tech.icon}
            </motion.div>
            <div className="text-center mt-1 text-sm font-medium md:hidden">
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full min-h-screen py-22 px-4 bg-gradient-to-b from-cyan-300/30 to-sky-500/20 dark:from-slate-900/70 dark:to-slate-950/70 text-slate-900 dark:text-slate-100 font-poppins">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-slate-500 dark:text-sky-200">
          SkillSet
        </h2>
        <div className="flex flex-col items-center space-y-24 w-full">
          <TreeBranch label="Frontend" techs={techStacks.Frontend} />
          <div className="flex flex-col md:flex-row justify-around w-full gap-10">
            <TreeBranch label="Backend" techs={techStacks.Backend} />
            <TreeBranch label="Dev Tools" techs={techStacks.Tools} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSet;

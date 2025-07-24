import React from "react";
import { motion } from "framer-motion";
import { Code, Laptop, Rocket, BookOpen } from "lucide-react";
import OfficeProfile from "../../assets/workingImg1.jpg";
import OfficeProfile2 from "../../assets/workingImg2.png";
const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-24 
          bg-[url('/assets/light-bg.jpg')] dark:bg-[url('/assets/dark-bg.jpg')] 
          bg-cover bg-center bg-no-repeat text-slate-900 dark:text-slate-100 font-poppins"
    >
      <motion.div
        className="flex justify-center items-center max-w-[300px] md:max-w-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Light Mode Image */}
        <img
          src={OfficeProfile}
          alt="Lithin Light Mode"
          className="w-full md:w-80 rounded-2xl border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300 object-cover block dark:hidden"
        />

        {/* Dark Mode Image */}
        <img
          src={OfficeProfile2}
          alt="Lithin Dark Mode"
          className="w-full md:w-80 rounded-2xl border-2 border-neutral shadow-xl hover:scale-105 transition-transform duration-300 object-cover hidden dark:block"
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        className="space-y-6 max-w-2xl text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-extrabold text-teal-600 dark:text-cyan-400">
          About Me 🚀
        </h2>
        <p className="text-lg leading-8 text-slate-800 dark:text-slate-200 px-4 md:px-0">
          I am{" "}
          <span className="font-bold text-slate-900 dark:text-slate-100">
            Lithin Majji
          </span>
          , a dedicated{" "}
          <span className="text-teal-600 font-semibold">
            MERN Stack Developer
          </span>{" "}
          passionate about building modern web applications that are fast,
          responsive, and professionally designed.
        </p>

        <div className="space-y-4 px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Code className="w-7 h-7 text-teal-600 dark:text-cyan-400" />
            <span className="font-medium">
              Frontend: React, JavaScript, Redux Toolkit, TailwindCSS,
              Material-UI
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Laptop className="w-7 h-7 text-teal-600 dark:text-cyan-400" />
            <span className="font-medium">
              Backend: Node.js, Express.js, MongoDB, REST APIs, CI/CD Pipelines
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Rocket className="w-7 h-7 text-teal-600 dark:text-cyan-400" />
            <span className="font-medium">
              Goals: Build scalable products with a futuristic UI experience
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <BookOpen className="w-7 h-7 text-teal-600 dark:text-cyan-400" />
            <span className="font-medium">
              Interests: Open Source, Problem Solving, Tech Communities
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

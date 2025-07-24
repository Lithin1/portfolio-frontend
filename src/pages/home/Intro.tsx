import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
//import BgImageWeb from "../../assets/lithin_portfolio_img.jpg";
import BgImageWeb from "../../assets/Lithin6.jpg";
import BgImageMobile from "../../assets/Lithin9.jpg";

const Intro: React.FC = () => {
  return (
    <section
      id="intro"
      className="relative w-full h-screen flex items-center justify-center text-slate-900 dark:text-slate-100 font-poppins"
    >
      {/* Background Image for Desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: `url(${BgImageWeb})`,
          backgroundPosition: "center 44%",
          opacity: 0.7,
        }}
      ></div>

      {/* Background Image for Mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat block md:hidden"
        style={{
          backgroundImage: `url(${BgImageMobile})`,
          backgroundPosition: "center 45%",
          opacity: 0.7,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/70 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/80"></div>

      <motion.div
        className="relative z-10 text-center md:text-right space-y-6 p-6 flex flex-col justify-center md:justify-center items-center md:items-end w-full h-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text drop-shadow-md md:mt-90">
          Hi, I’m Lithin
        </h1>

        <h2 className="text-xl md:text-3xl font-bold text-slate-700 dark:text-slate-200">
          <Typewriter
            words={[
              "MERN Stack Developer 💻",
              "UI Enthusiast 🎨",
              "Backend Developer 🛠️",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </motion.div>
    </section>
  );
};

export default Intro;

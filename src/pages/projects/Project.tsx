import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "@/redux/slice/projectSlice";
import type { AppDispatch, RootState } from "@/redux/store";
import type { IProject } from "@/interfaces/projectInterface";

// Skeleton Loader
const SkeletonCard = () => (
  <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 animate-pulse h-[480px]">
    <div className="h-48 md:h-56 lg:h-60 bg-slate-300 dark:bg-slate-700 rounded-xl" />
    <div className="h-6 bg-slate-300 dark:bg-slate-700 rounded w-3/4" />
    <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-full" />
    <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-5/6" />
    <div className="flex gap-2 mt-2">
      {[...Array(3)].map((_, idx) => (
        <div
          key={idx}
          className="h-5 w-16 bg-slate-300 dark:bg-slate-700 rounded-full"
        />
      ))}
    </div>
    <div className="flex gap-3 mt-auto">
      <div className="flex-1 h-10 bg-slate-300 dark:bg-slate-700 rounded-xl" />
      <div className="flex-1 h-10 bg-slate-300 dark:bg-slate-700 rounded-xl" />
    </div>
  </div>
);

// Project Card
const ProjectCard: React.FC<{ project: IProject }> = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 transition-all duration-300 h-full"
  >
    <div className="relative rounded-xl overflow-hidden h-48 md:h-56 lg:h-60 mb-3">
      <img
        src={project.images[0]}
        alt="project-img"
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-lg md:text-2xl font-bold text-slate-800 dark:text-slate-100">
      {project.title}
    </h3>
    <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base line-clamp-3">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 text-xs mt-1">
      {project.techStack.map((tech, idx) => (
        <span
          key={idx}
          className="px-2 py-1 rounded-full border border-cyan-700 text-cyan-700 dark:border-cyan-400 dark:text-cyan-400"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-3 mt-auto text-sm">
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 px-3 py-2 rounded-xl font-medium transition"
        >
          <Github size={16} /> Source Code
        </a>
      )}
      {project.liveDemoLink && (
        <a
          href={project.liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-sky-500 text-white hover:brightness-110 px-3 py-2 rounded-xl font-medium transition"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      )}
    </div>
  </motion.div>
);

// Main Project Component
const Project: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { projects, loading, error } = useSelector(
    (state: RootState) => state.project
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const slidesToShow = 3;
  const totalSlides = Math.ceil((projects?.length || 0) / slidesToShow);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    beforeChange: (_: any, next: number) => setCurrentSlide(next),
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <section className="w-full min-h-screen py-22 px-4 bg-gradient-to-b from-cyan-300/20 to-sky-500/10 dark:from-slate-900/60 dark:to-slate-950/60 text-slate-900 dark:text-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <h2 className="text-2xl font-extrabold text-center text-slate-700 dark:text-cyan-400">
          Featured Projects
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <Slider ref={sliderRef} {...settings} className="w-full px-2">
          {loading
            ? [...Array(3)].map((_, idx) => (
                <div key={idx} className="p-4 h-full">
                  <SkeletonCard />
                </div>
              ))
            : projects?.map((project, idx) => (
                <div key={idx} className="p-4 h-full">
                  <ProjectCard project={project} />
                </div>
              ))}
        </Slider>

        {!loading && projects?.length > 0 && (
          <div className="flex justify-center">
            {[...Array(totalSlides)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => sliderRef.current?.slickGoTo(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "w-12 bg-cyan-500 dark:bg-cyan-400 cursor-pointer"
                    : "w-8 bg-slate-400 dark:bg-slate-600 cursor-pointer"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences } from "../../redux/slice/experienceSlice";
import { fetchEducation } from "../../redux/slice/educationSlice";
import type { RootState, AppDispatch } from "../../redux/store";

// Optional: simple skeleton
const SkeletonCard = () => (
  <div className="mb-10 ml-6 relative min-h-[180px] animate-pulse">
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 absolute -left-[44px]"></div>
    <div className="bg-slate-200 dark:bg-slate-700 p-6 rounded-lg shadow-md w-full h-[150px]"></div>
  </div>
);

const tabs = [
  { key: "experience", label: "Experience", icon: Briefcase },
  { key: "education", label: "Education", icon: GraduationCap },
] as const;

const Experience: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { experiences, loading: experienceLoading } = useSelector(
    (state: RootState) => state.experience
  );
  const { educations, loading: educationLoading } = useSelector(
    (state: RootState) => state.education
  );

  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience"
  );

  useEffect(() => {
    dispatch(fetchExperiences());
    dispatch(fetchEducation());
  }, [dispatch]);

  const isLoading =
    activeTab === "experience" ? experienceLoading : educationLoading;

  return (
    <section
      id="experience"
      className="w-full min-h-screen py-24 px-6 bg-gradient-to-b from-cyan-300/30 to-sky-500/20 dark:from-slate-900/70 dark:to-slate-950/70 text-slate-900 dark:text-slate-100 font-poppins"
    >
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="relative w-fit mx-auto mb-12">
          <div className="flex gap-6 border-b-2 border-slate-300 dark:border-slate-700 pb-2">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative px-4 pb-1 transition-all font-semibold text-lg ${
                  activeTab === key
                    ? "text-teal-600 dark:text-cyan-400"
                    : "text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-cyan-400"
                }`}
              >
                <Icon className="inline mr-2 w-5 h-5" />
                {label}
                {activeTab === key && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Data Rendering */}
        <div className="relative border-l-4 border-teal-400 dark:border-cyan-400 ml-6">
          {isLoading
            ? // Loading skeleton
              Array.from({ length: 3 }).map((_, idx) => (
                <SkeletonCard key={idx} />
              ))
            : activeTab === "experience"
            ? experiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="mb-10 ml-6 relative min-h-[180px]"
                >
                  <span className="absolute w-8 h-8 flex items-center justify-center rounded-full -left-[44px] bg-gradient-to-br from-teal-400 to-cyan-500 shadow-lg z-10">
                    <Briefcase className="w-5 h-5 text-white" />
                  </span>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-4 mb-3">
                      <img
                        src={item.logo}
                        alt="company-logo"
                        className="w-12 h-12 object-contain rounded-lg shadow"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-teal-600 dark:text-cyan-400">
                          {item.company}
                        </h3>
                        <p className="font-medium text-slate-700 dark:text-slate-300">
                          {item.designation} - {item.role}
                        </p>
                      </div>
                    </div>
                    <p className="italic text-sm mb-2 text-slate-700 dark:text-slate-300">
                      {item.location}
                    </p>
                    <p className="mb-3 text-slate-800 dark:text-slate-200">
                      {item.description}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-1">
                      {item.startDate} - {item.endDate}
                    </p>
                  </div>
                </motion.div>
              ))
            : educations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="mb-10 ml-6 relative min-h-[180px]"
                >
                  <span className="absolute w-8 h-8 flex items-center justify-center rounded-full -left-[44px] bg-gradient-to-br from-sky-400 to-cyan-500 shadow-lg z-10">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </span>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-4 mb-3">
                      <img
                        src={item.logo}
                        alt="institute-logo"
                        className="w-12 h-12 object-contain rounded-lg shadow"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-teal-600 dark:text-cyan-400">
                          {item.institute}
                        </h3>
                        <p className="font-medium text-slate-700 dark:text-slate-300">
                          {item.degree} - {item.specialization}
                        </p>
                      </div>
                    </div>
                    <p className="text-md mb-2 text-slate-700 dark:text-slate-300">
                      {item.board}
                    </p>
                    <p className="italic text-sm mb-2 text-slate-700 dark:text-slate-300">
                      {item.location}
                    </p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {item.duration}
                    </p>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { BadgeCheck, Award, Star } from "lucide-react";
import type { AppDispatch, RootState } from "../../redux/store";
import { fetchAchievements } from "../../redux/slice/achievementSlice";

const iconMap: Record<string, React.ReactNode> = {
  Certification: (
    <BadgeCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
  ),
  Award: <Award className="w-6 h-6 text-amber-500 dark:text-yellow-400" />,
  Recognition: <Star className="w-6 h-6 text-pink-500 dark:text-pink-400" />,
};

const Achievement: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { achievements, loading, error } = useSelector(
    (state: RootState) => state.achievement
  );

  useEffect(() => {
    dispatch(fetchAchievements());
  }, [dispatch]);

  return (
    <section
      id="achievements"
      className="w-full min-h-screen py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-sky-100/40 to-cyan-200/20 dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 font-poppins"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-sky-500 to-cyan-500 dark:from-cyan-400 dark:to-purple-500 text-transparent bg-clip-text">
          Achievements
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Skeleton Loading... */}
          {loading ? (
            [...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow animate-pulse flex flex-col justify-between min-h-[210px]"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-16 h-16 bg-slate-300 dark:bg-slate-700 rounded-xl" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-3/4" />
                    <div className="h-3 bg-slate-300 dark:bg-slate-700 rounded w-1/2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-slate-300 dark:bg-slate-700 rounded" />
                  <div className="h-3 bg-slate-300 dark:bg-slate-700 rounded w-5/6" />
                  <div className="h-3 bg-slate-300 dark:bg-slate-700 rounded w-2/3" />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="h-3 w-20 bg-slate-300 dark:bg-slate-700 rounded" />
                  <div className="h-3 w-24 bg-slate-300 dark:bg-slate-700 rounded" />
                </div>
              </div>
            ))
          ) : error ? (
            <p className="text-center col-span-full text-red-500">{error}</p>
          ) : (
            achievements.map((achievement: any, index: any) => (
              <motion.a
                key={index}
                href={achievement.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[210px]"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={achievement.imageUrl}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      {iconMap[achievement.category]}{" "}
                      <span className="capitalize text-slate-700 dark:text-slate-300">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-1 line-clamp-3">
                  {achievement.description}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    {new Date(achievement.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </span>
                  {achievement.link && (
                    <span className="text-xs text-cyan-600 dark:text-cyan-400 group-hover:underline">
                      View Certificate
                    </span>
                  )}
                </div>
              </motion.a>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievement;

/* eslint-disable no-unused-vars */
import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "framer-motion";

const Steps = () => {
  return (
    <motion.section
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      
      className="flex flex-col items-center justify-center my-32 px-4"
      role="region"
      aria-label="Steps to get started"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-center">
        How it Works
      </h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-xl">
        Shape imagination into eye-catching visuals
      </p>

      <div className="space-y-5 w-full max-w-3xl text-sm">
        {stepsData.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-5 px-8 bg-white/20 backdrop-blur-md shadow-lg border border-gray-200 hover:shadow-xl cursor-pointer hover:scale-[1.02] transition-transform duration-300 rounded-xl"
          >
            <img
              width={40}
              height={40}
              src={item.icon}
              alt={item.title || `Step ${idx + 1}`}
              className="flex-shrink-0"
            />
            <div>
              <h2 className="text-xl font-medium mb-1">{item.title}</h2>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Steps;

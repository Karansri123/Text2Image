/* eslint-disable no-unused-vars */
import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import {motion} from 'framer-motion'

const Testimonials = () => {
  
  return (
    <motion.div
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className="flex flex-col items-center justify-center my-20 p-12">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        They Tried It—They Loved It
      </h1>

      <p className="text-gray-500 mb-12">What Our Users Are Saying</p>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonialsData.map((testimonial, idx) => (
          <div 
            key={idx}
            className="bg-white/20 p-6 sm:p-8 rounded-lg shadow-md w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all flex flex-col min-h-[400px]"
          >
            <div className="flex flex-col items-center flex-grow">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-14 h-14 object-cover"
              />
              <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>
              <p className="text-gray-500 mb-4">{testimonial.role}</p>
              <div className="flex mb-4">
                {Array(testimonial.stars)
                  .fill(null)
                  .map((_, idx) => (
                    <img key={idx} src={assets.rating_star} alt="star" className="w-5 h-5" />
                  ))}
              </div>
              <p className="text-center text-sm text-gray-600 flex-grow">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
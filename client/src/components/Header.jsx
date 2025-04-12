import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-20">
      <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500">
        <p>Best AI Image Generator from Text Prompts</p>
        <img src={assets.star_icon} alt="Star Icon" />
      </div>

      <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
        Instant <span className="text-blue-600">Text-to-Image</span> Generation
      </h1>

      <p className="text-center max-w-xl mx-auto mt-5">
        Turn fleeting ideas into vivid Image with AI. Describe, generate, and be
        amazed—your imagination takes shape in seconds, no expertise needed!
      </p>

      <button className="sm:text-lg text-sm text-white bg-black mt-8 px-8 sm:px-12 py-2.5 flex items-center gap-2 rounded-full m-auto hover:scale-105 transition-all duration-500 ">
        Generate Images
        <img className="h-6" src={assets.star_group} alt="Star Group Icon" />
      </button>

      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6)
          .fill("")
          .map((_, idx) => (
            <img
              key={idx}
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10 w-[100px] h-[70px] object-cover"
              src={idx % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt={`Sample ${idx + 1}`}
              loading="lazy"
            />
          ))}
      </div>

      <p className="mt-2 text-neutral-600">Generated Image From Text2Image</p>
    </div>
  );
};

export default Header;

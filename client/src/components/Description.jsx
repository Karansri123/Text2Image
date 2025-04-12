import React from "react";
import { assets } from "../assets/assets";
const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Intelligent Design Visuals
      </h1>
      <p className="text-gray-500 mb-8">Turn your imagination into Visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 xl:w-96 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-110"
        />

        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Transform Words into image with Our AI Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Transform your ideas into stunning visuals effortlessly with our
            free AI image generator. Just describe your concept in text, and let
            our tool instantly create unique, eye-catching images—no design
            skills needed!
          </p>
          <p className="text-gray-600">
            Generate high-quality AI images instantly with just a text prompt.
            Perfect for designers, marketers, and creators, our advanced AI
            transforms your ideas into photorealistic artwork, concept designs,
            and more—effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [input, setInput] = useState('');

  const onSubmitHandler = async (e) => {

  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col min-h-[90vh] justify-center items-center px-4">
      <div className="text-center">
        <div className="relative">
          <img
            src={image}
            alt="Generated content"
            className="max-w-sm w-full rounded shadow-md transition-opacity duration-500"
          />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              fetching ? 'w-full transition-all duration-[10s]' : 'w-0'
            }`}
          />
        </div>
        <p className={`mt-2 text-sm font-medium text-gray-600 transition-opacity duration-300 ${!fetching ? 'opacity-0' : 'opacity-100'}`}>
          Fetching...
        </p>
      </div>

      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-1 mt-10 rounded-full shadow-lg overflow-hidden">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Define the content you'd like me to produce"
            className="flex-1 bg-transparent outline-none ml-6 max-sm:w-20 placeholder-white text-white"
            aria-label="Content description input"
          />
          <button
            type="submit"
            disabled={fetching || !input.trim()}
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {fetching ? 'Generating...' : 'Generate'}
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex flex-wrap gap-3 justify-center text-white text-sm p-0.5 mt-10">
          <button
            type="button"
            onClick={() => setIsImageLoaded(false)}
            className="border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer hover:bg-zinc-100 transition-colors"
          >
            Generate Another
          </button>
          <a
            href={image}
            download
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer hover:bg-zinc-800 transition-colors"
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default Result;

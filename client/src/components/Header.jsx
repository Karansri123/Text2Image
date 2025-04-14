/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import {useNavigate} from 'react-router-dom'

const Header = () => {

  const { user, setShowLogin } = useContext(AppContext);

  const navigate = useNavigate()

  const onClickHandler = ()=>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center my-20"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Best AI Image Generator from Text Prompts</p>
        <img src={assets.star_icon} alt="Star Icon" />
      </motion.div>

      <motion.h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
        Instant{" "}
        <span className="text-blue-600">Text-to-Image</span> Generation
      </motion.h1>

      <motion.p
        className="text-center max-w-xl mx-auto mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Turn fleeting ideas into vivid Image with AI. Describe, generate, and be
        amazed—your imagination takes shape in seconds, no expertise needed!
      </motion.p>

      <motion.button
      onClick={onClickHandler}
        className="sm:text-lg text-sm text-white bg-black mt-8 px-8 sm:px-12 py-2.5 flex items-center gap-2 rounded-full m-auto"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
      >
        Generate Images
        <img className="h-6" src={assets.star_group} alt="Star Group Icon" />
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-wrap justify-center mt-16 gap-3"
      >
        {Array(6)
          .fill("")
          .map((_, idx) => (
            <motion.img
              whileHover={{ scale: 1.05, duration: 0.1 }}
              key={idx}
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10 w-[100px] h-[70px] object-cover"
              src={idx % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt={`Sample ${idx + 1}`}
              loading="lazy"
            />
          ))}
      </motion.div>

      <motion.p
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-2 text-neutral-600"
      >
        Generated Image From Text2Image
      </motion.p>
    </motion.div>
  );
};

export default Header;

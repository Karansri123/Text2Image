/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import {motion} from 'framer-motion'

const BuyCredit = () => {

  const { user } = useContext(AppContext)

  return (
    <motion.section
    initial={{ opacity: 0.2, x: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className='min-h-[80vh] text-center pt-14 mb-10 px-4'>
      <button 
        className='border border-gray-400 px-10 py-2 rounded-full mb-6 text-sm hover:bg-gray-100 transition-colors duration-300 '
        aria-label='View our available plans'
      >
        Our Plans
      </button>

      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>
      Choose the plan that's right for you
      </h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, idx) => (
          <div 
            key={idx} 
            className='bg-white drop-shadow-sm border border-gray-200 rounded-xl py-12 px-8 text-gray-600 hover:scale-105 transition-transform duration-500 max-w-xs w-full'
            aria-label={`Plan ${item.id}`}
          >
            <img 
              width={40} 
              src='/favicon.png' 
              alt="Plan Icon" 
              className='w-10 h-10 mb-2' 
            />
            <p className='mt-3 mb-1 font-semibold text-lg'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-medium text-gray-900'>₹{item.price}</span> 
              <span className='text-sm text-gray-500'> / {item.credits} credits</span>
            </p>
            <button 
              className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52 hover:bg-gray-700 transition-colors duration-300'
              aria-label={user ? 'Purchase plan' : 'Get started with plan'}
            >
              {user ? 'Purchase' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default BuyCredit

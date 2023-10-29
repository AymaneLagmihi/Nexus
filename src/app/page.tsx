"use client";

import Navbar from './Container/navbar'
import Image from 'next/image'
import { useState } from 'react';
import { motion } from "framer-motion";


export default function Home() {
  const [x, setX] = useState(Math.random() * 400);
  const [y, setY] = useState(Math.random() * 400);

  return (
    <div className='w-full'>
      <Navbar/>

      {/*//? background  */}

      <div className="absolute min-h-max w-full mx-auto ">
        <motion.div className='absolute -left-1/4 -top-16 -z-50 w-96 h-96 origin-top-left rotate-[-38.06deg] bg-gradient-to-b from-black rounded-full opacity-70 blur-[500px]'
          animate={{ x: x, y: y }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity
          }}
          onAnimationComplete={() => {
            setX(Math.random() * 400);
            setY(Math.random() * 400);
          }}
        />
        <div className='absolute bottom-0 right-0 -z-50 w-72 h-72 origin-top-left rotate-[-38.06deg] bg-gradient-to-b from-black rounded-full blur-[500px] opacity-70'/>
        <div className='absolute -bottom-50 left-0 -z-50 w-72 h-72 origin-top-left rotate-[-38.06deg] bg-gradient-to-b from-black rounded-full blur-[500px] opacity-70'/>
      </div>

      <div className='w-full mx-auto justify-center items-center flex flex-col mt-4'>
        <Image alt='startup' src="/Startup.png"
          width={415}
          height={312}
          quality={100} className=''/>
          
        <h1 className='text-black text-4xl font-extrabold my-4'>A habit tracker for celebrating daily goals</h1>
        <p className='text-black text-opacity-60 text-xl font-medium'>Efficiency is the bridge that turns tasks into accomplishments.</p>
        
        <Image alt='Mockup' src="/Mockup.png" 
          width={1178}
          height={829}
          quality={100}
        />
      </div>

    </div>
  )
}

"use client";
import React, { useEffect } from "react";
import Navbar from './components/navbar'
import Image from 'next/image'
import { useState } from 'react';
import { motion } from "framer-motion";


export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [Tasks, setTasks] = useState<
      {
        id: string;
        name: string;
        description: string;
        date: string;
        completed: boolean;
      }[]
  >([]);

  useEffect(() => {
    setIsLoading(true);
    fetchTasks();
  
    console.log("We have fetched the tasks in the backend, and now here they are:", Tasks);
  }, []);

  const fetchTasks = async () => {
    return await fetch("/api/tasks", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setIsLoading(false);
      });
   };

  return (
    <div className='relative min-h-screen w-full max-w-full h-auto mx-auto'>
      <Navbar/>

      {/*//? background  */}
      <div className="fixed min-h-screen h-auto w-full mx-auto -z-50 overflow-hidden max-w-full top-0 left-0 right-0 bottom-0">
        <motion.div
          className='absolute w-1/6 h-1/4 rounded-full bg-green-500 -top-32 -left-32 opacity-35 filter blur-[150px]'
          animate={{ x: [0, 90, 50, -30, 10, 100, 200], y: [10, 400, 200, 50, 0, 40]}}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
          initial={{ x: 0, y: 0 }}
        />
        <motion.div
          className='absolute w-1/6 h-1/6 rounded-full bg-teal-500 top-1/2 -right-12 transform -translate-y-1/2 opacity-1 filter blur-[150px]'
          animate={{ x: [0, 90, 50, -30, 10, 100, 200], y: [-10, -400, -200, -50, 0, -40]}}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
          initial={{ x: 0, y: 0 }}
        />
        <motion.div
          className='absolute w-1/4 h-1/4 rounded-full bg-emerald-500 -bottom-32 left-1/2 transform opacity-1 filter blur-[125px]'
          animate={{ x: [0, 90, 50, -30, 10, 100, 200], y: [-10, -400, -200, -50, -0, -40]}}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
          initial={{ x: 0, y: 0 }}
        />
      </div>

      <div className='w-full mx-auto justify-center items-center flex flex-col mt-4'>
        <Image alt='startup' src="/Startup.png"
          width={415}
          height={312}
          quality={100} className=''/>
          
        <h1 className='text-4xl font-extrabold my-4 text-slate-900 dark:text-slate-900'>A habit tracker for celebrating daily goals</h1>
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

"use client";

import Image from 'next/image'
import {Input} from "@nextui-org/react";
import {MailIcon} from './MailIcon';
import { motion } from "framer-motion";



const Signin = () => {  
    return (
        <>
            <div className="flex">

                <div className="relative bg-black flex-col w-[60%] h-screen">
                    

                    <div className="absolute min-h-screen h-auto w-full mx-auto overflow-hidden max-w-full top-0 left-0 right-0 bottom-0">
                        <motion.div
                            className='absolute w-96 h-96 rounded-full bg-green-500 -top-32 -left-32 opacity-40 filter blur-[300px]'
                            animate={{ x: [0, 40, 90, -30, 0, 120, 300], y: [50, 20, 400, 10, -30, 200]}}
                            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                            initial={{ x: 0, y: 0 }}
                        />
                        <motion.div
                            className='absolute w-96 h-96 rounded-full bg-gradient-to-b from-white to-black top-1/2 -right-12 transform -translate-y-1/2 opacity-60 filter blur-[300px]'
                            animate={{ x: [0, 90, 50, 90, -10, -100, 200], y: [-10, -400, -200, -50, 0, -40]}}
                            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                            initial={{ x: 0, y: 0 }}
                        />
                        
                    </div>

                    <div className="pt-80 px-20 space-y-6 z-50">
                        <Image alt='logo' src="/logo-w.png"
                            width={166}
                            height={62}
                            quality={100}
                            />
                        <p className='text-white text-2xl font-light tracking-wider'>Efficiency is the bridge that turns tasks into accomplishments.</p>
                            
                            <div className="w-60 h-50 px-1 py-2 bg-emerald-500 rounded-full justify-center items-center flex">
                            <div className="text-white text-xl font-normal">Read More</div>
                        </div>
                    </div>
                </div>

                <div className='w-[40%] bg-white flex flex-col items-center justify-center'>
                    <div className="flex flex-col space-y-9">
                        <div className="">
                            <h1 className='text-zinc-800 text-3xl font-bold'>Hello Again!</h1>
                            <p className='text-zinc-800 text-xl font-normal'>Welcome Back</p>
                        </div>

                        <Input type="email" label="Email" labelPlacement='outside' variant="bordered" radius='full' className='w-[307px] h-9'/>
                        <Input type="password" label="Password" labelPlacement='outside' variant="bordered" radius='full' className='w-[307px]'/>
                        <button className="w-[307px] h-[57px] px-[26px] py-[18px] bg-emerald-500 rounded-full justify-center items-center inline-flex">
                            <div className="text-white text-l font-normal">Login</div>
                        </button>

                    </div>

                </div>
            </div>
        </>
    )
    }

export default Signin;
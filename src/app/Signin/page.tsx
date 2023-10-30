"use client";

import Image from 'next/image'
import {extendVariants, Input} from "@nextui-org/react";
import {MailIcon} from './MailIcon';
import { motion } from "framer-motion";
import {Button} from "@nextui-org/react";



const Signin = () => {  
    return (
        <>
            <div className="flex">

                {/*//* Right Side */}

                <div className="relative bg-black flex-col w-[60%] h-screen">
                    

                    <div className="absolute min-h-screen h-auto w-full mx-auto overflow-hidden max-w-full top-0 left-0 right-0 bottom-0">
                        <motion.div
                            className='absolute w-[894.09px] h-[894.09px] rounded-full bg-green-500 -top-32 -left-32 opacity-20 filter blur-[300px]'
                            animate={{ x: [0, 40, 90, -30, 0, 120, 300], y: [50, 20, 400, 10, -30, 200]}}
                            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                            initial={{ x: 0, y: 0 }}
                        />
                        <motion.div
                            className='absolute w-[894.09px] h-[894.09px] rounded-full bg-gradient-to-b from-white to-black top-1/2 -right-12 transform -translate-y-1/2 opacity-20 filter blur-[300px]'
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
                        
                        <Button radius="full" className="px-10 bg-emerald-500 justify-center items-center flex text-white text-xl font-normal">Read More</Button>
                        
                    </div>
                </div>

                {/*//* Left Side */}

                <div className='w-[40%] bg-white flex flex-col items-center justify-center'>
                    <div className="flex flex-col space-y-9">
                        <div className="">
                            <h1 className='text-zinc-800 text-3xl font-bold'>Hello Again!</h1>
                            <p className='text-zinc-800 text-xl font-normal'>Welcome Back</p>
                        </div>
                        <div className="space-y-9">
                            <Input type="email" label="Email" labelPlacement='outside' variant="bordered" radius='full' size="lg"  className='w-40'/>
                            <Input type="password" label="Password" labelPlacement='outside' variant="bordered" radius='full' size="lg" className=''/>

                            <div className="flex justify-center">
                                <Button radius="full" className="w-60 h-50 px-1 py-2 bg-emerald-500 text-white text-xl font-normal">Login</Button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
    }

export default Signin;
"use client";

import Image from 'next/image'
import Link from 'next/link'
import {Button} from "@nextui-org/react";

const links = [
  { href: "/Pricing", text:"Pricing"},
  { href: "/Signin", text:"Signin"},
]



const Navbar = () => {

  return (
    <>
      <nav className='relative mx-auto w-full items-center justify-between h-24 px-[125px] py-2 my-1 inline-flex'>
        <Image alt='nexus'
          src="/logo.png"
          width={102}
          height={38}
          quality={100}
          priority={true}
        />
        
        <div className='flex items-center justify-end gap-20 '>
          {links.map((link, index)=> (
            <Link
              key={index}
              href={link.href}
              className="text-black-400 font-medium tracking-wide"
            >
              {link.text}
            </Link>
          ))
          }
          <Link href="/Signin" >
            <Button radius="full" className='bg-black w-50 h-11 px-5 py-1.5 rounded-full justify-center items-center gap-2.5 inline-flex text-white font-medium tracking-wide'>
              Try for Free
            </Button>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
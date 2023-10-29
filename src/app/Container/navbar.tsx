"use client";

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const link = [
  { href: "/Pricing", text:"Pricing"},
  { href: "/Signin", text:"Signin"},
]

const Navbar = () => {
  const path = usePathname();
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
          {link.map((l)=> (
            <Link href={l.href} className={`${ l.href === path ? "text-gray font-medium tracking-wide":""

            }text-black-400 font-medium tracking-wide`}>
              {l.text}
            </Link>
          ))
          }
          <Link href="/Signin" className='w-50 h-11 px-5 py-1.5 bg-black rounded-full justify-center items-center gap-2.5 inline-flex'>
            <div className='text-white px-5 font-medium tracking-wide'>Try for Free</div>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
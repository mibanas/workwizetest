'use client'
import React, { useState } from 'react'
import Link from 'next/link';

import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import { navLinks } from '../constants/navLinks'

const MobileNave = () => {
    const [isOpen , setOpen] = useState<boolean>(true)

    const toggleMenu = () => {
        setOpen(!isOpen)
    }

    return (
        <>
        <div className='flex md:hidden' onClick={toggleMenu}>
            {isOpen ? <HiMenu color={'#000000'}/> : <IoMdClose color={'#000000'}/> }
            
        </div>
        <figure className={`absolute rounded-md right-2 origin-top top-20 
            ${!isOpen 
                ? "scale-y-100 opacity-100 visible"
                : "scale-y-50 opacity-0 hidden"
            }
            bg-[#173e5d] p-2 transition-all z-50`}>
            <nav className='w-full h-full flex flex-col space-y-2 capitalize font-normal '>
                {navLinks.map((link, index) => (
                    <Link
                        className='py-2 px-2 transition-all rounded-md text-white hover:bg-[#5285ad]'
                        onClick={toggleMenu}
                        key={index}
                        href={`/${link.toLowerCase()}`}
                    > {link} </Link>
                ))}
            </nav>
        </figure>
        </>
    )
}

export default MobileNave
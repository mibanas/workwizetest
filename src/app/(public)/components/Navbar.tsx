'use client'

import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import MobileNave from './MobileNave'

import { navLinks } from '../constants/navLinks'
import Link from 'next/link'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 0;
          if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header className={`fixed top-0 left-0 w-full z-30 ${scrolled ? 'bg-[#e0ddc7]' : 'bg-transparent'} transition-all`}>
            <div className='relative container py-6 flex  justify-between transition-all'>
                <Logo/>
                <nav className='hidden md:flex gap-8 font-medium'>
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={`/${link.toLowerCase()}`} 
                            className={link.toLowerCase() === 'login' ? 'text-[#22537b] font-extrabold hover:text-[#ffffff] hover:bg-[#173e5d] rounded px-3 py-1' : 'text-[#000000] hover:text-[#ffffff] hover:bg-[#173e5d] rounded px-3 py-1'}
                        > {link} </Link>
                    ))} 
                </nav>
                <MobileNave />
            </div>
        </header>
    )
    }

export default Navbar
"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = ({ bg }: { bg: 'bg-white' | 'bg-black' | 'bg-transparent' }) => {

    const [nav, setNav] = useState(false)
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    };


    return (
        <main>
            <div className={`${bg} absolute left-0 top-0 w-full z-10 `}>
                <div className=' max-w-[1040px] m-auto flex justify-start md:justify-between items-start px-4 md:py-6 text-white'>
                    <a href="/"><h5 className='hidden md:block text-3xl md:text-4xl text-white'>Tyfoon Consulting</h5></a>
                    <div>
                        <ul style={{ color: `${textColor}` }} className='hidden md:flex space-x-10'>
                            <li className=' p-4 '><a className='font-medium' href='/#job'
                            >Jobb </a></li>
                            <li className=' p-4 '><a className='font-medium' href='/about'
                            >Om oss </a></li>
                            <li className=' p-4 '><a className='font-medium' href='/services'
                            >Tjänster </a></li>
                            <li className=' p-4 '><a className='font-medium' href='/contact'>Kontakt</a></li>
                        </ul>
                    </div>
                    { /* Mobile Button */}
                    <div onClick={handleNav} className='block md:hidden z-10 mt-5'>
                        {nav ? <AiOutlineClose size={20} style={{ color: `${textColor}` }} /> : <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />}
                    </div>

                    { /* Mobile menu */}
                    <div className={nav ? 'md:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white' : 'md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white'}
                    >
                        <h1 className=' absolute top-20 text-5xl'>
                            <a href='/'>Tyfoon </a>
                        </h1>
                        <ul>
                            <li className='p-4 text-4xl hover:text-gray-500'><a href='/#jobs'>Jobb </a></li>
                            <li className='p-4 text-4xl hover:text-gray-500'><a href='/about'>Om oss </a></li>
                            <li className='p-4 text-4xl hover:text-gray-500'><a href='/services'>Tjänster </a></li>
                            <li className='p-4 text-4xl hover:text-gray-500'><a href='/contact'>Kontakt</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </main >
    )
}

export default Navbar
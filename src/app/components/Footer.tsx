import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiMail } from 'react-icons/hi'
import { TfiLinkedin, TfiLocationPin } from 'react-icons/tfi'




const Footer = () => {
    return (
        <div className='py-5 bg-[#b38c5997]'>
            <div className='max-w-[1040px] m-auto space-y-3 px-5 lg:px-0'>
                <div className='flex items-center'>
                    <a href="/#" ><h5 className='text-3xl sm:text-4xl py-2'>Tyfoon Consulting</h5></a>
                </div>
                <hr className=' h-1 rounded-lg bg-black/20'></hr>
                <div>
                    <h3 className='text-2xl font-normal'>Kontakt</h3>
                    <div className='flex flex-col sm:flex-row justify-between gap-4'>
                        <div className='flex flex-col items-start gap-2'>
                            <p className='text-sm '> Välj ämnen och håll dig uppdaterad med våra senaste projekt. </p>
                            <Link
                                className="mt-2 px-20 transition-colors duration-200 flex items-center h-12 hover:shadow-md hover:bg-transparent bg-orange-500 text-white font-bold   border-2 border-orange-500 hover:border-white"
                                href="https://career.tyfoon.se/connect"
                                passHref={true}>
                                Connect</Link>
                        </div>
                        <div className=' flex flex-col items-left justify-evenly space-y-5 md:space-y-0'>
                            <div className='flex space-x-2 '>
                                <TfiLocationPin className='text-black' size={25} />
                                <Link href='https://www.google.com/maps/place/V%C3%A4stra+Finnbodav%C3%A4gen+2,+131+30+Nacka/@59.3132311,18.1079994,17z/data=!3m1!4b1!4m6!3m5!1s0x465f780f41195cf9:0xc2b95ee910af080d!8m2!3d59.3132284!4d18.1105797!16s%2Fg%2F11bw3wvdm9' passHref={true}><p className='  hover:text-white hover:underline transition duration-300 ease-in-out  '>Västra Finnbodavägen 2, 131 30 Nacka</p>
                                </Link>
                            </div>
                            <div className='flex space-x-2'>
                                <Link href='https://www.google.com/maps/place/F%C3%A5gelbacksgatan+31,+217+44+Malm%C3%B6/@55.5961748,12.9801077,17z/data=!3m1!4b1!4m6!3m5!1s0x4653a6adb7e0ae0d:0xde13d8bcedbd87af!8m2!3d55.5961748!4d12.9801077!16s%2Fg%2F11c230fclv' passHref={true}><p className=' hover:text-white hover:underline transition duration-300 ease-in-out ml-9'>Fågelbacksgatan 31, 217 44 Malmö</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className=' h-1 rounded-lg bg-black/20'></hr>
                <div className='flex items-center justify-between'>
                    <p className='text-sm '>
                        Copyright © 2023 Tyfoon Consulting. All rights reserved.
                    </p>
                    <div className='gap-3 flex'>
                        <Link href='https://www.linkedin.com/company/tyfoon-consulting' passHref={true}><TfiLinkedin size={20} className='text-black/50  hover:text-white hover:underline transition duration-300 ease-in-out ' />
                        </Link>
                        <Link href='mailto:info@tyfoon.se' passHref={true}><HiMail size={23} className=' text-black/50 hover:text-white hover:underline transition duration-300 ease-in-out ' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../contact/ContactForm'
import { FaArrowUp } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export default function ServicePage() {


    return (
        <main>
            <div className="relative  w-full h-96 sm:h-[350px] lg:h-[60vh] " >
                <Image
                    className="object-cover top-0 "
                    alt="/"
                    fill
                    src="/service.jpg"
                    priority={true}
                ></Image>
                <Navbar bg="bg-transparent" />
                <div className=" bg-gradient-to-r  from-gray-900 to-transparent w-full h-full absolute">
                </div>
                <div className="max-w-[1040px] m-auto relative  h-full">
                    <div className="relative px-5  flex flex-col  py-5 sm:hidden h-full justify-center">
                        <h1 className=" text-white text-4xl text-left">
                            Våra tjänster
                        </h1>
                        <p className="text-left text-white font-light">
                            Vi ger våra kunder möjlighet att utnyttja den fulla potentialen i sin data.
                        </p>
                    </div>
                    <div className="hidden sm:flex flex-col justify-center h-full gap-3 w-1/2 ml-14">
                        <h1 className="font-bold text-4xl text-white">Våra tjänster</h1>
                        <p className="text-white">
                            Vi ger våra kunder möjlighet att utnyttja den fulla potentialen i sin data.</p>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-white  text-3xl font-sans">1. Samla</h2>
                            <h2 className="text-white  text-3xl font-sans">2. Besluta</h2>
                            <h2 className="text-white  text-3xl font-sans">3. Växa</h2>
                        </div>
                    </div>

                </div>
            </div>
            <div className="p-14 bg-[#b38c592e]">
                <div className=" max-w-[1040px]  m-auto gap-4 flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-center">
                        Tyfoon Consulting
                    </h2>
                    <p className=" text-center">
                        På Tyfoon är vi specialiserade på att skapa skräddarsydda lösningar som ger företag möjlighet att göra smarta beslut. Vår expertis inom BI & EDW gör det möjligt för oss att effektivisera datainsamlingen och omvandla den till användbara insikter. Lita på att vi levererar skräddarsydda lösningar som ökar er konkurrenskraft på marknaden och driver ert företag mot framgång.
                    </p>
                </div>
            </div>
            <div className='p-14 bg-[#b38c5938]'>
                <div className='max-w-[1040px]  m-auto flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-start'>
                        <h1 className='text-3xl' id="form" >
                            1. Samla
                        </h1>
                        <p>
                            Vi samlar er data.
                        </p>
                    </div>
                    <div className='flex items-center justify-start'>
                        <h1 className='text-3xl'>
                            2. Besluta
                        </h1>
                        <p>
                            Vi fattar beslut.
                        </p>
                    </div>
                    <div className='flex items-center justify-start'>
                        <h1 className='text-3xl'>
                            3. Växa
                        </h1>
                        <p>
                            Vi växer tillsammans.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main >

    )

}

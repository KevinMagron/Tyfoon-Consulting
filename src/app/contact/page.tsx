import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from './ContactForm'

const inter = Inter({ subsets: ['latin'] })

export default function ServicePage() {


    return (
        <main>
            <div className="relative  w-full h-96 sm:h-[350px] lg:h-[60vh] " >
                <Image
                    className="object-center object-cover top-0 "
                    alt="/"
                    fill
                    src="/hero.avif"
                    priority={true}
                ></Image>
                <Navbar bg="bg-transparent" />
                <div className="bg-gradient-to-r  from-gray-900 to-transparent w-full h-full absolute">
                </div>
                <div className="max-w-[1040px] m-auto relative  h-full">
                    <div className="relative px-5  flex flex-col  py-5 sm:hidden h-full justify-center">
                        <h1 className=" text-white text-4xl text-left">
                            Kontakta oss
                        </h1>
                        <p className="text-left text-white font-normal">
                            Vi ger våra kunder möjlighet att utnyttja den fulla potentialen i sin data.
                        </p>
                    </div>
                    <div className="hidden sm:flex flex-col justify-center h-full gap-3 w-1/2 ml-14">
                        <h1 className="font-bold text-4xl text-white">Kontakta oss</h1>
                        <p className="text-white">
                            Vi ger våra kunder möjlighet att utnyttja den fulla potentialen i sin data.</p>
                    </div>

                </div>
            </div>
            <div className='p-14 bg-[#b38c592e]' id="forms">
                <div className='max-w-[1040px]  m-auto items-center flex flex-col justify-center gap-7  '>
                    <h2 className=' text-3xl sm:text-4xl  md:text-5xl text-center '>Låt oss jobba tillsammans.</h2>
                    <p className=' text-center'>Vi är bara ett meddelande ifrån att diskutera hur vi kan hjälpa dig. Fyll i kontaktformuläret nedan för att berätta mer om hur vi kan hjälpa dig så återkommer vårt team omgående till dig. Vi ser fram emot att få kontakt med dig och utforska möjligheter till samarbete.</p>
                    <ContactForm /> 
                </div>
            </div>
            <Footer />
        </main >

    )

}


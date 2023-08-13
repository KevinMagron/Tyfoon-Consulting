import React from "react";
import { TfiLinkedin } from 'react-icons/tfi';
import { HiMail, } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';
import { FaArrowUp, FaArrowRight } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            <div className="relative  w-full h-96 md:min-h-[600px] lg:h-[60vh] " id="home">
                <Image
                    className="object-center object-cover top-0 "
                    alt="/"
                    fill
                    src="/original.jpg"
                    priority={true}
                ></Image>
                <Navbar bg="bg-transparent" />
                <div className=" bg-gradient-to-b from-black/60 to-black/40 w-full h-full absolute" />
                <div className="max-w-[1040px] m-auto relative  h-full">
                    <div className="relative px-5  flex flex-col  py-5 md:hidden h-full justify-center">
                        <h1 className=" text-orange-500 text-4xl text-left">
                            Tyfoon Consulting
                        </h1>
                        <p className="text-left text-white font-medium">
                            Vi ger våra kunder möjlighet att utnyttja den fulla potentialen i sin data.
                        </p>
                    </div>
                    <div className="hidden md:flex flex-col justify-center h-full gap-3 w-1/2 ml-14">
                        <h1 className="text-3xl lg:text-4xl text-white">Skräddarsydda lösningar för smarta affärsbeslut</h1>
                        <p className="text-white">
                            Vi ger våra kunder möjlighet att utnyttja den fulla potentialen i sin data.</p>
                        <a className="original p-12" href="/contact#forms">Boka konsulation</a>
                        <ul className="flex mt-3">
                            <li>
                                <h3 className="text-white  text-4xl ">100+</h3>
                                <p className="text-white text-sm w-1/2">Sammanlagda år av erfarenhet</p>
                            </li>
                            <li>
                                <h3 className="text-white  text-4xl ">10+</h3>
                                <p className="text-white text-sm w-1/2">Nuvarande samarbets- partners</p>
                            </li>
                            <li>
                                <h3 className="text-white  text-4xl ">20+</h3>
                                <p className="text-white text-sm w-1/2">Avslutade uppdrag</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="md:hidden bg-[#b38c592e] py-5">
                <div className="px-5 flex flex-col items-center gap-3">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center">Skräddarsydda lösningar för smarta affärsbeslut</h1>
                    <p className="text-center">
                        Lita på att vi levererar lösningar som ökar er konkurrenskraft på marknaden och driver ert företag mot framgång.</p>
                    <a className="original p-12" href="/contact#forms">Boka konsulation</a>
                    <ul className="flex">
                        <li>
                            <h3 className="  text-4xl ">100+</h3>
                            <p className=" text-sm w-1/2">Sammanlagda år av erfarenhet</p>
                        </li>
                        <li>
                            <h3 className="  text-4xl ">10+</h3>
                            <p className=" text-sm w-1/2">Nuvarande samarbets- partners</p>
                        </li>
                        <li>
                            <h3 className="  text-4xl ">20+</h3>
                            <p className=" text-sm w-1/2">Avslutade uppdrag</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="md:hidden bg-[#b38c592e] py-5">
                <div className="max-w-[1040px] m-auto flex flex-wrap mt-4 justify-center">
                    <Image
                        alt="/"
                        src="/axfood.png"
                        width={150}
                        height={150}
                        className="p-5  object-contain filter grayscale contrast-50"
                    />
                    <Image
                        alt="en ikon"
                        src="/ohb.png"
                        width={150}
                        height={150}
                        className="p-5  object-contain  filter grayscale contrast-100"
                    />
                    <Image
                        alt="en ikon"
                        src="/sj.jpg"
                        width={100}
                        height={100}
                        className="p-5 object-contain rounded-full filter grayscale contrast"
                    />
                    <Image alt="/"
                        src="/afa.png"
                        width={100}
                        height={100}
                        className="p-5  object-contain filter grayscale contrast-50"
                    />
                    <Image
                        alt="/"
                        src="/dustin-group.png"
                        width={150}
                        height={150}
                        className="p-5  object-contain filter grayscale contrast-50"
                    />
                    <Image
                        alt="en ikon"
                        src="/nacka.png"
                        width={150}
                        height={150}
                        className="p-5  object-contain filter grayscale contrast-50"
                    />
                </div>
            </div>
            <div className="hidden md:block bg-[#b38c592e] py-4">
                <div className="max-w-[1040px] m-auto rad mt-4">
                    <Image
                        alt="/"
                        src="/axfood.png"
                        width={150}
                        height={150}
                        className=" object-contain filter grayscale contrast-50"
                    />
                    <Image
                        alt="en ikon"
                        src="/ohb.png"
                        width={150}
                        height={150}
                        className=" object-contain  filter grayscale contrast-100"
                    />
                    <Image
                        alt="en ikon"
                        src="/sj.jpg"
                        width={100}
                        height={100}
                        className="object-contain rounded-full filter grayscale contrast"
                    />
                    <Image alt="/"
                        src="/afa.png"
                        width={100}
                        height={100}
                        className=" object-contain filter grayscale contrast-50"
                    />
                    <Image
                        alt="/"
                        src="/dustin-group.png"
                        width={150}
                        height={150}
                        className=" object-contain filter grayscale contrast-50"
                    />
                    <Image
                        alt="en ikon"
                        src="/nacka.png"
                        width={150}
                        height={150}
                        className=" object-contain filter grayscale contrast-50"
                    />
                </div>
            </div>
            <div className="py-10 bg-[#b38c5938]">
                <div className="flex flex-col items-center max-w-[1040px] m-auto gap-3 px-5 lg:px-0">
                    <p className="text-orange-500 text-md font-thin">TJÄNSTER</p>
                    <h2>Våra tjänster</h2>
                    <div className="flex flex-col md:flex-row gap-5 space-y-10 md:space-y-0 mt-7">
                        <div className="shadow-md flex flex-col  items-start justify-evenly px-12 py-7 bg-white">
                            <Image
                                alt="/"
                                src="/6481241.jpg"
                                width={220}
                                height={220}
                            ></Image>
                            <div>
                                <h4 className="text-orange-500">Samla</h4>
                                <p className="text-sm">Vi samlar och lagrar er data effektivt.</p>
                            </div>
                            <a className="flex  items-center hover:text-orange-500  transition duration-200 ease-in-out gap-2 text-gray-600" href="/services">
                                <p className="text-sm">Läs mer</p>
                                <BsArrowRight size={30} />
                            </a>
                        </div>
                        <div className="shadow-md flex flex-col items-start justify-evenly px-12 py-7 bg-white">
                            <Image
                                alt="/"
                                src="/20945587.jpg"
                                width={220}
                                height={220}
                            ></Image>
                            <div>
                                <h4 className="text-orange-500">Besluta</h4>
                                <p className="text-sm">Vi hjälper er att ta smarta affärsbeslut.</p>
                            </div>
                            <a className="flex  items-center hover:text-orange-500  transition duration-200 ease-in-out gap-2 text-gray-600" href="/services">
                                <p className="text-sm">Läs mer</p>
                                <BsArrowRight size={30} />
                            </a>
                        </div>
                        <div className="shadow-md flex flex-col items-start justify-evenly px-12 py-7 bg-white">
                            <Image
                                alt="/"
                                src="/rapport.webp"
                                width={220}
                                height={220}
                            ></Image>
                            <div>
                                <h4 className="text-orange-500">Växa </h4>
                                <p className="text-sm">Vi följer med er resa mot framgång.</p>
                            </div>
                            <a className="flex  items-center hover:text-orange-500  transition duration-200 ease-in-out gap-2 text-gray-600" href="/services">
                                <p className="text-sm">Läs mer</p>
                                <BsArrowRight size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-14 bg-[#b38c592e]">
                <div className="max-w-[1040px] m-auto flex flex-col lg:flex-row items-center lg:space-x-10 space-y-10 lg:space-y-0 px-5 lg:px-0 ">
                    <div className="flex flex-col items-center lg:items-start space-y-2 lg:w-1/2">
                        <p className="text-orange-500 text-md font-thin text-center ">OM OSS</p>
                        <h2 className="text-center ">
                            Erfarna konsulter
                        </h2>
                        <h6 className="font-extralight text-2xl text-center text-black" id="job">
                            Inom BI & EDW
                        </h6>
                        <p className="text-center lg:text-start">
                            På Tyfoon är vårt team av erfarna konsulter specialiserade på BI och EDW lösningar. Med omfattande erfarenhet av att leda och arbeta med stora datamängder och olika plattformar, medför våra konsulter en djup förståelse för branschledande verktyg.
                        </p>
                        <a className="flex  items-center hover:text-orange-500  transition duration-200 ease-in-out gap-2 text-gray-600" href="/services">
                            <p className="text-sm">Läs mer</p>
                            <BsArrowRight size={30} />
                        </a>
                        <hr className="p-"></hr>
                    </div>
                    <div className="lg:w-1/2">
                        <Image
                            alt="/"
                            src="/analys.jpg"
                            width={480}
                            height={150}
                            className="object-cover rounded-sm shadow-md"
                        />
                    </div>
                </div>
            </div>
            <div className="py-14 bg-[#b38c5938]" id="jobs">
                <div className="max-w-[1040px] m-auto flex flex-col-reverse lg:flex-row items-center lg:space-x-10 space-y-10 lg:space-y-0 px-5 lg:px-0">
                    <div className="lg:w-1/2">
                        <Image
                            alt="/"
                            src="/medarbetare-runt-tavla.jpg"
                            width={580}
                            height={250}
                            className="object-cover rounded-sm shadow-md"
                        ></Image>
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-3 lg:w-1/2">
                        <p className="text-orange-500 text-md font-thin  ">JOBBMÖJLIGHETER</p>
                        <h2 className=" ">Karriärmöjligheter</h2>
                        <p className="text-center lg:text-start ">
                            Upptäck karriäröppningar i avsnittet &quot;Tillgängliga jobb&quot;. Hittar du ingen match? Dela dina uppgifter genom &quot;Öppen ansökan&quot; för framtida övervägande.
                        </p>
                        <div className="flex mt-2 flex-col gap-3 items-center md:items-start">
                            <Link
                                className="px-11 original"
                                href="https://career.tyfoon.se/jobs"
                                passHref={true}
                            >   Tillgängliga Jobb</Link>
                            <Link
                                className="px-12 original"
                                href="https://career.tyfoon.se/jobs/1847119-oppen-ansokan-vi-letar-efter-dig"
                                passHref={true}>
                                Öppen Ansökan</Link>
                        </div>
                        <hr className="h-1 m-2" id="contact"></hr>
                    </div>
                </div>
            </div>
            <div className="py-10 bg-[#b38c592e]" id="contacts">
                <div className="flex flex-col items-center max-w-[1040px] m-auto gap-7  px-5 md:px-0">
                    <h2>Våra ledare</h2>
                    <hr className="rounded"></hr>
                    <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-6">
                        <div className="shadow-md">
                            <div className=" overflow-hidden rounded-t-md">
                                <Image
                                    alt="/"
                                    src="/love.jpg"
                                    className="hover:scale-110 transition-all"
                                    width={400}
                                    height={400}
                                ></Image>
                            </div>
                            <div className="bg-white flex flex-col items-center justify-evenly p-3">
                                <h4 className=" text-lg">Love Ekberg</h4>
                                <p className="text-center">Teamchef & Rekryteringsansvarig</p>
                                <div className="flex space-x-8 ">
                                    <Link href="tel:+46760103601" passHref={true}>
                                        <ImPhone size={23} className="text-black hover:text-orange-500 transition-all" />
                                    </Link>
                                    <Link
                                        href="https://www.linkedin.com/in/love-ekberg-6545871b4/"
                                        passHref={true}
                                    >
                                        <TfiLinkedin size={24} className="text-black hover:text-orange-500 transition-all" />
                                    </Link>
                                    <Link href="mailto:love@tyfoon.se" passHref={true}>
                                        <HiMail size={27} className="text-black hover:text-orange-500 transition-all" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md">
                            <div className="overflow-hidden  rounded-t-md">
                                <Image
                                    alt="/"
                                    src="/dennie.jpg"
                                    className="hover:scale-110 transition-all"
                                    width={400}
                                    height={400}
                                ></Image>
                            </div>
                            <div className="bg-white flex flex-col items-center justify-evenly p-3">
                                <h4 className=" text-lg">Dennie Roserell</h4>
                                <p>VD & Interimsledare</p>
                                <div className="flex space-x-8">
                                    <Link href="tel:+46763473600" passHref={true}>
                                        <ImPhone size={23} className="text-black hover:text-orange-500 transition-all" />
                                    </Link>
                                    <Link
                                        href="https://www.linkedin.com/in/dennieroserell/"
                                        passHref={true}
                                    >
                                        <TfiLinkedin size={24} className="text-black hover:text-orange-500 transition-all" />
                                    </Link>
                                    <Link href="mailto:dennie@tyfoon.se" passHref={true}>
                                        <HiMail size={27} className="text-black hover:text-orange-500 transition-all" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md ">
                            <div className=" overflow-hidden  rounded-t-md">
                                <Image
                                    alt="/"
                                    src="/sharbel.jpg"
                                    className="hover:scale-110 transition-all"
                                    width={400}
                                    height={400}
                                ></Image>
                            </div>
                            <div className="bg-white flex flex-col items-center p-3">
                                <h4 className=" text-lg">Sharbel Sarkis</h4>
                                <p className="text-center">Teamchef & Senior Scrum Master</p>
                                <div className="flex space-x-8">
                                    <Link href="tel:+46761801036" passHref={true}>
                                        <ImPhone size={23} className="text-black hover:text-orange-500 transition-all" />
                                    </Link>
                                    <Link
                                        href="https://www.linkedin.com/in/sharbel-sarkis-0484207/"
                                        passHref={true}
                                    >
                                        <TfiLinkedin size={24} className="text-black hover:text-orange-500 transition-all" />
                                    </Link>
                                    <Link href="mailto:sharbel@tyfoon.se" passHref={true}>
                                        <HiMail size={27} className="text-black hover:text-orange-500 transition-all" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <a href={"#home"}>
                            <FaArrowUp size={40} className="text-black hover:text-orange-500 transition-all" />
                        </a>
                    </div>
                </div>
            </div>

            <Footer />

        </main >
    );
}

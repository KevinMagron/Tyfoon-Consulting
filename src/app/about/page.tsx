import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../contact/ContactForm'

const inter = Inter({ subsets: ['latin'] })

export default function ServicePage() {


    return (
        <main>
            <div className="relative  w-full h-96 sm:h-[350px] lg:h-[60vh] " >
                <Image
                    className="object-center object-cover top-0 "
                    alt="/"
                    fill
                    src="/about.jpg"
                    priority={true}
                ></Image>
                <Navbar bg="bg-transparent" />
                <div className=" bg-gradient-to-r from-gray-800 to-transparent w-full h-full absolute">
                </div>
                <div className="max-w-[1040px] m-auto relative  h-full">
                    <div className="relative px-5  flex flex-col  py-5 sm:hidden h-full justify-center">
                        <h1 className=" text-white text-4xl text-left">
                            Om oss
                        </h1>
                        <p className="text-left text-white font-light">
                            Vi ger våra kunder möjlighet att utnyttja den fulla potentialen i sin data.
                        </p>
                    </div>
                    <div className="hidden sm:flex flex-col justify-center h-full gap-3 w-1/2 ml-14">
                        <h1 className="font-bold text-4xl text-white">Om oss </h1>
                        <p className="text-white">
                            Vi ger våra kunder möjlighet att utnyttja den fulla potentialen i sin data.
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-14 bg-[#b38c592e]">
                <div className=" max-w-[1040px]  m-auto gap-4 flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center">
                        Släpp lös innovation och expertis
                    </h2>
                    <p className='text-center'>
                        Välkommen till Tyfoon, ett dynamiskt och innovativt IT-konsultföretag. Trots vår ungdom har vi ett team av erfarna konsulter specialiserade på BI & EDW. Med vår passion för banbrytande teknologier och framtidstänkande lösningar tillför vi en spännande energi till branschen. På Tyfoon trivs vi med att utmana status quo och utnyttja vår expertis för att hjälpa företag att frigöra sin fulla potential. Följ med oss på denna spännande resa av digital transformation, där kreativitet, expertis och ett nytt perspektiv möts för att driva din framgång.</p>
                </div>
            </div>
            <div className="p-14 bg-[#b38c5938]">
                <div className=" max-w-[1040px]  m-auto gap-4 flex flex-col">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl ">
                        1. Senior
                    </h2>
                    <p className="">
                        Våra konsulter är erfarna experter som tillför en mängd erfarenhet till bordet. Med en stark bakgrund i branschen har de finslipat sina kunskaper och insikter genom åren, vilket gör dem till ovärderliga tillgångar för våra kunder. Deras expertis på seniornivå säkerställer att du får förstklassig vägledning och lösningar som är skräddarsydda för dina specifika behov. Lita på att våra erfarna konsulter levererar excellens och driver ditt företag framåt.
                    </p>
                </div>
            </div>
            <div className="p-14 bg-[#b38c592e]">
                <div className=" max-w-[1040px]  m-auto gap-4 flex flex-col ">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl ">
                        2. Ledarskap
                    </h2>
                    <p className=" ">
                        Våra konsulter är erfarna ledare med erfarenhet av att framgångsrikt leda projekt. De har haft ledande roller och besitter expertis för att styra team mot att uppnå projektmål. Med en mängd erfarenhet av att leda olika projekt ger de ovärderliga insikter och ett strategiskt förhållningssätt till varje engagemang. Lita på våra konsulters ledarskapserfarenhet för att säkerställa sömlöst projektutförande och driva transformativa resultat för ditt företag.
                    </p>
                </div>
            </div>
            <div className="p-14 bg-[#b38c5938]">
                <div className=" max-w-[1040px]  m-auto gap-4 flex flex-col ">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl ">
                        3. BI & EDW
                    </h2>
                    <p className=" ">
                        På Tyfoon är vårt team av erfarna konsulter specialiserade på Business Intelligence (BI) och Enterprise Data Warehouse (EDW) lösningar. Med omfattande erfarenhet av att leda och arbeta med stora datamängder och olika plattformar, medför våra konsulter en djup förståelse för branschledande verktyg.
                    </p>
                    <a className="original p-12 self-center mt-7" href="/services#forms">Boka konsulation</a>
                </div>
            </div>
            <Footer />
        </main >

    )

}

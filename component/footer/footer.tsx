import { useTheme } from 'next-themes';
import Image from 'next/image'
import React from 'react'

function Footer() {
    const { theme, setTheme } = useTheme();
    return (
        <footer className="bg-blue-500 dark:bg-black-50 border-3" >
            <div className="grid grid-cols-2 gap-10 p-10 lg:grid-cols-5">

                <div className="col-span-3 lg:col-span-2 grid-" >
                    <div className="text-center">
                    <Image src={theme === "light" ? '/logo-black.png' : '/logo-white.png'} alt="logo" width={250} height={70} />

                    </div>
                    <p className="mt-2 font-medium text-white">Belajar web development,machine learning ,mobile development dll bahasas indonesia</p>
                </div>
                <div className="col-span-1 text-center text-white lg:text-left" >
                    <span  className="pb-2 mb-4 text-xl border-solid lg:border-b-4 lg:w-1/4 dark:border-blue-500">INFORMASI</span>
                    <ul   className="mt-5"> 
                        <li>Tentang</li>
                        <li>FAQ</li>
                        <li>Ketentuan Layanan</li>
                        <li>Ketentuan Layanan</li>
                        <li>Team</li>
                    </ul>
                </div>
                <div className="col-span-1 text-center text-white lg:text-left" >
                    <span  className="pb-2 text-xl border-solid lg:border-b-4 lg:w-1/4 dark:border-blue-500">INFORMASI</span>
                    <ul className="mt-5" >
                        <li>Tentang</li>
                        <li>FAQ</li>
                        <li>Ketentuan Layanan</li>
                        <li>Ketentuan Layanan</li>
                        <li>Team</li>
                    </ul>
                </div>
                <div className="self-center col-span-2 text-center text-white xtext-center lg:col-span-1 lg:text-left" >
                    <span  className="pb-2 mb-4 text-xl border-solid lg:border-b-4 lg:w-1/4 dark:border-blue-500">INFORMASI</span>
                    <p  className="mt-5">Kritik, saran, dan tawaran kerja sama atau kolaborasi bisa dikirimkan ke alamat kontak dibawah</p>
                </div>
            </div>
            <div className="p-5 text-center text-white border-t-4 border-white border-solid">
                <p>
                © Nextcode.id {new Date().getFullYear()} • Hak Cipta Dilindungi

                </p>
                <p>Dibuat dengan ♥ di Bandung</p>
            </div>
          
        </footer>
    )
}
export default Footer

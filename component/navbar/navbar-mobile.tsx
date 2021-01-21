import { useTheme } from 'next-themes';
import React,{useRef,useEffect,useState} from 'react'
import styles from './../../styles/components/navbar/navbar.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image'
import DarkMode from './../dark-mode/Dark-Mode';
import NavbarModal from './NavbarModal';

function NavbarMobile() {
    const { theme, setTheme } = useTheme();

    const [active,seteActive] = useState(false)
    const router = useRouter()
    useEffect(() =>{
        window.addEventListener('scroll',changeBackground)

    },[])
  

    const changeBackground = () =>{
        if(window.scrollY >80) {
            seteActive(true)
        }else{
            seteActive(false)
        }
    }
    const homeRouter = router.pathname === '/'
 
   
    return (
    <nav className={`${styles.navbarMobile }  bg-white dark:bg-gray-900 ${!homeRouter ? 'bg-white dark:bg-gray-900' : ''} `} style={{top: active && !homeRouter ? '-100px' : ''}}>
            <Link href="/">
                <div className="flex items-center p-2 cursor-pointer">
                  <Image src={theme  === "light"   ? '/logo-black.png' : '/logo-white.png'} alt="logo" width={100} height={30} />

                </div>
            </Link>
          
            <div>
                <NavbarModal/>
            </div>

    </nav>
    )
}

export default NavbarMobile

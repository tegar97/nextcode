import { useTheme } from 'next-themes';
import React,{useRef,useEffect,useState} from 'react'
import styles from './../../styles/components/navbar/navbar.module.scss'
import gsap from 'gsap'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image'

function Navbar() {
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
    <nav className={`${styles.navbar } ${active && homeRouter ? 'bg-white dark:bg-gray-900' : ''} ${!homeRouter ? 'bg-white dark:bg-gray-900' : ''} `} style={{top: active && !homeRouter ? '-100px' : ''}}>
            <Link href="/">
                <div className="flex items-center p-2 cursor-pointer">
                  <Image src={theme  === "light"  || !active ? '/logo-black.png' : '/logo-white.png'} alt="logo" width={100} height={30} />

                </div>
            </Link>
            <ul style={{marginRight: active ? '65%' : '',transition: '.5s all'}} className={`flex flex-row   ${!active && homeRouter ? 'text-white dark:text-white' : 'text-black-50  dark:text-white  '}`} > 
                <Link href="/artikel"><li className="mr-3 text-sm cursor-pointer ">Artikel</li></Link>
                <Link href="/path"><li className="mr-3 text-sm cursor-pointer ">Kategori</li></Link>
                <Link href="/path"><li className="mr-3 text-sm cursor-pointer ">Tutorial Series</li></Link>
                <Link href="/path"><li className="mr-3 text-sm cursor-pointer ">Tentang</li></Link>
              
            </ul>
            <div>
                <button ><i className="mr-4 fas fa-search color-black-50 dark:color-white" style={{color: theme === 'light' ? '#000' : '#fff'}} ></i></button>
            </div>
    </nav>
    )
}

export default Navbar

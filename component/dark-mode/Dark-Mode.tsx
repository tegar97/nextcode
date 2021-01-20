import { useEffect, useState } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
import { useRouter } from 'next/router'

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [active,seteActive] = useState(false)
  const router = useRouter()

  const { theme, setTheme } = useTheme();
    useEffect(() => {
        setIsMounted(true);
        window.addEventListener('scroll',changeBackground)

    }, []);
    const switchTheme = () => {
        if (isMounted) {
          setTheme(theme === "light" ? "dark" : "light");
        }
    };


  const changeBackground = () =>{
      if(window.scrollY > 100) {
          seteActive(true)
      }else{
          seteActive(false)
      }
  }
  const homeRouter = router.pathname === '/'

return (

      <>
    
        <div   style={{transition : '1s all',bottom: active && !homeRouter ? '-5rem' : '1rem',position: 'fixed',right: '1rem',borderRadius: '100%',width: '3rem',height: '3rem'}} className="flex items-center justify-center text-center shadow-sm bg-black-50 dark:bg-white "  >
            <span className="cursor-pointer " onClick={switchTheme}><i className={`${theme === 'light' ? 'fas fa-sun' : 'fas fa-moon'} text-white dark:text-black-50 `} ></i></span>

        </div>
        
      
      </>
    

  );
}
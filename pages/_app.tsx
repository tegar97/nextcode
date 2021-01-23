import {useState,useEffect} from 'react'
import "tailwindcss/tailwind.css";

import '../styles/globals.scss'
import type { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider } from "next-themes";
import Footer from '../component/footer/footer';
import Navbar from '../component/navbar/navbar';
import { useMediaQuery } from 'react-responsive'
import dynamic from 'next/dynamic'
import DarkMode from './../component/dark-mode/Dark-Mode'
import ScrollAnimation from 'react-animate-on-scroll';

function MyApp({ Component, pageProps } : AppProps) {
  const dekstopUp = useMediaQuery({ query: '(min-width: 992px)' })
  const NavbarMobile = dynamic(() => import('../component/navbar/navbar-mobile'))

  return(
    <ThemeProvider attribute="class">
      {
        dekstopUp ?     <Navbar/> : <NavbarMobile/>

      }
    
        <Component {...pageProps} />
        <DarkMode/>

      <ScrollAnimation animateIn="fadeIn" >
        <Footer/>

      </ScrollAnimation>

    </ThemeProvider>
  )
}

export default MyApp

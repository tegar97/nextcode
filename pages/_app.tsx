import "tailwindcss/tailwind.css";
import '../styles/globals.scss'
import type { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider } from "next-themes";
import Footer from '../component/footer/footer';
import Navbar from '../component/navbar/navbar';

 
function MyApp({ Component, pageProps } : AppProps) {

  return(
    <ThemeProvider attribute="class">
      <Navbar/>
        <Component {...pageProps} />
      <Footer/>

    </ThemeProvider>
  )
}

export default MyApp

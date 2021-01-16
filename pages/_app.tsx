import '../styles/globals.scss'
import type { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps } : AppProps) {
  return(
    <ThemeProvider attribute="class">
     <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

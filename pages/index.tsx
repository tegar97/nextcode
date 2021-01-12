import Head from 'next/head'
import "tailwindcss/tailwind.css";
export default function Home() {
  return (
   <>
     <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1 className="text-sm">Hello World</h1>

   </>
  )
}

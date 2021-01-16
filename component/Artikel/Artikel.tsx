import React from 'react'
import ArtikelCard from '../artikel-card/Artikel-card'

const Artikel = () =>{
    return (
        <section className="p-20 mt-20 text-center">
            <h1 className="text-4xl">Artikel</h1>
            <div className="grid gap-10 mt-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
               <ArtikelCard/>
               <ArtikelCard/>
               <ArtikelCard/>
               <ArtikelCard/>
            </div>
        </section>
    )
}

export default Artikel
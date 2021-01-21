import React from 'react'
import ArtikelCard from '../artikel-card/Artikel-card'


const Artikel = ({posts}) =>{

 
    return (
        <section className="p-10 text-center mt-15 lg:p-20 sm:p-10">
            <h1 className="mb-5 text-4xl">Artikel</h1>
            <div className="grid gap-10 mt-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
             {
               posts.posts.map(post => (
                 <ArtikelCard post={post} />
               ))
             }
                  
             
            </div>
            

            <button className="mt-5 btn btn-text">Lihat Lebih Banyak</button>
        </section>
    )
}


export default Artikel
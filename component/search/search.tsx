import React,{useState} from 'react'

function Search({onSearch}) {
    const [search,setSearch] = useState('')
    const searchSpace = (event)=>{
        let keyword = event.target.value;
        this.setSearch({keyword})
      }
    
    
    return (
        
        <div className="flex justify-center">
            <input onChange={(e) => onSearch(e)}  className="mt-4 mb-3 text-white bg-gray-800 dark:text-black-50 dark:bg-white " style={{outline: 'none',width: '100%',padding: '1rem',borderRadius: '10px'}} placeholder="Mau Cari Materi Apa ?"/>
            <i className="absolute mt-8 text-xl text-white right-7 dark:text-black-50 fas fa-search"></i>
        </div>
    )
}

export default Search

import { useTheme } from 'next-themes';
import React from 'react'
import styles from './../../styles/components/navbar/navbar.module.scss'
function Navbar() {
    const { theme, setTheme } = useTheme();
    return (
        
        <nav className={styles.navbar}>
            <div >
                <h1>Next <small>code</small></h1>
            </div>
            <ul className="flex flex-row"> 
                <li className="mr-3 text-sm cursor-pointer ">TUTORIAL</li>
                <li className="mr-3 text-sm cursor-pointer ">PROGRAM</li>
                <li className="mr-3 text-sm cursor-pointer ">KATEGORI</li>
            </ul>
            <div>
                <i className=" fas fa-search color-black-50 dark:color-white" style={{color: theme === 'light' ? '#000' : '#fff'}}></i>
            </div>
        </nav>
    )
}

export default Navbar

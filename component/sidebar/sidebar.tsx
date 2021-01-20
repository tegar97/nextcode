import React from 'react'
import styles from './../../styles/components/sidebar/sidebar.module.scss'
import Link from 'next/link'
import { SidebarData } from './sidebar-data'

function SideBar({sidebar}) {
    return (
        <nav className={sidebar ? `${styles.navMenu} ${styles.active}` : 'nav-menu'}>
          <ul className={`${styles.navMenuItems}`} >
            <li className='navbar-toggle'>
              <Link href='#'>
                  <p>tes</p>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link href={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    )
}

export default SideBar

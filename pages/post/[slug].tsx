import React from 'react'
import styles from './../../styles/components/post/post.module.scss'
import Link from 'next/link'
import { useTheme } from 'next-themes'
function Post() {
    const {theme,setTheme} = useTheme()
    return (
        <div className={styles.post}>
            <div className={styles.postImage} >
                <img src="/artikel.jpg" alt="image" style={{width: '100%',height: '100%',objectFit: 'cover'}} />
            </div>
            <div className={styles.postContent}>
                <div className="text-center">
                  <h1 className="text-4xl dark:color-grey-600 ">Java Dasar - Tipe Data Number</h1>
                  <div className="flex justify-center mt-4">
                    <span>By Tania Rascia on November 30, 2020
</span>
                   

                  </div>
                </div>
                <p className={`${styles.postText}`} style={{color: theme ==='light' ? '#4a4a4a' : '#ccc' }}>
                Dalam pemrograman, ada banyak sekali tipe data. Salah satu yang paling sering kita gunakan adalah tipe data number atau angka. Data number banyak sekali kita gunakan dalam kehidupan sehari-hari, contohnya uang, jumlah, nilai ujian di sekolah, harga barang, dan lain-lain.

Di Java, ada banyak sekali tipe data number. Kenapa banyak? tidak satu saja? Karena tiap tipe data number memiliki kapasitas daya tampung masing-masing. Dan perlu dingait bahwa semua data itu pasti akan disimpan di media penyimpanan, entah itu RAM ataupun Disk. Oleh karena itu ada banyak sekali tipe data number, dan kita bisa gunakan sesuai dengan kebutuhan kita.

Jenis-Jenis Tipe Data Number
Secara garis besar, di Java tipe data number dibagi menjadi dua grup:

Integer, yaitu tipe data number bilangan bulat
Floating Point, yaitu tipe data number bilangan desimal
Tipe Data Integer
Untuk tipe data Integer pun, masih banyak jenisnya. Tiap jenis tipe data Integer memiliki batas minimal dan maksimal yang bisa ditampung yang berbeda-beda. Selain itu ukurannya pun berbeda-beda.
                </p>
            </div>
        </div>
    )
}

export default Post

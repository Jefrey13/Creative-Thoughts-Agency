'use client'
import Link from 'next/link'
import styles from '@/components/navbar/links/navLink/navLink.module.css'
import {usePathname} from 'next/navigation'

function NavLink({item}) {

    const pathName = usePathname();

  return (
   <div>
     <Link href={item.path} className={`${styles.container} ${pathName == item.path && styles.active}`}>
       {item.title} </Link>
   </div>
  )
}

export default NavLink;
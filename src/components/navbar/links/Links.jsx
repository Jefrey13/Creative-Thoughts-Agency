"use client"
import styles from '@/components/navbar/links/links.module.css'
import NavLink from '@/components/navbar/links/navLink/NavLink'
import { useState } from 'react';

const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];

const Links = () =>{
    const [open, setOpen] = useState(false);

    //Temporary
    const session = true;
    const isAdmin = true;

  return (
    <div className={styles.container}>
        <div className={styles.links}>
        {links.map((link=>(
            <NavLink item={link} key={link.title}/>
        )))}

        {/* Verify if it is authenticate or no, and if it is admin or no! */}
        {session ? (
            <>
                {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}/>}
                <button className={styles.logout}>Logout</button>
            </>
        ): (
            <NavLink item={{title: "Login", path: "/login"}}/>
        )}
    </div>
    <button className={styles.menuButton} onClick={()=> setOpen((prev)=> !prev)}>Menu</button>

    {/* Mobile Menu */}
    {open &&(
        <div className={styles.mobileLinks}>
            {links.map((link)=>(
                <NavLink item={link} key={link.title}/>
            ))}
        </div>
    )}
    </div>
  )
}

export default Links;
import Links from '@/components/navbar/links/Links'
import styles from "@/components/navbar/navbar.module.css"

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div>
        {/* <Link href="/">HomePage</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link> */}
        <Links/>
      </div>
    </div>
  )
}

export default Navbar
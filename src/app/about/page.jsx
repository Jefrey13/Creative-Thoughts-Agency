import Image from 'next/image'
import Styles from '@/app/about/about.module.css'
function about() {
  return (
    <div>
      <div className={StyleSheet.imgContainer}>
        <Image src="/about.png" alt='about us' title='about us' fill/>
      </div>
    </div>
  )
}

export default about
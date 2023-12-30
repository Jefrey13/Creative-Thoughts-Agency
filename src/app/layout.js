import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/footer'
import NavLink from '@/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="container">
        <NavLink/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/navbar/Navbar'
import BottomNavbar from './components/navbar/BottomNavbar'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvaider from './provaiders/ToasterProvaider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'


const font=Nunito({
  subsets:['latin']
})



export const metadata: Metadata = {
  title: 'Wecare',
  description: 'A community for the welfare of our child',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser= await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvaider/>
        <RegisterModal/>
        <LoginModal/>
        <Navbar currentUser={currentUser}/>
        {children}
        <BottomNavbar/>
        </body>
    </html>
  )
}

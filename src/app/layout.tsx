import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/Footer"
import "./globals.css"
import { Geologica, Overpass, Tektur, Unbounded} from "next/font/google"

export const geologica = Geologica({ 
  subsets: ['latin', 'cyrillic'], 
  weight: ['100', '200', '400', '600', '800', '900'] 
 })

export const overpass = Overpass({ 
  subsets: ['latin', 'cyrillic'], 
  weight: ['100', '200', '400', '600', '800', '900'] 
})

export const tektur = Tektur({ 
  subsets: ['latin', 'cyrillic'], 
  weight: ['400', '700'] 
})

export const unbounded = Unbounded({ 
  subsets: ['latin', 'cyrillic'], 
  weight: ['400', '700', '800', '900'] 
})

export default function RootLayout({
  children, modal
}: {children: React.ReactNode, modal: React.ReactNode}) {
  return (
    <html lang="uk">
      <body className={geologica.className}>
        <Navbar />
        {children}
        {modal}
        <Footer />
      </body>
      
    </html>
  )
}
import { Geologica, Overpass, Tektur, Unbounded } from 'next/font/google'

export const geologica = Geologica({
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '200', '400', '600', '800', '900'],
})

export const overpass = Overpass({
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '200', '400', '600', '800', '900'],
})

export const tektur = Tektur({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
})

export const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700', '800', '900'],
})

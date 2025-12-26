export type Product = {
  id: string
  title: string
  materials: string
  season: string
  imgSrc: string
}

export type Review = {
  id: string,
  name: string,
  sex: 'male' | 'female',
  rating: 1|2|3|4|5,
  text: string
}
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

export type Step = {
  title: string,
  text: string,
  imgUrl: string
}

export type Advice = {
  title: string,
  advices: [
    first: string,
    second: string,
    third: string
  ],
  imgUrl: string
}

export type Question = {
  question: string,
  answer: string
}
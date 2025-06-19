import { Dispatch, SetStateAction } from "react"

export type User = {
  id: number
}

export type Puppy = {
  id: number
  name: string
  trait: string
  imageUrl: string
  likedBy: User["id"][]
}

export type PuppyCardProps = {
  puppy: Puppy
  setPuppies: Dispatch<SetStateAction<Puppy[]>>
}

export type ApiError = {
  error: boolean
  message: string
  details: string
  code: string
}

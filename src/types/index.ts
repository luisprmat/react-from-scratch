import { Dispatch, SetStateAction } from "react"

export type Puppy = {
  id: number
  name: string
  vibe: string
  imagePath: string
}

export type PuppyCardProps = {
  puppy: Puppy
  liked: number[]
  setLiked: Dispatch<SetStateAction<number[]>>
}

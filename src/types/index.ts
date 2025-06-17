import { Dispatch, SetStateAction } from "react"

export type Puppy = {
  id: number
  name: string
  vibe: string
  imagePath: string
}

export type PuppyCardProps = {
  puppy: Puppy
  liked: Puppy["id"][]
  setLiked: Dispatch<SetStateAction<Puppy["id"][]>>
}

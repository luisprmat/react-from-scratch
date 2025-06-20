import { Heart, LoaderCircle } from "lucide-react"
import { Dispatch, SetStateAction, useState } from "react"
import { toggleLikedStatus } from "../queries"
import { Puppy } from "../types"

export function LikeToggle({
  puppy,
  setPuppies,
}: {
  puppy: Puppy
  setPuppies: Dispatch<SetStateAction<Puppy[]>>
}) {
  const [pending, setPending] = useState<boolean>(false)
  return (
    <button
      className="group"
      onClick={async () => {
        setPending(true)
        const updatedPuppy = await toggleLikedStatus(puppy.id)
        setPuppies((prevPups) =>
          prevPups.map((existingPuppy) =>
            existingPuppy.id === updatedPuppy.id ? updatedPuppy : existingPuppy,
          ),
        )
        setPending(false)
      }}
    >
      {pending ? (
        <LoaderCircle className="animate-spin stroke-slate-300" />
      ) : (
        <Heart
          className={
            puppy.likedBy.includes(1)
              ? "fill-pink-500 stroke-none"
              : "stroke-slate-200 group-hover:stroke-slate-300"
          }
        />
      )}
    </button>
  )
}

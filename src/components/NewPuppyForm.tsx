import { Dispatch, SetStateAction, useState } from "react"
import { useFormStatus } from "react-dom"
import { ErrorBoundary } from "react-error-boundary"
import { createPuppy } from "../queries"
import { Puppy } from "../types"

export function NewPuppyForm({
  puppies,
  setPuppies,
}: {
  puppies: Puppy[]
  setPuppies: Dispatch<SetStateAction<Puppy[]>>
}) {
  const [error, setError] = useState()
  return (
    <div className="mt-12 flex items-center justify-between bg-white p-8 shadow ring ring-black/5">
      <ErrorBoundary
        fallbackRender={({ error }) => (
          <pre>{JSON.stringify(error, null, 2)}</pre>
        )}
      >
        <form
          action={async (formData: FormData) => {
            const response = await createPuppy(formData)
            if (response.errors) {
              setError(response.errors)
            }
            if (response.data) {
              setPuppies([...puppies, response.data])
            }
          }}
          className="mt-4 flex w-full flex-col items-start gap-4"
        >
          <div className="grid w-full gap-6 md:grid-cols-3">
            <fieldset className="flex w-full flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                required
                className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                id="name"
                type="text"
                name="name"
              />
              {error?.name && (
                <span className="text-sm text-red-600">{error.name}</span>
              )}
            </fieldset>
            <fieldset className="flex w-full flex-col gap-1">
              <label htmlFor="trait">Personality trait</label>
              <input
                required
                className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                id="trait"
                type="text"
                name="trait"
              />
              {error?.trait && (
                <span className="text-sm text-red-600">{error.trait}</span>
              )}
            </fieldset>
            <fieldset className="col-span-2 flex w-full flex-col gap-1">
              <label htmlFor="image_url">Profile pic</label>
              <input
                className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                id="image_url"
                type="file"
                name="image_url"
              />
              {error?.image_url && (
                <span className="text-sm text-red-600">{error.image_url}</span>
              )}
            </fieldset>
          </div>
          <SubmitButton />
        </form>
      </ErrorBoundary>
    </div>
  )
}

function SubmitButton() {
  const status = useFormStatus()
  return (
    <button
      className="mt-4 inline-block rounded disabled:bg-slate-200 disabled:cursor-not-allowed bg-cyan-300 px-4 py-2 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
      type="submit"
      disabled={status.pending}
    >
      {status.pending
        ? `Adding ${status?.data?.get("name") || "puppy"} ...`
        : "Add puppy"}
    </button>
  )
}

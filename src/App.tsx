import { useEffect, useState } from "react"
import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { NewPuppyForm } from "./components/NewPuppyForm"
import { PageWrapper } from "./components/PageWrapper"
import { PuppiesList } from "./components/PuppiesList"
import { Search } from "./components/Search"
import { Shortlist } from "./components/ShortList"

import { LoaderCircle } from "lucide-react"
import { puppies as puppiesData } from "./data/puppies"
import { Puppy } from "./types"

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </PageWrapper>
  )
}

function Main() {
  const [liked, setLiked] = useState<Puppy["id"][]>([1, 3])
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [puppies, setPuppies] = useState<Puppy[]>(puppiesData)

  return (
    <main>
      <ApiPuppies />
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Shortlist liked={liked} setLiked={setLiked} puppies={puppies} />
      </div>
      <PuppiesList
        searchQuery={searchQuery}
        puppies={puppies}
        liked={liked}
        setLiked={setLiked}
      />
      <NewPuppyForm puppies={puppies} setPuppies={setPuppies} />
    </main>
  )
}

function ApiPuppies() {
  const [apiPuppies, setApiPuppies] = useState(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  useEffect(
    () => {
      const getPuppies = async () => {
        setIsLoading(true)
        try {
          const response = await fetch(
            "http://react-from-scratch-api.test/api/puppies",
          )
          if (!response.ok) {
            const errorData = await response.json()
            setError(`${errorData.message}: ${errorData.details}`)
            throw errorData
          }
          const data = await response.json()
          setApiPuppies(data)
        } catch (error) {
          console.error(error)
        }
        setIsLoading(false)
      }

      getPuppies()
      // Set them to state
    },
    [
      // re-run the effect
    ],
  )
  return (
    <div className="bg-white p-6 shadow ring ring-black/5 mt-12 overflow-auto">
      {isLoading && <LoaderCircle className="animate-spin stroke-slate-300" />}
      {apiPuppies && <pre>{JSON.stringify(apiPuppies, null, 2)}</pre>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}

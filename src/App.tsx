import { Suspense, use, useState } from "react"
import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { NewPuppyForm } from "./components/NewPuppyForm"
import { PageWrapper } from "./components/PageWrapper"
import { PuppiesList } from "./components/PuppiesList"
import { Search } from "./components/Search"
import { Shortlist } from "./components/ShortList"

import { LoaderCircle } from "lucide-react"
import { puppies as puppiesData } from "./data/puppies"
import { getPuppies } from "./queries"
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
      <div className="bg-white p-6 shadow ring ring-black/5 mt-12 overflow-auto">
        <Suspense
          fallback={<LoaderCircle className="animate-spin stroke-slate-300" />}
        >
          <ApiPuppies />
        </Suspense>
      </div>
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

const puppyPromise = getPuppies()

function ApiPuppies() {
  const apiPuppies = use(puppyPromise)

  return <pre>{JSON.stringify(apiPuppies, null, 2)}</pre>
}

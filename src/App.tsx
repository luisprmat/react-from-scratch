import { Suspense, use, useState } from "react"
import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { NewPuppyForm } from "./components/NewPuppyForm"
import { PageWrapper } from "./components/PageWrapper"
import { PuppiesList } from "./components/PuppiesList"
import { Search } from "./components/Search"
import { Shortlist } from "./components/ShortList"

import { LoaderCircle } from "lucide-react"
import { ErrorBoundary } from "react-error-boundary"
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
      <ErrorBoundary
        fallbackRender={({ error }) => (
          <div className="bg-red-100 p-6 shadow ring ring-black/5 mt-12 overflow-auto">
            <p className="text-red-500">
              {error.message}: {error.details}
            </p>
          </div>
        )}
      >
        <Suspense
          fallback={
            <div className="bg-white p-6 shadow ring ring-black/5 mt-12 overflow-auto">
              <LoaderCircle className="animate-spin stroke-slate-300" />
            </div>
          }
        >
          <ApiPuppies />
        </Suspense>
      </ErrorBoundary>

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

  return (
    <div className="bg-green-100 p-6 shadow ring ring-black/5 mt-12 overflow-auto">
      <pre>{JSON.stringify(apiPuppies, null, 2)}</pre>
    </div>
  )
}

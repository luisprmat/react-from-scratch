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
import { getPuppies } from "./queries"
import { ApiError, Puppy } from "./types"

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <ErrorBoundary fallbackRender={ErrorBox}>
          <Suspense
            fallback={
              <div className="bg-white p-6 shadow ring ring-black/5 mt-12 overflow-auto">
                <LoaderCircle className="animate-spin stroke-slate-300" />
              </div>
            }
          >
            <Main />
          </Suspense>
        </ErrorBoundary>
      </Container>
    </PageWrapper>
  )
}

const puppyPromise = getPuppies()

function Main() {
  const apiPuppies = use(puppyPromise)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [puppies, setPuppies] = useState<Puppy[]>(apiPuppies)

  return (
    <main>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Shortlist puppies={puppies} setPuppies={setPuppies} />
      </div>
      <PuppiesList
        searchQuery={searchQuery}
        puppies={puppies}
        setPuppies={setPuppies}
      />
      <NewPuppyForm puppies={puppies} setPuppies={setPuppies} />
    </main>
  )
}

function ErrorBox({ error }: { error: ApiError }) {
  return (
    <div className="bg-red-100 p-6 shadow ring ring-black/5 mt-12 overflow-auto">
      <p className="text-red-500">
        {error.code}: {error.message}: {error.details}
      </p>
    </div>
  )
}

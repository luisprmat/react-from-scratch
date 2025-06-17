import { useState } from "react"
import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { NewPuppyForm } from "./components/NewPuppyForm"
import { PageWrapper } from "./components/PageWrapper"
import { PuppiesList } from "./components/PuppiesList"
import { Search } from "./components/Search"
import { Shortlist } from "./components/ShortList"

import { puppies } from "./data/puppies"
import { Puppy } from "./types"
import { LikedContext } from "./context"

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

  return (
    <main>
      <LikedContext value={{ liked, setLiked }}>
        <div className="mt-24 grid gap-8 sm:grid-cols-2">
          <Search />
          <Shortlist puppies={puppies} />
        </div>
        <PuppiesList puppies={puppies} />
      </LikedContext>
      <NewPuppyForm />
    </main>
  )
}

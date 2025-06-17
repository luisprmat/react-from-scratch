import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { PageWrapper } from "./components/PageWrapper"

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        {/* more to come */}
      </Container>
    </PageWrapper>
  )
}
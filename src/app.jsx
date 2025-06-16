import { createRoot } from 'react-dom/client'
import './app.css'

const theme = {
  primary: 'rebeccapurple'
}

function App() {
  return <h1 style={{ background: theme.primary, color: 'white' }}>React & Vite</h1>
}

const app = document.getElementById('app')
const root = createRoot(app)

root.render(<App />)
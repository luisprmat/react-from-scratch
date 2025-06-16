import { createRoot } from 'react-dom/client'
import './app.css'

function App() {
  return <h1>React & Vite</h1>
}

const app = document.getElementById('app')
const root = createRoot(app)

root.render(<App />)
import { createRoot } from 'react-dom/client'
import './app.css'

function App() {
  return <h1 className='font-mono text-4xl'>React & Vite</h1>
}

const app = document.getElementById('app')
const root = createRoot(app)

root.render(<App />)
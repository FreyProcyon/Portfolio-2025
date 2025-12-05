import { useState } from 'react'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    if (page === 'home') return <Home onNavigate={setPage} />
    if (page === 'projects') return <Projects />
    if (page === 'contact') return <Contact />
    return null
  }

  return (
    <div className="app">
      <header className="nav">
        <div className="logo">Zhuoyang Pei</div>
        <nav>
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('projects')}>Projects</button>
          <button onClick={() => setPage('contact')}>Contact</button>
        </nav>
      </header>

      <main>
        {renderPage()}
      </main>
    </div>
  )
}

export default App

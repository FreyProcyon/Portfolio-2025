// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import ProjectDetail from './components/ProjectDetail'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* 顶部导航（现在其实只有一个 Home 链接，也可以写成 Logo） */}
      <header className="nav">
        <Link to="/" className="logo">
          Zhuoyang Pei
        </Link>
      </header>

      {/* 路由出口 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        {/* 以后想加 404，也可以： */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      {/* Footer：放联系信息 */}
      <footer className="footer">
        <p>Available for XR / Interaction Design & Frontend internships.</p>
        <p>
          Email: <a href="mailto:zhuoyang.pei@outlook.com">zhuoyang.pei@outlook.com</a> ·{' '}
          <a href="https://github.com/FreyProcyon" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App

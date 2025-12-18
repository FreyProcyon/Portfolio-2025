import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="topBar">
        <div className="topPill">
          <Link to="/" className="brand">
            ZHUOYANG PEI
          </Link>

          <div className="topLinks">
            <a
              href="mailto:zhuoyang.pei@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
            <a
              href="https://github.com/FreyProcyon"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            Available for XR / Interaction Design & Frontend internships.
          </div>
          <div>
            Email:{" "}
            <a href="mailto:zhuoyang.pei@outlook.com">
              zhuoyang.pei@outlook.com
            </a>{" "}
            ·{" "}
            <a
              href="https://github.com/FreyProcyon"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

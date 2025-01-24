import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <header>
        <h1>Aamunsarastuksen Mökkiseura</h1>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

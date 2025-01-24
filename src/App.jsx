import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <header>
        <Nav />
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

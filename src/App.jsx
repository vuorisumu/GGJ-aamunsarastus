import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import JoinForm from "./components/JoinForm";

function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/liity" element={<JoinForm />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./components/Main";
import Nav from "./components/Nav";
import JoinForm from "./components/JoinForm";
import Footer from "./components/Footer";

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

      <Footer />
    </Router>
  );
}

export default App;

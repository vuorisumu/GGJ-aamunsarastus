import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./components/Main";
import Nav from "./components/Nav";
import JoinForm from "./components/JoinForm";
import Footer from "./components/Footer";
import UserContext from "./util/UserContext";
import { useState } from "react";

function App() {
  const [phase, setPhase] = useState(0);

  const initPhaseTwo = () => {
    console.log("Phase 2 starts");
    setPhase(1);
  };

  return (
    <UserContext.Provider value={{ phase, initPhaseTwo }}>
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
    </UserContext.Provider>
  );
}

export default App;

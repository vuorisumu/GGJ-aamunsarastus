import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Main from "./components/Main";
import Nav from "./components/Nav";
import JoinForm from "./components/JoinForm";
import Footer from "./components/Footer";
import UserContext from "./util/UserContext";
import { useState } from "react";
import Calendar from "./components/Calendar";

function App() {
  const [phase, setPhase] = useState(1);

  const initPhaseTwo = () => {
    console.log("Phase 2 starts");
    setPhase(2);
  };

  const initPhaseThree = () => {
    console.log("Phase 3 starts");
    setPhase(3);
  };

  return (
    <UserContext.Provider value={{ phase, initPhaseTwo, initPhaseThree }}>
      <Router>
        <header>
          <Nav />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/liity" element={<JoinForm />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;

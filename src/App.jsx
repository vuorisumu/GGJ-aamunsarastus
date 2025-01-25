import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Main from "./components/Main";
import Nav from "./components/Nav";
import JoinForm from "./components/JoinForm";
import Footer from "./components/Footer";
import UserContext from "./util/UserContext";
import { useEffect, useState } from "react";
import Calendar from "./components/Calendar";
import { getProgress, getStartTime, setProgress } from "./util/progress";
import About from "./components/About";

function App() {
  const [phase, setPhase] = useState(getProgress());
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if (phase === 2 && popup === false) {
      const interval = setInterval(() => {
        const elapsedTime = new Date() - getStartTime();
        if (elapsedTime > 5000) {
          setPopup(true);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [phase, popup]);

  const initPhaseTwo = () => {
    console.log("Phase 2 starts");
    setPhase(2);
    setProgress(2);
  };

  const initPhaseThree = () => {
    console.log("Phase 3 starts");
    setPhase(3);
    setProgress(3);
  };

  const clearPhase = () => {
    setPhase(1);
    setProgress(1);
  };

  return (
    <UserContext.Provider
      value={{ phase, initPhaseTwo, initPhaseThree, clearPhase }}
    >
      <Router>
        <header>
          <Nav />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/liity" element={<JoinForm />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </main>

        {popup && (
          <div className="popup">
            <h2>MORJESTA</h2>
            <p>Etpäs arvannukkaan että tulen täältä tällee</p>
          </div>
        )}
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;

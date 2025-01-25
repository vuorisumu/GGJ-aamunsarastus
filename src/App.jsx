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

  useEffect(() => {
    if (phase === 2) {
      const interval = setInterval(() => {
        const elapsedTime = new Date() - getStartTime();
        console.log(elapsedTime);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [phase]);

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

        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;

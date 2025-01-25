import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Main from "./components/Main";
import Nav from "./components/Nav";
import JoinForm from "./components/JoinForm";
import Footer from "./components/Footer";
import UserContext from "./util/UserContext";
import { useEffect, useState } from "react";
import { getProgress, getStartTime, setProgress } from "./util/progress";
import About from "./components/About";
import Admin from "./components/Admin";
import InnerCircle from "./components/InnerCircle";

function App() {
    const [phase, setPhase] = useState(getProgress());
    const [popup, setPopup] = useState(false);
    const [popupStart, setPopupStart] = useState();
    const [time, setTime] = useState();
    const [closed, setClosed] = useState(false);

    useEffect(() => {
        if (phase === 2) {
            const interval = setInterval(() => {
                if (popup === false) {
                    const elapsedTime = new Date() - getStartTime();
                    if (elapsedTime > 5000) {
                        setPopup(true);
                        setPopupStart(new Date());
                    }
                } else {
                    const el = (new Date() - popupStart) / 1000;
                    setTime(el);
                }
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [phase, popup, popupStart]);

    useEffect(() => {}, [time]);

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
            <div id="wrapper" className={`phase${phase}`}>
                <Router>
                    <header className={`phase${phase}`}>
                        <Nav />
                    </header>

                    <main className={`phase${phase}`}>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/liity" element={<JoinForm />} />
                            <Route
                                path="/sisapiiri"
                                element={<InnerCircle />}
                            />
                            <Route path="/admin" element={<Admin />} />
                        </Routes>
                    </main>

                    {popup && phase === 2 && (
                        <div className={`${closed ? "closed" : ""} popup`}>
                            <button onClick={() => setClosed(!closed)}>
                                x
                            </button>
                            <h2>MORJESTA</h2>
                            <p>Etpäs arvannukkaan että tulen täältä tällee</p>

                            {time > 5 && <p>HALOO</p>}

                            {time > 10 && <p>AUAAA</p>}

                            {time > 15 && <p>auta...</p>}
                        </div>
                    )}

                    <Footer />
                </Router>
            </div>
        </UserContext.Provider>
    );
}

export default App;

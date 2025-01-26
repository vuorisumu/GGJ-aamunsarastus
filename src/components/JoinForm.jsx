import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import UserContext from "../util/UserContext";
import PageIntro from "./PageIntro";
import { useNavigate } from "react-router-dom";
import Content from "./Content";

function JoinForm() {
  const { phase, initPhaseTwo } = useContext(UserContext);
  const { t } = useTranslation();
  const tr = t("join-us", { returnObjects: true });
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (phase !== 1) {
      navigate("/");
    }
  });

  useEffect(() => {
    if (!tr.questions) return;

    // set base for questions and answers
    const questionBase = tr.questions.map((question) => ({
      ...question,
      userInput: "",
    }));
    setAnswers(questionBase);
  }, [tr]);

  // set user input to state
  const handleInputChange = (input, index) => {
    setAnswers((prev) =>
      prev.map((q, i) => (i === index ? { ...q, userInput: input } : q))
    );
  };

  // check if all answers are correct
  const checkAnswers = () => {
    // for setting the false class to list elements
    setAnswers((prev) =>
      prev.map((a) => ({
        ...a,
        correct: a.a.some(
          (correctAnswer) =>
            correctAnswer.toLowerCase() === a.userInput.toLowerCase()
        ),
      }))
    );

    // check if all correct
    const allCorrect = answers.every((a) =>
      a.a.some(
        (correctAnswer) =>
          correctAnswer.toLowerCase() === a.userInput.toLowerCase()
      )
    );

    if (allCorrect) {
      // phase two starts
      initPhaseTwo();
    } else {
      setError(true);
      clearAll();
    }
  };

  // clear all input fields
  const clearAll = () => {
    setAnswers((prev) => prev.map((q) => ({ ...q, userInput: "" })));
  };

  // handle enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkAnswers();
    }
  };

  return (
    <div className="join-form">
      <PageIntro data={tr} />

      <Content data={tr.content} />

      <ul>
        {answers.map((q, i) => (
          <li key={`q${i}`} className={q.correct === false ? "false" : ""}>
            <label>{q.q}</label>
            <input
              type="text"
              placeholder={"Vastaus"}
              value={q.userInput}
              onChange={(e) => handleInputChange(e.target.value, i)}
              onKeyDown={handleKeyDown}
            />
          </li>
        ))}
      </ul>
      <div className="under-form">
        {error && (
          <p>
            VIRHE. Emme voineet käsitellä hakemustasi odottamattoman virheen
            vuoksi. Ehkä kannattaisi miettiä hieman.
          </p>
        )}

        <button onClick={() => checkAnswers()}>{tr.send}</button>
        <button onClick={() => clearAll()}>{tr.reset}</button>
      </div>
    </div>
  );
}

export default JoinForm;

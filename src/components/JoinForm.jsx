import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function JoinForm() {
  const { t } = useTranslation();
  const tr = t("join-us", { returnObjects: true });
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (!tr.questions) return;
    const questionBase = tr.questions.map((question) => ({
      ...question,
      userInput: "",
    }));
    setAnswers(questionBase);
  }, [tr]);

  return (
    <div>
      <h3>{tr.title}</h3>

      <ul>
        {answers.map((q, i) => (
          <li key={`q${i}`}>
            <label>{q.q}</label>
            <input type="text" placeholder={q.a} />
          </li>
        ))}
      </ul>

      <button onClick={() => console.log("click")}>Lähetä</button>
      <button onClick={() => console.log("click")}>Reset</button>
    </div>
  );
}

export default JoinForm;

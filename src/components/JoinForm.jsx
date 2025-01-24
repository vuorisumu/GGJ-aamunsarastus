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

  const handleInputChange = (input, index) => {
    setAnswers((prev) =>
      prev.map((q, i) => (i === index ? { ...q, userInput: input } : q))
    );
  };

  const checkAnswers = () => [
    answers.map((a) => {
      if (a.userInput.toLowerCase() === a.a.toLowerCase()) {
        console.log(a.q, "oikein");
      } else {
        console.log(a.q, "väärin");
      }
    }),
  ];

  return (
    <div>
      <h3>{tr.title}</h3>

      <ul>
        {answers.map((q, i) => (
          <li key={`q${i}`}>
            <label>{q.q}</label>
            <input
              type="text"
              placeholder={q.a}
              value={q.userInput}
              onChange={(e) => handleInputChange(e.target.value, i)}
            />
          </li>
        ))}
      </ul>

      <button onClick={() => checkAnswers()}>{tr.send}</button>
      <button onClick={() => console.log("click")}>{tr.reset}</button>
    </div>
  );
}

export default JoinForm;

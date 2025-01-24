import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function JoinForm() {
  const { t } = useTranslation();
  const tr = t("join-us", { returnObjects: true });

  useEffect(() => {
    console.log(tr);
  }, []);

  return (
    <div>
      <h3>{tr.title}</h3>

      {tr.questions && (
        <ul>
          {tr.questions.map((q, i) => (
            <li key={`q${i}`}>
              <label>{q.q}</label>
              <input type="text" placeholder={q.a} />
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => console.log("click")}>Lähetä</button>
      <button onClick={() => console.log("click")}>Reset</button>
    </div>
  );
}

export default JoinForm;

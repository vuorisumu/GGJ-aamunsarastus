import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function JoinForm() {
  const { t } = useTranslation();
  const tr = t("key", { returnObjects: true });

  useEffect(() => {
    console.log(tr);
  }, []);

  return (
    <div>
      <h3>Liittymislomake</h3>
      <p>{tr.test ? tr.test : "ei toimi"}</p>

      <ul>
        <li>
          <label>Kysymys</label>
          <input type="text" placeholder="vastaus" />
        </li>
      </ul>
      <button onClick={() => console.log("click")}>Lähetä</button>
      <button onClick={() => console.log("click")}>Reset</button>
    </div>
  );
}

export default JoinForm;

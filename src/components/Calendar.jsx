import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import { useContext, useState } from "react";
import UserContext from "../util/UserContext";

function Calendar() {
  const { initPhaseThree } = useContext(UserContext);
  const { t } = useTranslation();
  const tr = t("calendar", { returnObjects: true });
  const [input, setInput] = useState("");

  const checkInput = () => {
    if (input === "salasana") {
      initPhaseThree();
    }
  };

  return (
    <div>
      <PageIntro data={tr} />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => checkInput()}>Lähetä</button>
    </div>
  );
}

export default Calendar;

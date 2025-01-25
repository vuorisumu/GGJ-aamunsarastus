import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import { useContext, useEffect, useState } from "react";
import UserContext from "../util/UserContext";
import { useNavigate } from "react-router-dom";

function Calendar() {
  const { phase, initPhaseThree } = useContext(UserContext);
  const { t } = useTranslation();
  const tr = t("calendar", { returnObjects: true });
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (phase !== 2) {
      navigate("/");
    }
  });

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

import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import { useContext, useEffect, useState } from "react";
import UserContext from "../util/UserContext";
import { useNavigate } from "react-router-dom";
import Content from "./Content";

function InnerCircle() {
  const { phase, initPhaseThree } = useContext(UserContext);
  const { t } = useTranslation();
  const tr = t("inner-circle", { returnObjects: true });
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
    } else {
      setInput("");
    }
  };

  // handle enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkInput();
    }
  };

  return (
    <div>
      <PageIntro data={tr} />

      <Content data={tr.content} />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => checkInput()}>Lähetä</button>
    </div>
  );
}

export default InnerCircle;

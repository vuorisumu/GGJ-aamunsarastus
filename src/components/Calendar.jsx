import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import { useState } from "react";

function Calendar() {
  const { t } = useTranslation();
  const tr = t("calendar", { returnObjects: true });
  const [input, setInput] = useState("");

  return (
    <div>
      <PageIntro data={tr} />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => console.log(input)}>Lähetä</button>
    </div>
  );
}

export default Calendar;

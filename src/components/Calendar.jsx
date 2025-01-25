import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";

function Calendar() {
  const { t } = useTranslation();
  const tr = t("calendar", { returnObjects: true });

  return (
    <div>
      <PageIntro data={tr} />
    </div>
  );
}

export default Calendar;

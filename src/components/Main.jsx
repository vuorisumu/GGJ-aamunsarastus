import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";

function Main() {
  const { t } = useTranslation();
  const tr = t("home", { returnObjects: true });

  return (
    <div>
      <PageIntro data={tr} />
    </div>
  );
}

export default Main;

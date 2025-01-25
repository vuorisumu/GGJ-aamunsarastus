import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import Content from "./Content";

function Main() {
  const { t } = useTranslation();
  const tr = t("home", { returnObjects: true });

  return (
    <div>
      <PageIntro data={tr} />

      <Content data={tr.content} />
    </div>
  );
}

export default Main;

import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import Content from "./Content";

function About() {
  const { t } = useTranslation();
  const tr = t("about", { returnObjects: true });

  return (
    <div>
      <PageIntro data={tr} />
      <Content data={tr.content} />
    </div>
  );
}

export default About;

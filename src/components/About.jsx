import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import Content from "./Content";
import { useContext } from "react";
import UserContext from "../util/UserContext";

function About() {
  const { t } = useTranslation();
  const tr = t("about", { returnObjects: true });
  const { phase } = useContext(UserContext);

  return (
    <div>
      <PageIntro data={tr} />
      <Content data={tr.content} />
    </div>
  );
}

export default About;

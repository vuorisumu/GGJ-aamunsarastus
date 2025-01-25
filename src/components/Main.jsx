import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import Content from "./Content";
import CommentSection from "./CommentSection";
import { useContext } from "react";
import UserContext from "../util/UserContext";

function Main() {
  const { phase } = useContext(UserContext);
  const { t } = useTranslation();
  const tr = t("home", { returnObjects: true });

  return (
    <div>
      <PageIntro data={tr} />
      <p>Phase: {phase}</p>

      <Content data={tr.content} />
      <CommentSection data={tr.comments} />
    </div>
  );
}

export default Main;

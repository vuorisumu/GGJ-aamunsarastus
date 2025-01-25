import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import Content from "./Content";
import CommentSection from "./CommentSection";

function Main() {
  const { t } = useTranslation();
  const tr = t("home", { returnObjects: true });

  return (
    <div>
      <PageIntro data={tr} />

      <Content data={tr.content} />
      <CommentSection data={tr.comments} />
    </div>
  );
}

export default Main;

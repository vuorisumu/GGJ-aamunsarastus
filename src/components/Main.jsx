import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import Content from "./Content";
import CommentSection from "./CommentSection";
import { useContext } from "react";
import UserContext from "../util/UserContext";
import vid from "/videos/ad_compr.mp4";

function Main() {
  const { clearPhase } = useContext(UserContext);
  const { t } = useTranslation();
  const tr = t("home", { returnObjects: true });

  return (
    <div>
      <PageIntro data={tr} />
      <div className="video-container">
        <video controls width="600">
          <source src={vid} type="video/mp4" />
        </video>
      </div>
      <Content data={tr.content} />
      <CommentSection data={tr.comments} />

      <button onClick={() => clearPhase()}>Alkuun</button>
    </div>
  );
}

export default Main;

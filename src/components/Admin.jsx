import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import Content from "./Content";
import { useContext, useEffect } from "react";
import UserContext from "../util/UserContext";
import { useNavigate } from "react-router-dom";
import pentagram from "../../public/images/penta.png";

function Admin() {
  const { phase } = useContext(UserContext);
  const { t } = useTranslation();
  const tr = t("admin", { returnObjects: true });
  const navigate = useNavigate();

  useEffect(() => {
    if (phase !== 3) {
      navigate("/");
    }
  });

  return (
    <div>
      <PageIntro data={tr} />
      <div className="center-text">
        <img src={pentagram} alt="pentagram" className="glow-image penta" />
        {tr.manifest && tr.manifest.map((m, i) => <p key={`m${i}`}>{m}</p>)}
      </div>
      <Content data={tr.content} />
    </div>
  );
}

export default Admin;

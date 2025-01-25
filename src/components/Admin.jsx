import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import Content from "./Content";

function Admin() {
  const { t } = useTranslation();
  const tr = t("admin", { returnObjects: true });

  return (
    <div>
      <PageIntro data={tr} />

      <Content data={tr.content} />
    </div>
  );
}

export default Admin;

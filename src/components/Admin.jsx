import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import Content from "./Content";
import { useContext, useEffect } from "react";
import UserContext from "../util/UserContext";
import { useNavigate } from "react-router-dom";

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

            <Content data={tr.content} />
        </div>
    );
}

export default Admin;

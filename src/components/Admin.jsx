import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import Content from "./Content";
import { useContext, useEffect } from "react";
import UserContext from "../util/UserContext";
import { useNavigate } from "react-router-dom";
import sac1 from "../../public/images/sacrifice.png";
import sac2 from "../../public/images/sac2.jpg";
import sac3 from "../../public/images/sac3.jpg";

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
            <div id="admins">
                <section>
                    <img src={sac1} alt="admin 1" />
                    <h2>Admin 1</h2>
                    <p> - dealt with</p>
                </section>
                <section>
                    <img src={sac2} alt="admin 1" />
                    <h2>Admin 2</h2>
                    <p> - dealt with</p>
                </section>
                <section>
                    <img src={sac3} alt="admin 1" />
                    <h2>Admin 3</h2>
                    <p> - dealt with</p>
                </section>
            </div>
            <Content data={tr.content} />
        </div>
    );
}

export default Admin;

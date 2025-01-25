import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import Content from "./Content";
import { useContext, useEffect } from "react";
import UserContext from "../util/UserContext";
import { useNavigate } from "react-router-dom";
import sac1 from "../../public/images/sacrifice.png";
import sac2 from "../../public/images/sac2.jpg";
import sac3 from "../../public/images/sac3.jpg";
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
            <div id="admins">
                <section>
                    <img src={sac1} alt="admin 1" />
                    <h2>Family</h2>
                    <p>I'm sorry</p>
                </section>
                <section>
                    <img src={sac2} alt="admin 1" />
                    <h2>Brothers</h2>
                    <p>I'm sorry</p>
                </section>
                <section>
                    <img src={sac3} alt="admin 1" />
                    <h2>Sisters</h2>
                    <p>I'm sorry</p>
                </section>
            </div>
            <div className="center-text">
                <img
                    src={pentagram}
                    alt="pentagram"
                    className="glow-image penta"
                />
                <p>
                    Ensiksi haluan puhutella perhettäni: Hyvä Aamunsarastuksen
                    Mökkiseura, hyvät veljet ja siskot, jos luette tätä niin
                    varmasti olettekin jo aavistaneet, mitä olen aikeissa tehdä.
                    Päätökseni on lopullinen. Aamunsarastuksen aika on tullut
                    päätökseensä ja on aika antaa päivän saapua. Se mitä Te
                    teitte, mitä Te veitte minulta, avasi lopullisesti silmäni,
                    ja ainoa katumukseni on se, että kuljin sokeana niin kauan.
                    Koko ikäni. Aivan kuten tekin, sokeina koko ikänne. On kuin
                    pimeä yö olisi jo kauan sitten ottanut meidät omakseen ja
                    sulkenut meidät sisäänsä niin, ettemme me nähneet, emmekä
                    ymmärtäneet mitä teimme. Tai niin minä todella toivon,
                    ettemme todella ymmärtäneet mitä teimme. Sillä jos teimme
                    sen kaiken täydessä ymmärryksessä, niin me todella
                    ansaitsemme kohtalon, joka on pahempi kuin heidän, joilta me
                    riistimme elämän oman onnemme turvaamiseksi. Toiseksi haluan
                    puhutella sinua, ulkopuolinen, joka luet tätä. Oletan ja
                    toivon tämän tavoittavan ennemmin tai myöhemmin jonkun, joka
                    ei tunne pimeyttä, kuten me, jotka olemme kasvaneet sen
                    vankeina. Olen toimittanut kopion tästä virkavallalle ja se
                    lienee hyödyksi tutkinnassa, kun Vietävänjärven salaisuus
                    alkaa hiljalleen avautua. Olen yrittänyt tehdä työnne
                    mahdollisimman helpoksi, en halua vaivata teitä tällä
                    synkällä ja vastenmielisellä tapauksella yhtään enempää kuin
                    on tarpeen. Veljieni ja sisarieni ruumiit olen asetellut
                    perunakellariin ja oletan niiden säilyvän siellä jokseenkin
                    kohtuullisessa kunnossa saapumiseenne saakka. Päätalon
                    keittiön pöydältä löydätte kirjan, johon on laadittu lista
                    menneistä yhteisömme jäsenistä, jotka toimiemme seurauksena
                    ovat menettäneet henkensä. Listalta löytynee myös muutama
                    ulkopuolinen, joiden kohtaloksi koitui puhtaasti pelkkä
                    huono tuuri: väärässä paikassa väärään aikaan. Muunmuassa
                    eräs hiisilehtoomme eksynyt marjastaja, häpeäkseni en muista
                    hänen nimeään, koki valitettavan kohtalon yhteisömme käsissä
                    muutama vuosi sitten. Näistä viattomien surmista olen
                    vilpittömästi pahoillani, mutta tehtyä ei saa
                    tekemättömäksi. Toivon, että tieto heidän kohtalostaan tuo
                    rauhan heidän omaisilleen.
                </p>
            </div>
            <Content data={tr.content} />
        </div>
    );
}

export default Admin;

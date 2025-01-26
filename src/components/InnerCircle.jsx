import { useTranslation } from "react-i18next";
import PageIntro from "./PageIntro";
import { useContext, useEffect, useState } from "react";
import UserContext from "../util/UserContext";
import { useNavigate } from "react-router-dom";

function InnerCircle() {
  const { phase, initPhaseThree } = useContext(UserContext);
  const { t } = useTranslation();
  const tr = t("inner-circle", { returnObjects: true });
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (phase !== 2) {
      navigate("/");
    }
  });

  const checkInput = () => {
    if (input === "salasana") {
      initPhaseThree();
    } else {
      setInput("");
    }
  };

  // handle enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkInput();
    }
  };

  return (
    <div>
      <PageIntro data={tr} />
      <div className="image-display">
        {tr.imagedisplay &&
          tr.imagedisplay.map((image, i) => (
            <section key={`img${i}`}>
              <img src={`./images/${image.img}`} />
            </section>
          ))}
      </div>

      <div className="inner-circle">
        {tr.forum &&
          tr.forum.map((post, i) => (
            <div key={`post${i}`}>
              {post.map((c, j) => (
                <div key={`comment${j}`} className="comment">
                  <p className="user">{c.user}:</p>
                  {c.text ? (
                    <p className="text">{c.text}</p>
                  ) : (
                    <p className="removed">{`<Ylläpitäjä on poistanut kommentin>`}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>

      <div className="password">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => checkInput()}>Lähetä</button>
      </div>
    </div>
  );
}

export default InnerCircle;

import { useContext } from "react";
import UserContext from "../util/UserContext";

function Footer() {
  const { phase } = useContext(UserContext);

  return (
    <footer className={`phase${phase}`}>
      <p>Aamunsarastuksen Mökkiseura 2022</p>
    </footer>
  );
}

export default Footer;

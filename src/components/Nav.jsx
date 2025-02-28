import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../util/UserContext";

function Nav() {
  const { phase } = useContext(UserContext);

  return (
    <nav>
      <ul>
        <li>
          <h2>Aamunsarastuksen Mökkiseura</h2>
        </li>
        <li>
          <NavLink to="/">Etusivu</NavLink>
        </li>
        <li>
          <NavLink to="/about">Tietoa Meistä</NavLink>
        </li>
        {phase === 1 && (
          <li>
            <NavLink to="/liity">Liity</NavLink>
          </li>
        )}

        {phase === 2 && (
          <li>
            <NavLink to="/sisapiiri">Sisäpiiri</NavLink>
          </li>
        )}

        {phase === 3 && (
          <li>
            <NavLink to="/viesti">Viesti</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;

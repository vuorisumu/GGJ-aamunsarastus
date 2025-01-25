import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <p>Aamunsarastuksen Mökkiseura</p>
        </li>
        <li>
          <NavLink to="/">Etusivu</NavLink>
        </li>
        <li>
          <NavLink to="/liity">Liity</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

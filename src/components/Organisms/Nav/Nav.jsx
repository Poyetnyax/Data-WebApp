import Button from "../../Atoms/Button/Button";
import {Link} from 'react-router-dom';
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="container-left">
          <a href="">
            <h2>
              <FontAwesomeIcon className="icon" icon={faChartLine} />
              AnalytiX
            </h2>
          </a>
        </div>
        <div className="container-right">
          <a href="#clients">Clients</a>
          <a href="#features">Features</a>
          <a href="#about-us">About Us</a>
          <Link to="/sign-in"><Button name="Sign In" /></Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;

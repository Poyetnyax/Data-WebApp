import "./SignIn.css";
import Button from "../Components/Atoms/Button/Button";
import person from "../Assets/images/person.png";
import device from "../Assets/images/device.png";
import windows from "../Assets/images/windows.png";
import deviceShadow from "../Assets/images/deviceShadow.png";
import formula from "../Assets/images/formula.png";
import gear from "../Assets/images/gear.png";
import personShadow from "../Assets/images/personShadow.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function SignIn() {
    return (
      <div className="SignIn">
        <div className="input">
            <Link to="/"><button className="btn">
      <FontAwesomeIcon className="icon" icon={faArrowLeftLong} />{'Back'}
    </button></Link>
            <h2 className="heading">Sign-in</h2>
            <input className="inputspace" type="text" placeholder="Username" required />
            <input className="inputspace" type="text" placeholder="Password" required />
            <Button name="Sign In" />
        </div>
        <div className="illustration-container">
          <div className="illustration-left">
            <img src={device} alt="device"   className="device" />
            <img src={windows} alt="windows"   className="windows" />
            <img src={deviceShadow} alt="deviceShadow"   className="deviceShadow" />
            <img src={formula} alt="formula"   className="formula" />
            <img src={gear} alt="gear" className="gear" />
            <img src={person} alt="person"   className="person" />
            <img src={personShadow} alt="personShadow"   className="personShadow" />
          </div>
        </div>
      </div>
    );
  }
  
  export default SignIn;
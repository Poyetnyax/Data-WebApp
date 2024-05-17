import "./SignUp.css";
import person from "../Assets/images/person.png";
import device from "../Assets/images/device.png";
import windows from "../Assets/images/windows.png";
import deviceShadow from "../Assets/images/deviceShadow.png";
import formula from "../Assets/images/formula.png";
import gear from "../Assets/images/gear.png";
import personShadow from "../Assets/images/personShadow.png";
import Button from "../Components/Atoms/Button/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function SignUp () {
  return (
    <div className="SignUpPage">
      <div className="SignUp">
        <Link to="/">
          <button className="btn">
            <FontAwesomeIcon className="icon" icon=    {faArrowLeftLong} />{'Back'}
          </button>
        </Link>
        <h2>Welcome to AnalytiX <span role="img"   aria-label="wave">👋</span></h2>
        <p>Kindly fill in your details below to create an   account</p>
        <h2>Company Information</h2>
        <form className="form">
          <label>
            Company (legal) name *<br/>
            <input className="details" type="text" placeholder="Enter company legal   name" required />
          </label>
          <br />
          <label>
            Country/Region *<br/>
            <select className="choice" required>
              <option value="Poland">Poland</option>
              <option value="German">German</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Spain">Spain</option>
            </select>
          </label>
          <br />
          <label>
            Address Line 1 *<br/>
            <input className="details" type="text" placeholder=" " required />
          </label>
          <br />
          <label>
            Address Line 2<br/>
            <input className="details" type="text" placeholder=" " />
          </label>
          <br />
          <label>
            City *<br/>
            <input className="details" type="text" placeholder=" " required />
          </label>
          <br />
          <label>
            State *<br/>
            <select className="choice" required>
              <option value="">Choose a state</option>
              <option value="">Warsaw</option>
              <option value="">Lubelska</option>
              <option value="">Gdanski</option>
            </select>
          </label>
          <br />
          <label>
            Postal code *<br/>
            <input className="details" type="text" placeholder=" " required />
          </label>
        </form>
        <Link to='/sign-in'><Button name="Sign Up"/></Link>
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

export default SignUp;

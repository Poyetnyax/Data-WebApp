import Button from "../Atoms/Button";
import "./Action.css";
import person from "../../Assets/images/person.png";
import device from "../../Assets/images/device.png";
import windows from "../../Assets/images/windows.png";
import deviceShadow from "../../Assets/images/deviceShadow.png";
import formula from "../../Assets/images/formula.png";
import gear from "../../Assets/images/gear.png";
import personShadow from "../../Assets/images/personShadow.png";

function Action() {
  return (
    <div className="action-container">
      <div className="container-left">
        <div>
          <h1>Unlock Insights</h1>
        </div>
        <div>
          <p>
            <strong>Unlock & Chart Success:</strong>
            <br /> Elevate your enterprise with tailored Data Analysis Solutions
          </p>
        </div>
        <div>
          <Button name="Get Started" />
        </div>
      </div>
      <div className="illustration-container">
        <div className="illustration-left">
          <img src={device} alt="device" className="device" />
          <img src={windows} alt="windows" className="windows" />
          <img src={deviceShadow} alt="deviceShadow" className="deviceShadow" />
          <img src={formula} alt="formula" className="formula" />
          <img src={gear} alt="gear" className="gear" />
          <img src={person} alt="person" className="person" />
          <img src={personShadow} alt="personShadow" className="personShadow" />
        </div>
      </div>
    </div>
  );
}

export default Action;

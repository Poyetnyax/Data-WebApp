import Card from "./Card";
import "./Feature.css";
import icon2 from "../../Assets/images/icon2.png";
import icon3 from "../../Assets/images/icon3.png";

function Feature() {
  return (
    <div className="feature-container">
      <div className="feature-text">
        <div className="head-text">
          <h1>Rapid Data Analysis</h1>
        </div>
        <div className="feat-text">
          <p>Explore Our Cutting-Edge Software Capabilities</p>
        </div>
      </div>
      <div className="cards">
        <Card />
        <Card
          imgSrc={icon2}
          title="Data Analysis Suite"
          text="Unlock the full potential of your data with our comprehensive suite of analysis tools"
        />
        <Card
          imgSrc={icon3}
          title="Decision Support Tools"
          text="Make confident, fast-driven decisions with our intuitive tools, empowering you to navigate your business's path to success"
        />
      </div>
    </div>
  );
}

export default Feature;

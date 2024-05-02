import "./BodySection.css";

function BodySection() {
  return (
    <div className="bodysection">
      <div className="help">
        <h2>Helping a local</h2>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div className="stats">
        <div className="stats__nums">
          <h2>1,200+</h2>
          <p>Register Users</p>
        </div>
        <div className="stats__nums">
          <h2>5,000+</h2>
          <p>Customer Trends Identified</p>
        </div>
        <div className="stats__nums">
          <h2>10,000+</h2>
          <p>Product Patterns Recognized</p>
        </div>
        <div className="stats__nums">
          <h2>$1 Billion</h2>
          <p>Informed Decision Making Impact</p>
        </div>
      </div>
    </div>
  );
}

export default BodySection;

import "./Landing.css";
import Nav from "../Components/Organisms/Nav";
import Action from "../Components/Molecules/Action";
import Client from "../Components/Molecules/Client";
import Feature from "../Components/Molecules/Feature";

function Landing() {
  return (
    <div>
      <section className="nav-section">
        <Nav />
      </section>
      <section>
        <div className="action">
          <Action />
        </div>
        <div className="client">
          <Client />
        </div>
        <div className="feature">
          <Feature />
        </div>
      </section>
    </div>
  );
}

export default Landing;

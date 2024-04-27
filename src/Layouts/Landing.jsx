import "./Landing.css";
import Nav from "../Components/Organisms/Nav/Nav"
import Action from "../Components/Molecules/Action";
import Client from "../Components/Molecules/Client";
import Feature from "../Components/Molecules/Feature";
import BodySection from "../Components/Organisms/BodySection/BodySection";
import Customers from "../Components/Organisms/Customers/Customers";
import CommunityUpdates from "../Components/Organisms/CommunityUpdates/CommunityUpdates";

function Landing() {
  return (
    <div className="Page">
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
        <div className="bodysection">
          <BodySection/>
        </div>
        <div className="customers">
          <Customers/>
        </div>
        <div className="community">
          <CommunityUpdates/>
        </div>
      </section>
      
      
      
    </div>
  );
}

export default Landing;

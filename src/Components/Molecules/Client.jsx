import "./Client.css";
import action from "../../Assets/images/action.png";
import auchan from "../../Assets/images/auchan.png";
import biedronka from "../../Assets/images/biedronka.png";
import carrefour from "../../Assets/images/carrefour.png";
import euro from "../../Assets/images/euro.png";
import kaufland from "../../Assets/images/kaufland.png";
import lidl from "../../Assets/images/lidl.png";
import makro from "../../Assets/images/makro.png";
import netto from "../../Assets/images/netto.png";
import stokrotka from "../../Assets/images/stokrotka.png";
import zabka from "../../Assets/images/zabka.png";

function Client() {
  return (
    <div className="client-container">
      <div className="text-container">
        <div className="head-text">
          <h1>Our Clients</h1>
        </div>
        <div className="client-text">
          <p>We&#39;ve partnered with Fortune 500+ leaders to drive success</p>
        </div>
      </div>
      <div className="client-image">
        <a href="">
          <img src={action} alt="action" />
        </a>
        <a href="">
          <img src={auchan} alt="auchan" />
        </a>
        <a href="">
          <img src={biedronka} alt="biedronka" />
        </a>
        <a href="">
          <img src={carrefour} alt="carrefour" />
        </a>
        <a href="">
          <img src={euro} alt="euro" />
        </a>
        <a href="">
          <img src={kaufland} alt="kaufland" />
        </a>
        <a href="">
          <img src={lidl} alt="lidl" />
        </a>
        <a href="">
          <img src={makro} alt="makro" />
        </a>
        <a href="">
          <img src={netto} alt="netto" />
        </a>
        <a href="">
          <img src={stokrotka} alt="stokrotka" />
        </a>
        <a href="">
          <img src={zabka} alt="zabka" />
        </a>
      </div>
    </div>
  );
}

export default Client;

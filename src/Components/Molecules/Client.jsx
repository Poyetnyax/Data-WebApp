import "./Client.css";
import action from "../../assets/images/action.png";
import auchan from "../../assets/images/auchan.png";
import biedronka from "../../assets/images/biedronka.png";
import carrefour from "../../assets/images/carrefour.png";
import euro from "../../assets/images/euro.png";
import kaufland from "../../assets/images/kaufland.png";
import lidl from "../../assets/images/lidl.png";
import makro from "../../assets/images/makro.png";
import netto from "../../assets/images/netto.png";
import stokrotka from "../../assets/images/stokrotka.png";
import zabka from "../../assets/images/zabka.png";

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

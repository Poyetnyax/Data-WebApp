import './Customers.css';
import aldi from "../../../Assets/images/aldi.png";
import zabka from "../../../Assets/images/zabka.png";
import carrefour from "../../../Assets/images/carrefour.png";
import strokrotka from "../../../Assets/images/strokrotka.png";
import action from "../../../Assets/images/action.png";
import auchan from "../../../Assets/images/auchan.png";
import biedronka from "../../../Assets/images/biedronka.png";


function Customers() { 
    return(
        <div className="customers">
            <div className="image">
                <img src={aldi} alt="Aldi logo"/>
            </div>
            <div className="customers__more">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, numquam tempora? Dolore officia praesentium numquam veritatis expedita iusto eius, explicabo alias, totam neque, voluptas vero cupiditate in? Delectus illum velit, libero, fugit rerum deleniti veritatis, inventore explicabo minima voluptate ut voluptatum dolor necessitatibus architecto magnam porro voluptatem nobis consequatur qui.</p>
                <p>Eropean Grorcers Association</p>
                <div className="companies">
                    <img src={zabka}  alt="" className="campaniesImg" />
                    <img src={carrefour}   alt="" className="campaniesImg" />
                    <img src={strokrotka}  alt="" className="campaniesImg" />
                    <img src={action}  alt="" className="campaniesImg" />
                    <img src={biedronka}  alt="" className="campaniesImg" />
                    <img src={auchan}  alt="" className="campaniesImg" />
                </div>
            </div>
        </div>
    );
}

export default Customers;
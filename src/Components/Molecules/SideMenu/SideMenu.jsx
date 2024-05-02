import "./SideMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCartShopping, faChartLine, faChartSimple, faGear } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";

function SideMenu() {
  return (
    <div className="side-menu">
        <div className="side-top">
            <h2>
              AnalytiX
            </h2>
        </div>
        <div className="side-bottom">
            <div>
                <p>
                    <FontAwesomeIcon className="icon" icon={faChartSimple} />
                    Leaderboard
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon className="icon" icon={faCartShopping} />
                    Order
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon className="icon" icon={faBagShopping} />
                    Products
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon className="icon" icon={faChartLine} />
                    Sales Report
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon className="icon" icon={faMessage} />
                    Messages
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon className="icon" icon={faGear} />
                    Settings
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon className="icon" icon={faArrowRightFromBracket} />
                    Sign Out
                </p>
            </div>
        </div>
    </div>
  )
}

export default SideMenu
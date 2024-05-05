
import './Dashnav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import aldi from '../../../Assets/images/aldi.png';

function DashNav() {
  return (
    <nav className="nav-dash">
        <div className="nav-left">
            <h2>
                Dashboard
            </h2>
        </div>
        <div className="nav-middle">
          <input type="text" name="search" id="search" placeholder="Search here..."/>
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />  
        </div>
        <div className="nav-right">
            <div>
              <img src={aldi} alt="aldi" />
            </div>
            <div>
              <div>
                <p>
                    ALDI
                </p>
              </div>
              <div>
                <p>
                    Admin
                </p>
              </div>
            </div>
            <div>
                <FontAwesomeIcon className="icon" icon={faChevronDown} /> 
            </div>
        </div>
    </nav>
  )
}

export default DashNav
import PropTypes from "prop-types";
import "./Button.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Button({ name }) {
  return (
    <button className="button">
      {name} <FontAwesomeIcon className="icon" icon={faArrowRightLong} data-testid="icon"/>
    </button>
  );
}
Button.propTypes = {
  name: PropTypes.string,
};

export default Button;

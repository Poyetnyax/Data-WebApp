import PropTypes from "prop-types";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

/*The button Link */
export let link = '';

function Button({ name }) {
  return (
    <button className="button" >
      {name} <FontAwesomeIcon className="icon" icon={faArrowRightLong} />
    </button>
  );
}
Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
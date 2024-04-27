import PropTypes from "prop-types";
import "./Card.css";
import icon1 from "../../Assets/images/icon1.png";

function Card({ imgSrc, title, text }) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={imgSrc} alt="" />
      </div>
      <div className="head-text">
        <h2>{title}</h2>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

Card.defaultProps = {
  imgSrc: icon1,
  title: "Trend Identification",
  text: "Stay ahead of the curve by uncovering and capitalizing on the latest customer trends and product patterns",
};

export default Card;

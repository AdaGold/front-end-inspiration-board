import PropTypes from "prop-types";

const Card = (props) => {
  return(
    <div className="card">
      <p className="card-text">{props.messageData}</p>
    </div>
)};

export default Card;

Card.propTypes = {
  messageData: PropTypes.string.isRequired,
  likesCountData: PropTypes.number.isRequired,
};

import PropTypes from "prop-types";

const Card = (props) => {
  return <p>{props.messageData}</p>;
};

export default Card;

Card.propTypes = {
  messageData: PropTypes.string.isRequired,
  likesCountData: PropTypes.number.isRequired,
};

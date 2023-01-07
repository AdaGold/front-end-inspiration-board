import PropTypes from "prop-types";
import Card from "./Card";

const CardWall = (props) => {
  console.log(props.cards);
  const allCards = props.cards.map((card) => {
    return (
      <Card
        key={card.card_id}
        messageData={card.message}
        likesCountData={card.likes_count}
      />
    );
  });
  return <div>{allCards}</div>;
};

CardWall.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
    })
  ),
};

export default CardWall;

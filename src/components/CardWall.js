import PropTypes from "prop-types";
import Card from "./Card";

const CardWall = (props) => {
  const allCards = props.cards.map((card) => {
    return (
      <div className="card" key={card.card_id}>
        <Card messageData={card.message} likesCountData={card.likes_count} />
        <div id="buttons">
          <button type="button" onClick={() => props.onDelete(card)}>
            Delete
          </button>
          <p>{card.likes_count}</p>
          <button type="button" onClick={() => props.onLike(card)}>
          +1
          </button>
        </div>
      </div>
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
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CardWall;

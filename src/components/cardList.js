import PropTypes from 'prop-types'
import Card from './Card.js'


const CardList = (props) => {
    const cardComponents = props.cardData.cards.map((data, index) => {
        return (
            <li key={index}>
                    <Card
                        deleteCard={props.deleteCard}
                        text={data.message}
                        likes={data.likes_count}
                        id={data.card_id} />
            </li>
        );

    });

    return (
        <section>
            <h3>Card List</h3>
            <ul>
                {cardComponents}
            </ul>
        </section>
    );
};

CardList.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        //whatever goes in here
    })),
};




export default CardList;
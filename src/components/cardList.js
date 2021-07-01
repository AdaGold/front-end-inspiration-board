import PropTypes from 'prop-types'
import Card from './Card.js'


const CardList = (props) => {
    console.log('Hi It\'s me')
    const cardComponents = props.Card.map((Card, index) => {
        return (
            <li key={index}>
                <Card
                    id='string'>
                </Card>
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
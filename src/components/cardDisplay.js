import { useEffect, useState } from "react";
import { Card } from "./Card"
const axios = require('axios');



//we'll have to have a get request to get all the cards associated w board id. that will be inputed from the state on app from the selected board

// props we should expect [{message: , likes_count: , board_id: }]
//or we could send selected board in as prop and make the get call for all cards in this component

const CardDisplay = (props) => {

    const [cards, setCards] = useState([])
    // const getCardsbyBoardId = () => {
    //     axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards`)
    //         .then(function (response) {
    //             const cards = response
    //             // setCardsbyBoardId(cards)
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    // };

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards`)
            .then((response) => {

                setCards(response.data.cards)

            })
    }, [props.board.id])


    const cardsList = cards.map((card) => {
        return <div>
            <Card key={card.id} message={card.message} likescount={card.likes_count}></Card>
        </div>
    });

    return <div>
        {cardsList}
    </div>
}
//     return <div>
//         blah
//     </div>
// }


export default CardDisplay;
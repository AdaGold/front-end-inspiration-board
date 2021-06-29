import { Card } from "./Card"
//we'll have to have a get request to get all the cards associated w board id. that will be inputed from the state on app from the selected board

// props we should expect [{message: , likes_count: , board_id: }]
//or we could send selected board in as prop and make the get call for all cards in this component

const CardDisplay = (props) => {

//     const getCardsbyBoardId = (props.board_id) => {
//         //this function will be triggered bly click action on board all boards will be displayed on app
//         axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/board_id/cards`)
//         .then(function (response){
//             const cards = response
//             // setCardsbyBoardId(cards)
//         })
//         .catch(function (error){
//         console.log(error)
//         })
//     };


//     return props.cards.map((card) => {
//         return<Card key={card.id} message={card.message} likescount={card.likes_count} />
//     });


// }


export default CardDisplay;
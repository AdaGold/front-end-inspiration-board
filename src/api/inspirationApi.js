import axios from 'axios';

const boards = [
    { id: 1, title: 'board 1', owner: 'andrea'},
    { id: 2, title: 'board 2', owner: 'jacob'},
    { id: 3, title: 'board 3', owner: 'zillow'},
];

const cards = [
    { boardId: 1, title: 'first card', message: 'board 1 -- card 1' },
    { boardId: 1, title: 'second card', message: 'board 1 -- card 2' },
    { boardId: 1, title: 'third card', message: 'board 1 -- card 3' },
    { boardId: 2, title: 'first card', message: 'board 2 -- card 1' },
    { boardId: 2, title: 'second card', message: 'board 2 -- card 2' },
    { boardId: 2, title: 'third card', message: 'board 2 -- card 3' },
    { boardId: 3, title: 'first card', message: 'board 3 -- card 1' },
    { boardId: 3, title: 'second card', message: 'board 3 -- card 2' },
    { boardId: 3, title: 'third card', message: 'board 3 -- card 3' }
];

class InspirationApi {    
    async mockNewBoard(board) {
        const newBoard = {...board, id: Math.floor(Math.random() * 1000) + 4}
        boards.push(newBoard)
        return newBoard;
    }

    async mockCards(boardId) {
        // return cards
        return cards.filter(board => board.boardId === boardId);
    }
    
    async mockBoards() {
        return boards;
    }

    async incrementCardLike(cardLikes) {
        return cardLikes + 1;
    }

    async incrementCardLike() {
        // backend not yet implemented 
    }

    async addCard(boardId, message) {
        return axios.post(`https://duck-backend.herokuapp.com/boards/${boardId}/cards`, message)
            .then((response) => {
                console.log('POST response', response)
                return response.data;
            })
            .catch((error) => {
                console.log('POST error', error)
                return error;
            });
    }

    async addBoard(board) {
        // return this.mockNewBoard(board);
        
        return axios.post('https://duck-backend.herokuapp.com/boards', board)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    async getBoards() {
        // return this.mockBoards();
        return axios.get('https://duck-backend.herokuapp.com/boards')
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    }

    async getCards(boardId) {
        // return this.mockCards(boardId);
        
        return axios.get(`https://duck-backend.herokuapp.com/boards/${boardId}/cards`)
        .then((response) => {
            console.log('AXIOS', response)
            return response.data.cards;
        })
        .catch((error) => {
            console.log('get cards failed!', error)
            return [];
        });
    }
};

export default InspirationApi;

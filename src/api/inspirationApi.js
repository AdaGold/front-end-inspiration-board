class InspirationApi {

    async mockCards() {
        const cards = [
            { boardId: 1, title: 'first card', message: 'gotta do it' },
            { boardId: 1, title: 'second card', message: 'gotta do it 2' },
            { boardId: 1, title: 'third card', message: 'gotta do it 3' }
          ];
        return cards;
    }
    
    async mockBoard() {
        const boards = [
            { id: 1, title: 'board 1', owner: 'andrea'},
            { id: 2, title: 'board 2', owner: 'jacob'},
            { id: 3, title: 'board 3', owner: 'zillow'},
        ];
        return boards;
    }

    async getBoard() {
        // TODO: replace below with get.axios
        return this.mockBoard();
    }
    async getCards() {
        // TODO: replace below with get.axios
        return this.mockCards();
    }
};

export default InspirationApi;
class InspirationApi {
    // constructor(apiKey, baseUrl) {
    //     this.apiKey = apiKey;
    //     this.baseUrl = baseUrl || US_BASE_URL;
    // }

    async mockCards() {
        const cards = [
            { boardId: 1, title: 'first card', message: 'gotta do it' },
            { boardId: 1, title: 'second card', message: 'gotta do it 2' },
            { boardId: 1, title: 'third card', message: 'gotta do it 3' }
          ];
        return cards;
    }
    
    async mockBoard() {
    //     try {
    //         const response = await axios.get(
    //             `${this.baseUrl}${SEARCH_URL}`, { params:
    //             {
    //                 key: this.apiKey,
    //                 q: location,
    //                 format: 'json'
    //             }});
    
    //         const { lat: latitude, lon: longitude } = response.data[0];
    //         return { location, latitude, longitude };
    //     } catch (error) {
    //         const message = error.response.data.error;
    //         throw { message };
    //     }
    // }
        const boards = [
            { id: 1, title: 'board 1', owner: 'andrea'},
            { id: 2, title: 'board 2', owner: 'jacob'},
            { id: 3, title: 'board 3', owner: 'zillow'},
        ]

        return boards;
    }

    async getBoard() {
        // TODO: replace below with get.axios
        return this.mockBoard()
    }
};

export default InspirationApi;
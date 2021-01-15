const axios = require('axios');

const init = async () => {
    const gameService = new GameService(axios);
    const games = await gameService.getAll();
    console.log(games);
}
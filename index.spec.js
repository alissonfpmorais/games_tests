const httpClient = require('./httpClient.helper');

const init = async () => {
    const gameService = new GameService(httpClient);
    const games = await gameService.getAll();
    console.log(games);
}
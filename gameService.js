const Game = require('./game');

module.exports = class GameService {
    httpClient;

    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    /**
     * Resposta da requisição: [ { id: string, nome: string, plataforma: string } ]
     */
    async getAll() {
        const gamesDto = await this.httpClient.get('/all');
        return gamesDto.map((gameDto) => new Game(gameDto.nome, gameDto.platforma))
    }
};
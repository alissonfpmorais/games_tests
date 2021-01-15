const gamesDto = [
    {
        id: '1',
        nome: 'hades',
        plataforma: 'pc'
    }
];

const get = (endpoint) => {
    switch(endpoint) {
        case 'all':
        default:
            return gamesDto;
    }
};

module.exports = { get };
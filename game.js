module.exports = class Game {
    name;
    platform;

    constructor(name, platform) {
        this.name = name;
        this.platform = platform;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setPlatform(platform) {
        this.platform = platform;
    }

    getPlatform() {
        return this.platform;
    }
};
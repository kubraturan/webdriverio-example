class Config {
    constructor() {
        this.default();
    }

    default() {
        this.HEROKU_BASE_URL = "https://the-internet.herokuapp.com";
    }
}

module.exports = new Config();
class Config {
    constructor() {
        this.default();
    }

    default() {
        this.HEROKU_BASE_URL = "https://the-internet.herokuapp.com";
        this.PEGASUS_BASE_URL = "https://www.flypgs.com";
        this.JQUERY_BASE_URL =  "https://jqueryui.com";
        this.CLASSIC_CRMPRO_BASE_URL= "https://classic.crmpro.com"
    }
}

module.exports = new Config();
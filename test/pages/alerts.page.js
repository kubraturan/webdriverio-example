const Page = require("../common/page");
const config = require("../config");

class AlertPage extends Page {

    get result() {
        return $('#result');
    }

    getResultText() {
        return this.result.getText();
    }

    getAlertButton(index) {
        return $(`ul li:nth-child(${index}) button`);
    }

    async clickOnAlertButton(index) {
        var alert = await this.getAlertButton(index);
        await alert.waitForDisplayed();
        await alert.click();
        
    }

    open() {
        return super.open(config.HEROKU_BASE_URL, '/javascript_alerts');
    }

    /**
     * submit button 
     * $(`//input[@type='submit']`)
    */
}

module.exports = new AlertPage();
const Page = require("../common/page");
const Config = require("../config");

class Actions extends Page{
    
    get Menu() {
        return $('[data-megamenu]="#pegasus-seyahat"')
    }

    get SearchInput() {
        return $('#target');
    }

    get LabelText() {
        return $('#result');
    }

    getLabelTextContext() {
        this.LabelText.waitForDisplayed();
        return this.LabelText.getText();
    }

    async setSearchInput(text) {
        this.SearchInput.waitForDisplayed();
        await this.SearchInput.setValue(text);
    }

    getMoveElement(element) {
        element.waitForDisplayed();
        element.moveTo();
    }

    clickElement(element) {
        element.waitForDisplayed();
        element.click();
    }

    open(url, path) {
        return super.open(url, path);
    }
}

module.exports = new Actions();
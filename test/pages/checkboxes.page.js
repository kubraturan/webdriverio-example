const Page = require("../common/page");
const Config = require("../config");

class CheckBoxes  extends Page{
    get pageHeader() {
        return $('h3');
    }

    getCheckBoxElement(index) {
        return $(`form#checkboxes input:nth-child(${index})`);
    }

    clickOnCheckBox(index) {
        var checkbox = this.getCheckBoxElement(index);
        checkbox.waitForDisplayed();
        checkbox.click();
    }

    open() {
        return super.open(Config.HEROKU_BASE_URL, "/checkboxes");
    }
}

module.exports = new CheckBoxes();
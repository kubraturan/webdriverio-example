const config = require("../config");
const Page = require('../common/page');

class Dropdown extends Page {
    get registerButton() {
        return $('[data-testid="open-registration-form-button"]');
    }

    get monthOptions() {
        return $$('#month option');
    }

    get day() {
        return $('#day');
    }

    get month() {
        return $('#month');
    }
    
    get year() {
        return $('#year');
    }

    clickRegisterButton() {
        this.registerButton.click();
    }



    open() {
        return super.open(config.FACEBOOK_BASE_URL, "/");
    }
}

module.exports = new Dropdown();
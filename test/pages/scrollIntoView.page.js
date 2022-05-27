const Page = require('../common/page');

class ScrollIntoView extends Page{
    get ForgotPassword() {
        return $('=Forgot Password?');
    }

    async moveToElement(element) {
        element.waitForDisplayed();
        await element.moveTo();
    }

    open(url, path) {
        return super.open(url, path);
    }
}

module.exports = new ScrollIntoView();
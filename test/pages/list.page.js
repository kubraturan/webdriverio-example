class ListPage {
    getLinkElement(index) {
        return $(`ul li:nth-child(${index}) a`);
    }

    clickOnLink(index) {
        var element = this.getLinkElement(index);
        element.waitForDisplayed();
        element.click();

    }
}

module.exports = new ListPage();
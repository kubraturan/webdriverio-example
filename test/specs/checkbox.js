const checkboxesPage = require("../pages/checkboxes.page");

describe("handling checkboxes", () => {
    it("check page url", async () => {
        await checkboxesPage.open();
        var browserUrl = await browser.getUrl();
        expect(browserUrl).toEqual("https://the-internet.herokuapp.com/checkboxes");
    })

    it("check page header", async () => {
        var pageHeader = await checkboxesPage.pageHeader;
        await pageHeader.waitForDisplayed();
        var text = await pageHeader.getText();
        expect(text).toEqual("Checkboxes");

    })

    it("should click checkbox", async () => {
        await checkboxesPage.clickOnCheckBox(1);

        var checkBoxElement = await checkboxesPage.getCheckBoxElement(1).isSelected();

        expect(checkBoxElement).toEqual(false);

        await browser.pause(5000);
    })
})
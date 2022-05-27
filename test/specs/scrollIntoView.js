const config = require("../config");
const scrollIntoViewPage = require("../pages/scrollIntoView.page")

describe('scrollIntoView check', () => {
    it('check forgot Password Text', async () => {
        scrollIntoViewPage.open(config.CLASSIC_CRMPRO_BASE_URL, "/");
        const forgotPassword = scrollIntoViewPage.ForgotPassword;
        const checkText = await forgotPassword.isDisplayedInViewport();
        expect(checkText).toEqual(false);

        await browser.pause(5000);
    })
    
    it('forgot Password Text', async () => {
        scrollIntoViewPage.open(config.CLASSIC_CRMPRO_BASE_URL, "/");
        const forgotPassword = scrollIntoViewPage.ForgotPassword;

        await forgotPassword.scrollIntoView();
        await scrollIntoViewPage.moveToElement(forgotPassword);
        await forgotPassword.click();
        await browser.pause(5000);
    })
})
const Page = require('../common/page');
const { CLASSIC_CRMPRO_BASE_URL } = require('../config');

describe('waitForEnabled' , () => {
    it('submit button wait for enabled', async() => {
        var page = await new Page();
        await page.open(CLASSIC_CRMPRO_BASE_URL, '/register');
        const checkBox = await $(`//input[@name='agreeTerms']`);
        const submitButton = await $(`#submitButton`);

        await checkBox.click();
        await browser.pause(3000);
        await submitButton.waitForEnabled(4000);
        var buttonEnabled = await submitButton.isEnabled();
        expect(buttonEnabled).toEqual(true);
    })

    it('submit button wait for disabled', async() => {
        var page = await new Page();
        await page.open(CLASSIC_CRMPRO_BASE_URL, '/register');
        const checkBox = await $(`//input[@name='agreeTerms']`);
        const submitButton = await $(`#submitButton`);

        await checkBox.waitForDisplayed();
        await checkBox.click();
        await submitButton.waitForEnabled(4000);
        
        var buttonEnabled = await submitButton.isEnabled();
        expect(buttonEnabled).toEqual(true);

        await browser.pause(3000);
        await checkBox.click();
        await submitButton.waitForEnabled({ timeout:4000 , reverse: true });
        await browser.pause(3000);
        buttonEnabled = await submitButton.isEnabled();
        expect(buttonEnabled).toEqual(false);
    })
})
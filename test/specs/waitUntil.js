const Page = require('../common/page');
const {HEROKU_BASE_URL } = require('../config');

describe('waitForExist' , () => {
    it('submit button wait for enabled', async() => {
        var page = await new Page();
        await page.open(HEROKU_BASE_URL, '/login');
        
        const username = $('#username');
        const password = $('#password');
        const loginButton = $(`//button[@type='submit']`);

        await browser.waitUntil(
            async () => (await username.isDisplayed()) === true,
            {
                timeout: 5000,
                timeoutMsg: 'email is not displayed after the given time'
            }
        );

        await username.setValue('tomsmith');
        await password.setValue('SuperSecretPassword!');
        await loginButton.click();

        await browser.pause(3000);

        var header = await $('h2').getText();

        await browser.waitUntil(
            async () => (await header) === 'Secure Area',
            {
                timeout: 5000,
                timeoutMsg: 'header is not displayed after the given time'
            }
        );

        expect(header).toEqual('Secure Area');

        await browser.pause(3000);
    })
})
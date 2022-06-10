const config = require('../config');
const alertsPage = require('../pages/alerts.page');

describe('alerts test', () => {
    it('accept alert', async () => {
       await alertsPage.open();
       await alertsPage.clickOnAlertButton(1);

       const alertText = await browser.getAlertText();
       expect('I am a JS Alert').toEqual(alertText);

       await browser.acceptAlert();
       const alertResult = await alertsPage.getResultText();
       expect('You successfully clicked an alert').toEqual(alertResult);

       await browser.pause(5000);
    })

    it('dismiss alert', async () => {
        await alertsPage.open();
        await alertsPage.clickOnAlertButton(2);
 
        await browser.dismissAlert();
        const alertResult = await alertsPage.getResultText();
        expect('You clicked: Cancel').toEqual(alertResult);
 
        await browser.pause(5000);
    })

    it('enter text on alert and accept', async () => {
        await alertsPage.open();
        await alertsPage.clickOnAlertButton(3);
 
        await browser.sendAlertText('this is alert text');
        await browser.acceptAlert();
        const alertResult = await alertsPage.getResultText();
        expect('You entered: this is alert text').toEqual(alertResult);
 
        await browser.pause(5000);
    })
})
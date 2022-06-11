const Page = require('../common/page');
const { HEROKU_BASE_URL } = require('../config');

describe('waitForExist' , () => {
    it('submit button wait for enabled', async() => {
        var page = await new Page();
        await page.open(HEROKU_BASE_URL, '/add_remove_elements/');
        const addButton = await $(`//button[text()='Add Element']`);
        const deleteButton = await $(`//button[text()='Delete']`);

        await addButton.waitForDisplayed();
        await addButton.click();

        await browser.pause(3000);

        await deleteButton.waitForExist(2000);
        var deleteButtonExist = await deleteButton.isExisting();
        expect(deleteButtonExist).toEqual(true);

        await deleteButton.click();
        await browser.pause(3000);
        deleteButtonExist = await deleteButton.isExisting();
        expect(deleteButtonExist).toEqual(false);
        await browser.pause(1000);
    })

    it('submit button wait for disabled', async() => {
        // var page = await new Page();
        // await page.open(CLASSIC_CRMPRO_BASE_URL, '/add_remove_elements');
        // const checkBox = await $(`//input[@name='agreeTerms']`);
        // const submitButton = await $(`#submitButton`);

        // await checkBox.waitForDisplayed();
        // await checkBox.click();
        // await submitButton.waitForEnabled(4000);
        
        // var buttonEnabled = await submitButton.isEnabled();
        // expect(buttonEnabled).toEqual(true);

        // await browser.pause(3000);
        // await checkBox.click();
        // await submitButton.waitForEnabled({ timeout:4000 , reverse: true });
        // await browser.pause(3000);
        // buttonEnabled = await submitButton.isEnabled();
        // expect(buttonEnabled).toEqual(false);
    })
})
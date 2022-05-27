const dropdownPage = require('../pages/dropdown.page');
describe('facebook dropdown set value', () => {
    it('select dropdown value by attribute index', async () => {
        await dropdownPage.open();
        await dropdownPage.clickRegisterButton();

        await dropdownPage.day.selectByVisibleText("3");
        await dropdownPage.month.selectByVisibleText("Oca");
        await dropdownPage.year.selectByVisibleText("2022");

        await browser.pause(5000);
    });

    it('select dropdown value by attribute index', async () => {
        await dropdownPage.open();
        await dropdownPage.clickRegisterButton();

        await dropdownPage.day.selectByIndex(3);
        await dropdownPage.month.selectByIndex(9);
        await dropdownPage.year.selectByIndex(12);

        await browser.pause(5000);
    });

    it('select dropdown value by attribute value', async () => {
        await dropdownPage.open();
        await dropdownPage.clickRegisterButton();

        await dropdownPage.day.selectByAttribute('value',"3");
        await dropdownPage.month.selectByAttribute('value',"1");
        await dropdownPage.year.selectByAttribute('value',"2022");

        await browser.pause(5000);
    });

    it.skip('get all values from dropdown', async () => {
       await dropdownPage.open();
       await dropdownPage.clickRegisterButton();

       const list = dropdownPage.monthOptions;
       if (list.length > 0) {
            list.map(month => {
                if (month.getText() === 'Mar') {
                    month.click();
                }
            })
       }
       
       await browser.pause(5000);
    });
})
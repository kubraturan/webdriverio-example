const config = require("../config");
const actionsPage = require("../pages/actions.page")

describe("actions", () => {
    // it ("pagesus seyahat click", async() => {
    //     await actionsPage.open();
    //     await actionsPage.getMoveElement(actionsPage.Menu);
    //     await actionsPage.clickElement(actionsPage.Menu);

    //     await browser.pause(5000)
    // })

    it.skip("keys actions", async () => {
        //https://w3c.github.io/webdriver/#keyboard-actions
        await actionsPage.open(config.HEROKU_BASE_URL, "/key_presses");
        await actionsPage.setSearchInput("Tab");

        var labelText = await actionsPage.getLabelTextContext();
         await expect(labelText).toEqual("You entered: TAB");

        await browser.pause(5000);
    })

    it.skip("drag and drop actions", async () => {
        await actionsPage.open(config.JQUERY_BASE_URL, "/resources/demos/droppable/default.html");

        const draggable = await $('#draggable');
        const droppable = await $('#droppable');
        await draggable.dragAndDrop(droppable);

        const text = await $('#droppable p').getText();
        expect(text).toEqual("Dropped!");
        await browser.pause(5000);
    })
})
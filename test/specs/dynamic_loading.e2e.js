const loading = require('../pageobjects/loading.page')
describe('loading page', ()=>{
it("wait for the hidden element to show", async ()=>{
    await loading.open();
    await loading.btnSart.click();
    await loading.loadingbar.waitForDisplayed();
    await loading.loadingbar.waitForDisplayed({ reverse: true });
   // await loading.afterloading.waitForDisplayed();
    await expect(loading.afterloading).toHaveText('Hello World!');

})
})
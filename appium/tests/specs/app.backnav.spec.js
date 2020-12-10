
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

describe('Backnavigation and app in app test', () => {
    beforeEach(() => {
        $('~main-screen').waitForDisplayed(20000);
    });

    it('should be able to open app inside of app and navigate backwards', async () => {

        const s = await driver.status()
        console.log("status is:", s)

        // driver.setImplicitTimeout(7000)
        const mainScreen = await driver.$("~main-screen");        
        const bitcoinTile = await driver.$("~main-screen-tile-BITCOIN");
        await sleep(3000)

        bitcoinTile.click()
        await sleep(2000)
        const buyButton = await driver.$("~detail-screen-buy-button");
        buyButton.click()
        await sleep(2000)
        const inpt = await driver.$("~detail-screen-modal-input");
        console.log(inpt)
        inpt.setValue(100)
        await sleep(2000)
        const submitButton = await driver.$("~detail-screen-modal-submit")
        submitButton.click()
        await sleep(6000)
    });

});

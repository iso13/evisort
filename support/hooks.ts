const {After, AfterAll, Status} = require("cucumber");
import {browser} from "protractor";


After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});

AfterAll({timeout: 100 * 1000}, async function () {
    //await browser.quit();
    await browser.driver.close();
});

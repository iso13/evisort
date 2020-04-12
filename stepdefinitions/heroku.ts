import {Given, When, Then} from "cucumber";
import {slow} from 'blue-harvest';
import {browser, by, $, protractor} from 'protractor';
import {config} from "../config/config";


Given('I start the Dynamic Loading challenge', async function () {
    browser.driver.get(config.herokuUrl);
});

Given('I take the {string} challenge', {timeout: 5 * 5000}, async function (string) {
    browser.driver.get(config.herokuUrl + "/2");
});

When('I start the application', {timeout: 5 * 5000}, async function () {
    browser.driver.findElement(by.css('div#start > button')).click();
});

Then('I should see {string}', {timeout: 5 * 5000}, async function (message) {
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.invisibilityOf($("#loading > img")), 10000);
    await slow.see(message);
});

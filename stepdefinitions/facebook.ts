import {Given, Then, When} from "cucumber";
import {browser} from "protractor";
import {config} from "../config/config";
import {LoginPage} from "../pages/loginPage";

const login: LoginPage = new LoginPage();

Given('I start the Facebook challenge', function () {
    browser.driver.get(config.facebookUrl);
});

When('I log into my account', {timeout: 10 * 5000}, async function () {
    await browser.driver.findElement(login.emailField).sendKeys('dttran73@yahoo.com');
    await browser.driver.findElement(login.passwordField).sendKeys('Tester1234!');
    await browser.driver.findElement(login.loginButton).click();
});

Then('I am able to logout', {timeout: 10 * 5000}, function () {
    browser.executeScript('window.localStorage.clear();');
    browser.executeScript('window.sessionStorage.clear();');
    browser.driver.manage().deleteAllCookies();
});

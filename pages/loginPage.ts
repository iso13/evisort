import {By} from "selenium-webdriver";

export class LoginPage {
    public emailField = By.css('input#email');
    public passwordField = By.css('input#pass');
    public loginButton = By.css('input#u_0_b');
}

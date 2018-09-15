browser.ignoreSynchronization = true;

import BasePage from './basePage';
import {element} from 'protractor';


class LoginPage extends BasePage {
    constructor() {
        super();
        this.url = 'identity/login';
        this.tb_user = element(by.xpath("//input[@placeholder='Username']"));
        this.tb_password = element(by.xpath("//input[@placeholder='Password']"));
        this.btn_login = element(by.xpath("//button[contains(text(),'Login')]"));
        this.pageLoaded = this.titleIs('Login - UserManagement.Identity');
        
    }

      valid_login() {
        browser.waitForAngularEnabled(false);
       this.tb_user.click();
       this.tb_user.sendKeys('Manuel');
       this.tb_password.click();
       this.tb_password.sendKeys('mn');
       this.btn_login.click();
       
       
       
        
    }
}
export default new LoginPage();
browser.ignoreSynchronization = false;
import BasePage from './basePage';
import {element} from 'protractor';


class ApisNewPage extends BasePage {
    constructor() {
        super();
        this.url = 'identityadmin/#/apis/new';
        this.name = element(by.id("name"));
        this.displayName = element(by.id("displayName"));
        this.save_api = element(by.xpath("//button[contains(text(), 'save API')]"));


        this.pageLoaded = this.isVisible(this.save_api);
        
    }

    fill_form_new_api(name, description){
        console.info('api name fill');
        this.name.sendKeys(name);
        this.displayName.sendKeys(description);
        browser.logger.info('click save button');
      //  browser.waitForAngularEnabled(false);
        this.save_api.click();
        browser.logger.info('after click save button');
        
    }

}
export default new ApisNewPage();
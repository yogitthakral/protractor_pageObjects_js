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

    fill_form_new_api(){
        console.info('api name fill');
        this.name.sendKeys('test');
        this.displayName.sendKeys('test');
        this.save_api.click();
        
    }

}
export default new ApisNewPage();
browser.ignoreSynchronization = false;
import BasePage from './basePage';
import {element} from 'protractor';


class ApisPage extends BasePage {
    constructor() {
        super();
        this.url = 'identityadmin/#/apis';
        this.dropdown_user = element(by.xpath("//a[@class='nav-link dropdown-toggle']"));
        this.dropdown_user_logout = element(by.xpath("//a[contains(text() , 'Log Out')]"));

        this.btn_create_api = element(by.xpath("//a[@href='#/apis/new']"));
        
        this.pageLoaded = this.isClickable(this.btn_create_api);
        
    }

    create_api(){
        this.btn_create_api.click();

    }
    delete_api(name){
        this.btn_delete_api = element(by.xpath("//a[@href='#/apis/edit/"+name+"']/..//button"));
        this.isClickable(this.btn_delete_api);
        browser.waitForAngularEnabled(false);
        this.btn_delete_api.click();
        
    }

}
export default new ApisPage();
browser.ignoreSynchronization = false;
import BasePage from './basePage';
import {element} from 'protractor';


class IdentityPage extends BasePage {
    constructor() {
        super();
        this.url = 'identityadmin/#/grants';
        this.dropdown_user = element(by.xpath("//a[@class='nav-link dropdown-toggle']"));
        this.dropdown_user_logout = element(by.xpath("//a[contains(text() , 'Log Out')]"));

        this.sidebar_link_apis = element(by.xpath("//a[@class='sidenav-link']/div[contains(text(), 'APIs')]"));

        this.pageLoaded = this.isClickable(this.dropdown_user);
        
    }

      logout() {

       this.dropdown_user.click();
       this.dropdown_user_logout.click();
        
    }

    goto_apis(){
        this.sidebar_link_apis.click();
    }
}
export default new IdentityPage();
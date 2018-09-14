browser.ignoreSynchronization = true;
import BasePage from './basePage';
import {element} from 'protractor';


class LandingPage extends BasePage {
    constructor() {
        super();
        this.url = '/identityadmin/#/welcome';
        this.link_login = element(by.xpath("//a[. = 'Login']"));
        this.pageLoaded = this.titleIs('Welcome - UM.ID-Admin');
        
    }

      goto_login_page() {
          console.info('goto login page');
        browser.wait(this.isClickable(this.link_login), 5000);
        this.link_login.click();

        
    }
}
export default new LandingPage();
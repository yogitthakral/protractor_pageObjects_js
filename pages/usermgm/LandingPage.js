browser.ignoreSynchronization = true;
import BasePage from './basePage';


class LandingPage extends BasePage {
    constructor() {
        super();
        this.url = '/identityadmin/#/welcome';
        this.link_login = element(by.xpath("//a[. = 'Login']"));
        this.pageLoaded = this.isClickable(this.link_login);
        
    }

      goto_login_page() {

       this.link_login.click();
        
    }
}
export default new LandingPage();
browser.ignoreSynchronization = true;
import BasePage from './basePage';


class IdentityPage extends BasePage {
    constructor() {
        super();
        this.url = 'identity';
        this.link_logout = element(by.xpath("//a[contains(@href,'logout')]"));
        this.pageLoaded = this.isClickable(this.link_logout);
        
    }

      logout() {

       this.link_logout.click();
        
    }
}
export default new IdentityPage();
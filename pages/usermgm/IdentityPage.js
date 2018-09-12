browser.ignoreSynchronization = true;
import BasePage from './basePage';


class IdentityPage extends BasePage {
    constructor() {
        super();
        this.url = 'identityadmin/#/grants';
        this.dropdown_user = element(by.xpath("//a[@class='nav-link dropdown-toggle']"));
        this.dropdown_user_logout = element(by.xpath("//a[contains(text() , 'Log Out')]"));
        this.pageLoaded = this.isClickable(this.dropdown_user);
        
    }

      logout() {

       this.dropdown_user.click();
       this.dropdown_user_logout.click();
        
    }
}
export default new IdentityPage();
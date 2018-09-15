import LoginPage from '../../pages/usermgm/LoginPage';
import { ExpectedConditions } from 'protractor';
import IdentityPage from '../../pages/usermgm/IdentityPage';
import LandingPage from '../../pages/usermgm/LandingPage';
import ApisPage from '../../pages/usermgm/ApisPage';
import ApisNewPage from '../../pages/usermgm/ApisNewPage';

describe('LoginPage', () => {

    beforeEach(() => {
        console.info('before each')
        //LoginPage.goto();
        
    });

    it('login with valid user', () => {
        console.info("goto landing page");
        LandingPage.goto();
        LandingPage.goto_login_page();
       expect(LoginPage.loaded()).toBe(true);
        LoginPage.valid_login();
        //loginPage.hasText(loginPage.text_about);
        expect(IdentityPage.loaded()).toBe(true);
        IdentityPage.goto_apis();
        expect(ApisPage.loaded()).toBe(true);
        ApisPage.delete_api('abc');
        browser.pause();
        browser.wait(protractor.ExpectedConditions.alertIsPresent(), 10000);
        browser.switchTo().alert().accept();
        
        



       /* ApisPage.create_api();
        expect(ApisNewPage.loaded()).toBe(true);
        ApisNewPage.fill_form_new_api();
        expect(ApisPage.loaded()).toBe(true);
    */
        browser.pause();
        

        //IdentityPage.isClickable(IdentityPage.sidebar_link_apis).toBe(true);
        
        
    });
//HACK
    xit('logout', ()=> {
        IdentityPage.logout();
        expect(LandingPage.loaded()).toBe(true);
        
    });
});
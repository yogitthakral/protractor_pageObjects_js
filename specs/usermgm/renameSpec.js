import LoginPage from '../../pages/usermgm/LoginPage';
import { ExpectedConditions } from 'protractor';
import IdentityPage from '../../pages/usermgm/IdentityPage';
import LandingPage from '../../pages/usermgm/LandingPage';


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
        
        
    });
//HACK
    xit('logout', ()=> {
        IdentityPage.logout();
        expect(LandingPage.loaded()).toBe(true);
        
    });
});
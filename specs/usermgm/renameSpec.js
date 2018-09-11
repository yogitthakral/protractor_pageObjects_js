import LoginPage from '../../pages/usermgm/LoginPage';
import { ExpectedConditions } from 'protractor';
import IdentityPage from '../../pages/usermgm/IdentityPage';



describe('LoginPage', () => {

    beforeEach(() => {
        console.info('hello before')
        LoginPage.goto();
        
    });

    it('login with valid user', () => {
        console.info("try to login");
        LoginPage.valid_login();
        //loginPage.hasText(loginPage.text_about);
        expect(IdentityPage.loaded()).toBe(true);
        
    });

    it('logout', ()=> {
        IdentityPage.logout();
    });
});
browser.ignoreSynchronization = true;
import BasePage from './basePage';
import {element} from 'protractor';
import { protractor } from 'protractor/built/ptor';

class AboutPage extends BasePage {
    constructor() {
        super();
        this.url = 'about';
        this.text_about = element(by.xpath("//h2[contains(text(), 'About')]"));
        this.pageLoaded = this.isVisible(element(by.xpath("//h2[contains(text(), 'About')]")));
        
    }

    /**
     * check if a post title exists
     * @param  {string} postTitle
     * @return {bool}
     */
    about_title_exists() {
        return this.text_about.isPresent();
    }
}
export default new AboutPage();
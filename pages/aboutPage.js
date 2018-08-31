browser.ignoreSynchronization = true;
import BasePage from './basePage';

class AboutPage extends BasePage {
    constructor() {
        super();
        this.url = 'about';
        this.pageLoaded = this.isVisible(this.h2_about_text());
        this.text_about = element(by.xpath("//h2[contains(text(), 'About')]"));
    }

    h2_about_text() {
        //return element(by.cssContainingText('a', postTitle)).isPresent();
        return element(by.xpath("//h2[contains(text(), 'About')]"));
    }
}
export default new AboutPage();
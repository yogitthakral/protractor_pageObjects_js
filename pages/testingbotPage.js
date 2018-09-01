browser.ignoreSynchronization = true;
import BasePage from './basePage';


class TestingbotPage extends BasePage {
    constructor(){
        super();
        this.url = 'https://www.testingbot.com';
        this.pageLoaded  = this.inDom($('div.page-interstitial'));
        //this.pageLoaded  = this.hasText(element(by.xpath("//h2[contains(text(), 'About')]")));
    }
}
export default new TestingbotPage();
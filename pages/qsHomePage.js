// page is non-angular
browser.ignoreSynchronization = true;
import BasePage from './basePage';
import search from './searchModule';
import { element } from 'protractor';

class QsHomePage extends BasePage {
    constructor() {
        super();
        // include modules...
        this.search = search;

        this.posts = $$('div.post');
        this.postTitleLinks = $$('h2 a');
        this.siteTitle = $('h1 a');
        // sidebar...
        this.sidebar = $('div#sidebar');
        // social media links....
        this.githubLink = $('a#githubLink');
        // pagination
        this.prevPageLink = element(by.cssContainingText('a', '← Older Entries'));
        this.link_testbot = element(by.cssContainingText('a', 'TestingBot'))
        this.url_testingbot = 'https://testingbot.com/';
        this.url = 'http://qualityshepherd.com';
        // pageLoaded is used by `.loaded()` to test that we're on a page
        this.pageLoaded = this.and(
            this.hasText(this.siteTitle, 'Quality Shepherd'),
            this.isClickable(this.postTitleLinks.first())
        );
    }

    /**
     * check if a post title exists
     * @param  {string} postTitle
     * @return {bool}
     */
    postTitleExists(postTitle) {
        return element(by.cssContainingText('a', postTitle)).isPresent();
    }

    /**
     * Page back till we find the post title
     * or run out of previous posts
     * @param  {string} postTitle
     * @return {bool}
     */
    findPostByPaging(postTitle) {
        return this.postTitleExists(postTitle).then(found => {
            if(found) {
                // found it!
                return true;
            } else {
                // prevPageLink not displayed on first page
                this.prevPageLink.isPresent().then(yup => {
                    if(yup) {
                        this.prevPageLink.click();
                        this.findPostByPaging(postTitle); // call recursively till found...
                        // wait for page to load...
                        this.loaded();
                    } else {
                        // post not found
                        return false;
                    }
                });
            }
        });
    }

     waitForUrlToChangeTo() {
        var EC = browser.ExpectedConditions;
        browser.wait(EC.urlContains('testingbot'), 10000); // Checks that the current URL contains the expected text
       // browser.wait(EC.urlIs('https://www.testingbot.com'), 10000); // Checks that the current URL matches the expected text
    }

}
export default new QsHomePage();
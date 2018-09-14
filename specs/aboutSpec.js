import aboutPage from '../pages/aboutPage';

describe('About Page', () => {

    beforeEach(() => {
        console.info('hello beofre')
        aboutPage.goto();
    });

    it('has Text available h2 About', () => {
        console.info("Hello");
        expect(aboutPage.loaded()).toBe(true);
        expect(aboutPage.about_title_exists()).toBe(true);
        
    });
});
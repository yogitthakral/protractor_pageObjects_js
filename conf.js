// solves `SyntaxError: Unexpected token import`
require("babel-register")({
    presets: [ 'es2015' ]
});
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    /**
     *  Uncomment ONE of the following to connect to: seleniumServerJar OR directConnect. Protractor
     *  will auto-start selenium if you uncomment the jar, or connect directly to chrome/firefox
     *  if you uncomment directConnect.
     */
    //seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar",
    directConnect: true,

    specs: ['specs/*links_Spec.js'],
    //specs: ['specs/test_external_links_speck.js'],
    baseUrl: 'http://qualityshepherd.com',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    
    },

    onPrepare: () => {
        // set browser size...
        browser.manage().window().setSize(1024, 800);

        // better jasmine 2 reports...
        //const SpecReporter = require('jasmine-spec-reporter');
        //jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'specs'}));

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './test/reports',
                fileName: "test",
                fileNameDateSuffix: true,
                takeScreenshotsOnlyOnFailures: true,
                cleanDestination: false
                //git test
            })
        );
    },

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log'
            ],
            prefs: {
                // disable chrome's annoying password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    },

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: () => {},
        defaultTimeoutInterval: 50000
    }
};
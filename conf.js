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

    specs:
    //['specs/aboutSpec.js'],
    ['specs/usermgm/*Spec.js'],
    //baseUrl: 'http://qualityshepherd.com',
    //baseUrl: 'https://stp.stp-cloud-dev.azure.local/identity/',   
    baseUrl: 'https://stp.stp-cloud-dev.azure.local/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    
    },

    onPrepare: () => {
        // set browser size...
var a = this;
        browser.manage().window().setSize(1024, 800);

        scriptName=function(){
            var fileName_;
             browser.getProcessedConfig().then(function(config){              
                var fullName = config.specs[0];
                a = fullName.substring(fullName.lastIndexOf('\\')+1);
                return a;
            });
                    
        
            console.log('fileName_:', fileName_); 
            return fileName_;
        };



        // better jasmine 2 reports...
        //const SpecReporter = require('jasmine-spec-reporter');
        //jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'specs'}));

        jasmine.getEnv().addReporter(
            
           
            new Jasmine2HtmlReporter({
                
                savePath: './test/reports',
                fileName: 'result_' ,
                fileNameDateSuffix: false,
                takeScreenshotsOnlyOnFailures: true,
                consolidate: true,
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
    },

};
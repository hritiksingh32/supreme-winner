const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const usrOnBoardfun = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const signUpPageObject = require(protractor.basePath + '/test/pageObject/signUpPageObj.js');

describe('AU_041,TenantSpecificValidation.', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/explore';
        browser.get(Url+AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize(); 
       
    
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });
    it('TenantSpecificValidation',function(){
        utility.handleLocationPopup();
        signUpPageObject.validateTenantFramework();
        signUpPageObject.languageVerify();
        utility.validateDifferentStateUrl("ap");
        utility.validateDifferentStateUrl("tn");
        utility.validateDifferentStateUrl("up");
        utility.validateDifferentStateUrl("mp");
        
    })

 
   
});
   

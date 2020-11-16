const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const usrOnBoardfun = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const signUpPageObject = require(protractor.basePath + '/test/pageObject/signUpPageObj.js');

describe('Login into Application with custodian user and verify language selection,location update and mobile and email id also .', () => {

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
    it('UpdateProfileDataAsCustodianUser',function(){
        utility.handleLocationPopup();
        utility.userLogin('CustodianUser');
        signUpPageObject.languageVerify();
       
        
    })

 
   
});
   

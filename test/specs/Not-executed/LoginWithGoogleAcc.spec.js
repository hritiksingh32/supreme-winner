const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');

describe('LoginWithGoogleAcc', () => {

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
       // utility.userLogout();
        browser.manage().deleteAllCookies();
        
    });
    it('LoginWithGoogleAcc',function(){
       
        utility.handleLocationPopup();
        sanityFun.signWithGoogle();
        utility.userLogoutForGoogle();
        sanityFun.GoogleAfterLogin();
        utility.userLogoutForGoogle();
    });
});
   


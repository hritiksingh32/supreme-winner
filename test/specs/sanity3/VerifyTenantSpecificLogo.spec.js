const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');

describe('Verify Tenant Specific Logo', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url=getAppURL.ConfigurePath().AppURL;
        browser.get(Url, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize(); 
       
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
        
    });
    it('VerifyTenantSpecificLogo',function(){
       
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/tn';
        browser.get(Url+AppendExplore, 40000);     
       // sanityFun.verifyTenantLogo();

        sanityFun.verifyTNTenantLogo();
    });
});
   


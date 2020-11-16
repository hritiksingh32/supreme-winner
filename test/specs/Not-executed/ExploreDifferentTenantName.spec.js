const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');

describe('Verify exploreDifferentTenantName', () => {

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
    
    it('exploreDifferentTenantName',function(){
        utility.handleLocationPopup();
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/ap';
        browser.get(Url+AppendExplore, 40000);     
        browser.sleep(2000);
        sanityFun.exploreDifferentTenantName();
        
    });
});
   


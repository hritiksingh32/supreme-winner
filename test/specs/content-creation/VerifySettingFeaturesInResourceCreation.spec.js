const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifySFIRCPageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');

describe('able to ceate multiple slides and preview all', () => {

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
        utility.userLogout();
        browser.manage().deleteAllCookies();
    });
    it('VerifySettingFeaturesInResourceCreation',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        verifySFIRCPageObj.resourceName();
        verifySFIRCPageObj.verifySettingFeatures();
       
       
    })

    
});
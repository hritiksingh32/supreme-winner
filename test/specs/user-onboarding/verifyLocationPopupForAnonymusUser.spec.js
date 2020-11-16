
const usrOnBoardfun = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');

describe('Verify Location Popup for anonymus User', () => {

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

    it('AU_015-verifyLocationPopupForAnonymusUser',function(){

        usrOnBoardfun.verifyLocationPopupForAnonymusUser();
        utility.userLogin('Custod2');
        usrOnBoardfun.custodianUsersProfilePageValidations();

});
});
const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const shareTCPageObj = require(protractor.basePath+'/test/pageObject/collectionPageObj.js');

describe('Logi into Application with mentor user,shareTheConentUsingLink,Logout', () => {

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
    it('ShareTheContent',function(){
        utility.handleLocationPopup();
        utility.userLogin('Mentor');
        shareTCPageObj.clickLibraryPage();
        let link = shareTCPageObj.shareTheConentUsingLink('Collections');
        utility.userLogout();
      //  shareTCPageObj.verifyCollection();
        utility.userLogin('Mentor');
        shareTCPageObj.clickLibraryPage();
        let linkNew = shareTCPageObj.shareTheConentUsingLink('Resource');
        utility.userLogout();
        //shareTCPageObj.verifyResource();

    });
 
     
});
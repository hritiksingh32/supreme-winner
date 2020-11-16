const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');


describe('Verifiy user is getting add user option in his profile and able to switch to multiple users ', () => {

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
      //  utility.userLogout();
        browser.manage().deleteAllCookies();
    });
    it('AddUserAndValidate ',function(){
        utility.handleLocationPopup();
        utility.userLogin('Admin');
        verifyCEBpageobj.addUserInProfile();
        
    })

 
   
});
   

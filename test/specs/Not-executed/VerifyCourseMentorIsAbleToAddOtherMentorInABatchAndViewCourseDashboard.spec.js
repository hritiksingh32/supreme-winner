const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCMATAOMIBAVCDPageObj = require(protractor.basePath+'/test/pageObject/contentCreationPageObj.js');

describe('Mentor is able To See ViewDashboard ', () => {

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
    it('VerifyCourseMentorIsAbleToAddOtherMentorInABatchAndViewCourseDashboard',function(){
         utility.handleLocationPopup();
         utility.userLogin('Mentor2');
         verifyCMATAOMIBAVCDPageObj.viewCourseDashBoardDetails();
         verifyCMATAOMIBAVCDPageObj.downloadCSVAndCompare();
       
        
           
   
    })
    
   
   
    
});
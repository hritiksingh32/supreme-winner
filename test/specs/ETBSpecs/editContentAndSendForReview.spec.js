const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/etbPageObj.js');
describe('editContentAndSendForReview', () => {

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
    it('editContentAndSendForReview',function(){
        utility.handleLocationPopup();
        utility.userLogin('Book Creator');
        etbFun.navigateToWorkspace('Book');
        let courseName=etbFun.checkBookInDraftSection();
        etbPageObj.sendForReviewTheBook();
        etbFun.reviewInSubmissions(courseName);
        utility.userLogout();
        utility.userLogin('Reviewer');
        etbFun.rejectTheContent(courseName)
        utility.userLogout();
        utility.userLogin('Book Creator');
        etbFun.editQRCodeAndSubmit();
        utility.userLogout();
        utility.userLogin('Reviewer');
        etbFun.searchInUpForReview(courseName)
        etbFun.publishAndSearch1(courseName);
        utility.userLogout();
        utility.userLogin('Creator');
        etbFun.navigateToWorkspaceFeatures('ALL_MY_CONTENT');
        etbFun.searchBookInAllMyContent(courseName);
      
        
    })
   
    

 
});
   

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const ccPageObj = require(protractor.basePath+'/test/pageObject/contentCreationPageObj.js');

describe('Merge Account ', () => {

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
    
    it('MergeAccountAndVerifyStatusOfCommonConsumedCourse',function(){
        utility.handleLocationPopup();
        utility.userLogin(username,password);
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(coursename);
        tpdPageObj.enrollForOpenBatch();
        var custodianProgress= ccPageObj.clickOnNextButton();
        utility.userLogout();
                 
        utility.userLogin('Public User1');
        utility.mergeAccount(username,password);
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(coursename);
        ccPageObj.checkConsumptionStatus(custodianProgress);
      
        
      
       

    });
});
   


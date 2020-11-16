const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const collectionPageObj = require(protractor.basePath+'/test/pageObject/collectionPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js')

describe('content reviewer is able to Publish/Reject contents by clicking on Publish or Request for changes button.', () => {

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
    it('RejectTheCollectionAndVerifyInDraft',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let collectionName=collectionPageObj.createCollection();
        collectionPageObj.sendForReviewTheCollection();
        resourcePageObj.reviewInSubmissions(collectionName);
         utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.rejectLessonPlan(collectionName)
        utility.userLogout();
        utility.userLogin('Creator');
        resourcePageObj.editTheContentInDraftForCollections();
        
    })

    
   
});
   

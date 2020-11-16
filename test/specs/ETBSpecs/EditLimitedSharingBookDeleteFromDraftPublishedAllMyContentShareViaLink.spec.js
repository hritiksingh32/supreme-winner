const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/etbPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
describe('AU_035,EditLimitedSharingBookDeleteFromDraftPublishedAllMyContentShareViaLink.', () => {

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
    it('EditLimitedSharingBookDeleteFromDraftPublishedAllMyContentShareViaLink',function(){
        utility.handleLocationPopup();
        utility.userLogin('Book Creator');
        let bookName= etbPageObj.createBook();
        console.log(bookName);
        etbPageObj.sendForReviewTheBook();
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.rejectLessonPlan(bookName)
        utility.userLogout();

        utility.userLogin('Book Creator');
        utility.validateWorkspace();
        lspPageObj.deleteCreatedItems();      
         
    })

   
   
});
   

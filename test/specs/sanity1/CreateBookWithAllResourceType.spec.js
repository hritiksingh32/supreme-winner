const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/etbPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('Create Book with all resource type, save and send for review and publish.', () => {

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
    it('CreateBookWithAllResourceType',function(){
        utility.handleLocationPopup();
        utility.userLogin('Book Creator');
        let bookName=etbPageObj.createBookWithAllResourceType();
        etbPageObj.sendForReviewTheBook();
        utility.userLogout();
        utility.userLogin('Book Reviewer');
        etbPageObj.publishTheBookFromUpForReview(bookName);
        utility.userLogout();
        utility.userLogin('Book Creator');
        utility.validateWorkspace();
        lspPageObj.deleteCreatedItems();
       
    })

   
   
});
   

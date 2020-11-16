const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/etbPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('AU_032,CreateBookAndTagConcepts.', () => {

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
    it('CreateBookAndTagConcepts',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let bookName= etbPageObj.createBookWithSpecificResourceType("concept");
        console.log(bookName);
        etbPageObj.sendForReviewTheBook();
        utility.userLogout();
        utility.userLogin('Reviewer');
        etbPageObj.publishTheBookFromUpForReview(bookName);
        utility.userLogout();
        utility.userLogin('Creator');
        utility.validateWorkspace();
        lspPageObj.deleteCreatedItems();      
         
    })

   
   
});
   

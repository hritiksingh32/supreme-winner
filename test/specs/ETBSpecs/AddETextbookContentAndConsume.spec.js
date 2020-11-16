const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/etbPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');

describe('AddETextBookContentAndConsume.', () => {

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
    it('AddETextBookContentAndConsume',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let bookName= etbPageObj.createBook();
        console.log(bookName);
        etbFun.addCollectionInAddResoucePage('etextbook');

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
   

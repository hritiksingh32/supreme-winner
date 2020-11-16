const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const createRW4M4F4MPageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');

describe('Crea is Able to CreateQuestionAS4McQ,4MTF,4FLB and its navigate and Consume by other Users and Creator Can Delete that resource', () => {

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
        // utility.userLogout();
        browser.manage().deleteAllCookies();
    });
    it('CreateResourceWith4MCQ4FTB4MTF',function(){

        utility.handleLocationPopup();

        utility.userLogin('Creator');
        let contentName=createRW4M4F4MPageObj.createQuestionsWith4MCQ4FTB4MTF();
        createRW4M4F4MPageObj.sendForReviewTheResource();
     //   createRW4M4F4MPageObj.reviewInSubmissions(contentName);
        utility.userLogout();

        
        utility.userLogin('Reviewer');
        createRW4M4F4MPageObj.publishTheResourceFromUpForReview(contentName);
        utility.userLogout();

           
        utility.userLogin('Public User1');
        createRW4M4F4MPageObj.navigateToLibraryAndSearchForResource(contentName);
        utility.userLogout();

        utility.userLogin('Creator');
        createRW4M4F4MPageObj.deleteCreatedItems();
       
      
    })
    
});
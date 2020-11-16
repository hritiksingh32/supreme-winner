const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const usrOnBoardfun = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');



describe('be able to create Arrange in Sequence', () => {

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
    it('createQuestionArrangInSequenceTemplate', function () {
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let courseName = resourcePageObj.createQuestionArrangeSequenceTemplateWithAllStyles();
        resourcePageObj.sendForReviewTheResource();
               utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.publishTheResourceFromUpForReview(courseName);
        utility.userLogout();
        utility.userLogin('Public User1');
        resourcePageObj.ConsumeResourceAndValidateScoreForArrangeSequenceTemplate(courseName);
       


    });




});


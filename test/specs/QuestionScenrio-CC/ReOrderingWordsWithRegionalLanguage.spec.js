const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const usrOnBoardfun = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
const resourcePageObj = require(protractor.basePath + '/test/pageObject/resourcePageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');



describe('Vrify that user is able to create Reordering words Question type with 120 characters in answer in Regional language and English', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url = getAppURL.ConfigurePath().AppURL;
        var AppendExplore = '/explore';
        browser.get(Url + AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize();

    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        utility.userLogout();
        browser.manage().deleteAllCookies();
    });

    it('ReOrderingWordsWithRegionalLanguage', function () {
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let courseName = resourcePageObj.reOrderingWordsWithRegionalLanguage();
        resourcePageObj.sendForReviewTheResource();
        resourcePageObj.reviewInSubmissions(courseName);
         utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.publishTheResourceFromUpForReview(courseName);
        utility.userLogout();
        utility.userLogin('Public User1');
        resourcePageObj.ConsumeResourceAndValidateScoreForRegionalLangReOrderingTemplate(courseName);
       

    });
});
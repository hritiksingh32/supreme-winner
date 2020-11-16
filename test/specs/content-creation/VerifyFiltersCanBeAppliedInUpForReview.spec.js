const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const usrOnBoardfun = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const ccPageObj = require(protractor.basePath + '/test/pageObject/contentCreationPageObj.js');
const resourcePageObj = require(protractor.basePath + '/test/pageObject/resourcePageObj.js');

describe('VeriyFiltersCanBeAppliedInUpForReview', () => {

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
    it('VerifyFiltersCanBeAppliedInUpForReview', function () {
        utility.handleLocationPopup();
        utility.userLogin('Reviewer');
        ccPageObj.reviewerUpForReview();
        ccPageObj.showFilters();
        ccPageObj.allMyContentSortByDropdown();
        ccPageObj.verifyPagination();
        utility.userLogout();
        // utility.userLogin('Creator');
        // let resourceName=resourcePageObj.createResource();
        // resourcePageObj.sendForReviewTheResource();
        // resourcePageObj.reviewInSubmissions(resourceName);
        // utility.userLogout();
        // utility.userLogin('Reviewer');
        // ccPageObj.requestChanges(resourceName);
        // utility.userLogout();
        // utility.userLogin('Creator');
        // ccPageObj.navigateToWorkspace1();
        // ccPageObj.checkDraftContentRequestComment();
       



    });




});


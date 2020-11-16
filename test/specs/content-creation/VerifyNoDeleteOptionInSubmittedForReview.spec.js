const { element } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');


describe('Verfy No delete Option available for content or draft in submitted for review', () => {

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
    it('VerifyNoDeleteOptionInSubmittedForReview',function(){

        utility.handleLocationPopup();
        utility.userLogin('Creator');
        resourcePageObj.NoDeleteOptionInSubmittedForReview();
        let contentName=resourcePageObj.createQuestionFITBWithAllStyles();
        resourcePageObj.sendForLimitedSharing(contentName);
        resourcePageObj.clickingTheResourceFromShareViaLinkBucket();
        resourcePageObj.sendForReviewInShareVialink();
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.reviewInSubmissions();
        resourcePageObj.publishTheResourceFromUpForReview(contentName);
        utility.userLogout();
        utility.userLogin('Creator');
        resourcePageObj.deleteCreatedItems();

    });
});
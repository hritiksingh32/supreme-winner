const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath + '/test/pageObject/resourcePageObj.js');

describe('Ve that creator is able to edit already published content, send for review and Republish the content', () => {

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
    it('EditAndRepublishTheContent', function () {

        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let resourceName = resourcePageObj.createResource();
        resourcePageObj.sendForReviewTheResource();
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.publishTheResourceFromUpForReview(resourceName);
        utility.userLogout();
        utility.userLogin('Creator');
        resourcePageObj.clickingTheResourceFromPublishedBucket();
        resourcePageObj.sendForReviewTheResourceAfterEditing();
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.publishTheResourceFromUpForReview(resourceName);

    });
});
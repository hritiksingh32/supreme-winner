const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath + '/test/pageObject/resourcePageObj.js');

describe('Verifthat when a question is copied which belong to different tenant user is able to select the question metadata details ', () => {

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

    it('VerifyCopiedQuestionReflectsWithDetails', function () {

        utility.handleLocationPopup();
         utility.userLogin('Creator');
        resourcePageObj.CreateQuestionAndSubmit();
        resourcePageObj.copyQuestioninQnSet();


    });
});
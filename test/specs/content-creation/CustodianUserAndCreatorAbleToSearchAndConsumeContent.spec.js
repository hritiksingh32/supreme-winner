const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const custUACATSACCPageObj = require(protractor.basePath+'/test/pageObject/contentCreationPageObj.js');

describe('Vefy, Content creator is able to get the contnet in Library section by Searching with content name OR by applying filters.', () => {

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
    it('CustodianUserAndCreatorAbleToSearchAndConsumeContent',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        var content=custUACATSACCPageObj.searchContentInLibraryAndFetchFirstContent('Resource');
        custUACATSACCPageObj.searchContentInLibrary(content);
        custUACATSACCPageObj.navigateToLibraryAndSearchForLessonPlan();
        custUACATSACCPageObj.consumeTheCourseInLibrarySection();
        custUACATSACCPageObj.applyFilterInLibrarySection();
        utility.userLogout();
        utility.userLogin('CustodianUser');
        var content=custUACATSACCPageObj.searchContentInLibraryAndFetchFirstContent('Resource');
        custUACATSACCPageObj.searchContentInLibrary(content);
        custUACATSACCPageObj.navigateToLibraryAndSearchForLessonPlan();
        custUACATSACCPageObj.consumeTheCourseInLibrarySection();
        custUACATSACCPageObj.applyFilterInLibrarySection();
        
    })
   
     
});
const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const addMCAVPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('able to addCollaborator and callobarator can edit and sendforreview ,checkthe course in submission for review', () => {

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
    it('AddMultipleCollaboratorAndVerify',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let courseName = addMCAVPageObj.searchCollaboratorBySearchField();
        utility.userLogout();
        utility.userLogin('Mentor');
        addMCAVPageObj.collaboratorSendTheCourseForReview(courseName);
        addMCAVPageObj.saveAndSendNewCourseForReview();
        utility.userLogout();
        utility.userLogin('Creator');
        addMCAVPageObj.checkTheCourseInReviewSubmision(courseName);
      
      
    })
    
   
   
    
});
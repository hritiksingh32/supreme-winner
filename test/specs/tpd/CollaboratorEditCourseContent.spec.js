const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const collaECCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('colobartor not able to delete the course', () => {

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
    it('CollaboratorEditCourseContent',function(){
        utility.handleLocationPopup();

        utility.userLogin('Creator');
        let courseName = collaECCPageObj.searchCollaboratorBySearchField();
        utility.userLogout();
        utility.userLogin('Mentor');
        collaECCPageObj.collaboratorSendTheCourseForReview(courseName);
        collaECCPageObj.saveAndSendNewCourseForReview();
        utility.userLogout();
        utility.userLogin('Creator');
        collaECCPageObj.reviewStatusCollaborator();
       






        // utility.userLogin('Mentor');
        // collaECCPageObj.createCourseAddCollaborator();
        // utility.userLogout();
        // utility.userLogin('Creator');
        // collaECCPageObj.collaborator1CanEditCourse();
        // utility.userLogout();
        // utility.userLogin('SubOrgMentor');
        // collaECCPageObj.collaborator2CanEditCourse();
        // utility.userLogout();
        // utility.userLogin('Creator');
        // collaECCPageObj.reviewStatusCollaborator();
        // utility.userLogout();
        // utility.userLogin('Mentor');
        // collaECCPageObj.collaboratorNotAbleToDeleteCourse();
        // utility.userLogout();
      
    })
    
   
   
    
});
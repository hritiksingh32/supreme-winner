const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const CreateIOBBAMAMFRASPageObj = require(protractor.basePath+'/test/pageObject/contentCreationPageObj.js');

describe('User is able to CreateIntive batch And Able add and remove Mentors and Is able to Consume By Other Users', () => {

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
    it('CreateIOBatchByAddingMembersAndMentorsFromRootAndSubOrg',function(){
         utility.handleLocationPopup();
        var contentName = 'CourseADurward';
        utility.userLogin('Mentor');
        CreateIOBBAMAMFRASPageObj.createInviteBatch(contentName);
        CreateIOBBAMAMFRASPageObj.batchNameAndEndDateIsMandatoryFields2();
        CreateIOBBAMAMFRASPageObj.inviteOnlybatchCanBeCreatedAndUpdatedWithoutEndDate();
        utility.userLogout();

        utility.userLogin('Admin');
        CreateIOBBAMAMFRASPageObj.consumeTheCourseOfInviteOnly(contentName);
        utility.userLogout();

        
         utility.userLogin('Mentor');
         CreateIOBBAMAMFRASPageObj.clearTheFieldNameOfTheBatchAndStartDate(contentName);
         CreateIOBBAMAMFRASPageObj.errorMessageShouldComeAsEndDateShouldBeGreaterThanStartDate();
         CreateIOBBAMAMFRASPageObj.createUpcomingBatch();
          CreateIOBBAMAMFRASPageObj.removeMemberFromTheBatch();
         CreateIOBBAMAMFRASPageObj.checkInCreatedByMe();
         CreateIOBBAMAMFRASPageObj.checkInAssignToMeSection();
       
    
       
      
 
    })

});
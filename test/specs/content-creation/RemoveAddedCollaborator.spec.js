const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const addCTLPPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const removeACPageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');

describe('Lointo Application with Creator user,Remove the Added Collobartor,Logout', () => {

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
    it('RemoveAddedCollaborator',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        addCTLPPageObj.createLessonPlan() ;
        removeACPageObj.removeCollaborator();
       
         
       

    });
 
     
});
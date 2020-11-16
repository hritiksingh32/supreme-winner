const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const genericFun = require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');


describe('CheckTrackableCollection', () => {

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
    it('CheckTrackableCollection ',function(){
        utility.handleLocationPopup();
        var sheetPath = getAppURL.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        browser.sleep(2000);
        let trackablecollectionName=cred[32]['CourseDescription'];
        let untrackableCollectionName=cred[32]['Title'];
        utility.userLogin('Creator');
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(untrackableCollectionName);
        tpdPageObj.verifyBookUI();
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(trackablecollectionName);
        tpdPageObj.verifyCourseUI();

        
        
    })

   
   
});
   

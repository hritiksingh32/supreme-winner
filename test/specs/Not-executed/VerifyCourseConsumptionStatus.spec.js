const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCCSPageObj = require(protractor.basePath+'/test/pageObject/signUpPageObj.js');

describe('verifyCourseConsumptionStatus ', () => {

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
    it('verifyCourseConsumptionStatus',function(){
         utility.handleLocationPopup();
         utility.userLogin('Public User1');
         //utility.loginAsUser('USERPREFIX,"user",CUSTODIANUSERSUFFIX');
         verifyCCSPageObj.navigateToParticularCourseAndSearchForOpenBatch("Course MNO");
        var fetchCoursename= verifyCCSPageObj.enrollForOpenBatch();
         verifyCCSPageObj.consumeAndVerifyConsumptionForNoContents("Your Progress 0%");
         verifyCCSPageObj.consumeAndVerifyConsumptionFor10Contents("Your Progress 10%");
         verifyCCSPageObj.consumeAndVerifyConsumptionFor10Contents("Your Progress 20%");
         verifyCCSPageObj.consumeAndVerifyConsumptionFor10Contents("Your Progress 30%");
         verifyCCSPageObj.consumeAndVerifyConsumptionFor10Contents("Your Progress 40%");
         verifyCCSPageObj.consumeAndVerifyConsumptionFor10Contents("Your Progress 50%");
         verifyCCSPageObj.unrollForOpenBatch();
         verifyCCSPageObj.checkTheCourseInMyCourseSection(fetchCoursename);
         verifyCCSPageObj.navigateToParticularCourseAndSearchForOpenBatch(fetchCoursename);
         verifyCCSPageObj.enrollForOpenBatch();
         verifyCCSPageObj.verifyCourseResumedFromSameCourseAfterStopingTheconsumption();
         verifyCCSPageObj.consumeAndVerifyConsumptionFor10Contents("Your Progress 60%");
         verifyCCSPageObj.consumeAndVerifyConsumptionFor10Contents("Your Progress 70%");
         verifyCCSPageObj.consumeAndVerifyConsumptionFor10Contents("Your Progress 80%");
         verifyCCSPageObj.consumeAndVerifyConsumptionFor10Contents("Your Progress 90%");
         verifyCCSPageObj.consumeAndVerifyConsumptionFor10Contents("Your Progress 100%");
         verifyCCSPageObj.trainingAttendedIsAvailableInProfilePage();
        
            
    });
  });
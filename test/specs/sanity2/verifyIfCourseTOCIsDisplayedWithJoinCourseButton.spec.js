//const { protractor } = require("protractor/built/ptor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const ETBFun = require(protractor.basePath+'/test/pageObject/ETBPageObj/EtbPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');

describe('Verify user is able to apply the filter in the course tab', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/explore-course';
        browser.get(Url+AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize(); 
       
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
        
        
    });
    it('verifyIfCourseTOCIsDisplayedWithJoinCourseButton',function(){
        utility.handleLocationPopupForOtherExplorer();
        ETBFun.ApplyFilterInCourseTab();

});
});

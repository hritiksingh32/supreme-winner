const verifyCEBpage = require(protractor.basePath+'/test/pages/sanity/VerifySignInPopupInExploreCourseEnrollButton.js');
var verifyCEBObj=verifyCEBpage.VerifySignInPopupInExploreCourseEnrollButton();
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
const wait = require(protractor.basePath +'/helper/waiters.js');
const genericFun= require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');
let getExcelPath=require(protractor.basePath + '/test/pathFolder/changePath.js');
const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
var content=ccpage.contentCreation();
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');

const validateSignInPopupOnClickOnEnroll=()=>{
   
    try{
     console.log("User is in Explore-Course Page");
     browser.sleep(1000);
     browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerCourse), 20000, "headerCourse is not available");
     content.headerCourse.click();
     browser.sleep(1000);
     browser.wait(protractor.ExpectedConditions.visibilityOf(content.courseCard), 20000, "courseCard is not available");
     content.courseCard.click();
     console.log("Click on Searched Course");
     browser.sleep(2000);
     browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.enrollButton), 20000, "enrollButton is not available");
     verifyCEBObj.enrollButton.click();
     browser.sleep(2000);
     expect(verifyCEBObj.assertSignInPopup.isDisplayed).toBeTruthy();
     
     
   console.log("Login has appeared on Click on Enroll button in Explore Course Page");
   
    browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj. assertSignInPopup), 20000, "assertSignInPopup is not available");
    verifyCEBObj. assertSignInPopup.click();
    console.log("User is trying to login");
   
    var sheetPath=getExcelPath.ConfigurePath().excelSheetPath;
   var cred= genericFun.readLoginDataFromExcelFile(sheetPath,'1','Public User1');
   browser.sleep(1000);
    
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.userName), 20000, "userName is not available");
    content.userName.sendKeys(cred[0]['Username']);
    content.password.sendKeys(cred[0]['Password']);
    content.login.click();

   console.log("User successfully logged in as user role");   
         
   expect(verifyCEBObj.validateTOCForOpenBatchCourse.isDisplayed).toBeTruthy(); 
   
   console.log("TOC Page Displayed Succesfully for OpenBatch Course");
   

   }
   catch(Exception)
   {
           console.log("Failed on Validating SignInPopup on click on Enroll button in Explore-Course Page");
   }
}
const validateSignInPopupOnClickOnEnrollOnLatestCourse=()=>{
   
    try{
     console.log("User is trying to validateSignInPopupOnClickOnEnrollOnLatestCourse");
     browser.sleep(1000);
     browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerCourse), 20000, "headerCourse is not available");
     content.headerCourse.click();
     browser.executeScript("arguments[0].scrollIntoView();", verifyCEBObj.clickOnFirstLatestCourses);
     browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.clickOnFirstLatestCourses), 20000, "clickOnFirstLatestCourses is not available");
     verifyCEBObj.clickOnFirstLatestCourses.click();
     console.log("Click on Searched Course");
     browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.enrollButton), 20000, "enrollButton is not available");
     verifyCEBObj.enrollButton.click();
     browser.sleep(2000);
     expect(verifyCEBObj.assertSignInPopup.isDisplayed).toBeTruthy();
     
     
   console.log("Login has appeared on Click on Enroll button in Explore Course Page");
   
    browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj. assertSignInPopup), 20000, "assertSignInPopup is not available");
    verifyCEBObj. assertSignInPopup.click();
    console.log("User is trying to login");
   
    var sheetPath=getExcelPath.ConfigurePath().excelSheetPath;
   var cred= genericFun.readLoginDataFromExcelFile(sheetPath,'1','Public User1');
   browser.sleep(1000);
    
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.userName), 20000, "userName is not available");
    content.userName.sendKeys(cred[0]['Username']);
    content.password.sendKeys(cred[0]['Password']);
    content.login.click();

   console.log("User successfully logged in as user role");   
         
   expect(verifyCEBObj.validateTOCForOpenBatchCourse.isDisplayed).toBeTruthy(); 
   
   console.log("TOC Page Displayed Succesfully for OpenBatch Course");
   

   }
   catch(Exception)
   {
           console.log("Failed on Validating SignInPopup on click on Enroll button on latest course in Explore-Course Page");
   }
}
const validateLatestCourseAndCount=()=>{
   
  try{
   console.log("User is trying to validateFeaturedCourseAndCount");
   browser.sleep(1000);
   browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerCourse), 20000, "headerCourse is not available");
   content.headerCourse.click();
   browser.sleep(1000);
   browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.clickSecondCourseInOpenForEnrollment), 20000, "clickSecondCourseInOpenForEnrollment is not available");
  // browser.executeScript("arguments[0].scrollIntoView();", verifyCEBObj.teacherCourseLabel);
  browser.executeScript('window.scrollTo(0,200);').then(function () {
    console.log('++++++SCROLLED Down+++++');
}); 
  
  browser.sleep(1000);
   expect(verifyCEBObj.teacherCourseLabel.isDisplayed).toBeTruthy();
   console.log("Latest course Label verified");
   expect(verifyCEBObj.teacherCourseCount.isDisplayed).toBeTruthy();
   console.log("Latest course count verified");
   browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.clickOnFirstTeacherCourses), 20000, "clickOnFirstLatestCourses is not available");
   browser.sleep(1000);
   verifyCEBObj.clickOnFirstTeacherCourses.click();

   browser.executeScript('window.scrollTo(0,0);').then(function(){
    console.log('++++++SCROLLED UP+++++');
});
   console.log("Click on latest Course content");
   browser.sleep(2000);
   
  }
   catch(e)
  {
    console.error("failed o validate latest course and count");
  }
}

const validateFeaturedCourseAndCount=()=>{
   
  try{
   console.log("User is trying to validateFeaturedCourseAndCount");
   browser.sleep(1000);
   browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerCourse), 20000, "headerCourse is not available");
   content.headerCourse.click();
   browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.clickSecondCourseInOpenForEnrollment), 20000, "clickSecondCourseInOpenForEnrollment is not available");
  // browser.executeScript("arguments[0].scrollIntoView();", verifyCEBObj.studentCourse);
   
  browser.sleep(1000);
   expect(verifyCEBObj.studentCourse.isDisplayed).toBeTruthy();
   console.log("Latest course Label verified");
   expect(verifyCEBObj.StudentCoursesCount.isDisplayed).toBeTruthy();
   console.log("Latest course count verified");
  // browser.executeScript("arguments[0].scrollIntoView();", verifyCEBObj.clickOnFirststudentCourses);
   browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.clickOnFirststudentCourses), 20000, "clickOnFirstLatestCourses is not available");
   browser.sleep(1000);
   verifyCEBObj.clickOnFirststudentCourses.click();
   console.log("Click on featured Course content");
   browser.sleep(2000);
   
  }
   catch(e)
  {
    console.error("failed to validate featured course and count");
  }
}
const navigateToGetPage =()=>{
  try
  {
    console.log("User is trying to navigate to get page ");
    var Url=getAppURL.ConfigurePath().AppURL;
    var AppendExplore='/get';
    browser.get(Url+AppendExplore, 40000);  
    browser.driver.navigate().refresh();  
    console.log("User successfully navigated to get page ");
  }
  catch(es)
  {
    console.error("failed to navigate to get page, "+es);
  }
}
const clickOnEnrollAndConsume=()=>{
   
  try{
   console.log("User is trying to clickOnEnrollAndConsume");
   browser.sleep(1000);
   browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerCourse), 20000, "headerCourse is not available");
   content.headerCourse.click();
   browser.sleep(3000);
   //browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.clickSecondCourseInOpenForEnrollment), 20000, "clickSecondCourseInOpenForEnrollment is not available");
   
   var we =verifyCEBObj.clickOnFirstFeauredCourses;
  browser.executeScript("arguments[0].scrollIntoView();", we.getWebElement()).then(function(){
  we.click();
  });
   
   browser.executeScript("arguments[0].scrollIntoView();", verifyCEBObj.clickOnFirstFeauredCourses);
   browser.sleep(1000);
   verifyCEBObj.clickOnFirstFeauredCourses.click();
   console.log("Click on Searched Course");
   browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.enrollButton), 20000, "enrollButton is not available");
   verifyCEBObj.enrollButton.click();
   browser.sleep(2000);
 console.log("User has Clicked on Enroll button in Course Page");
 expect(verifyCEBObj.startConsuming.isDisplayed).toBeTruthy(); 
 console.log("start button is verified Succesfully for OpenBatch Course consumption");
 

 }
 catch(Exception)
 {
      console.log("Failed on Validating SignInPopup on click on Enroll button in Explore-Course Page");
 }
}
const addUserInProfile=()=>{
   var userName;
  try
  {
   console.log("User is trying to addUserInProfile");
   browser.sleep(1000);
   browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown is not available");
   content.headerDropdown.click();
   browser.sleep(1000);
   browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.addUser), 20000, "addUser is not available");
   verifyCEBObj.addUser.click();
   console.log("Clicked on add user");
   userName= "User"+faker.randomData().firstname;
   browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.enterName), 20000, "enterName is not available");
   verifyCEBObj.enterName.sendKeys(userName);
   browser.wait(protractor.ExpectedConditions.elementToBeClickable(verifyCEBObj.addUserButton), 20000, "addUserButton is not available");
   verifyCEBObj.addUserButton.click();
   browser.sleep(1000);
    console.log("added a User successfully ");
    verifyCEBObj.availableUser.getText().then(function(input){
     // expect(input).toEqual(userName);
      console.log("Verified added user: "+input);
    });
    verifyCEBObj.availableUser.click();
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(verifyCEBObj.switchUser), 20000, "switchUser is not available");
    verifyCEBObj.switchUser.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.declaration), 20000, "declaration is not available");
    verifyCEBObj.declaration.click();
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(verifyCEBObj.continueDeclaration), 20000, "switchUser is not available");
    verifyCEBObj.continueDeclaration.click();
    browser.sleep(1000);
  //   browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown is not available");
  //  content.headerDropdown.click();
  //  browser.sleep(1000);
  //  verifyCEBObj.availableUser.getText().then(function(input){
   // expect(input).toEqual(userName);
   // console.log("Verified selected user is switched : "+input);
  //});
    
    
    }
    catch(Exception)
    {
        console.log("Failed on adding user");
    }
  }

module.exports = {
    validateSignInPopupOnClickOnEnroll,
    validateSignInPopupOnClickOnEnrollOnLatestCourse,
    validateFeaturedCourseAndCount,
    validateLatestCourseAndCount,
    navigateToGetPage,
    clickOnEnrollAndConsume,
    addUserInProfile
   
    
   
}

    
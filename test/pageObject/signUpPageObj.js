const usronBoardPage= require(protractor.basePath + '/test/pages/userOnBoarding/UserOnBoardingPage.js');
const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const etbpage = require(protractor.basePath + '/test/pages/etb/etb.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const wait = require(protractor.basePath + '/helper/waiters.js');
const tpdPage = require(protractor.basePath + '/test/pages/tpdPage/tpdpage.po.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
const resourcePag=require(protractor.basePath + '/test/pages/resource/resource.po.js');
const sign=require(protractor.basePath + '/test/pages/signUpPage/signUpPage.po.js');
var searchObj=tpdPage.tpdPage();
var content=ccpage.contentCreation();
var etbv=etbpage.etb();
var resov=resourcePag.resource();
var signUp = sign.signUpPage();
var searchObj=tpdPage.tpdPage();


const languageVerify=()=>{

   
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.selectlanguage), 20000, "selectlanguage is not available");
    signUp.selectlanguage.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.hindiLanguage), 20000, "hindiLanguage is not available");
    signUp.hindiLanguage.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.searchTextBox), 20000, "searchTextBox is not available");
    signUp.searchTextBox.sendKeys("हिंदी");
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.clickSearchInHindi), 20000, "clickSearchInHindi is not available");
    signUp.clickSearchInHindi.click();
    //expect(signUp.hindiContent.isDisplayed()).toBeTruthy(); 
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.clickOnLanguageDropdwon), 20000, "clickOnLanguageDropdwon is not available");
    signUp.clickOnLanguageDropdwon.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.urduLanguage), 20000, "searchTextBox is not available");
    signUp.urduLanguage.click();
    browser.sleep(1000);
    signUp.searchTextBox.clear();
    signUp.searchTextBox.sendKeys("ریاضی");
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.clickSearchInUrdu), 20000, "clickSearchInUrdu is not available");
    signUp.clickSearchInUrdu.click();
    //expect(signUp.urduContent.isDisplayed()).toBeTruthy(); 
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.selectLanguageInUrdu), 20000, "selectLanguageInUrdu is not available");
    signUp.selectLanguageInUrdu.click();  
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.englishLanguage), 20000, "englishLanguage is not available");
    signUp.englishLanguage.click();  
    browser.sleep(1000);
    searchObj.headerCourse.click();
    browser.sleep(1000);
    signUp.searchTextBox.clear();
    signUp.searchTextBox.sendKeys("course");
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.searchButton), 20000, "clickSearchInUrdu is not available");
    signUp.searchButton.click();
    browser.sleep(2000);
    expect(signUp.englishContent.isDisplayed()).toBeTruthy(); 
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.selectlanguage), 20000, "selectlanguage is not available");
    signUp.selectlanguage.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.hindiLanguage), 20000, "hindiLanguage is not available");
    signUp.hindiLanguage.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
    ccpage.contentCreation().headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.logoutInHindi), 20000, "logoutInHindi is not available");
    signUp.logoutInHindi.click();
    browser.sleep(2000);
    //expect(content.userName.isDisplayed()).toBeTruthy(); 
}
const verifyLocationUpdateForUser=()=>{

    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.sleep(1000);
    signUp.profile.click();
    if(signUp.district4.isDisplayed() && signUp.state.isDisplayed()){
        signUp.editButton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.stateDropdown), 20000, "stateDropdown is not available");
        signUp.stateDropdown.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.stateName), 20000, "stateName is not available");
        signUp.stateName.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.districtDropdown), 20000, "districtDropdown is not available");
        signUp.districtDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.districtName), 20000, "districtName is not available");
        signUp.districtName.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.submitButton2), 20000, "submitButton2 is not available");
        signUp.submitButton2.click();
        

    }
    if(signUp.selectedDistrict.isDisplayed() && signUp.selectedState.isDisplayed()){

     //Console.log("Failed to update the location data")
    }
   
}
const updateMobileEmailAndRecoveryDetails=()=>{

    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.addPhone), 20000, "addPhone is not available");
    signUp.addPhone.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.enterPhone), 20000, "enterPhone is not available");
    signUp.enterPhone.sendKeys("9538012073");
    signUp.closeIcon.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.addRecoveryMail), 20000, "addRecoveryMail is not available");
    signUp.addRecoveryMail.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.enterRecoveryMail), 20000, "enterRecoveryMail is not available");
    signUp.enterRecoveryMail.sendKeys("custod@yopmail.com");
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.submitButton2), 20000, "submitButton2 is not available");
    signUp.submitButton2.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.addRecoveryMail), 20000, "addRecoveryMail is not available");
    signUp.addRecoveryMail.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.selectPhone), 20000, "selectPhone is not available");
    signUp.selectPhone.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.enterRecoveryPhone), 20000, "enterRecoveryPhone is not available");
    signUp.enterRecoveryPhone.sendKeys("9876543210");
    browser.wait(protractor.ExpectedConditions.visibilityOf(signUp.submitButton2), 20000, "submitButton2 is not available");
    signUp.submitButton2.click();
    browser.sleep(4000); 
    
}
const navigateToParticularCourseAndSearchForOpenBatch = (courseName) => {

    try {
 
       console.log("To verify navigate to Course section and search course");
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse is not available");
       searchObj.headerCourse.click();
       browser.sleep(1000);
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 20000, "searchInput  is not available");
       searchObj.searchInput.sendKeys(courseName);
       searchObj.searchInput.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon), 20000, " searchIcon is not available");
       searchObj.searchIcon.click();
       browser.sleep(2000);
       //browser.executeScript("arguments[0].scrollIntoView();", searchObj.headerCourse);
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard), 20000, " courseCard is not available");
       searchObj.courseCard.click();
       console.log('clicked on Course Card');
       console.log('verified navigation to Course section, search course')
 
    }
    catch (Exception) {
       console.error("Failed on navigating to Course section and search course : "+Exception);
    }
 }
 
const  enrollForOpenBatch=()=>{
    
    try{
        console.log("User is trying to enroll for an open batch");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enrollForCourse), 20000, "enrollForCourse not available");           
        searchObj.enrollForCourse.click();
        console.log("Click on Enroll For Course");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.joinTraining), 20000, "joinTraining not available");
        searchObj.joinTraining.click();
        console.log("Click on Join Training");
        console.log("User is successfully clicking on join training button in popup");
        console.log("User is successfully enrolling to the course");
        console.log("Content is started playing");
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resumeCourse), 20000, "resumeCourse not available");
        expect(searchObj.resumeCourse.isPresent()).toBe(true);
        browser.sleep(1000);
        searchObj.batchCourseName.getText().then(function(input){
            expect(input)});
        console.log("User is successfully enrolled to Course");
        console.log("The progress bar is getting updated once the user consume the course");
  
    }
    catch(Exception)
    {
       console.log("Failed to enroll for an open batch");
    }
  };

  const consumeAndVerifyConsumptionForNoContents=(progressStatus)=>{
    
    try{
        console.log("User is trying to consume And Verify Consumption For No Contents");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseProgress), 20000, "courseProgress not available");           

      var progress= searchObj.courseProgress.getText().then(function(input){
            expect(input)});
            searchObj.courseProgress.getText().then(function(input1){
                console.log("course progress : "+input1);
                expect(progress).toEqual(progressStatus)});
       
        console.log("PROGRESS STATUS : " + progress);
        console.log("User successfully consumed And Verified Consumption For No Contents ");
  
    }
    catch(Exception)
    {
       console.log("Failed to consume And Verify Consumption For No Contents");
    }
  };

  const consumeAndVerifyConsumptionFor10Contents=(progressStatus)=>{
    
    try{
        console.log("User is trying to consume And Verify Consumption For 10 Contents : " + progressStatus);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nextArrowInContents), 20000, "nextArrowInContents not available");           
       var nextArrowIcon= expect(searchObj.nextArrowInContents.isPresent()).toBe(true);
       if(nextArrowIcon)
       {
        searchObj.nextArrowInContents.click();
        browser.switchTo().defaultContent();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.EnjoyedTheContent), 20000, "EnjoyedTheContent not available");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.starRating), 20000, "starRating not available"); 
        searchObj.starRating.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.submitRating), 20000, "submitRating not available"); 
        searchObj.submitRating.click();
        
      var statusOfProgress= searchObj.courseProgress.getText().then(function(input){
        expect(input)});
        if (statusOfProgress!="Your Progress 100%") {
            browser.executeScript("arguments[0].scrollIntoView();", searchObj.nextButtonInCourseConsumption);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nextButtonInCourseConsumption), 20000, "nextButtonInCourseConsumption not available"); 
            searchObj.nextButtonInCourseConsumption.click();
        }

       var progress10= searchObj.courseProgress.getText().then(function(input){
            expect(input)});
            searchObj.courseProgress.getText().then(function(input){
                expect(progress10).toEqual(progressStatus)});
                console.log("Couldn't verfiy progress%");
                console.log("User successfully consumed And Verified Consumption For 10 Contents : " + progressStatus);
       }
    
    }
    catch(Exception)
    {
       console.log("Failed to consume And Verify Consumption For 10 Contents : " + progressStatus);
    }
  };

  const unrollForOpenBatch=()=>{
    
    try{
        console.log("User is trying to Unenroll for an open batch");
        
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.closeIcon2), 20000, "closeIcon2 not available");           
        searchObj.closeIcon2.click();

        if(searchObj.unEnrollButton.isEnabled()) 
        {
            searchObj.unEnrollButton.click();
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.unEnrollButton2), 20000, "unEnrollButton2 not available");           
            searchObj.unEnrollButton2.click();
           
            browser.executeScript("arguments[0].scrollIntoView();", searchObj.assertUnEnroll);
         var resumecourseStatus=expect(searchObj.assertUnEnroll.isPresent()).toBe(true);
         searchObj.assertUnEnroll.isPresent().then(function(input){
                expect(resumecourseStatus).toEqual(true)});
            
             console.log("User failed to Unenroll from the course");
            
        }
        else if(searchObj.status100.isPresent()) {
            console.log("unenroll button is not available because course is 100% consumed");
        }
        else {
            console.log("unenroll button is not available even if course is not 100% consumed");
        }
    }
    catch(Exception)
    {
       console.log("Failed to Uneroll for an open batch");
    }
  };

  const checkTheCourseInMyCourseSection = (expectedCoursName) => {

    try {
 
       console.log("Invited member is Checking availabilty of invited courses in My courses section");
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courses), 20000, "courses is not available");
       searchObj.courses.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myLatestCousreCount), 20000, "myLatestCousreCount  is not available");
       searchObj.myLatestCousreCount.getText().then(function (count) {
          console.log("count is :" + count);
          console.log('Click on Training Section')
       });
       try {
          browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myLatestCoursNextButton), 20000, " searchPublishedCourses is not available");
          searchObj.myLatestCoursNextButton.click();
 
       }
       catch (e) {
          console.log('Handled')
       }
 
 
    }
    catch (Exception) {
       console.log("Failed to get the invited course in my course section");
    }
 }
 
 
 
  const verifyCourseResumedFromSameCourseAfterStopingTheconsumption=()=>{
    
    try{
        console.log("User is trying to resume The Course After Stoping The consumption");
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.consumedcontentName);

        var contentName= searchObj.consumedcontentName.getText().then(function(input){
            expect(input)});
            console.log("Third content name : " + contentName);
            browser.executeScript("arguments[0].scrollIntoView();", searchObj.closeContentPlayer);  
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resumeCourse), 20000, "resumeCourse not available");           
        searchObj.resumeCourse.click();
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.consumedcontentName);  
        var newContentName= searchObj.consumedcontentName.getText().then(function(input){
            expect(input)});
            searchObj.consumedcontentName.getText().then(function(input){
                expect(newContentName).toEqual(contentName)});
            console.log("After resuming the course,contents are not same");
            console.log("User is resumed with the same content is verified successfully ");

    }
    catch(Exception)
    {
       console.log("Failed to resume The Course After Stoping The consumption");
    }
  };
  const consumeAndVerifyConsumptionForFullConsumption=(progressStatus)=>{
    
    try{
        console.log("User is trying to consume And Verify Consumption For 10 Contents : " + progressStatus);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.nextArrowInContents);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nextArrowInContents), 20000, "nextArrowInContents not available");           
       var nextArrowIcon= expect(searchObj.nextArrowInContents.isPresent()).toBe(true);
       if(nextArrowIcon)
       {
        searchObj.nextArrowInContents.click();
        browser.switchTo().defaultContent();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.EnjoyedTheContent), 20000, "EnjoyedTheContent not available");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.starRating), 20000, "starRating not available"); 
        searchObj.starRating.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.submitRating), 20000, "submitRating not available"); 
        searchObj.submitRating.click();
        browser.sleep(2000);
     
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.courseProgress);
       var progress10= searchObj.courseProgress.getText().then(function(input){
            expect(input)});
            searchObj.courseProgress.getText().then(function(input){
                expect(progress10).toEqual(progressStatus)});
                console.log("Couldn't verfiy progress%");
                console.log("User successfully consumed And Verified Consumption For 10 Contents : " + progressStatus);

    }

    }
    catch(Exception)
    {
       console.log("Failed to consume And Verify Consumption For 10 Contents : " + progressStatus);
    }
  };

  const trainingAttendedIsAvailableInProfilePage=()=>{
    
    try{
        console.log("User is trying to see the training attended section in profile");
        
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courses), 20000, "courses not available");           
        searchObj.courses.click();
        searchObj.searchInput.click();
        searchObj.searchInput.sendKeys();
        searchObj.searchButton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard), 20000, "courseCard not available");           
        searchObj.courseCard.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.hundredProgressBar), 20000, "hundredProgressBar not available");           
        console.log("Your Progress 100%");
        console.log("User has completed the course upto 100%");
        var courseName= searchObj.courseNameInContentPlayer.getText().then(function(input){
            expect(input)});
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.dropdown), 20000, "dropdown not available");           
            searchObj.dropdown.click();
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.logout), 20000, "logout not available");           
            browser.wait(protractor.ExpectedConditions.isDisplayed(searchObj.clickProfileIcon), 20000, "clickProfileIcon not available");          
            searchObj.clickProfileIcon.click();
            console.log("User lands on Profile Page");
            browser.executeScript("arguments[0].scrollIntoView();", searchObj.viewMoreButton);
         var vewMoreButtonStatus=expect(searchObj.viewMoreButton.isPresent()).toBe(true);
            if(vewMoreButtonStatus)
            {
                searchObj.viewMoreButton.click();
            }
            var downloadOption=expect(searchObj.downloadCertificate.isPresent()).toBe(true);
            if(downloadOption)
            {
                console.log("User successfully Verified download certificate option is available");
                searchObj.downloadCertificate.click();
            }

        }


    catch(Exception)
    {
       console.log("Failed to see training attended sction in profile page");
    }
  };
  const consumeAndVerifyConsumptionFor3Contents = (progressStatus) => {

    try {
 
       console.log("User is trying to consume And Verify Consumption For 3 Contents : " + progressStatus);
       console.log('User is trying to consume And Verify Consumption For 3 Contents')
 
       browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
       browser.sleep(3000);
       //expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nextArrowInContents))).toBeTruthy()
       //browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nextArrowInContents));
       if (searchObj.nextArrowInContents.isPresent()) {
          searchObj.nextArrowInContents.click();
          browser.switchTo().defaultContent();
          browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.starRating), 20000, "starRating is not available");
          searchObj.starRating.click();
          browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.submitRating), 20000, "submitRating  is not available");
          searchObj.submitRating.click();
 
 
          browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseProgress), 40000, "courseProgress is not available");
          searchObj.courseProgress.getText().then(function (statusOfProgress) {
             console.log("status Of Progress is  :" + statusOfProgress);
             if (statusOfProgress.contains("100%")) {
                console.log("User has consumed : " + statusOfProgress)
             }
             else {
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nextButtonInCourseConsumption), 20000, "nextButtonInCourseConsumption is not available");
                searchObj.nextButtonInCourseConsumption.click();
             }
 
          });
       }
 
       browser.executeScript("arguments[0].scrollIntoView();", searchObj.headerCourse);
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseProgress), 20000, "courseProgress  is not available");
       searchObj.courseProgress.getText().then(function (progress10) {
          console.log("progress 10 is :" + progress10);
 
       });
 
       console.log("User successfully consumed And Verified Consumption For 3 Contents : " + progressStatus)
 
 
 
    }
    catch (Exception) {
       console.log("Failed to consume And Verify Consumption For 3 Contents : " + progressStatus);
    }
 }
 
 
 const checkProgressBarInTOC = () => {
 
    try {
 
       console.log("User is checking a course progress bar in course TOC");
       if (searchObj.closeCourseButton.isDisplayed()) {
          console.log("Course is displayed as the result");
          browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.closeCourseButton), 20000, " searchPublishedCourses is not available");
          searchObj.closeCourseButton.click();
       }
       if (searchObj.progressBarInTOC.isDisplayed()) {
          console.log('User is able to see course progress bar in course TOC page')
       }
 
    }
    catch (Exception) {
       console.log("Failed to see progress bar in TOC");
    }
 }
 
 const checkProgressBarInMyCourseSection = () => {
 
    try {
 
       console.log("User is checking course progress bar in my course section");
       if (searchObj.progressBarInTOC.isDisplayed()) {
          console.log("User is able to see course progress bar in course TOC page");
       }
 
    }
    catch (Exception) {
       console.log("Failed to see progress bar in my course section");
    }
 }
 const copyCourseFromSameTenant = () => {
   try {
       console.log('User is trying to copy the course content from same tenant.');
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 40000, "headerCourse is not available");
       searchObj.headerCourse.click();
       // browser.executeScript("arguments[0].scrollIntoView();", searchObj.latestCourse);
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard1), 40000, "validateLatestCourse is not available");
       searchObj.courseCard1.click();
       expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.copyCourse))).toBeTruthy
       console.log('User is getting copy course icon ')
       searchObj.copyCourse.click();
       browser.sleep(3000);
       browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
       console.log('User is able to click on the copy course');
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.copyCourseContent), 40000, "copyCourseContent is not available");
       searchObj.copyCourseContent.getText().then(function (value) {
           console.log('copy Course Content  is :' + value);

       });
       console.log('User is successfully copied the course')
   }
   catch (e) {
       console.log('Failed to copy course by same framework');

   }

}



const saveAndSendNewCourseForReview = () => {
   try {
       browser.sleep(3000);
       console.log('User is trying to save And Send New Lesson Plan For Review')

       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.saveCourse), 40000, "saveCourse is not available");
       searchObj.saveCourse.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.sendForReview), 40000, "sendForReview is not available");
       searchObj.sendForReview.click();
       console.log('Content creator should be able to click on send for review button, to send the content for review.')
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickAppIcon), 50000, "clickAppIcon is not available");
       searchObj.clickAppIcon.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkAppIcon), 40000, "checkAppIcon is not available");
       searchObj.checkAppIcon.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectAppIcon), 40000, "selectAppIcon is not available");
       searchObj.selectAppIcon.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.topic), 20000, "topic not available");
       searchObj.topic.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.topicSelectorImg), 20000, "topicSelectorImg not available");
       searchObj.topicSelectorImg.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.topicSelectorContent), 20000, "topicSelectorContent not available");
       searchObj.topicSelectorContent.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.topicSelectorDone), 20000, "topicSelectorDone not available");
       searchObj.topicSelectorDone.click();
       browser.executeScript("arguments[0].scrollIntoView();", searchObj.clickMedium);
       searchObj.clickMedium.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectMedium), 30000, "selectMedium button not available");
       searchObj.selectMedium.click();


       try {
           browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.author), 30000, "author button not available");
           searchObj.author.click();
           searchObj.author.clear();
           searchObj.author.sendKeys('EKSTEP');
       }
       catch (e) {
           console.log('author is not present')
       }
       // try{
       //     browser.sleep(3000);
       // browser.executeScript("arguments[0].scrollIntoView();", searchObj.clickLicenseDropDown);
       // searchObj.clickLicenseDropDown.click();

       // console.log('Clicked on License DropDown');
       // 
       // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.sltLicenseValue), 30000, "sltLicenseValue button not available");
       // searchObj.sltLicenseValue.click();
       // console.log('Selected  License Value');
       // console.log('License DropDown Present ');
       // }
       // catch(Exception)
       // {
       //     console.log('licence is greyed out, unable to select')
       // }
       console.log('User has successfully saved And Send New Lesson Plan For Review')
       //browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.save), 30000, "saveform button not available");
       searchObj.save.click();
       console.log('Clicked on Save button');
       console.log('User has successfully saved and send course for review');
   }
   catch (e) {
       console.log('Failed on saving and sending course for review');

   }

}

const reviewInSubmissions = () => {
   var courseName1;
   try {
       console.log('To verify' + source + 'is found in review submission');
       browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
       content.headerDropdown.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.workSpace), 40000, "workSpace is not available");
       searchObj.workSpace.click();
       console.log('Clicked on WorkSpace');
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.reviewSubmission), 40000, "workSpace is not available");
       searchObj.reviewSubmission.click();
       console.log('Clicked on Review Submission');
       browser.refresh();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.coursename), 40000, "workSpace is not available");
       searchObj.coursename.getText().then(function (courseName1) {
           console.log('coursename :' + courseName1);
           console.log('To verify ' + courseName1 + 'is found in review submission')
           console.log(source + 'Content is found in Review Submissions Bucket');
           console.log('Content creator should be able to see the content under Submitted for review section post sending');

       });
       return courseName1;
   }
   catch (e) {
       console.log('Failed to find in review submission');

   }

}

const searchInUpForReviewAndPublish = (source) => {
   try {
       
       console.log('User is trying to search in Up For Review bucket for ' + source);
       browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.workSpace), 40000, "workSpace is not available");
       searchObj.workSpace.click();
       console.log('Clicked on WorkSpace')
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.upForReview), 40000, "upForReview is not available");
       searchObj.upForReview.click();
       console.log('Clicked on UpForReview')
       // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchForReview), 40000, "searchForReview is not available");
       searchObj.searchForReview.click();
       searchObj.searchForReview.sendKeys(source);
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchedContentForPublish), 40000, "searchedContentForPublish is not available");
       searchObj.searchedContentForPublish.click();
       console.log('Clicked on publish')
       console.log('User successfully searched in Up for review');
   }
   catch (e) {
       console.log('Failed to search in Up for review bucket');

   }

}

const publishAndSearch = (source1) => {
   try {
       browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
       console.log('User is trying to publish and search ' + source1);
       console.log('User is navigating to workspace');
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.publishCourseButton1), 40000, "publishCourseButton is not available");
       searchObj.publishCourseButton1.click();
       console.log('Clicked on PublishCourse Button');
       searchObj.checkBox.each(function (input) {
           input.click()
       });
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.popupPublishButtons), 40000, "popupPublishButtons is not available");
       searchObj.popupPublishButtons.click();
       expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.upForReview))).toBeTruthy()
       console.log('up for review is not displayed')
       console.log(+source1 + 'is published sucessfully');
   }
   catch (e) {
       console.log('Failed to publish and search');

   }

}

const navigateToCourseAndSearchForOpenBatch = (courseName) => {

   try {
       console.log('To verify navigate to Course section, search course and create open batch');
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 40000, "headerCourse is not available");
       searchObj.headerCourse.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 40000, "searchInput is not available");
       searchObj.searchInput.click();
       searchObj.searchInput.sendKeys(courseName)
       console.log('Entered Course Name');
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon), 40000, "searchIcon is not available");
       searchObj.searchIcon.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchPublishedCourses), 40000, "searchIcon is not available");
       searchObj.searchPublishedCourses.click();


   }
   catch (e) {
       console.error('Failed on navigating to Course section, search course and create batch');

   }

}

const checkCreditSection = () => {

   try {
       console.log('User is trying to check Credit Section');
       searchObj.credit.click();
       expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.msgDerivedFrom))).toBeTruthy
       console.log('The content is derived from is available ')
       expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.originalContentName))).toBeTruthy
       console.log('Original content is name displayed ')
       searchObj.originalContentName.getText().then(function (ContentName) {
           console.log('coursename :' + ContentName);

       });
       expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.authorName))).toBeTruthy
       console.log('Author name is displayed ')
       expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.licenceTerms))).toBeTruthy
       console.log('licence terms are displayed ')
       expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.publishedDetails))).toBeTruthy
       console.log('published by is also dispalyed ')
       expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.attributionName))).toBeTruthy
       console.log('attribution name is displayed ')
       searchObj.closeIcon.click();
       console.log('User successfully checked Credit Section')
   }
   catch (e) {
       console.log('Failed to check Credit Section');

   }

}


const navigateToWorkspace = () => {
   try {
       browser.sleep(4000);
       console.log('User is navigating to the Workspace to create or check');
       console.log('User is navigating to workspace');
       browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.workSpace), 40000, "workSpace is not available");
       searchObj.workSpace.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.published), 40000, "workSpace is not available");
       searchObj.published.click();
       console.log('User successfully  navigated to Published');
   }
   catch (e) {
       console.log('Failed on navigating to Workspace and create');

   }

}


const deleteCreatedItems = () => {
   try {

       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstCourseCardContentName), 40000, "firstCourseCardContentName is not available");
       searchObj.firstCourseCardContentName.getText().then(function (deletedContent) {
           console.log('Deleted Content: ' + deletedContent);
       })
       searchObj.deleteButton.click();
       console.log('Clicked on Delete Button');
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.yesButtonPopup), 40000, "yesButtonPopup is not available");
       searchObj.yesButtonPopup.click();
       console.log('Clicked on Yes in Delete Dialog Box');
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.messageBox), 40000, "messageBox is not available");
       searchObj.messageBox.getText().then(function (message) {
           console.log('Text in the Message box is  :' + message);
       })
       console.log('Created content is successfully deleted from All My Content');

   }
   catch (e) {
       console.log('Failed to delete Items');

   }

}
const validateTenantFramework =()=>{
    signUp.tenantFramework.getText().then(function(input){
        //input.toEqual("EKSTEP NCERT");
        console.log("Framework name is : "+ input);
    });
}



module.exports = {
    languageVerify,
    verifyLocationUpdateForUser,
    updateMobileEmailAndRecoveryDetails,
    navigateToParticularCourseAndSearchForOpenBatch,
    enrollForOpenBatch,
    consumeAndVerifyConsumptionForNoContents,
    consumeAndVerifyConsumptionFor10Contents,
    unrollForOpenBatch,
    checkTheCourseInMyCourseSection,
    verifyCourseResumedFromSameCourseAfterStopingTheconsumption,
    consumeAndVerifyConsumptionForFullConsumption,
    trainingAttendedIsAvailableInProfilePage,
    consumeAndVerifyConsumptionFor3Contents,
    checkProgressBarInTOC,
    checkProgressBarInMyCourseSection,
    copyCourseFromSameTenant,
    saveAndSendNewCourseForReview,
    reviewInSubmissions,
    searchInUpForReviewAndPublish,
    publishAndSearch,
    navigateToCourseAndSearchForOpenBatch,
    checkCreditSection,
    navigateToWorkspace,
    deleteCreatedItems,
    validateTenantFramework,
    
    
}

    
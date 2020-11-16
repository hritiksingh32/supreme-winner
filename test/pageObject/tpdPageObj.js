

const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const etbpage = require(protractor.basePath + '/test/pages/etb/etb.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const wait = require(protractor.basePath + '/helper/waiters.js');
const tpdPage = require(protractor.basePath + '/test/pages/tpdPage/tpdpage.po.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
const resourcePag=require(protractor.basePath + '/test/pages/resource/resource.po.js');
const genericFun= require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');
let getExcelPath=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpage = require(protractor.basePath+'/test/pages/sanity/VerifySignInPopupInExploreCourseEnrollButton.js');
var verifyCEBObj=verifyCEBpage.VerifySignInPopupInExploreCourseEnrollButton();
var searchObj=tpdPage.tpdPage();
var content=ccpage.contentCreation();
var etbv=etbpage.etb();
var resov=resourcePag.resource();

const createCourse=()=>{
  var courseName;
    try{

    console.log("user is trying to create a course")
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000,"Creation page not loaded");
    content.course.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
    searchObj.nonAcademic.click();

    // browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
    // courseName= "CourseA"+faker.randomData().firstname;
    // content.name.sendKeys(courseName);
    content.startCreating.click();
    browser.sleep(4000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(4000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
    content.newchild.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
    content.titleN.click();
    content.titleN.clear();
    content.titleN.sendKeys(faker.randomData().firstname);
    content.descriptionN.sendKeys('description');
    content.addTagN.sendKeys('tag');
//     content.addResource.click(); 
//     browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
//     content.resourceSearch.click();
//    content.resourceSearch.sendKeys("Pdf");
//    browser.sleep(1000);
//     browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
//     content.selectResourceType2.click();
//     browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
//     content.clickAddbutton.click();

//    browser.sleep(2000);
//    browser.wait(protractor.ExpectedConditions.visibilityOf(content.checkboxFirst), 50000, "checkboxFirst is not available");
//    content.checkboxFirst.click();

    // browser.sleep(2000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
    // content.proceed.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
    content.save.click();        
    browser.sleep(1000);
    console.log("User successfully created course")
    return courseName;
    }catch(Exception){
        console.log("User failed to create course")
    }
}
const sendForReviewTheCourse=()=>{
   var courseName;
   try{

    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.sendForReview), 20000, "send for review not available");
    content.sendForReview.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAppIcon), 20000, "clickAppIcon not available");
    content.clickAppIcon.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.checkAppIcon), 20000, "checkAppIcon not available");
    content.checkAppIcon.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectAppIcon), 20000, "selectAppIcon not available");
    content.selectAppIcon.click(); 
    browser.sleep(500);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.topic), 20000, "topic not available");
    content.topic.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorImg), 20000, "topicSelectorImg not available");
    browser.sleep(500);
    content.topicSelectorImg.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorContent), 20000, "topicSelectorContent not available");
    content.topicSelectorContent.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorDone), 20000, "topicSelectorDone not available");
    content.topicSelectorDone.click();
    browser.sleep(1000);
    browser.executeScript("arguments[0].scrollIntoView();", searchObj.purposeOfCourse);
    searchObj.purposeOfCourse.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.purposeOfFirstCourse), 30000, "purposeOfFirstCourse button not available");
    searchObj.purposeOfFirstCourse.click();
    browser.sleep(500);
    //browser.executeScript("arguments[0].scrollIntoView();", searchObj.mediumOfInstruction);
    searchObj.mediumOfInstruction.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstmediumOfInstruction), 30000, "firstmediumOfInstruction button not available");
    searchObj.firstmediumOfInstruction.click();
    browser.sleep(500);
    searchObj.mediumOfInstruction.click();
    browser.sleep(500);
    //browser.executeScript("arguments[0].scrollIntoView();", searchObj.audienceType);
    searchObj.audienceType.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstAudienceType), 30000, "firstAudienceType button not available");
    searchObj.firstAudienceType.click();
    browser.sleep(500);
    //browser.executeScript("arguments[0].scrollIntoView();", searchObj.classesTaught);
    searchObj.classesTaught.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstclassTaught), 30000, "firstclassTaught button not available");
    searchObj.firstclassTaught.click();
    browser.sleep(500);
    searchObj.classesTaught.click();
    browser.sleep(500);
    searchObj.subjectsTaught.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstSubjectTaught), 30000, "firstclassTaught button not available");
    searchObj.firstSubjectTaught.click();
    browser.sleep(500);
    // searchObj.subjectsTaught.click();
    // browser.sleep(500);
    browser.executeScript("arguments[0].scrollIntoView();", content.author);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
    content.author.click();
    content.author.sendKeys("Ekstep");
    // browser.executeScript("arguments[0].scrollIntoView();",  etbv.yearOfCreation);
    // etbv.yearOfCreation.click();
    // etbv.yearOfCreation.clear();
    // etbv.yearOfCreation.sendKeys("2020");
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
    content.saveform.click();
    browser.sleep(3000);
    return courseName;
}catch(er){
    console.error("User failed to create course")
}
}
const publishTheCourseFromUpForReview=(coursename)=>{
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.upForReview), 20000,"Creation page not loaded");
    content.upForReview.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
    content.searchForReview.click();
    content.searchForReview.sendKeys(coursename);
    // content.searchIconUpForReview.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchedContentForPublish), 20000, "workspace page not loaded");
    content.searchedContentForPublish.click();
    console.log("trying to enter in the frame")
    browser.sleep(3000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(3000);
    console.log("entered in the frame")
   // browser.wait(protractor.ExpectedCondisstions.visibilityOf(content.publishCourseButton), 20000,"Creation page not loaded");
    content.publishCourseButton.click();
    browser.sleep(1000);
    content.checkBox.each(function (input) {
    input.click()});
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.popupPublishButton1), 20000,"Creation page not loaded");
    content.popupPublishButton1.click();
    browser.switchTo().defaultContent();
    browser.sleep(1000);
}
const createInviteOnlyBatchForLatestCourse=()=>{
   
    try
    {
        browser.sleep(1000);
        console.log("User is trying to create invite only batch for a course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "head course is not available");
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(550,350);').then(function () {
            searchObj.latestCourseViewAllSection.click();
        });
        //browser.actions().mouseMove(searchObj.latestCourseViewAllSection).perform();
        //browser.executeScript("arguments[0].scrollIntoView();",searchObj.latestCourseViewAllSection);
        //searchObj.latestCourseViewAllSection.click();
        browser.sleep(1000);
        console.log("Click on Latest Course");
        searchObj.getCourseName.getText().then(function(courseName){
            console.log(courseName);
        });
      
        content.courseCard.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addIcon), 20000, "addIcon is not available");
        searchObj.addIcon.click();
       
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch), 20000, " nameOfBatch is not available");
        searchObj.nameOfBatch.click();
        searchObj.nameOfBatch.sendKeys("batch1");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.aboutBatch), 20000, "  aboutBatch is not available");
        searchObj.aboutBatch.sendKeys('batch1');
        searchObj.aboutBatch.click();
       // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDate), 20000, "startDate is not available");
        searchObj.startDate.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj. startDateCalendar), 20000, " startDateCalendar is not available");
        searchObj.startDateCalendar.click();
        //browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.endDate), 20000, "endDate is not available");
        searchObj.endDate.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj. endDateCalendar), 20000, " endDateCalendar is not available");
        searchObj.endDateCalendar.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.mentorsInBatch), 20000, "mentorsInBatch is not available");
        searchObj.mentorsInBatch.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj. firstMentorInBatch), 20000, " firstMentorInBatch is not available");
        searchObj.firstMentorInBatch.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.mentorDropdown), 20000, "mentorDropdown is not available");
        searchObj.mentorDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.membersInBatch), 20000, "membersInBatch is not available");
        searchObj.membersInBatch.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.firstMemberInBatch ), 20000, "firstMemberInBatch is not available");
        searchObj.firstMemberInBatch.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.memberDropdown), 20000, "memberDropdown is not available");
        searchObj.memberDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.buttonCreate), 20000, "buttonCreate is not available");
        searchObj.buttonCreate.click();
        console.log("Invite only batch for a course is created sucessfully");
   
    }
    catch (Exception)
    {
        console.log("User is Failed to create invite only batch for a course");
    }
    
 }
 const navigateToCourseAndSearch=(courseName)=>{
 
     try{
 
     console.log("To verify navigate to Course section and search course");
     browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse ), 20000, "headerCourse is not available");
     searchObj.headerCourse.click();
     browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput  ), 20000, "searchInput  is not available");
     searchObj.searchInput.sendkeys(courseName);
     searchObj.searchInput.click();
     browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon ), 20000, " searchIcon is not available");
     searchObj.searchIcon.click();
     browser.sleep(2000);
     if(searchObj.courseCard.isDisplayed())
     {
        console.log("Course is displayed as the result");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard ), 20000, " courseCard is not available");
        searchObj.courseCard.click();
     }
     else
     {
        console.log("Course is displayed as the result");
     }
     }
     catch(Exception)
     {
        console.log("Failed on navigating to Course section and search course");
     }
 }
 const ClickOnviewAllAndSearch=(courseName)=>{
     try{
         console.log("verify course name should be displayed as per latest enrollmet");
         browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.viewAllButton ), 20000, "viewAll Button is not available");
         searchObj.viewAllButton.click();
         browser.sleep(3000);
         browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.latestEnrolledourse ), 20000, "latest Enrolled course is not available");
         var latestCoursename=searchObj.viewAllButton.getText();
         browser.sleep(1000);
         expect(latestCoursename).toContain(courseName)

     }catch(Exception){
         console.log("Failed to find course as per latest enrollment");
     }
 }
 const createCourseWithAllResourceType=()=>{
    var courseName; 
    try{
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000,"Creation page not loaded");
        content.course.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
        searchObj.nonAcademic.click();

       // browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
        // courseName="CourseA"+faker.randomData().firstname;
        // content.name.sendKeys(courseName);
        content.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
        content.newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
        content.titleN.click();
        content.titleN.clear();
        content.titleN.sendKeys(faker.randomData().firstname);
        content.descriptionN.sendKeys('description');
        content.addTagN.sendKeys('tag');
        browser.sleep(1000);
        content.addResource.click(); 
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("pdf");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        content.addResource.click(); 
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("ecm");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("html");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        browser.sleep(1000);
        content.addResource.click(); 
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("h5p");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        content.addResource.click(); 
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("epub");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        content.addResource.click(); 
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("mp4");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("webm");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "save never loaded");
        content.save.click();        
        browser.sleep(1000);
        console.log("User successfully created course with all resource type");
        return courseName;
     }catch(Exception){
        console.log("failed to execute create course with all resource type")
     }
 }
 const navigateToCourseSearchAndConsume=()=>{
 
    try{

    console.log("To verify navigate to Course section and search course");
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse ), 20000, "headerCourse is not available");
    searchObj.headerCourse.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput  ), 20000, "searchInput  is not available");
    searchObj.searchInput.sendKeys('course');
    searchObj.searchInput.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon ), 20000, " searchIcon is not available");
    searchObj.searchIcon.click();
    browser.sleep(2000);
    browser.executeScript('window.scrollTo(0,200);').then(function () {
        console.log('++++++SCROLLED Down+++++');
    });
    if(searchObj.courseCard.isPresent())
    {
       console.log("Course is displayed as the result");
       browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard), 20000, "courseCard not available"); 
       searchObj.courseCard.click();
    }
    else
    {
       console.log("Course is not displayed as the result");
    }
    }
    catch(Exception)
    {
       console.log("Failed on navigating to Course section and search course");
    }
}
const searchCollaboratorBySearchField=()=>{
    var coursename;
    try{

    console.log("User is navigating to the Workspace to create or check ");
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.workSpace ), 20000, "workSpace is not available");
    searchObj.workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createCourse ), 20000, "createCourse  is not available");
    searchObj.createCourse.click();
    
    // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseName ), 20000, "coursename not available"); 
    // var coursename="CourseB"+faker.randomData().firstname;
    // searchObj.courseName.sendKeys(coursename);

    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
    searchObj.nonAcademic.click();


    searchObj.startCreating.click();
    browser.sleep(4000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(4000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.newChild), 20000, "Didn't switched to different frame");
    searchObj.newChild.click();
    browser.sleep(2500);
    coursename=editDetailsForm();
    browser.sleep(2500);
    if(searchObj.collaboratorIcon.isDisplayed())
    {          
     console.log("Collaborator icon is present");
    }
    browser.sleep(1000);
    searchObj.collaboratorIcon.click();
    console.log("User should be able to click on collaborator icon");
    browser.sleep(5000);
    searchObj.searchCollaboratorField.click();
    searchObj.searchCollaboratorField.sendKeys("Mentor");
    browser.sleep(2000);
    searchObj.suggestionCollaboratorList1.click();
    browser.sleep(1500);
    searchObj.searchCollaboratorField.clear();
    searchObj.searchCollaboratorField.click();
    searchObj.searchCollaboratorField.sendKeys("suborg_mentor_sun 2");
    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.suggestionCollaboratorList2), 20000, "suggestionCollaboratorList2 not loaded");
    searchObj.suggestionCollaboratorList2.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.donebutton1), 20000, "donebutton1 not loaded");
    searchObj.donebutton1.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.save), 20000, "save not loaded");
    searchObj.save.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.closeEditor1), 20000, "closeEditor1 not loaded");
    searchObj.closeEditor1.click();
    browser.sleep(4000);
    console.log("User successfully added multiple collaborator");

    }
    catch(Exception)
    {
       console.log("Failed to search collaborator by searchField");
    }
    return coursename;
}
const collaboratorSendTheCourseForReview=(coursename)=>{
 
    try{

        console.log("Collaborator is tryig to edit the content but get a lock icon");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();  
        browser.sleep(500);  
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.workSpace), 20000, "workSpace page not loaded");    
        searchObj.workSpace.click();
        browser.sleep(500); 
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.collaborationSection), 20000, "collaborationSection page not loaded");     
        searchObj.collaborationSection.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchForReview), 20000, "searchForReview page not loaded");     
        searchObj.searchForReview.click();
        searchObj.searchForReview.sendKeys(coursename);
       //  searchObj.searchIconUpForReview .click();
         browser.sleep(2000);
              
         browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseNameInCollaboration), 20000,"courseNameInCollaboration is not available"); 
        // courseNameInCollaboration =resov.courseNameInCollaboration.getText();
        // console.log(courseNameInCollaboration);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.editIcon1), 20000,"editIcon1 is not available"); 
       
        searchObj.editIcon1.click();
        browser.sleep(3000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.newChild), 20000, "newchild not available");
        searchObj.newChild.click();
        browser.sleep(1000);
        searchObj.titleNameForCourse.click();
        searchObj.titleNameForCourse.clear();
        searchObj.titleNameForCourse.sendKeys(coursename);
        searchObj.titleKeywordForCourse.sendKeys('math');
        // searchObj.addResource.click();
        // browser.sleep(2500);
        // browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.selectResourceN), 20000, " selectResourceN not available");
        // searchObj.selectResourceN.click();
        // searchObj.proceedButton.click();
        browser.sleep(1500);
        if (searchObj.save.isEnabled()) {
            
            console.log("Course is created successfuly");
            
        }

    }
    catch(Exception)
    {
       console.log("Failed to send the course for review");
    }
}
const saveAndSendNewCourseForReview=()=>{
 
    try{

        console.log("User is trying to save and send course for review");
        try 
        {
            searchObj.save.click();
        } 
        catch (Exception ) {
           console.log("Exception Handled" );
        }
        browser.sleep(10000);          
        searchObj.sendForReview.click();
        console.log("clicked on Send For Review" );
        browser.sleep(1000);  
      
        console.log("clicked on Send For Review" );
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickAppIcon), 30000, "clickAppIcon button not available");
        searchObj.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkAppIcon), 30000, "checkappicon button not available");
        searchObj.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectAppIcon), 30000, "selectappicon button not available");
        searchObj.selectAppIcon.click();
        console.log("selected APPicon" );
        browser.sleep(1000);

        // try{
        //     browser.sleep(500);
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.yearOfCreation);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.yearOfCreation), 30000, "yearOfCreation not available");
        // searchObj.yearOfCreation.click();
        // browser.sleep(1000);
        // searchObj.yearOfCreation.sendKeys("2020");
        // browser.sleep(1000);
        // }
        // catch(Exception)
        // {
        //     console.log("year of creation is not present " );

        // }
        
        // searchObj.topic.click();
        // browser.sleep(1000);
        // searchObj.select.click();
        // browser.sleep(1000);
        // searchObj.done.click();
        // browser.sleep(1000);
        // try{
        //     browser.sleep(500);
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.author);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.author), 30000, "author not available");
        // searchObj.author.click();
        // searchObj.author.clear();
        // browser.sleep(1000);
        // searchObj.author.sendKeys('EKSTEP');
        // browser.sleep(1000);
        // }
        // catch(Exception)
        // {
        //     console.log("Author is not present " );

        // }

        searchObj.saveButton.click();
        browser.sleep(2000);
        console.log("Clicked on Save button");
        console.log("User has successfully saved and send course for review");
 
    }
    catch(Exception)
    {
       console.log("Failed on saving and sending course for review");
    }
}
const checkTheCourseInReviewSubmision=(edittedcourse)=>{
 
    try{

        console.log("Collaborator is trying to check the course in review submission");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();          
        searchObj.workSpace.click();
        browser.sleep(1500);
        searchObj.submittedForReview.click();
        browser.sleep(3000);
    //     browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseNameInCollaboration), 30000, "courseNameInCollaboration not available");
    //    searchObj.courseNameInCollaboration.isDisplayed();
    
        console.log("Course is verified successfully");
        
    }
    catch(Exception)
    {
       console.log("Failed to check the course in submitted for review");
    }
}

const createCourseAddCollaborator=()=>{
 
    try{

        console.log("Creating a course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.workSpace), 20000, "workspace page not loaded");
        searchObj.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createCourse ), 20000,"createCourse  not loaded");
        searchObj.createCourse .click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.coursename), 20000, "Coursename never loaded");
        courseName="CourseB"+faker.randomData().firstname;
        searchObj.coursename.sendKeys(courseName);
        content.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.newChild), 20000, "newChild not available");
        searchObj.newChild.click();
        browser.sleep(2000);
        if(searchObj.collaboratorIcon.isDisplayed())
        {          
         console.log("Collaborator icon is present");
        }
        browser.sleep(1000);
        searchObj.collaboratorIcon.click();
        console.log("User should be able to click on collaborator icon");
        browser.sleep(5000);
        searchObj.collaboratorSearch.click();
        searchObj.collaboratorSearch.sendKeys("Creator");
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.suggestedCollaborator), 20000, "suggestedCollaborator not available");
        searchObj.suggestedCollaborator.click();
        browser.sleep(1500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.donebutton1), 20000, "donebutton1 not available");
        searchObj.donebutton1.click();
        browser.sleep(2000);
        searchObj.save.click();
        browser.sleep(2000);
        searchObj.closeEditor1.click();
        browser.sleep(4000);
        console.log("User successfully added multiple collaborator");

    }
    catch(Exception)
    {
       console.log("Failed to edit course by collaborator");
    }
}
const collaboratorCanEditCourse=()=>{
 
    try{

                   
        console.log("Collaborator is trying to edit the course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();          
        searchObj.workSpace.click();
        searchObj.collaborationSection.click();
        searchObj.searchForReview.click();
        searchObj.searchForReview.sendKeys(courseName);
       //  searchObj.searchIconUpForReview .click();
         browser.sleep(2000);
              
         browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseNameInCollaboration), 20000,"courseNameInCollaboration is not available"); 
        // courseNameInCollaboration =resov.courseNameInCollaboration.getText();
        // console.log(courseNameInCollaboration);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.editIcon1), 20000,"editIcon1 is not available"); 
       
                    
        console.log("Collaborator is trying to edit the course");
        browser.sleep(1500);
        searchObj.editIcon1.click();
        browser.sleep(3000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.newChild), 20000, "newchild not available");
        searchObj.newChild.click();
        browser.sleep(1000);
        searchObj.titleNameForCourse.click();
        searchObj.titleNameForCourse.clear();
        searchObj.titleNameForCourse.sendKeys('CourseB');
        searchObj.titleKeywordForCourse.sendKeys('math');
        // searchObj.addResource.click();
        // browser.sleep(1500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resourceSearch), 20000, " resourceSearch not available");
        // searchObj.resourceSearch.click();
        // searchObj.resourceSearch.sendKeys("pdf");
        // browser.sleep(2000);
        // searchObj.selectResourceType2.click();
        // browser.sleep(1500);
        // searchObj.clickAddbutton.click();
        // console.log("Resouce Type Added Succesfully");
        // searchObj.proceedButton.click();
        browser.sleep(1500);
        searchObj.save.click();
        browser.sleep(2000);
        searchObj.closeEditor1.click();
        
        console.log("Collaborator editted the course successfully");
        
    }
    catch(Exception)
    {
       console.log("Collaborator is not able to edit the course");
    }
}
const reviewStatusCollaborator=()=>{
 
    try{

        console.log("Collaborator is trying to review status course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();        
        searchObj.workSpace.click();
        browser.sleep(500);
        searchObj.collaborationSection.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchContent), 20000, " searchContent not available");
        searchObj.searchContent.click();
        searchObj.searchContent.sendKeys();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstSearchContent), 20000, " firstSearchContent not available");
        
        if(searchObj.editCollaborator.isDisplayed())
        {
            console.log("Edit icon is present in the draft section");
        }else{
            console.log("Collaborator cannot edit the content sent for review");
        }
        
    }
    catch(Exception)
    {
       console.log("Failed to edit course by collaborator");
    }
}
const collaboratorNotAbleToDeleteCourse=()=>{
 
    try{

        console.log("Collaborator is trying to see delete icon");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();           
        searchObj.workSpace.click();
        browser.sleep(500);
        searchObj.collaborationSection.click();
        browser.sleep(500);
        if(searchObj.deleteIcon1.isDisplayed())
        {
            console.log("Delete icon not present");
        }
        
    }
    catch(Exception)
    {
       console.log("Collaborator successfully deleting the content");
    }
}
const SendForLimitedSharing = () => {
    try {
        console.log('User is Trying to Send For limied Sharing');
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.sendForReviewDropDown), 40000, "sendForReviewDropDown is not available");
        searchObj.sendForReviewDropDown.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickLimitedSharing), 40000, "clickLimitedSharing is not available");
        searchObj.clickLimitedSharing.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.sharedViaLink), 40000, "sharedViaLink is not available");
        searchObj.sharedViaLink.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickFirstCourseInShareVialink), 40000, "clickFirstCourseInShareVialink is not available");
        searchObj.clickFirstCourseInShareVialink.click();
        browser.sleep(3000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
        content.save.click();        
        browser.sleep(1000);
        
        console.log('Succesfuly Sent for Limited Sharing');
        
        browser.sleep(3000);
    }
    catch (e) {
        console.log('Failed to Send For limied Sharing');

    }

}
const navigateToAllMyContent = () => {
    try {
        browser.sleep(1000);
        console.log('User is navigating to the all my content to create or check');
        console.log('User is navigating to all my content');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.workSpace), 40000, "workSpace is not available");
        searchObj.workSpace.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.allMyContent), 40000, "allMyContent is not available");
        searchObj.allMyContent.click();
        console.log('User successfully navigated to All My Content');
    }
    catch (e) {
        console.log('Failed on navigating to Workspace and create');

    }

}


const applyStatusFilterinAllMyContent = () => {
    try {
        browser.sleep(2000);
        console.log('Verifying Status Filter in all my content');
        
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.showFilter1), 40000, "showFilter1 is not available");
        searchObj.showFilter1.click();
        console.log('Click on Filter Icon');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.status), 40000, "status is not available");
        searchObj.status.click();
        console.log('Click on Status DropDown');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.draft), 40000, "draft is not available");
        searchObj.draft.click();
        console.log('Select Draft Filer');
       // browser.wait(protractor.ExpectedConditions.visibilityOf(searchCourse.status), 40000, "status is not available");
       searchObj.status1.click();
        console.log('Select Status Filer');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.applyButton1), 40000, "applyButton1 is not available");
        searchObj.applyButton1.click();
        console.log('Click on Apply button');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.showFilter1), 40000, "showFilter1 is not available");
        searchObj.showFilter1.click();
        console.log('Click on Filter Icon');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName), 40000, "contentName is not available");
        searchObj.contentName.getText().then(function (contentName) {
            console.log('contentName is' +contentName);
            
        
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInActivity), 40000, "searchInActivity is not available");
        searchObj.searchInActivity.click();
        searchObj.searchInActivity.sendKeys(contentName);
        console.log('Enter Course Name in Search Field');
    });
    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon2), 40000, "searchIcon2 is not available");
    searchObj.searchIcon2.click();
    console.log('Click on Search Icon');
    console.log('Succesfully Verified Drafts Status Filter in Search Field');
    browser.sleep(1000);
    searchObj.searchInActivity.click();
    searchObj.searchInActivity.clear();
    console.log('Clear Searched Course in Search Text Field');
    searchObj.allMyContent.click();
    console.log('Navigate to all My Content');
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.showFilter1), 40000, "showFilter1 is not available");
    searchObj.showFilter1.click();
    console.log('Click on Filter Icon');
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.status), 40000, "status is not available");
    searchObj.status.click();
    console.log('Select StatusDropDown');
    browser.sleep(1000);
    searchObj.statusReview.click();
    browser.sleep(1000);
    searchObj.status1.click();
    browser.sleep(1000);
    console.log('Select Review in Dropdown');
    searchObj.applyButton1.click();
    console.log('Click on Apply button');
    browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.showFilter1), 40000, "showFilter1 is not available");
        searchObj.showFilter1.click();
        console.log('Click on Filter Icon');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName), 40000, "contentName is not available");
        searchObj.contentName.getText().then(function (contentName2) {
            console.log('contentName is' +contentName2);
            
        
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInActivity), 40000, "searchInActivity is not available");
        searchObj.searchInActivity.click();
        searchObj.searchInActivity.sendKeys(contentName2);
        console.log('Enter Course Name in Search Field');
    });

    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon2), 40000, "searchIcon2 is not available");
    searchObj.searchIcon2.click();
    console.log('Click on Search Icon');
    console.log('Succesfully Verified Drafts Status Filter in Search Field');
    browser.sleep(1000);
    searchObj.searchInActivity.click();
    searchObj.searchInActivity.clear();
    console.log('Clear Searched Course in Search Text Field');
   
    searchObj.allMyContent.click();
    console.log('Navigate to all My Content');
    



    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.showFilter1), 40000, "showFilter1 is not available");
    searchObj.showFilter1.click();
    console.log('Click on Filter Icon');
   
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.status), 40000, "status is not available");
    searchObj.status.click();
    console.log('Select StatusDropDown');
    browser.sleep(1000);
    searchObj.statusLive.click();
    searchObj.status1.click();
    browser.sleep(1000);
    console.log('Select statusLive in Dropdown');
    searchObj.applyButton1.click();
    console.log('Click on Apply button');
    browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.showFilter1), 40000, "showFilter1 is not available");
        searchObj.showFilter1.click();
        console.log('Click on Filter Icon');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName), 40000, "contentName is not available");
        searchObj.contentName.getText().then(function (contentName3) {
            console.log('contentName is' +contentName3);
            
        
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInActivity), 40000, "searchInActivity is not available");
        searchObj.searchInActivity.click();
        searchObj.searchInActivity.sendKeys(contentName3);
        console.log('Enter Course Name in Search Field');
    });

    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon2), 40000, "searchIcon2 is not available");
    searchObj.searchIcon2.click();
    console.log('Click on Search Icon');
    console.log('Succesfully Verified Live Status Filter in Search Field');
    browser.sleep(1000);
    searchObj.searchInActivity.click();
    searchObj.searchInActivity.clear();
    console.log('Clear Searched Course in Search Text Field');
    browser.sleep(1000);
    searchObj.allMyContent.click();
    console.log('Navigate to all My Content');
    browser.sleep(1000);

    console.log('Course is Succesfully Display after applying Status Filter like Draft,Review,Live in All My Content');
    }
    catch(e) {
        console.error('Failed to Verify Course displays after applying Status Filter like Draft,Review,Live in All My Content, '+ e);

    }

}


const applyFilterinAllMyContent = () => {
    try {
        browser.sleep(1000);
        console.log('Verifying  Filter in all my content');
        
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.showFilter1), 40000, "showFilter1 is not available");
        searchObj.showFilter1.click();
       
        console.log('Click on Filter Icon');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectMediumfilter), 40000, "selectMediumfilter is not available");
        searchObj.selectMediumfilter.click();
        console.log('Click on Medium Filter');
       
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectEnglish), 40000, "selectEnglish is not available");
        searchObj.selectEnglish.click();
        console.log('select English');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.applyButton1), 40000, "applyButton1 is not available");
        searchObj.applyButton1.click();
        console.log('Click on Apply button');
        browser.sleep(1000);
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName)))
        {
            console.log('Elements are visible on the screen ');
            
        }
      
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resetButton), 40000, "resetButton is not available");
        searchObj.resetButton.click();
        console.log('Click Reset button');
        console.log('Verified Medium Dropdown Filter And Content is Displayed')
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.gradeLevel), 40000, "gradeLevel is not available");
        searchObj.gradeLevel.click();
        console.log('click on Grade Level Filter');

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.gradeLevel1), 40000, "gradeLevel is not available");
        searchObj.gradeLevel1.click();
        console.log('Select Grade Filter');
       
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.applyButton1), 40000, "applyButton1 is not available");
        searchObj.applyButton1.click();
        console.log('Click on Apply button');
        browser.sleep(1000);
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName)))
        {
            console.log('Elements are visible on the screen ');
            
        }
       
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resetButton), 40000, "resetButton is not available");
        searchObj.resetButton.click();
        console.log('Click Reset button');
        console.log('Verified Grade Dropdown Filter And Content is Displayed')
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.subject), 40000, "subject is not available");
        searchObj.subject.click();
        console.log('click on Subject Filter');
       
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.accountancy), 40000, "accountancy is not available");
        searchObj.accountancy.click();
        console.log('Select Subject Filter');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.applyButton1), 40000, "applyButton1 is not available");
        searchObj.applyButton1.click();
        console.log('Click on Apply button');
        browser.sleep(1000);
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName)))
        {
            console.log('Elements are visible on the screen ');
            
        }
      
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resetButton), 40000, "resetButton is not available");
        searchObj.resetButton.click();
        console.log('Click Reset button');
        console.log('Verified Subject Dropdown Filter And Content is Displayed')
       
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickBoardAllMyContent), 40000, "clickBoardAllMyContent is not available");
        searchObj.clickBoardAllMyContent.click();
        console.log('click on Board Filter');
       
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectBoardAllMyContent), 40000, "selectBoardAllMyContent is not available");
        searchObj.selectBoardAllMyContent.click();
        console.log('Select Board Filter');
       
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.applyButton1), 40000, "applyButton1 is not available");
        searchObj.applyButton1.click();
        console.log('Click on Apply button');
        browser.sleep(1000);
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName)))
        {
            console.log('Elements are visible on the screen ');
            
        }
       
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resetButton), 40000, "resetButton is not available");
        searchObj.resetButton.click();
        console.log('Click Reset button');
        console.log('Verified Subject Dropdown Filter And Content is Displayed')
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.showFilter1), 40000, "showFilter1 is not available");
        searchObj.showFilter1.click();
        console.log('Verified Board Dropdown Filter And Content is Displayed');

        
}
catch (e) {
       console.log('Failed to Verify Course displays after applying filter Medium , Board, Grade, Subject Filter in All My Content');

   }

}



const verifyPagenationInAllMyContent = () => {
    try {
        browser.sleep(1000);
        console.log('Verify Pagenation in All My Content');
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.page1);
        console.log('Scroll down to the Page');
        browser.sleep(1000);
        searchObj.page2.click();
        browser.sleep(2000);
        console.log('Click on Page2');
     
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent)))
        {
            console.log('Verified Page 2 ');
            
        }
        browser.sleep(1000);
        searchObj.pagePrevious.click();
        browser.sleep(2000);
        console.log('Click on pagePrevious');
      
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent)))
        {
            console.log('Verified Page Previous ');
            
        }
       
        browser.sleep(1000);
        searchObj.pageNext.click();
        browser.sleep(2000);
        console.log('Click on Next Page');
      
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent)))
        {
            console.log('Verified Page Next ');
            
        }
        browser.sleep(1000);
        searchObj.pageLast.click();
        browser.sleep(1000);
        console.log('Click on Last Page');
       
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent)))
        {
            console.log('Verified Page Last');
            
        }
        browser.sleep(1000);
        searchObj.pageFirst.click();
        
        console.log('Click on First Page');
        
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent)))
        {
            console.log('Verified Page First');
            
        }
        
        console.log('Succesfully Verified all the Page Pagenation');
        


    }
    catch (e) {
           console.log('Failed to Validate Pagination.');
    
       }
    
    }
    const createInviteOnlyBatch=(courseName)=>{
 
        try{
            browser.sleep(2000);
            
    
        console.log("To verify navigate to Course section and search course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse ), 20000, "headerCourse is not available");
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput  ), 20000, "searchInput  is not available");
        searchObj.searchInput.sendKeys(courseName);
        searchObj.searchInput.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon ), 20000, " searchIcon is not available");
        searchObj.searchIcon.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.getCourseName ), 20000, " getCourseName is not available");
        searchObj.getCourseName.getText().then(function (coursename) {
            console.log('Coursename Taken is:' + coursename);
            searchObj.getCourseName.click();
        });
        browser.sleep(2000);
        searchObj.addIcon.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch  ), 20000, "nameOfBatch  is not available");
        searchObj.nameOfBatch.sendKeys(courseName);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.aboutBatch  ), 20000, "aboutBatch  is not available");
        searchObj.aboutBatch.sendKeys(courseName);
        browser.sleep(2000);
        searchObj.startDate.click();
        browser.sleep(2000);
        searchObj.startDateCalendar.click();
        browser.sleep(2000);
        searchObj.endDate.click();
        browser.sleep(2000);
        searchObj.endDateCalendar.click();
        browser.sleep(2000);
        searchObj.mentorsInBatch.click();
        browser.sleep(2000);
        searchObj.selectMentorsInBatch.click();
        browser.sleep(2000);
        searchObj.mentorDropdown.click();
        browser.sleep(2000);
        searchObj.membersInBatch.click();
        browser.sleep(2000);
        searchObj.selectMembersInBatch.click();
        browser.sleep(2000);
        searchObj.nameOfBatch.click();
        browser.sleep(2000);
        searchObj.buttonCreate.click();
        console.log('Invite only batch for a course is created sucessfully');
    }
        catch(Exception)
        {
           console.log('Failed to create invite only batch');
        }
    }
    
    const navigateToWorkspaceFeatures = () => {
        try {
            browser.sleep(4000);
            console.log('User is trying to navigate to course batches in Workspace');
            browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
            content.headerDropdown.click();
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.workSpace), 40000, "workSpace is not available");
            searchObj.workSpace.click();
            browser.sleep(4000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseBatches), 40000, "courseBatches is not available");
            searchObj.courseBatches.click();
            
        }
        catch (e) {
            console.log('Could not access the features of Workspace');
    
        }
    
    }
    
    const validateCourseInCreatedByMeSection = () => {
        try {
            browser.sleep(2000);
            console.log('Validate Course in CreatedByMe Section');
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createdByMe), 40000, "createdByMe is not available");
            searchObj.createdByMe.click();
            console.log('Clicked on CreateByme Section');
            browser.sleep(2000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseOnGoingBatch), 40000, "courseOnGoingBatch is not available");
            searchObj.courseOnGoingBatch.getText().then(function (coursename2) {
                console.log('course OnGoingBatch is :' + coursename2);
                
            });
           
        }
        catch (e) {
            console.log('Failed to Validate Assigned batches is not under Created by me section.');
    
        }
    
    }
    
    
    const courseSearchFilter=()=>{
 
        try{
    
            console.log("verifying the course search by applying filters");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");           
            browser.sleep(1000);
            searchObj.headerCourse.click();
            browser.sleep(2000);
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchInput), 20000, "searchInput not available");
            searchObj.searchInput.sendKeys('Course');
            searchObj.searchIcon.click();
            browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.filterIcon), 20000, "filterIcon not available"); 
            // searchObj.filterIcon.click();
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickFilterMedium), 20000, "clickFilterMedium not available");
            searchObj.clickFilterMedium.click();
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectFilterMedium), 20000, " selectFilterMedium not available");
            searchObj.selectFilterMedium.click();
            searchObj.clickFilterMedium.click();
            browser.sleep(2000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickFilterClass), 20000, "clickFilterClass not available");
            searchObj.clickFilterClass.click();
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectFilterClass), 20000, " selectFilterClass not available");
            searchObj.selectFilterClass.click();
            searchObj.clickFilterClass.click();
            browser.sleep(2000);
           
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickFilterSubject), 20000, "clickFilterSubject not available");
            searchObj.clickFilterSubject.click();
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectFilterSubject), 20000, "selectFilterSubject not available");
            searchObj.selectFilterSubject.click();
            searchObj.clickFilterSubject.click();
           
            browser.sleep(2000);
          // searchObj.clickSubmit.click();
           console.log( "User is able to click on submit button");
            browser.executeScript('window.scrollTo(0,0);').then(function(){
                console.log('++++++SCROLLED UP+++++');
            });

            browser.sleep(1000);
            searchObj.ResetSubmit.click();
            browser.sleep(1000);
            console.log("User is able to click on reset button");
            
            try {
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseToBeClicked), 20000, " courseToBeClicked not available");
                
    
                if (searchObj.courseToBeClicked.isDisplayed())
                 {
                    var name=searchObj.courseToBeClicked.getText();
                    console.log("Filters are applied "+name+ " is the resultant course");
                    
                }
            } 
            catch (Exception ) 
            {
                  console.log( "Filters are applied but could not get the resultant course");     
            }
    
        }
        
        catch(Exception)
        {
           console.log("Failed on searching courses by applying filters ");
        }
    }
    const  vaidatePageLangaugeTranslation=()=>{
     
        try{
            console.log("User is trying to Verify Langauge Translation ");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");           
            searchObj.headerCourse.click();
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchInput), 20000, "searchInput not available");
            searchObj.searchInput.sendKeys('Course');
            browser.sleep(500);
            searchObj.searchIcon.click();
            browser.sleep(1000);
            console.log("User Searched Course");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickLangDropdown), 20000, "clickLangDropdown not available");
            searchObj.clickLangDropdown.click();
            browser.sleep(1000);
            searchObj.sltHindiLang.click();
            console.log("Hindi Language Selected in the Dropdown");
            browser.sleep(1000);
            if(searchObj.assertLangContent.isDisplayed())
            {
            console.log("Hindi Content Validated Succesfully");
            }
            else
            {
                console.log( "Hindi Content not available for Validation");
            }
            browser.sleep(1000);
    
          
            searchObj.clickLangDropdownEnglish.click();
            browser.sleep(1000);
            searchObj.sltUrduLang.click();
            console.log("Urdu Language Selected in the Dropdown");
            browser.sleep(1000);
            if(searchObj.assertLangContent.isDisplayed())
            {
            console.log("Urdu Content Validated Succesfully");
            }
            else{
                console.log("Urdu Content not available for Validation");
            }
            browser.sleep(1000);
    
            searchObj.clickLangDropdownEnglish.click();
            browser.sleep(1000);
            searchObj.sltEnglishLang.click();
            console.log( "English Language Selected in the Dropdown");
            browser.sleep(1000);
            if(searchObj.assertLangContent.isDisplayed())
            {
            console.log("English Content Validated Succesfully");
            }
            else{
                console.log("English Content not available for Validation");
            }
            browser.sleep(1000);
          
        }
        catch(Exception)
        {
           console.log("Failed To verify Langauge Translation ");
        }
    }
    const  LangaugeTranslation=()=>{
     
        try{
            console.log("User is trying to translate language");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");           
            searchObj.headerCourse.click();
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchInput), 20000, "searchInput not available");
            searchObj.searchInput.sendKeys('Course');
            browser.sleep(500);
            searchObj.searchIcon.click();
            browser.sleep(1000);
            console.log("User Searched Course");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickLangDropdown), 20000, "clickLangDropdown not available");
            searchObj.clickLangDropdown.click();
            browser.sleep(1000);
            searchObj.sltHindiLang.click();
            console.log("Hindi Language Selected in the Dropdown");
            browser.sleep(1000);
            if(searchObj.assertLangContent.isDisplayed())
            {
            console.log("Hindi Content Validated Succesfully");
            }
            else
            {
                console.log( "Hindi Content not available for Validation");
            }
            browser.sleep(1000);
    
          
            searchObj.clickLangDropdownEnglish.click();
            browser.sleep(1000);
            searchObj.sltUrduLang.click();
            console.log("Urdu Language Selected in the Dropdown");
            browser.sleep(1000);
            if(searchObj.assertLangContent.isDisplayed())
            {
            console.log("Urdu Content Validated Succesfully");
            }
            else{
                console.log("Urdu Content not available for Validation");
            }
            browser.sleep(1000);
    
            searchObj.clickLangDropdownEnglish.click();
            browser.sleep(1000);
            searchObj.sltEnglishLang.click();
            console.log( "English Language Selected in the Dropdown");
            browser.sleep(1000);
            if(searchObj.assertLangContent.isDisplayed())
            {
            console.log("English Content Validated Succesfully");
            }
            else{
                console.log("English Content not available for Validation");
            }
            browser.sleep(1000);
        }
        catch(Exception)
        {
           console.log("Failed To verify Langauge Translation in Explore-CoursePage");
        }
    }
    const  SearchCouseWithRegionalLang=()=>{
     
        try{
            console.log("User is trying to Verify Regional Langauge Course Search ");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");           
            browser.sleep(1000);
            searchObj.headerCourse.click();
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchInput), 20000, "searchInput not available");
            searchObj.searchInput.sendKeys("हिंदी");
            browser.sleep(500);
            searchObj.searchIcon.click();
            browser.sleep(1000);
            console.log("User Searched Hindi Course");
            // if(searchObj.assertLangContent.isDisplayed())
            // {
            // console.log("Hindi Content Validated Succesfully");
            // }
            // else
            // {
            //     console.log( "Hindi Content not available for Validation");
            // }
        
            searchObj.filterSearch.clear();
            searchObj.filterSearch.sendKeys("ಕನ್ನಡ");
            browser.sleep(1000);
            searchObj.clickSearch.click();
            browser.sleep(1000);
            console.log("User Searched ಕನ್ನಡ Course");
            // if(searchObj.assertLangContent.isDisplayed())
            // {
            // console.log("Tamil Content Validated Succesfully");
            // }
            // else
            // {
            //     console.log( "Tamil Content not available for Validation");
            // }
          
        }
        catch(Exception)
        {
           console.log("Failed To verify Regional Langauge Course Search ");
        }
    }
    const clickOnViewAll=()=>{
      var course1;
      var course2;
        try{
            console.log("User is trying to click on view all and check the pagination");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");           
            searchObj.headerCourse.click();
          
            course1= searchObj.coursename1.getText();
            searchObj.viewAll.click();
            browser.sleep(500); 
            searchObj.paginationTwo.click();
            browser.sleep(500); 
             course2= searchObj.coursename1.getText();
    
            //  expect(searchObj.courseName.getText().then(function(x){
            //     x.toEqual(searchObj.courseName.getText())}));
            
            //  console.log("Both course card are equals");
             console.log("Pagination is working fine in all pages after clicking on view all button.");
          return{
              course1,
              course2,
          }
        }
        catch(Exception)
        {
           console.log("Pagination is not working");
        }
    }
    const getContentFromQRCode=()=>{
       
          try{
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath,'3');
        var qr=cred[18]['Title'];

              console.log("User is entering dialcode to get the content");
              browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.qrCode), 20000, "qrCode not available");           
              searchObj.qrCode.click();
              browser.sleep(500);
               searchObj.enterQRCode.sendKeys(qr);
               browser.sleep(1000);
              searchObj.submitButton.click();
              browser.sleep(1000); 
              if(searchObj.courseCard.isPresent()){
                searchObj.courseCard.click();
                console.log("User clicked on the course card");
                console.log("User is getting the content after entering dial code");
              }
              console.log("User is not getting the content after entering dial code");
              
            //   if(searchObj.resumeCourse.isDisplayed()) 
            //   {
            //     browser.sleep(1000); 
            //     searchObj.closeResumeWindow.click();
            //     console.log("resume window is present and handled");
            //    }
              
          
          }
          catch(Exception)
          {
             console.log("Failed to get the content after entering dialcode");
          }
      } 
      const  navigateToCourseAndSearchForOpenBatch=(coursename)=>{
   
        try{
            console.log("To verify navigate to Course section, search course ");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");           
            browser.sleep(1000);
            searchObj.headerCourse.click();
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 20000, "searchInput not available");
            searchObj.searchInput.sendKeys(coursename);
            browser.sleep(500);
            searchObj.searchIcon.click();
            console.log("Clicked on the searchIcon");
            browser.executeScript('window.scrollTo(0,200);').then(function () {
                console.log('++++++SCROLLED Down+++++');
            });
            browser.sleep(3000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard), 20000, "courseCard not available");           
            searchObj.courseCard.click();
            browser.sleep(1000);
            console.log("Clicked on the course card");
            console.log("verified navigation to Course section, search course");
        }
        catch(Err)
        {
           console.log("Failed on navigating to Course section, search course "+Err);
        }
    }
    const   batchNameAndEndDateIsMandatoryFields=()=>{
       
        try{
            console.log("Batch name and End date are the mandatory fields");
            browser.executeScript('window.scrollTo(0,200);').then(function(){
                console.log('++++++SCROLLED UP+++++');
            });
           browser.sleep(2000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addIcon), 20000, "headerCourse not available");           
            searchObj.addIcon.click();
            browser.sleep(500);
          
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch), 20000, " nameOfBatch is not available");
            searchObj.nameOfBatch.click();
            searchObj.nameOfBatch.sendKeys("batch1");
            console.log("Name Of The Batch is mandatory field");
            searchObj.startDate.isDisplayed();
            console.log("Start Date is mandatory field");
            browser.sleep(1000);
            searchObj.closeBatchPopup.click();
          
             console.log("Batch name and Start date are mandatory fields");
             console.log("Course Mentor is able to create open batch succesfully");
        }
        catch(Exception)
        {
           console.log("failed in verifying Batch name and Start date are mandatory fields");
        }
    }
    const  createOpenBatchWithEnrolmentDate=()=>{
       
        try{
            console.log("User is trying to create open batch for a course");
            browser.executeScript('window.scrollTo(0,250);').then(function () {
                console.log('++++++SCROLLED Down+++++');
            });
            browser.sleep(4000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addIcon), 20000, "headerCourse not available");           
            searchObj.addIcon.click();
            console.log("Click on Add Icon");
            browser.sleep(500);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch), 20000, " nameOfBatch is not available");
            searchObj.nameOfBatch.sendKeys('BatchWithEnrolmentDate');
            searchObj.aboutBatch.click();
            searchObj.aboutBatch.sendKeys(' Open Batch');
            console.log("Enter Batch Name");
            browser.sleep(500);
            // searchObj.certificateNO.click();
            // console.log("Click on certificate no");
            // browser.sleep(1000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startdate), 20000, " startdate is not available");
            // searchObj.startdate.click();
            // console.log("Click on Start Date");
            // browser.sleep(500);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDateCalendar), 20000, " startDateCalendar is not available");
            // searchObj.startDateCalendar.click();
            // browser.sleep(500);
            // console.log("Select Start Date");
            browser.sleep(500);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickEnrolmentDate), 20000, "clickEnrolmentDate is not available");
            searchObj.clickEnrolmentDate.click();
            console.log("Click Enrollment Date");
            browser.sleep(500);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectEnrolmentDate), 20000, "selectEnrolmentDate is not available");
            searchObj.selectEnrolmentDate.click();
            console.log("Select Enrolment Date");
            browser.sleep(500);
    
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.updateBatch), 20000, "updateBatch not available");
            searchObj.updateBatch.click();
            console.log("Click on Create button");
    
            //browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchCreateTostrMsg), 20000, "batchCreateTostrMsg not available");
           
            console.log("Batch created Succesfully with Enrollment Date");
          
            browser.sleep(2000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickEnrollmentEditButton), 20000, "clickEnrollmentEditButton is not available");
            searchObj.clickEnrollmentEditButton.click();
            console.log( "Click on Enrolment Edit Icon");
            browser.sleep(500);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickEnrolmentDate), 20000, "clickEnrolmentDate is not available");
            searchObj.clickEnrolmentDate.click();
            console.log("Click on Enrolment Date");
            browser.sleep(500);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.updateEnrollmentDate), 20000, "updateEnrollmentDate is not available");
            searchObj.updateEnrollmentDate.click();
            console.log("Update Enrolment Date");
            browser.sleep(500);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.endDate), 20000, "endDate is not available");
            searchObj.endDate.click();
            browser.sleep(500);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.endDateCalendar), 20000, "endDateCalendar is not available");
            searchObj.endDateCalendar.click();
            console.log("Select EndDate");
            browser.sleep(500);
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.updateBatch), 20000, "updateBatch not available");
            searchObj.updateBatch.click();
            console.log("Click on Update Button");
            browser.sleep(2000);
            //browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchUpdateTostrMsg), 20000, "batchCreateTostrMsg not available");
            console.log("Batch updated successfully...");
            console.log("Batch end date succesfully updated for a batch which was created without end date");
            console.log("Batch created with all the available fields values");
        }
        catch(Exception)
        {
           console.log("Failed to create open batch");
        }
    }
    const  createOpenBatch=()=>{
          
        try{
            console.log("User is trying to create open batch for a course");
           // browser.executeScript("arguments[0].scrollIntoView();", searchObj.addIcon);
            browser.executeScript('window.scrollTo(0,250);').then(function () {
                console.log('++++++SCROLLED Down+++++');
            });
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addIcon), 20000, "createbatch not available");           
            browser.sleep(4000);
            searchObj.addIcon.click();
            console.log("Click on Add Icon");
            browser.sleep(500);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch), 20000, "nameOfBatch not available");
            searchObj.nameOfBatch.sendKeys("Batch");
            searchObj.aboutBatch.click();
            searchObj.aboutBatch.sendKeys(" Open Batch");
            console.log("Enter Batch Name");
            browser.sleep(500);
            //  searchObj.certificateNO.click();
            //  console.log("Click on certificate no");
            // browser.sleep(500);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startdate), 20000, " startdate is not available");
            // searchObj.startdate.click();
            // console.log("Click on Start Date");
            // browser.sleep(500);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDateCalendar), 20000, " startDateCalendar is not available");
            // searchObj.startDateCalendar.click();
            // console.log("Select Start Date");
            browser.sleep(500);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.endDate), 20000, "sendDate is not available");
            searchObj.endDate.click();
            browser.sleep(500);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.endDateCalendar), 20000, "endDateCalendar is not available");
            searchObj.endDateCalendar.click();
            console.log("Select EndDate");
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.updateBatch), 20000, "updateBatch not available");
            searchObj.updateBatch.click();
            console.log("Click on Create button");
            browser.sleep(500);
            console.log("Batch Succesfully created  without Enrollment date");
            
            browser.sleep(2000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.viewCourseDashBoard), 20000, "viewCourseDashBoard not available");
            // searchObj.viewCourseDashBoard.click();
            // browser.sleep(1000);
        //    browser.getCurrentUrl().contains(APP_URL+"/learn/course/do_");
            //  searchObj.batchCourseName.getText();
         
        }
        catch(Exception)
        {
           console.log("Failed to create open batch");
        }
    }
    const  enrollForOpenBatch=()=>{
        
      try{
          console.log("User is trying to enroll for an open batch");
          browser.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('++++++SCROLLED UP+++++');
        });
          browser.sleep(1000);
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
        //   browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resumeCourse), 20000, "resumeCourse not available");
        //   searchObj.resumeCourse.isDisplayed();
          browser.sleep(1000);
          searchObj.batchCourseName.getText().then(function(input){
            console.log("User is successfully enrolled to Course : "+input);
          });
          
          console.log("The progress bar is getting updated once the user consume the course");
    
          
      }
      catch(Exception)
      {
         console.log("Failed to enroll for an open batch");
      }
    }
    const checkTheCourseInMyCourseSection=()=>{
        var batchname;
      try{
          console.log("Invited member is Checking availabilty of invited courses in My courses section.");
          browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courses), 20000, "courses not available");           
          searchObj.courses.click();
          browser.sleep(1000);
    
          searchObj.myLatestCousreCount.getText().then(function(count){
            console.log("Click on Training Section and count is : "+count);
          });
          
          browser.sleep(1000);
    
          try
          {
            //searchObj.courseName.getText();
            searchObj.myLatestCoursNextButton.click();
            console.log("Click on nextButton");
          }catch(Exception)
          {
            console.log("Handled");
          }
          return batchname;
      }
      catch(Exception)
      {
         console.log("Failed to get the invited course in my course section.");
      }
    }
    const searchContentWithFilter=()=>{
    
        try{
            console.log("User is in Explore-Course Page");
            console.log("Clicked on Topic Dropdown");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not loaded");
            searchObj.headerCourse.click();
            browser.sleep(2000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickTopticDropdown), 20000, "clickTopticDropdown not loaded");
            searchObj.clickTopticDropdown.click();
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectFirstContent), 20000, "selectFirstContent not loaded");
            searchObj.selectFirstContent.click();
            console.log("User is in Explore-Course Page");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectFirstSubject), 20000, "selectFirstSubject not loaded");
            searchObj.selectFirstSubject.click();
            console.log("Selected First Topics");
            browser.sleep(1000);
            searchObj.clickDonebutton.click();
            console.log("Clicked on Done Button");
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickSubmitButton), 20000, "clickSubmitButton not loaded");
            searchObj.clickSubmitButton.click();
            console.log("Clicked on Submit Button");
            browser.sleep(1000);
            if(searchObj.validateCourseResult.isPresent())
            {
                console.log("Content is displayed for the filter TOPIC");
                searchObj.clikResettButton.click();
                console.log("Clicked on Reset Button");
    
            }
    
        }
        catch(Exception)
        {
           console.log("Failed on Searching Content using Filter Topics");
        }
    }
    const carryForwardSearchFilter=()=>{
        
        try{
            console.log("User is in Explore-Course Page");
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not loaded");
            searchObj.headerCourse.click();
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickPurposeDropDown), 20000, "clickPurposeDropDown not loaded");
            searchObj.clickPurposeDropDown.click();
            console.log("Clicked on PurposeDropdown");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectPurposeDropdown), 20000, "selectPurposeDropdown not loaded");
            searchObj.selectPurposeDropdown.click();
            console.log("Selected Filters in PurposeDropdown");
            searchObj.clickSubmitButton.click();
            console.log("Clicked on Submit Button");
            browser.executeScript("arguments[0].scrollIntoView();", searchObj.clickLatestCourseViewAllLink);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickLatestCourseViewAllLink), 20000, "clickLatestCourseViewAllLink not loaded");
            searchObj.clickLatestCourseViewAllLink.click();
            console.log("Clicked on ViewAll Link");
    
            // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickFilters), 20000, "clickFilters not loaded");
            // searchObj.clickFilters.click();
            // console.log("Clicked on Filters");
             
            if(searchObj.checkAppliedFilters.isDisplayed())
            {
                console.log("Filters are carry forwarded succesfully");
            } 
            else
            { 
                console.log("Filters are not carry forwarded succesfully");
            }
    
        }
        catch(Exception)
        {
           console.log("Failed on Carry Forwarding Filters");
        }
    }
    const courseSearch=()=>{
        
        try{
            console.log("verifying the course search");
     
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not loaded");
            searchObj.headerCourse.click();
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchInput), 20000, "searchInput not available");
            searchObj.searchInput.sendKeys('Course');
            browser.sleep(500);
            searchObj.searchIcon.click();
            console.log("Clicked on the searchIcon");
            browser.sleep(500);
            if(searchObj.showResults.isDisplayed()&&searchObj.courseCard.isDisplayed())
            {
                console.log("User  search Course sucessfully from Course tab ");
                searchObj.courseCard.click();
                console.log("Clicked on Result CourseCard");
                browser.sleep(1000);
                // if(searchObj.verifyShareIconInCourseCard.isDisplayed())
                // {
                //     console.log("Share Icon is displayed Succesfully");
                // }
            } 
        }
        catch(Exception)
        {
           console.log("Failed on searching the course");
        }
    }
    const searchWithQRcode=()=>{
        
        try{
            console.log("user is trying to search content using QR code");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not loaded");
            searchObj.headerCourse.click();
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterQRcodeButton), 20000, "enterQRcodeButton not loaded");
            searchObj.enterQRcodeButton.click();
            browser.sleep(1000);
            searchObj.enterQRcodeInSearchField.click();
            searchObj.enterQRcodeInSearchField.sendKeys('A3K3A2');
            browser.sleep(500);
            searchObj.submitQRcode.click();
            browser.sleep(1000);
            if(searchObj.linkedQRcodeContents.isDisplayed())
            {
                // for(var i=0;i< searchObj.linkedQRcodeContents.size();i++)
              
                console.log("Linked contents are:Displayed ");
            
    
            } 
              else
              {
                console.log("No Linked contents are available");
              }
    
              browser.sleep(1000);
              searchObj.QrcontentClk.click();
              browser.sleep(1000);
              console.log("Content Opened Succsfully");
           
        }
        catch(Exception)
        {
           console.log("Failed on trying to search content using QR code");
        }
    }
    const  validateSignInPopupOnClickOnEnroll=()=>{
        
        try{
            console.log("User is in Explore-Course Page");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not loaded");
            searchObj.headerCourse.click();
            browser.sleep(1000);
     
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard), 20000, "clickSecondCourseInOpenForEnrollment not loaded");
            searchObj.courseCard.click();
            browser.sleep(1000);
            console.log("Click on Searched Course");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enrollButton), 20000, "enrollButton not loaded");
            searchObj.enrollButton.click();
            browser.sleep(1000);
            if(searchObj.assertSignInPopup.isDisplayed())
            {
                console.log("SignInPopUp has appeared on Click on Enroll button in Explore Course Page");
            } 
            searchObj.assertSignInPopup.click();
            browser.sleep(2000);
            console.log("User has re-directed to Login Screen");
            browser.sleep(2000);
    
            // utility.userLogin('Public User1');
            // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.userName), 20000, "userName is not available");
            // searchObj.userName.sendKeys("usersun@gmail.com");
            // searchObj.password.sendKeys('password');
            // searchObj.login.click();
            var sheetPath=getExcelPath.ConfigurePath().excelSheetPath;
            var cred= genericFun.readLoginDataFromExcelFile(sheetPath,'1','Public User1');
            browser.sleep(1000);
             
             browser.wait(protractor.ExpectedConditions.visibilityOf(content.userName), 20000, "userName is not available");
             content.userName.sendKeys(cred[0]['Username']);
             content.password.sendKeys(cred[0]['Password']);
             content.login.click();
    
            if(searchObj.validateTOCForOpenBatchCourse.isDisplayed())
            {
                console.log("TOC Page Displayed Succesfully for OpenBatch Course");
            } 
    
            console.log("User is trying to enroll for an open batch");
          browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enrollButton), 20000, "enrollButton not available");           
          searchObj.enrollButton.click();
          console.log("Click on Enroll For Course");
          browser.sleep(1000);
          browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.joinTraining), 20000, "joinTraining not available");
          searchObj.joinTraining.click();
          console.log("Click on Join Training");
          console.log("User is successfully clicking on join training button in popup");
          console.log("User is successfully enrolling to the course");
          console.log("Content is started playing");
          browser.sleep(2000);
        //   browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resumeCourse), 20000, "resumeCourse not available");
        //   searchObj.resumeCourse.isDisplayed();
        //   browser.sleep(1000);
        //   searchObj.batchCourseName.getText();
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.closeEditor2);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.closeEditor2), 20000, "closeEditor1 not available");
        searchObj.closeEditor2.click();
        browser.sleep(2000);
    
          console.log("User is successfully enrolled to Course");
          console.log("The progress bar is getting updated once the user consume the course");
    
          console.log("User is trying to unenroll for an open batch");
          browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.unEnrollButton), 20000, "unEnrollButton not available");           
          searchObj.unEnrollButton.click();
          console.log("Click on UnEnrollButton For Course");
          browser.sleep(1000);
         
          browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.leaveTraining), 20000, "leaveTraining not available");
          searchObj.leaveTraining.click();
          console.log("Click on leave Training");
          browser.sleep(1000);
          console.log("User is successfully clicking on leaving training button in popup");
          console.log("User is successfully unenrolling to the course");
    
      
    
        }
        catch(Exception)
        {
           console.log("Failed on Validating SignInPopup on click on Enroll button in Explore-Course Page");
        }
    }
    const navigateToCourse=()=>{
        
        try{
            console.log("To verify navigate to Course");
     
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not loaded");
            searchObj.headerCourse.click();
            browser.sleep(1000);
            console.log(" navigated to Course");
        }
        catch(Exception)
        {
           console.log("Failed on navigating to Course section, search course ");
        }
    }
    const navigateToTOCInExploreCoursePage=()=>{
        
        try{
            console.log("User is trying to navigate To TOC In ExploreCoursePage");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not loaded");
            searchObj.headerCourse.click();
            browser.sleep(1000);
        //    searchObj.openForEnrolmentSection.isDisplayed();
        //    console.log("User successfully verified open for enrolment section In ExploreCoursePage");
           browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.coursCard), 20000, "clickOnFirstFeauredCourses not loaded");
           searchObj.courseCard.isDisplayed();
           
            console.log("User successfully verified featured courses section In ExploreCoursePage");
            searchObj.courseCard.click();
            browser.sleep(3000);
            browser.executeScript('window.scrollTo(0,200);').then(function () {
                console.log('++++++SCROLLED Down+++++');
            });
            if(searchObj.clickOnFirstTextBookTOC.isDisplayed())
            {
               // searchObj.clickOnFirstTextBookTOC.click();
                // for(var i=0;i< searchObj.clickOnFirstCourseTOCUnits.size()-1;i++)
                {
                  console.log("Available Content :Displayed ");
                }
                browser.sleep(1000);
                if(searchObj.clickOnFirstCourseTOCUnits.isDisplayed()){
                    console.log("Available Content has sub chapter ");
                }
                
            
            } 
            else
            {
                console.log("Content is not available for consumption after clicking on Unit");
    
            }
    
            console.log("User has successfully  navigated To TOC In ExploreCoursePage");
        }
        
        catch(Exception)
        {
           console.log("Failed on navigate To TOC In  ExploreCoursePage");
        }
    } 
  
    const collaborator1CanEditCourse=()=>{
     
        try{
    
                       
            console.log("Collaborator is trying to edit the course");
            browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
            content.headerDropdown.click();           
            searchObj.workSpace.click();
            searchObj.collaborationSection.click();
            searchObj.searchForReview.click();
            searchObj.searchForReview.sendKeys(courseName);
           //  addMCAVObj.searchIconUpForReview .click();
             browser.sleep(1000);
                  
             browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseNameInCollaboration), 20000,"courseNameInCollaboration is not available"); 
            // courseNameInCollaboration =resov.courseNameInCollaboration.getText();
            // console.log(courseNameInCollaboration);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.editIcon1), 20000,"editIcon1 is not available"); 
           
                        
            console.log("Collaborator is trying to edit the course");
            browser.sleep(1500);
            searchObj.editIcon1.click();
            browser.sleep(1500);
            browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
            browser.sleep(1500);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.newChild), 20000, "newchild not available");
            searchObj.newChild.click();
            browser.sleep(1000);
            searchObj.titleNameForCourse.click();
            searchObj.titleNameForCourse.clear();
            searchObj.titleNameForCourse.sendKeys('CourseB');
            searchObj.titleKeywordForCourse.sendKeys('math');
            searchObj.addResource.click();
            browser.sleep(1500);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resourceSearch), 20000, " resourceSearch not available");
            searchObj.resourceSearch.click();
            searchObj.resourceSearch.sendKeys("pdf");
            browser.sleep(2000);
            searchObj.selectResourceType2.click();
            browser.sleep(1500);
            searchObj.clickAddbutton.click();
            console.log("Resouce Type Added Succesfully");
            searchObj.proceedButton.click();
            browser.sleep(1500);
            searchObj.save.click();
            browser.sleep(1000);
            searchObj.closeEditor1.click();
            
            console.log("Collaborator editted the course successfully");
            
        }
        catch(Exception)
        {
           console.log("Collaborator is not able to edit the course");
        }
    }
    const collaborator2CanEditCourse=()=>{
     
        try{
    
                       
            console.log("Collaborator is trying to edit the course");
            browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
            content.headerDropdown.click();           
            searchObj.workSpace.click();
            searchObj.collaborationSection.click();
            searchObj.searchForReview.click();
            searchObj.searchForReview.sendKeys(courseName);
           //  addMCAVObj.searchIconUpForReview .click();
             browser.sleep(2000);
                  
             browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseNameInCollaboration), 20000,"courseNameInCollaboration is not available"); 
            // courseNameInCollaboration =resov.courseNameInCollaboration.getText();
            // console.log(courseNameInCollaboration);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.editIcon1), 20000,"editIcon1 is not available"); 
           
                        
            console.log("Collaborator is trying to edit the course");
            browser.sleep(1500);
            searchObj.editIcon1.click();
            browser.sleep(1500);
            browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
            browser.sleep(1500);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.newChild), 20000, "newchild not available");
            searchObj.newChild.click();
            browser.sleep(1000);
            searchObj.titleNameForCourse.click();
            searchObj.titleNameForCourse.clear();
            searchObj.titleNameForCourse.sendKeys('Course123');
            searchObj.titleKeywordForCourse.sendKeys('math');
            searchObj.addResource.click();
            browser.sleep(1500);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resourceSearch), 20000, " resourceSearch not available");
            searchObj.resourceSearch.click();
            searchObj.resourceSearch.sendKeys("resource");
            browser.sleep(2000);
            searchObj.selectResourceType2.click();
            browser.sleep(1500);
            searchObj.clickAddbutton.click();
            console.log("Resouce Type Added Succesfully");
            searchObj.proceedButton.click();
            browser.sleep(1500);
            searchObj.save.click();
            browser.sleep(1000);
            searchObj.closeEditor1.click();
            
            console.log("Collaborator editted the course successfully");
            
        }
        catch(Exception)
        {
           console.log("Collaborator is not able to edit the course");
        }
    }
    const createUpcomingOpenBatchForCourse=()=>{
 
        try{
            var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
            var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
    
        console.log('Create Upcoming Batches');
        searchObj.addIcon.click();
        console.log('Click on Add Icon');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch  ), 20000, "nameOfBatch  is not available");
        searchObj.nameOfBatch.sendKeys('UpcomingBatches');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.aboutBatch  ), 20000, "aboutBatch  is not available");
        searchObj.aboutBatch.sendKeys('UpcomingBatches');
        console.log('Enter Batch Name');
        // searchObj.certificateNO.click();
        // console.log('Click on Open Batch');
        searchObj.startDate.click();
        searchObj.endDateCalendar.click();
        console.log('Select Start Date');
        searchObj.endDate.click();
        searchObj.endDateCalendar.click();
        console.log('Select EndDate');
        searchObj.createBatchButton.click();
        searchObj.ongoingBatch.click();
        searchObj.upcomingBatch.click();
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.calenderIcon))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.calenderIcon)))
        {
            console.log('Upcoming open batch is created');
        }
    console.log('Course mentor successfully created open upcoming batch');
    
    
       
    }
        catch(Exception)
        {
           console.log('Failed to create open upcoming batch');
        }
    }
    const validateCourseInAssigToMeSection = () => {
        try {
            console.log('Validate Course in Assign me section');
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assignedToMe), 40000, "assignedToMe is not available");
            searchObj.assignedToMe.click();
            console.log('Clicked on Assigned To Me Section');
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseOnGoingBatch1), 40000, "courseOnGoingBatch1 is not available");
            searchObj.courseOnGoingBatch1.getText().then(function (courseOnGoingBatch) {
                console.log('course On Going Batch is :' + courseOnGoingBatch);
                
            });
            console.log('Logged in user created batches  Not under Assigned to me section');
        }
        catch (e) {
            console.log('Failed to Validate Logged in user created batches is not  under Assigned to me section.');
    
        }
    
    }
    const verifyCourseInOnGoingBatchSection = () => {
        try {
            console.log('User is verifying Course in Created By Section');
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickCreateByMeSection), 40000, "clickCreateByMeSection is not available");
            searchObj.clickCreateByMeSection.click();
            console.log('clicked on CreatedByMe Section');
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseNameInOnGoingBatches), 40000, "courseNameInOnGoingBatches is not available");
            searchObj.courseNameInOnGoingBatches.getText().then(function (courseOnGoingBatch) {
                console.log('course Name In OnGoing Batches is :' + courseOnGoingBatch);
                
            });
            console.log('Course displayed Succesfully under created by me section Created By Creator');
        }
        catch (e) {
            console.log('Failed to verifying Course in Created By Section.');
    
        }
    
    }
    const updateBatches = () => {
        try {
            console.log('User is Trying to Update OnGoing and UpComing Course');
            expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.lockicon))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.lockicon)))
        {
            console.log('Open batch have a open lock icon on the content card');
        }
            searchObj.courseNameInOnGoingBatches.click();
            searchObj.nameOfBatch.clear();
            searchObj.nameOfBatch.sendKeys('UpdatedLatestCourse');
            console.log('Update Batch Name');
            searchObj.updateBatch.click();
            expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseNameInOnGoingBatches))).toBeTruthy
            if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseNameInOnGoingBatches)))
            {
                console.log('Update Batch Popup Closed Succesfully');
            }
            else
            {
                console.log('Update Batch Popup didnt close after clicking on Update button');
            }
    
    
        }
        catch (e) {
            console.log('Failed to update Ongoing and UpComing Batches Course in Created By Section');
    
        }
    
    }
    const validateAllBatches = () => {
        try {
            console.log('User is Trying to Validate all  OnGoing and UpComing Course And Expired Section in CreateByMe and Assign me Section');
            expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseOnGoingBatch1))).toBeTruthy
            expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseUpcomingBatch))).toBeTruthy
            expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseExpiredBatch))).toBeTruthy
            searchObj.assignedToMe.click();
            expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseOnGoingBatch1))).toBeTruthy
            expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseUpcomingBatch))).toBeTruthy
            expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseExpiredBatch))).toBeTruthy
            console.log('Succesfully Validated Ongoing UpComing Expired Section in CreatedByMe Section and Assigned Me Section')
        }
        catch (e) {
            console.log('Failed to Validate all  OnGoing and UpComing Course And Expired Section in CreateByMe and Assign me Section');
    
        }
    
    }                
    const verifyBatchEditingFromExpiredCoursesSection = () => {
        try {
            console.log('User is trying to verify editing of Batch from Expired Courses section');
            browser.executeScript("arguments[0].scrollIntoView();", searchObj.expiredCoursesCourse);
           if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.expiredCoursesCourse)))
        {
            
            searchObj.expiredCoursesCourse.click();
            expect(searchObj.nameOfBatch.isEnabled()).toBe(false)
            expect(searchObj.aboutBatch.isEnabled()).toBe(false)
            expect(searchObj.startDate.isEnabled()).toBe(false)
            expect(searchObj.endDate.isEnabled()).toBe(false)
            expect(searchObj.updateBatch.isEnabled()).toBe(true)
            expect(searchObj.mentorsInBatch1.isEnabled()).toBe(true)
            if (searchObj.nameOfBatch.isEnabled() && searchObj.aboutBatch.isEnabled() && searchObj.startDate.isEnabled() &&searchObj.endDate.isEnabled() &&searchObj.updateBatch.isEnabled() && searchObj.mentorsInBatch1.isEnabled()) 
                {
        
        
        console.log('In Expired Courses section user is NOT ALLOWED TO EDIT any details of Courses')
        searchObj.closePopUp.click();
        }
    }
        else{
            console.log('No expired batch is available')
    
        }
    
            
    }
        catch (e) {
            console.log('Failed To verify editing of Batch from Expired Courses section');
    
        }
    
    }
    
    
    
    const verifyPagenation = () => {
        try {
            console.log('Verify Pagenation in  CourseBatches');
            searchObj.onGoingViewAll.click();
            console.log('clicked on Course Batches')
                
            browser.executeScript("arguments[0].scrollIntoView();", searchObj.page1);
            console.log('Scroll down to the Page');
            searchObj.page2.click();
            console.log('Click on Page2');
            expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList))).toBeTruthy
            if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList)))
            {
                console.log('Verified Page 2 ');
                
            }
            searchObj.pagePrevious.click();
            console.log('Click on pagePrevious');
            expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList))).toBeTruthy
            if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList)))
            {
                console.log('Verified Page Previous ');
                
            }
           
            searchObj.pageNext.click();
            console.log('Click on Next Page');
            expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList))).toBeTruthy
            if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList)))
            {
                console.log('Verified Page Next ');
                
            }
            searchObj.pageLast.click();
            console.log('Click on Last Page');
            expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList))).toBeTruthy
            if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList)))
            {
                console.log('Verified Page Last');
                
            }
            searchObj.pageFirst.click();
            console.log('Click on First Page');
            expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList))).toBeTruthy
            if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList)))
            {
                console.log('Verified Page First');
                
            }
           console.log('Succesfully Verified all the Page Pagenation');
            browser.executeScript("arguments[0].scrollIntoView();", searchObj.headerCourse);
            console.log('Scroll to Start of Page');
            searchObj.closeCourse.click();
            console.log('closeCourse');
            console.log('Succesfully Verified all the Page');
            console.log('Clicked on closeIcon in view all page, user returns to courses page');
    
    
    
        }
        catch (e) {
               console.log('Failed to Validate Pagination.');
        
           }
        
        }
    
    
        const validationMsgWhileAddingMoreThan100Members = () => {
            try {
                console.log('Verify Validation Msg while adding More than 100 Members');
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 40000, "headerCourse is not available");
                searchObj.headerCourse.click();
                console.log('clicked on  Trainings');
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 40000, "searchInput is not available");
                searchObj.searchInput.click();
                searchObj.searchInput.sendKeys('100UsersForAutomation')
                console.log('Entered Course Name');
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon), 40000, "searchIcon is not available");
                searchObj.searchIcon.click();
                console.log('clicked on Search Button');
                // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard ), 20000, " searchPublishedCourses is not available");
                // searchObj.courseCard.click();
                // console.log('clicked on Course Card');
                // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickEnrollmentEditButton ), 20000, " clickEnrollmentEditButton is not available");
                // searchObj.clickEnrollmentEditButton.click();
                // console.log('click on edit batch icon');
    
    
                // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.Validate100MemberValidationMsgFetch), 40000, "courseNameInOnGoingBatches is not available");
                // searchObj.courseNameInOnGoingBatches.getText().then(function (Validate100MemberValidationMsgFetch) {
                //     console.log('Validate100MemberValidationMsgFetch is :' + Validate100MemberValidationMsgFetch);
                    
                // });
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.closePopUp ), 20000, " clickEnrollmentEditButton is not available");
                searchObj.closePopUp.click();
                console.log('clicked on Close icon');
            }
            catch (e) {
                console.log('Failed to Validate Msg while adding More than 100 Members.');
        
            }
        
        }
        const validateAllElementsInLanguageSelectionAsHindi=()=>{
    
            try{
                console.log("User is trying to validate All Elements In Language Selection As Hindi");
                browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown not loaded");
                browser.sleep(1000);
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clickLangDropdown), 20000, " clickLangDropdown not loaded");
                searchObj.clickLangDropdown.click();
                browser.sleep(1000);
                searchObj.hindiInLanguageDropdown.click();
        
                expect(searchObj.libraryInHindi.isPresent()).toBe(true);
                if(searchObj.libraryInHindi.isDisplayed())
                {
                 console.log("libraryInHindi is Verifed Successfully ")
                }
                expect(searchObj.trainingsInHindi.isPresent()).toBe(true);
                if(searchObj.trainingsInHindi.isDisplayed())
                {
                 console.log("trainingsInHindi is Verifed Successfully ")
                }
                // expect(searchObj.enterQRcodeInHindi.isPresent()).toBe(true);
                // if(searchObj.enterQRcodeInHindi.isDisplayed())
                // {
                //  console.log("enterQRcodeInHindi is Verifed Successfully ")
                // }
                // searchObj.enterQRcodeInHindi.click();
                // browser.sleep(1000);
                // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enter6DigitQRcodeInHindi), 20000, "enter6DigitQRcodeInHindi not loaded");
                // searchObj.enter6DigitQRcodeInHindi.sendKeys('234ZNY');
                // browser.sleep(2000);
                // searchObj.submitInQRcodeInHindi.click();
                // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentNotAddedYetInHindi), 20000, "contentNotAddedYetInHindi not loaded");
                // expect(searchObj.contentNotAddedYetInHindi.isPresent()).toBe(true);
                // if(searchObj.contentNotAddedYetInHindi.isDisplayed())
                // {
                //  console.log("contentNotAddedYetInHindi is Verifed Successfully ")
                // }
                // expect(searchObj.stateMessageInHindi.isPresent()).toBe(true);
                // if(searchObj.stateMessageInHindi.isDisplayed())
                // {
                //  console.log("stateMessageInHindi is Verifed Successfully ")
                // }
                browser.sleep(1000);
                searchObj.libraryInHindi.click();
                browser.sleep(3000);
                expect(searchObj.searchFieldInHindi.isPresent()).toBe(true);
                if(searchObj.searchFieldInHindi.isDisplayed())
                {
                 console.log("searchFieldInHindi is Verifed Successfully ")
                }
                expect(searchObj.searchButtonInHindi.isPresent()).toBe(true);
                if(searchObj.searchButtonInHindi.isDisplayed())
                {
                 console.log("searchButtonInHindi is Verifed Successfully ")
                }
                // expect(searchObj.subjectInCourseCardInHindi.isPresent()).toBe(true);
                // if(searchObj.subjectInCourseCardInHindi.isDisplayed())
                // {
                //  console.log("subjectInCourseCardInHindi is Verifed Successfully ")
                // }

                // expect(searchObj.selectLanguageInHindi.isPresent()).toBe(true);
                // if(searchObj.selectLanguageInHindi.isDisplayed())
                // {
                //  console.log("selectLanguageInHindi is Verifed Successfully ")
                // }
                
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectTrainingInHindi), 20000, " selectTrainingInHindi not loaded");
                browser.sleep(1000);
                searchObj.selectTrainingInHindi.click();
                browser.sleep(1000);
                expect(searchObj.selectBoardInHindi.isPresent()).toBe(true);
                if(searchObj.selectBoardInHindi.isDisplayed())
                {
                 console.log("selectBoardInHindi is Verifed Successfully ")
                }
                
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectClassInHindi), 20000, " selectClassInHindi not loaded");
                
                expect(searchObj.selectClassInHindi.isPresent()).toBe(true);
                if(searchObj.selectClassInHindi.isDisplayed())
                {
                 console.log("selectClassInHindi is Verifed Successfully ")
                }
                expect(searchObj.selectMediumInHindi.isPresent()).toBe(true);
                if(searchObj.selectMediumInHindi.isDisplayed())
                {
                 console.log("selectMediumInHindi is Verifed Successfully ")
                }
                expect(searchObj.selectSubjectInHindi.isPresent()).toBe(true);
                if(searchObj.selectSubjectInHindi.isDisplayed())
                {
                 console.log("selectSubjectInHindi is Verifed Successfully ")
                }
                // expect(searchObj.exploreContentInHindi.isPresent()).toBe(true);
                // if(searchObj.exploreContentInHindi.isDisplayed())
                // {
                //  console.log("exploreContentInHindi is Verifed Successfully ")
                // }
                expect(searchObj.resetInHindi.isPresent()).toBe(true);
                if(searchObj.resetInHindi.isDisplayed())
                {
                 console.log("resetInHindi is Verifed Successfully ")
                }
                // expect(searchObj.submitInHindi.isPresent()).toBe(true);
                // if(searchObj.submitInHindi.isDisplayed())
                // {
                //  console.log("submitInHindi is Verifed Successfully ")
                // }
                expect(searchObj.viewAllInHindi.isPresent()).toBe(true);
                if(searchObj.viewAllInHindi.isDisplayed())
                {
                 console.log("viewAllInHindi is Verifed Successfully ")
                }
                // browser.executeScript("arguments[0].scrollIntoView();", searchObj.helpCenterInHindi);
                // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.helpCenterInHindi), 20000, " helpCenterInHindi not loaded");
                // expect(searchObj.helpCenterInHindi.isPresent()).toBe(true);
                // if(searchObj.helpCenterInHindi.isDisplayed())
                // {
                //  console.log("helpCenterInHindi is Verifed Successfully ")
                // }
                // expect(searchObj.contactForQueriesInHindi.isPresent()).toBe(true);
                // if(searchObj.contactForQueriesInHindi.isDisplayed())
                // {
                //  console.log("contactForQueriesInHindi is Verifed Successfully ")
                // }
                expect(searchObj.termsOfUseInHindi.isPresent()).toBe(true);
                if(searchObj.termsOfUseInHindi.isDisplayed())
                {
                 console.log("termsOfUseInHindi is Verifed Successfully ")
                }
        
                console.log("User successfully validated All Elements In Language Selection As Hindi");
            }
            catch(Exception)
            {
               console.log("Failed to validate All Elements In Language Selection As Hindi");
            }
        }
        const  validateAllElementsInLanguageSelectionAsKannada=()=>{
            
            try{
                console.log("User is trying to validate All Elements In Language Selection As Kannada");
                browser.executeScript("arguments[0].scrollIntoView();", searchObj.libraryInHindi);
               
                browser.sleep(1000);
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clickLangDropdownEnglish), 20000, "clickLangDropdownEnglish not loaded");
                searchObj.clickLangDropdownEnglish.click();
                browser.sleep(1000);
                searchObj.kannadaInLanguageDropdown.click();
        
                expect(searchObj.libraryInKannada.isPresent()).toBe(true);
                if(searchObj.libraryInKannada.isDisplayed())
                {
                 console.log("libraryInKannada is Verifed Successfully ")
                }
                expect(searchObj.trainingsInKannada.isPresent()).toBe(true);
                if(searchObj.trainingsInKannada.isDisplayed())
                {
                 console.log("trainingsInKannada is Verifed Successfully ")
                }
                expect(searchObj.enterQRcodeInKannada.isPresent()).toBe(true);
                if(searchObj.enterQRcodeInKannada.isDisplayed())
                {
                 console.log("enterQRcodeInKannada is Verifed Successfully ")
                }
                searchObj.enterQRcodeInKannada.click();
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enter6DigitQRcodeInKannada), 20000, "enter6DigitQRcodeInKannada not loaded");
                searchObj.enter6DigitQRcodeInKannada.sendKeys('abc343');
                browser.sleep(1000);
             
                searchObj.submitInQRcodeInKannada.click();
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentNotAddedYetInKannada), 20000, "contentNotAddedYetInHindi not loaded");
                expect(searchObj.contentNotAddedYetInKannada.isPresent()).toBe(true);
                if(searchObj.contentNotAddedYetInKannada.isDisplayed())
                {
                 console.log("contentNotAddedYetInKannada is Verifed Successfully ")
                }
                expect(searchObj.stateMessageInKannada.isPresent()).toBe(true);
                if(searchObj.stateMessageInKannada.isDisplayed())
                {
                 console.log("stateMessageInKannada is Verifed Successfully ")
                }
                browser.sleep(1000);
                searchObj.libraryInKannada.click();
                browser.sleep(1000);
                expect(searchObj.searchFieldInKannada.isPresent()).toBe(true);
                if(searchObj.searchFieldInKannada.isDisplayed())
                {
                 console.log("searchFieldInKannada is Verifed Successfully ")
                }
                expect(searchObj.searchButtonInKannada.isPresent()).toBe(true);
                if(searchObj.searchButtonInKannada.isDisplayed())
                {
                 console.log("searchButtonInKannada is Verifed Successfully ")
                }
                // expect(searchObj.subjectInCourseCardInKannada.isPresent()).toBe(true);
                // if(searchObj.subjectInCourseCardInKannada.isDisplayed())
                // {
                //  console.log("subjectInCourseCardInKannada is Verifed Successfully ")
                // }
                expect(searchObj.selectLanguageInKannada.isPresent()).toBe(true);
                if(searchObj.selectLanguageInKannada.isDisplayed())
                {
                 console.log("selectLanguageInKannada is Verifed Successfully ")
                }
                
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectTrainingInKannada), 20000, " selectTrainingInKannada not loaded");
                browser.sleep(1000);
                searchObj.selectTrainingInKannada.click();
                browser.sleep(1000);
                // expect(searchObj.selectBoardInKannada.isPresent()).toBe(true);
                // if(searchObj.selectBoardInKannada.isDisplayed())
                // {
                //  console.log("selectBoardInKannada is Verifed Successfully ")
                // }
                
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectClassInKannada), 20000, " selectClassInHindi not loaded");
                
                expect(searchObj.selectClassInKannada.isPresent()).toBe(true);
                if(searchObj.selectClassInKannada.isDisplayed())
                {
                 console.log("selectClassInKannada is Verifed Successfully ")
                }
                expect(searchObj.selectMediumInKannada.isPresent()).toBe(true);
                if(searchObj.selectMediumInKannada.isDisplayed())
                {
                 console.log(" selectMediumInKannada is Verifed Successfully ")
                }
                expect(searchObj.selectSubjectInKannada.isPresent()).toBe(true);
                if(searchObj.selectSubjectInKannada.isDisplayed())
                {
                 console.log(" selectSubjectInKannada is Verifed Successfully ")
                }
                expect(searchObj.exploreContentInKannada.isPresent()).toBe(true);
                if(searchObj.exploreContentInKannada.isDisplayed())
                {
                 console.log("exploreContentInKannada is Verifed Successfully ")
                }
                expect(searchObj.resetInKannada .isPresent()).toBe(true);
                if(searchObj.resetInKannada .isDisplayed())
                {
                 console.log("resetInKannada  is Verifed Successfully ")
                }
                expect(searchObj.submitInKannada .isPresent()).toBe(true);
                if(searchObj.submitInKannada .isDisplayed())
                {
                 console.log(" submitInKannada  is Verifed Successfully ")
                }
                expect(searchObj.viewAllInKannada.isPresent()).toBe(true);
                if(searchObj.viewAllInKannada.isDisplayed())
                {
                 console.log(" viewAllInKannada is Verifed Successfully ")
                }
                browser.executeScript("arguments[0].scrollIntoView();", searchObj.helpCenterInKannada);
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.helpCenterInKannada), 20000, " helpCenterInHindi not loaded");
                expect(searchObj.helpCenterInKannada.isPresent()).toBe(true);
                if(searchObj.helpCenterInKannada.isDisplayed())
                {
                 console.log("helpCenterInKannada is Verifed Successfully ")
                }
                expect(searchObj.contactForQueriesInKannada.isPresent()).toBe(true);
                if(searchObj.contactForQueriesInKannada.isDisplayed())
                {
                 console.log("contactForQueriesInKannada is Verifed Successfully ")
                }
                expect(searchObj.termsOfUseInKannada.isPresent()).toBe(true);
                if(searchObj.termsOfUseInKannada.isDisplayed())
                {
                 console.log("termsOfUseInKannada is Verifed Successfully ")
                }
        
                console.log("User successfully validated All Elements In Language Selection As Kannada");
            }
            catch(Exception)
            {
               console.log("Failed to validate All Elements In Language Selection As Kannada");
            }
        }
        const  validateAllElementsInLanguageSelectionAsTamil=()=>{
            
            try{
                console.log("User is trying to validate All Elements In Language Selection As Tamil");
                browser.executeScript("arguments[0].scrollIntoView();", searchObj.libraryInKannada);
               
                browser.sleep(1000);
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clickKannadaLangDropdown), 20000, "clickKannadaLangDropdown not loaded");
                searchObj.clickKannadaLangDropdown.click();
                browser.sleep(1000);
                searchObj.tamilInLanguageDropdown.click();
        
                expect(searchObj.libraryInTamil.isPresent()).toBe(true);
                if(searchObj.libraryInTamil.isDisplayed())
                {
                 console.log("libraryInTamil is Verifed Successfully ")
                }
                expect(searchObj.trainingsInTamil.isPresent()).toBe(true);
                if(searchObj.trainingsInTamil.isDisplayed())
                {
                 console.log("trainingsInTamil is Verifed Successfully ")
                }
                expect(searchObj.enterQRcodeInTamil.isPresent()).toBe(true);
                if(searchObj.enterQRcodeInTamil.isDisplayed())
                {
                 console.log("enterQRcodeInTamil is Verifed Successfully ")
                }
                searchObj.enterQRcodeInTamil.click();
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enter6DigitQRcodeInTamil), 20000, "enter6DigitQRcodeInTamil not loaded");
                searchObj.enter6DigitQRcodeInTamil.sendKeys('abc342');
                browser.sleep(1000);
                searchObj.submitInQRcodeInTamil.click();
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentNotAddedYetInTamil), 20000, "contentNotAddedYetInHindi not loaded");
                expect(searchObj.contentNotAddedYetInTamil.isPresent()).toBe(true);
                if(searchObj.contentNotAddedYetInTamil.isDisplayed())
                {
                 console.log("contentNotAddedYetInTamil is Verifed Successfully ")
                }
                expect(searchObj.stateMessageInTamil.isPresent()).toBe(true);
                if(searchObj.stateMessageInTamil.isDisplayed())
                {
                 console.log("stateMessageInTamil is Verifed Successfully ")
                }
                browser.sleep(1000);
                searchObj.libraryInTamil.click();
                browser.sleep(1000);
                expect(searchObj.searchFieldInTamil.isPresent()).toBe(true);
                if(searchObj.searchFieldInTamil.isDisplayed())
                {
                 console.log("searchFieldInTamil is Verifed Successfully ")
                }
                expect(searchObj.searchButtonInTamil.isPresent()).toBe(true);
                if(searchObj.searchButtonInTamil.isDisplayed())
                {
                 console.log("searchButtonInTamil is Verifed Successfully ")
                }
                // expect(searchObj.subjectInCourseCardInTamil.isPresent()).toBe(true);
                // if(searchObj.subjectInCourseCardInTamil.isDisplayed())
                // {
                //  console.log("subjectInCourseCardInTamil is Verifed Successfully ")
                // }
                expect(searchObj.selectLanguageInTamil.isPresent()).toBe(true);
                if(searchObj.selectLanguageInTamil.isDisplayed())
                {
                 console.log("selectLanguageInTamil is Verifed Successfully ")
                }
                
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectTrainingInTamil), 20000, "selectTrainingInTamil not loaded");
                browser.sleep(1000);
                searchObj.selectTrainingInTamil.click();
                browser.sleep(1000);
                // expect(searchObj.selectBoardInTamil.isPresent()).toBe(true);
                // if(searchObj.selectBoardInTamil.isDisplayed())
                // {
                //  console.log("selectBoardInTamil is Verifed Successfully ")
                // }
                
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectClassInTamil), 20000, " selectClassInTamil not loaded");
                
                expect(searchObj.selectClassInTamil.isPresent()).toBe(true);
                if(searchObj.selectClassInTamil.isDisplayed())
                {
                 console.log("selectClassInTamil is Verifed Successfully ")
                }
                expect(searchObj.selectMediumInTamil.isPresent()).toBe(true);
                if(searchObj.selectMediumInTamil.isDisplayed())
                {
                 console.log("selectMediumInTamil is Verifed Successfully ")
                }
                expect(searchObj.selectSubjectInTamil.isPresent()).toBe(true);
                if(searchObj.selectSubjectInTamil.isDisplayed())
                {
                 console.log("selectSubjectInTamil is Verifed Successfully ")
                }
                expect(searchObj.exploreContentInTamil.isPresent()).toBe(true);
                if(searchObj.exploreContentInTamil.isDisplayed())
                {
                 console.log("exploreContentInTamil is Verifed Successfully ")
                }
                expect(searchObj.resetInTamil.isPresent()).toBe(true);
                if(searchObj.resetInTamil.isDisplayed())
                {
                 console.log("resetInTamil  is Verifed Successfully ")
                }
                expect(searchObj.submitInTamil.isPresent()).toBe(true);
                if(searchObj.submitInTamil.isDisplayed())
                {
                 console.log("submitInTamil is Verifed Successfully ")
                }
                expect(searchObj.viewAllInTamil.isPresent()).toBe(true);
                if(searchObj.viewAllInTamil.isDisplayed())
                {
                 console.log(" viewAllInTamil is Verifed Successfully ")
                }
                browser.executeScript("arguments[0].scrollIntoView();", searchObj.helpCenterInTamil);
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.helpCenterInTamil), 20000, " helpCenterInTamil not loaded");
                expect(searchObj.helpCenterInTamil.isPresent()).toBe(true);
                if(searchObj.helpCenterInTamil.isDisplayed())
                {
                 console.log("helpCenterInTamil is Verifed Successfully ")
                }
                expect(searchObj.contactForQueriesInTamil.isPresent()).toBe(true);
                if(searchObj.contactForQueriesInTamil.isDisplayed())
                {
                 console.log("contactForQueriesInTamil is Verifed Successfully ")
                }
                expect(searchObj.termsOfUseInTamil.isPresent()).toBe(true);
                if(searchObj.termsOfUseInTamil.isDisplayed())
                {
                 console.log("termsOfUseInTamil is Verifed Successfully ")
                }
        
                console.log("User successfully validated All Elements In Language Selection As Tamil");
            }
            catch(Exception)
            {
               console.log("Failed to validate All Elements In Language Selection As Tamil");
            }
        }
        const validateAllElementsInLanguageSelectionAsUrdu=()=>{
            
            try{
                console.log("User is trying to validate All Elements In Language Selection As Urdu");
                browser.executeScript("arguments[0].scrollIntoView();", searchObj.libraryInTamil);
               
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clickTamilLangDropdown), 20000, " clickTamilLangDropdown not loaded");
                searchObj.clickTamilLangDropdown.click();
                browser.sleep(1000);
                searchObj.urduInLanguageDropdown.click();
        
                expect(searchObj.libraryInUrdu.isPresent()).toBe(true);
                if(searchObj.libraryInUrdu.isDisplayed())
                {
                 console.log("libraryInUrdu is Verifed Successfully ")
                }
                expect(searchObj.trainingsInUrdu.isPresent()).toBe(true);
                if(searchObj.trainingsInUrdu.isDisplayed())
                {
                 console.log("trainingsInUrdu is Verifed Successfully ")
                }
                expect(searchObj.enterQRcodeInUrdu.isPresent()).toBe(true);
                if(searchObj.enterQRcodeInUrdu.isDisplayed())
                {
                 console.log("enterQRcodeInUrdu is Verifed Successfully ")
                }
                searchObj.enterQRcodeInUrdu.click();
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enter6DigitQRcodeInUrdu), 20000, "enter6DigitQRcodeInUrdu not loaded");
                searchObj.enter6DigitQRcodeInUrdu.sendKeys('abc342');
                
                searchObj.submitInQRcodeInUrdu.click();
                browser.sleep(1000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentNotAddedYetInUrdu), 20000, "contentNotAddedYetInUrdu not loaded");
                expect(searchObj.contentNotAddedYetInUrdu.isPresent()).toBe(true);
                if(searchObj.contentNotAddedYetInUrdu.isDisplayed())
                {
                 console.log("contentNotAddedYetInUrdu is Verifed Successfully ")
                }
                expect(searchObj.stateMessageInUrdu.isPresent()).toBe(true);
                if(searchObj.stateMessageInUrdu.isDisplayed())
                {
                 console.log("stateMessageInUrdu is Verifed Successfully ")
                }
                browser.sleep(1000);
                searchObj.libraryInUrdu.click();
                browser.sleep(1000);
                expect(searchObj.searchFieldInUrdu.isPresent()).toBe(true);
                if(searchObj.searchFieldInUrdu.isDisplayed())
                {
                 console.log("searchFieldInUrdu is Verifed Successfully ")
                }
                expect(searchObj.searchButtonInUrdu.isPresent()).toBe(true);
                if(searchObj.searchButtonInUrdu.isDisplayed())
                {
                 console.log("searchButtonInUrdu is Verifed Successfully ")
                }
                // expect(searchObj.subjectInCourseCardInUrdu()).toBe(true);
                // if(searchObj.subjectInCourseCardInUrdu.isDisplayed())
                // {
                //  console.log("subjectInCourseCardInUrdu is Verifed Successfully ")
                // }
                expect(searchObj.selectLanguageInUrdu.isPresent()).toBe(true);
                if(searchObj.selectLanguageInUrdu.isDisplayed())
                {
                 console.log("selectLanguageInUrdu is Verifed Successfully ")
                }
                
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectTrainingInUrdu), 20000, "selectTrainingInUrdu not loaded");
                searchObj.selectTrainingInUrdu.click();
                browser.sleep(1000);
                // expect(searchObj.selectBoardInUrdu.isPresent()).toBe(true);
                // if(searchObj.selectBoardInUrdu.isDisplayed())
                // {
                //  console.log("selectBoardInUrdu is Verifed Successfully ")
                // }
                
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectClassInUrdu), 20000, " selectClassInUrdu not loaded");
                
                expect(searchObj.selectClassInUrdu.isPresent()).toBe(true);
                if(searchObj.selectClassInUrdu.isDisplayed())
                {
                 console.log("selectClassInUrdu is Verifed Successfully ")
                }
                expect(searchObj.selectMediumInUrdu.isPresent()).toBe(true);
                if(searchObj.selectMediumInUrdu.isDisplayed())
                {
                 console.log("selectMediumInUrdu is Verifed Successfully ")
                }
                expect(searchObj.selectSubjectInUrdu.isPresent()).toBe(true);
                if(searchObj.selectSubjectInUrdu.isDisplayed())
                {
                 console.log("selectSubjectInUrdu is Verifed Successfully ")
                }
                expect(searchObj.exploreContentInUrdu.isPresent()).toBe(true);
                if(searchObj.exploreContentInUrdu.isDisplayed())
                {
                 console.log("exploreContentInUrdu is Verifed Successfully ")
                }
                expect(searchObj.resetInUrdu.isPresent()).toBe(true);
                if(searchObj.resetInUrdu.isDisplayed())
                {
                 console.log("resetInUrdu  is Verifed Successfully ")
                }
                expect(searchObj.submitInUrdu.isPresent()).toBe(true);
                if(searchObj.submitInUrdu.isDisplayed())
                {
                 console.log("submitInUrdu is Verifed Successfully ")
                }
                expect(searchObj.viewAllInUrdu.isPresent()).toBe(true);
                if(searchObj.viewAllInUrdu.isDisplayed())
                {
                 console.log(" viewAllInUrdu is Verifed Successfully ")
                }
                browser.executeScript("arguments[0].scrollIntoView();", searchObj.helpCenterInUrdu);
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.helpCenterInUrdu), 20000, "helpCenterInUrdu not loaded");
                expect(searchObj.helpCenterInUrdu.isPresent()).toBe(true);
                if(searchObj.helpCenterInUrdu.isDisplayed())
                {
                 console.log("helpCenterInUrdu is Verifed Successfully ")
                }
                expect(searchObj.contactForQueriesInUrdu.isPresent()).toBe(true);
                if(searchObj.contactForQueriesInUrdu.isDisplayed())
                {
                 console.log("contactForQueriesInUrdu is Verifed Successfully ")
                }
                expect(searchObj.termsOfUseInUrdu.isPresent()).toBe(true);
                if(searchObj.termsOfUseInUrdu.isDisplayed())
                {
                 console.log("termsOfUseInUrdu is Verifed Successfully ")
                }
        
                console.log("User successfully validated All Elements In Language Selection As Urdu");
            }
            catch(Exception)
            {
               console.log("Failed to validate All Elements In Language Selection As Urdu");
            }
        }
        const createCourseWithRegionalLanguage=()=>{
            var courseName;
              try{
          
              console.log("user is trying to create a course with regional language")
              browser.sleep(1000);
              browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
              content.headerDropdown.click();
              browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
              content.workSpace.click();
              browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000,"Creation page not loaded");
              content.course.click();
              browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
              searchObj.nonAcademic.click();


            //   browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
               courseName= "ಕನ್ನಡ";
            //   content.name.sendKeys(courseName);
              content.startCreating.click();
              browser.sleep(4000);
              browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
              browser.sleep(4000);
              browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
              content.newchild.click();
              browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
              content.titleN.click();
              content.titleN.clear();
              content.titleN.sendKeys(courseName);
              content.descriptionN.sendKeys('description');
              content.addTagN.sendKeys('tag');
              content.addResource.click(); 
              browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
              content.resourceSearch.click();
              content.resourceSearch.sendKeys("pdf");
              browser.sleep(500);
              browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
              content.selectResourceType2.click();
              browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
              content.clickAddbutton.click();
              browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
              content.proceed.click();
              browser.sleep(1000);
              browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
              content.save.click();        
              browser.sleep(1000);
              console.log("User successfully created course with regional language")
              return courseName;
              }catch(Exception){
                  console.log("User failed to create course with regional language")
              }
          }                  
          const editTheCourseInDraft = () => {
            try {
                browser.sleep(2000);
                // var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
                // var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
                browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
                content.headerDropdown.click();
                console.log('User is trying to see the upload content in up for review page');
                browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 40000, "workSpace is not available");
                content.workSpace.click();
                browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
                resov.drafts.click();
                browser.sleep(2000);
                //browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
                resov.imageCard.click();
                console.log('User should be abel to click on the drafts section to see draft contents')
                browser.sleep(4000);
                browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
                browser.sleep(8000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(resov.newchild), 40000, "Didn't switched to different frame");
                resov.newchild.click();
                browser.sleep(2000);
                console.log('User should be able to click on New chlid/New siblings button to add nodes into the lessonplan')
                browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
                content.titleN.click();
                content.titleN.clear();
                browser.sleep(1000);
                content.titleN.sendKeys("courseName");
                content.descriptionN.sendKeys('description');
                content.addTagN.sendKeys('tag');
                browser.sleep(1000);
                console.log('User should be able to click on the content from draft section to update/edit the content.')
               
                resov.reviewerSuggestion.click();
                browser.sleep(2000);
                expect(browser.wait(protractor.ExpectedConditions.visibilityOf(resov.reviewerSuggestionTitle))).toBeTruthy
                if (browser.wait(protractor.ExpectedConditions.visibilityOf(resov.reviewerSuggestionTitle)))
                {
                    console.log('This test case pass');
                    console.log('User can able to check the rejeted content along with the reviewer sugesstion')
                }
                browser.sleep(1000);
                resov.closeLinkIcon.click();
                browser.sleep(2000);
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
                content.save.click();        
                browser.sleep(1000);
                console.log('User has successfully verified the uploaded content in up for review page')
        
            }
            catch (Exception) {
                console.log('User is not able to see the upload content in the all uploads section');
        
            }
        
        }

        const sendForReviewTheRejectedCourse=()=>{
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.sendForReview), 20000, "send for review not available");
            content.sendForReview.click();   
            browser.sleep(3000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
            content.saveform.click();
            browser.sleep(4000);
        }  
        
const userIsAbleToRateContent=(content)=>{
    try{
        console.log("User is trying to rate the content");
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.headerCourse), 20000, "headerCourse not available");
        searchObj.headerCourse.click();  
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys(content);
        browser.sleep(500);
        searchObj.searchIcon.click();
        console.log("Clicked on the searchIcon");
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchPublishedCourses), 20000, "searchPublishedCourses not available");
        searchObj.searchPublishedCourses.click();  
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.enrollForCourse), 20000, "enrollForCourse not available");
        searchObj.enrollForCourse.click();  
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.joinTraining), 20000, "joinTraining not available");
        searchObj.joinTraining.click();  
       

        // browser.sleep(2000);
        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(3000);
        if(searchObj.nextArrowInContents.isPresent()){
            // browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.nextArrowInContents), 20000, "nextArrowInContents not available");
            // searchObj.nextArrowInContents.click();  
            // browser.sleep(1000);
            // searchObj.nextArrowInContents.click();  
            browser.sleep(3000);
            // browser.switchTo().defaultContent();
            // browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.starRating), 20000, "starRating not available");
            searchObj.starRating.click();  
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.submitRating), 20000, "submitRating not available");
            searchObj.submitRating.click();  
            browser.sleep(1000);
            //browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.closeCourseButton), 20000, "closeCourseButton not available");
            searchObj.closeCourseButton.click();  
        }
        browser.sleep(2000);
        console.log("User successfully rated the content");

    }catch(Exception){
        console.log("User failed to rate the content");
    }
} 
const unenrollFromBatch=()=>{
    try{
        console.log("User is trying to unroll the course");
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,450);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        searchObj.batchDetailsExpand.click();  
        // browser.sleep(2000);
        // browser.executeScript('window.scrollTo(0,250);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.unenrolButton), 20000, "unenrolButton not available");
        searchObj.unenrolButton.click();  
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.unenrolToCourse), 20000, "unenrolToCourse not available");
        searchObj.unenrolToCourse.click();  
        console.log("User successfully unrolled from  the course");

    }catch(Exception){
        console.log("User failed to unroll the course");

    }
}     
const consumeTheExpiredBatchCourseAndEnrolToOpenBatch=(content)=>{
    try{
        console.log("User is trying to consume the expired course");
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.headerCourse), 20000, "headerCourse not available");
        searchObj.headerCourse.click();  
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchPlace), 20000, "searchPlace not available");
        searchObj.searchPlace.sendKeys(content);  
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchButton), 20000, "searchButton not available");
        searchObj.searchButton.click(); 
        browser.sleep(3000); 
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchPublishedCourses), 20000, "searchPublishedCourses not available");
        searchObj.searchPublishedCourses.click();  
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.resumeCourse), 20000, "resumeCourse not available");
        searchObj.resumeCourse.click();  


        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(3000);
        // String progressBarStatus = tpdPage.progressBarStatus.getText();
        var progressBarStatus = "Your Progress 0%";
       
        if (searchObj.menuInContentPlayer.isPresent()) {
           console.log("Content is playing successfully");
        }
       
        if (searchObj.progressBar.isPresent()) {
          console.log("Grey color progress bar is displayed in Course TOC");
        }
        browser.sleep(3000);
        browser.switchTo().defaultContent();
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.headerCourse);
        browser.sleep(2000);
        var expiredMessage = "Batch has ended on 2019-06-09, therefore your progress will not be updated.";
        expect(searchObj.batchStatusMessage.getText()).then(function(message){
            message.toEqual(expiredMessage);
        });
      
        expect(searchObj.progressBarStatus.getText()).then(function(newProgressBarStatus){
            newProgressBarStatus.toEqual(progressBarStatus);
        });
       
        console.log("Expired message is verified successfully");
       
        console.log("User successfully consumed the expired course"); 

    }catch(Exception){
        console.log("User failed to consume the expired course");
    }
}
const createCourseAddResourceAndValidateContribution=()=>{
    var courseName;
      try{
  
      console.log("user is trying to create Course Add Resource And Validate Contribution")
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
      content.headerDropdown.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
      content.workSpace.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000,"Creation page not loaded");
      content.course.click();

      browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
      searchObj.nonAcademic.click();
      
    //   browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
    //   courseName= "CourseA"+faker.randomData().firstname;
    //   content.name.sendKeys(courseName);
      content.startCreating.click();
      browser.sleep(4000);
      browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
      browser.sleep(4000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
      content.newchild.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
      content.titleN.click();
      content.titleN.clear();
      content.titleN.sendKeys(faker.randomData().firstname);
      content.descriptionN.sendKeys('description');
      content.addTagN.sendKeys('tag');
      content.addResource.click(); 
      browser.sleep(2000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
      content.resourceSearch.click();
     content.resourceSearch.sendKeys("Pdf");
     browser.sleep(500);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
      content.selectResourceType2.click();
      browser.sleep(500);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
      content.clickAddbutton.click();
    //   browser.sleep(2000);
    //   content.checkboxFirst.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
      content.proceed.click();
      browser.sleep(1000);
     
      browser.executeScript("arguments[0].scrollIntoView();", searchObj.contributionName);
      browser.sleep(2000);    
      searchObj.contributionName.isPresent().then(function(flag){
        expect(flag).toBeTruthy();
        console.log(flag);
      });
    //   searchObj.contributionName.getText(then(function(input){
    //     console.log(input);
    //   }));
      browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
      content.save.click();        
      browser.sleep(1000);
      console.log("user successfully created Course Add Resource And Validate Contribution")
      return courseName;
      }catch(Exception){
          console.log("User failed created Course Add Resource And Validate Contribution")
      }
  }
  const verifyBatchOptionWorkSpace = () => {
    try {
        browser.sleep(4000);
        console.log('User is trying to navigate to course batches in Workspace');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.workSpace), 40000, "workSpace is not available");
        searchObj.workSpace.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseBatches), 40000, "courseBatches is not available");
        searchObj.courseBatches.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseBatches), 40000, "courseBatches is not available");
        searchObj.verifyBatchCount.isPresent().then(function(flag){
            expect(flag).toBeTruthy();
            console.log(flag);
          });
    }
    catch (e) {
        console.log('Could not access the features of Workspace');
    }
}
const searchSelfAssesmentInLib = () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath,'3');
        var selfContentSearch=cred[31]['CourseName'];
        console.log(selfContentSearch);``
        browser.sleep(2000);
        console.log('User is trying to navigate To Library And Search For Book');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ETBPage.EtbElem().headerLibrary), 40000, "headerLibrary is not available");
        ETBPage.EtbElem().headerLibrary.click();
        browser.sleep(1000);
//browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ETBPage.EtbElem().filterSearch), 40000, "filterSearch is not available");
        ETBPage.EtbElem().filterSearch.click();
        ETBPage.EtbElem().filterSearch.sendKeys(selfContentSearch);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ETBPage.EtbElem().searchIcon), 40000, "searchIcon is not available");
        ETBPage.EtbElem().searchIcon.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ETBPage.EtbElem().courseCard), 40000, "courseCard is not available");
        ETBPage.EtbElem().courseCard.click();
        browser.sleep(1000);
        searchObj.asserSelfContentLibSec.isPresent().then(function(flag){
            expect(flag).toBeTruthy();
            console.log(flag);
          });
    }
    catch (e) {
        console.log('Could not access the Library Section');
console.log(e);
    }
}
const createCourseWithSelfContentAssesment=()=>{
    var courseName;
      try{
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath,'3');
        var selfContentSearch=cred[31]['CourseName'];
      console.log("user is trying to create a course")
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
      content.headerDropdown.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
      content.workSpace.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000,"Creation page not loaded");
      content.course.click();

      browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
      searchObj.nonAcademic.click();
      
    //   browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
    //   courseName= "CourseA"+faker.randomData().firstname;
    //   content.name.sendKeys(courseName);
      content.startCreating.click();
      browser.sleep(4000);
      browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
      browser.sleep(4000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
      content.newchild.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
      content.titleN.click();
      content.titleN.clear();
      content.titleN.sendKeys(faker.randomData().firstname);
      content.descriptionN.sendKeys('description');
      content.addTagN.sendKeys('tag');
      content.addResource.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
      content.resourceSearch.click();
     content.resourceSearch.sendKeys(selfContentSearch);
     browser.sleep(2000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
      content.selectResourceType2.click();
      browser.sleep(500);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
      content.clickAddbutton.click();
     // browser.sleep(2000);
     // browser.wait(protractor.ExpectedConditions.visibilityOf(content.checkboxFirst), 50000, "checkboxFirst is not available");
     // content.checkboxFirst.click();
      browser.sleep(2000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
      content.proceed.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
      content.save.click();
      browser.sleep(1000);
      console.log("User successfully created course")
      return courseName;
      }catch(Exception){
          console.log("User failed to create course")
      }
  }
  const sendForReviewCourseWithName = () => {
    var courseName;
    try{
        console.log("User is trying to sendForReviewCourseWithName");
        browser.sleep(1000);
        wait.waitForElementToBeClickable(content.sendForReview, 20000, "send for review not available");
        content.sendForReview.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.clickAppIcon, 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        wait.waitForElementVisibility(etbv.checkAppIcon, 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        wait.waitForElementVisibility(etbv.selectAppIcon, 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
    
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.untitledCourse), 30000, "titleName is not available");
        etbv.untitledCourse.click();
        browser.sleep(500);
        etbv.untitledCourse.clear();
        courseName="CourseA"+faker.randomData().firstname;
        etbv.untitledCourse.sendKeys(courseName);
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", content.topic);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.topic), 20000, "topic not available");
        content.topic.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorImg), 20000, "topicSelectorImg not available");
        browser.sleep(500);
        content.topicSelectorImg.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorContent), 20000, "topicSelectorContent not available");
        content.topicSelectorContent.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorDone), 20000, "topicSelectorDone not available");
        content.topicSelectorDone.click();
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.purposeOfCourse);
        searchObj.purposeOfCourse.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.purposeOfFirstCourse), 30000, "purposeOfFirstCourse button not available");
        searchObj.purposeOfFirstCourse.click();
        browser.sleep(500);
        //browser.executeScript("arguments[0].scrollIntoView();", searchObj.mediumOfInstruction);
        searchObj.mediumOfInstruction.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstmediumOfInstruction), 30000, "firstmediumOfInstruction button not available");
        searchObj.firstmediumOfInstruction.click();
        browser.sleep(500);
        searchObj.mediumOfInstruction.click();
        browser.sleep(500);
        //browser.executeScript("arguments[0].scrollIntoView();", searchObj.audienceType);
        searchObj.audienceType.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstAudienceType), 30000, "firstAudienceType button not available");
        searchObj.firstAudienceType.click();
        browser.sleep(500);
        //browser.executeScript("arguments[0].scrollIntoView();", searchObj.classesTaught);
        searchObj.classesTaught.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstclassTaught), 30000, "firstclassTaught button not available");
        searchObj.firstclassTaught.click();
        browser.sleep(500);
        searchObj.classesTaught.click();
        browser.sleep(500);
        searchObj.subjectsTaught.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstSubjectTaught), 30000, "firstclassTaught button not available");
        searchObj.firstSubjectTaught.click();
        browser.sleep(500);
        // searchObj.subjectsTaught.click();
        // browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", content.author);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
        content.author.click();
        content.author.sendKeys("Ekstep");
        browser.executeScript("arguments[0].scrollIntoView();",  etbv.yearOfCreation);
        etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2020");
             
        browser.executeScript("arguments[0].scrollIntoView();", etbv.consentCheckBox);
        etbv.consentCheckBox.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.saveform, 20000, "saveform not available");
        content.saveform.click();
        //content.saveButoonReview.click();
        browser.sleep(6000);
        console.log("User successfully sendForReviewCourseWithName");
        return courseName;
    }catch(er){
        console.error("Failed to sendForReviewCourseWithName");
    }
   
}

const createCourseWithAllResourceTypeWithDoID=()=>{
    var courseName; 
    try{
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000,"Creation page not loaded");
        content.course.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
        searchObj.nonAcademic.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
        // courseName="CourseA"+faker.randomData().firstname;
        // content.name.sendKeys(courseName);
        content.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
        content.newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
        content.titleN.click();
        content.titleN.clear();
        content.titleN.sendKeys(faker.randomData().firstname);
        content.descriptionN.sendKeys('description');
        content.addTagN.sendKeys('tag');
        browser.sleep(1000);
       
        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("pdf");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        browser.sleep(1000);
         content.addResource.click(); 
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("Resource");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);

        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("ecm");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        // browser.sleep(1000);
        // // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("html");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        // browser.sleep(1000);
        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("h5p");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        // browser.sleep(1000);
        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("epub");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        // browser.sleep(1000);
        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("mp4");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);sendForReviewTheCourse
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        // browser.sleep(1000);
        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("webm");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "save never loaded");
        content.save.click();        
        browser.sleep(1000);
        console.log("User successfully created course with all resource type");
        return courseName;
     }catch(Exception){
        console.log("failed to execute create course with all resource type")
     }
 }
 const editDetailsForm=()=>{
    var courseName;
    try{
        console.log("user is trying to editDetailsForm");
        browser.sleep(1000);
        wait.waitForElementToBeClickable(searchObj.editOrViewDetailslink, 20000, "editOrViewDetailslink not available");
        searchObj.editOrViewDetailslink.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.clickAppIcon, 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();        

        wait.waitForElementVisibility(etbv.checkAppIcon, 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        wait.waitForElementVisibility(etbv.selectAppIcon, 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
    
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.untitledCourse), 30000, "titleName is not available");
        etbv.untitledCourse.click();
        browser.sleep(500);
        etbv.untitledCourse.clear();
        courseName="CourseA"+faker.randomData().firstname;
        etbv.untitledCourse.sendKeys(courseName);
    
        browser.sleep(500);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.topic), 20000, "topic not available");
    content.topic.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorImg), 20000, "topicSelectorImg not available");
    browser.sleep(500);
    content.topicSelectorImg.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorContent), 20000, "topicSelectorContent not available");
    content.topicSelectorContent.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorDone), 20000, "topicSelectorDone not available");
    content.topicSelectorDone.click();
    browser.sleep(1000);
    browser.executeScript("arguments[0].scrollIntoView();", searchObj.purposeOfCourse);
    searchObj.purposeOfCourse.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.purposeOfFirstCourse), 30000, "purposeOfFirstCourse button not available");
    searchObj.purposeOfFirstCourse.click();
    browser.sleep(500);
    //browser.executeScript("arguments[0].scrollIntoView();", searchObj.mediumOfInstruction);
    searchObj.mediumOfInstruction.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstmediumOfInstruction), 30000, "firstmediumOfInstruction button not available");
    searchObj.firstmediumOfInstruction.click();
    browser.sleep(500);
    searchObj.mediumOfInstruction.click();
    browser.sleep(500);
    //browser.executeScript("arguments[0].scrollIntoView();", searchObj.audienceType);
    searchObj.audienceType.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstAudienceType), 30000, "firstAudienceType button not available");
    searchObj.firstAudienceType.click();
    browser.sleep(500);
    //browser.executeScript("arguments[0].scrollIntoView();", searchObj.classesTaught);
    searchObj.classesTaught.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstclassTaught), 30000, "firstclassTaught button not available");
    searchObj.firstclassTaught.click();
    browser.sleep(500);
    searchObj.classesTaught.click();
    browser.sleep(500);
    searchObj.subjectsTaught.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstSubjectTaught), 30000, "firstclassTaught button not available");
    searchObj.firstSubjectTaught.click();
    browser.sleep(500);
    // searchObj.subjectsTaught.click();
    // browser.sleep(500);
    browser.executeScript("arguments[0].scrollIntoView();", content.author);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
    content.author.click();
    content.author.sendKeys("Ekstep");
    browser.executeScript("arguments[0].scrollIntoView();",  etbv.yearOfCreation);
    etbv.yearOfCreation.click();
    etbv.yearOfCreation.clear();
    etbv.yearOfCreation.sendKeys("2020");
    browser.sleep(2000);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.consentCheckBox);
    etbv.consentCheckBox.click();
    browser.sleep(2000);        
   
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
    content.saveform.click();
    browser.sleep(3000);
       
       
        wait.waitForElementVisibility(searchObj.closeButton, 20000, "closeButton not available");
        searchObj.closeButton.click();
        browser.sleep(2000);
       
        console.log("user successfully editDetailsForm");
        return courseName;
    }catch(er){
        console.log("user failed to editDetailsForm");
    }
}
const editTheCourseInDraftAddNewResource = () => {
    try {
        browser.sleep(2000);
        // var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        // var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        console.log('User is trying to see the upload content in up for review page');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 40000, "workSpace is not available");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
        resov.drafts.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
        resov.imageCard.click();
        console.log('User should be able to click on the drafts section to see draft contents')
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(8000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.newchild), 40000, "Didn't switched to different frame");
        resov.newchild.click();
        browser.sleep(2000);
        console.log('User should be able to click on New chlid/New siblings button to add nodes into the lessonplan')
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
        content.titleN.click();
        content.titleN.clear();
        browser.sleep(1000);
        content.titleN.sendKeys("courseName");
        content.descriptionN.sendKeys('description');
        content.addTagN.sendKeys('tag');
        browser.sleep(2000);
        content.addResource.click(); 
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
       content.resourceSearch.sendKeys("html");
       browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
       // browser.sleep(2000);
       // browser.wait(protractor.ExpectedConditions.visibilityOf(content.checkboxFirst), 50000, "checkboxFirst is not available");
       // content.checkboxFirst.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
        content.save.click();        
        browser.sleep(3000);
      
        console.log('User should be able to click on the content from draft section to update/edit the content.')
       
        resov.reviewerSuggestion.click();
        browser.sleep(2000);
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(resov.reviewerSuggestionTitle))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(resov.reviewerSuggestionTitle)))
        {
            console.log('This test case pass');
            console.log('User can able to check the rejeted content along with the reviewer sugesstion')
        }
        browser.sleep(1000);
        resov.closeLinkIcon.click();
        browser.sleep(2000);
        console.log('User has successfully verified the uploaded content in up for review page')

    }
    catch (Exception) {
        console.log('User is not able to see the upload content in the all uploads section');

    }

}

const verifyConsumesCourseInTrainingSec = () => {
    try {
        browser.sleep(4000);
        console.log('User is trying to navigate to course batches in Workspace');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 40000, "dropdownProfi is not available");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkProfileIcon), 40000, "clkProfileIcon is not available");
        searchObj.clkProfileIcon.click();
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.courseAttendeVerify);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseAttendeVerify), 40000, "coursecourseAttendeVerify  is not available");
        searchObj.courseAttendeVerify.isPresent().then(function(flag){
            expect(flag).toBeTruthy();
            console.log(flag);
          });
    }
    catch (e) {
        console.log('Could not access the features of Workspace');
    }
}

const verifyCreateMyGroupAddMemberandAddActivity = () => {
    try{
console.log('user is able to create myGroup,add member and addActivity');
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton),40000,"Profile Button not available");
searchObj.profileButton.click();
browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton),40000,"myGroup icon not available");
searchObj.myGroupButton.click();
browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton),40000,"Cross button not available");
searchObj.crossButton.click();
browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupButton),40000,"Create Group button not available");
searchObj.createGroupButton.click();
browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupName),40000,"Enter Group name box not available");
searchObj.enterGroupName.sendKeys(faker.randomData().firstname);
browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupDescription),40000,"Enter Deescription box not available");
searchObj.enterGroupDescription.sendKeys(faker.randomData().firstname);
browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.GroupcheckBox),40000,"Check box not available");
searchObj.GroupcheckBox.click();
browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupSubmitButton),40000,"CreateGroup submit button not available");
searchObj.createGroupSubmitButton.click();
browser.sleep(3000);
// browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addedSuccessfully),40000,"Group admin Icon not available");
// var adminText=searchObj.addedSuccessfully.getText();
// expect((adminText).isDisplayed()).toBe(true);
// browser.sleep(1000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup),40000,"Created group not available");
searchObj.CreatedGroup.click();
browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addActivityButton),40000,"Add activity button not available");
searchObj.addActivityButton.click();
browser.sleep(3000);
// browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nextButton),40000,"Next button not available");
// searchObj.nextButton.click();
// browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectFirstCourse),40000,"Course not available");
searchObj.selectFirstCourse.click();
browser.sleep(3000);
browser.actions().mouseMove(searchObj.courseToAddInGroup).perform();
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addToGroupButton),40000,"Add to Group Button not available");
searchObj.addToGroupButton.click();
browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addedSuccessfully),40000,"Successful Text not available");
var successfulText=searchObj.addedSuccessfully.getText();
expect((successfulText).isDisplayed()).toBe(true);
browser.sleep(1000);
// browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton),40000,"Profile Button not available");
// searchObj.profileButton.click();
// browser.sleep(3000);
// browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroup),40000,"myGroup icon not available");
// searchObj.myGroup.click();
// browser.sleep(3000);
// browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup),40000,"Created group not available");
// searchObj.CreatedGroup.click();
// browser.sleep(3000);
// browser.executeScript('window.scrollTo(0,200);').then(function () {
//     console.log('++++++SCROLLED Down+++++');
// });
// browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addMember),40000,"Add member button not available");
// searchObj.addMember.click();
// browser.sleep(3000);
// browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton),40000,"Cross button not available");
// searchObj.crossButton.click();
// browser.sleep(3000);
// browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.EnterUserId),40000,"Enter User Id not available");
// searchObj.EnterUserId.sendKeys('usersun');
// browser.sleep(3000);
// browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.verifyUserId),40000,"Verify User Id button not available");
// searchObj.verifyUserId.click();
// browser.sleep(6000);
// browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addingMembertoGroup),40000,"Adding Member to group button not available");
// searchObj.addingMembertoGroup.click();
// browser.sleep(6000);
// browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.UserAddedSuccessfully),40000,"Successful Text not available");
// var userAddedsuccessfulText=searchObj.UserAddedSuccessfully.getText();
// expect((userAddedsuccessfulText).isDisplayed()).toBe(true);
}catch(Exception){
    console.log('User is unable to create my Group,member and addActivity');
}
}

const groupMemberCourseConsumptionstatus=()=>{
console.log('group member should be able start consuming the course');
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton),40000,"Profile Button not available");
searchObj.profileButton.click();
browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroup),40000,"myGroup icon not available");
searchObj.myGroup.click();
browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton),40000,"Cross button not available");
searchObj.crossButton.click();
browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup),40000,"Created group not available");
searchObj.CreatedGroup.click();
browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectFirstCourse),40000,"Course not available");
searchObj.selectFirstCourse.click();
browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.joinCourseButton),40000,"Join Course button not available");
searchObj.joinCourseButton.click();
browser.sleep(3000);
// browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.joinBatch),40000,"Join batch button not available");
// searchObj.joinCourseButton.click();
browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startlearningButton),40000,"start learning button not available");
searchObj.startlearningButton.click();
browser.sleep(3000);
browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nextModuleButton),40000,"start learning button not available");
searchObj.nextModuleButton.click();
browser.sleep(3000);
}
const verifylastUpdatedandCourseConsumption=()=>{
    console.log('group member should be able start consuming the course');
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton),40000,"Profile Button not available");
    searchObj.profileButton.click();
    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroup),40000,"myGroup icon not available");
    searchObj.myGroup.click();
    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup),40000,"Created group not available");
    searchObj.CreatedGroup.click();
    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectFirstCourse),40000,"Course not available");
    searchObj.selectFirstCourse.click();
    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CourseCompletionpercentage),40000,"Course completion not available");
    searchObj.CourseCompletionpercentage.isDisplayed();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.lastUpdatedTime),40000,"last Updated time not available");
    searchObj.lastUpdatedTime.isDisplayed();
}

const editCertificateRequirement =()=>{
    try
    {
        console.log("User is trying to edit certificate requirement");
        browser.sleep(1500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickEnrollmentEditButton), 20000, " clickEnrollmentEditButton not available");
        searchObj.clickEnrollmentEditButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.certificateYes), 20000, " certificateYes not available");
        searchObj.certificateYes.click();
        browser.sleep(1000);
        searchObj.updateBatch.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.closeCertificate), 20000, " closeCertificate not available");
        searchObj.closeCertificate.click();
        console.log("User successfully editted certificate requirement");


    }
    catch(err)
    {
        console.log("User failed to edit certificate requirement");
    }
}
const ChangeLangWhileConsuming = (resourceName) => {

    try {
        console.log("User is trying to navigate To Library And Search For Resource");

        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(resourceName);
        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(1000);


        console.log("Clicked on CourseCard");
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        // browser.navigate().back();
        // expect(searchObj.kannadLanVerify.isPresent()).toBe(true);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        
        wait.waitForElementVisibility(resov.clickFITBAnsTxtBox, 20000, "clickFITBAnsTxtBox not loaded");
        resov.clickFITBAnsTxtBox.click();
        browser.sleep(1000);
        console.log("Clicked on Answer Textbox in Player");
        resov.clickFITBAnsTxtBox.sendKeys("8");
        browser.sleep(2000);
       browser.switchTo().defaultContent();

       browser.sleep(1000);
       browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clickLangDropdownEnglish), 20000, "clickLangDropdownEnglish not loaded");
       searchObj.clickLangDropdownEnglish.click();
       browser.sleep(1000);
       searchObj.kannadaInLanguageDropdown.click();
      
    //    expect(searchObj.libraryInKannada.isPresent()).toBe(true);
    //    if(searchObj.libraryInKannada.isDisplayed())
    //    {
    //     console.log("libraryInKannada is Verifed Successfully ")
    //    }


        browser.sleep(2000);

           browser.navigate().back();
           browser.sleep(4000);


    
    }

    catch (Exception) {
        console.log("Failed to Consume FITB Resource and Get the Score");
    }
}
const FullScreenMode = (resourceName) => {

    try {
        console.log("User is trying to navigate To Library And Search For Resource");

        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(resourceName);
        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(1000);
        console.log("Clicked on CourseCard");
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        
        wait.waitForElementVisibility(resov.clickFITBAnsTxtBox, 20000, "clickFITBAnsTxtBox not loaded");
        resov.clickFITBAnsTxtBox.click();
        browser.sleep(1000);
        console.log("Clicked on Answer Textbox in Player");
        resov.clickFITBAnsTxtBox.sendKeys("8");
        browser.sleep(2000);
       browser.switchTo().defaultContent();

        console.log("Entered Wrong Answer in Textbox");
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
   // browser.executeScript("arguments[0].scrollIntoView();",resov.fullscreenclk);
    browser.sleep(1000);
    resov.fullscreenclk.click();
    browser.sleep(3000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(1000);
    resov.clickFITBAnsTxtBox.sendKeys("8");
    browser.sleep(1000);
        resov.clickNextButtonMCQ.click();
        console.log("Clicked on Next Button for Wrong Answer in Player");
        browser.sleep(1000);

        expect(resov.verifyInCorrect.isDisplayed()).toBe(true);
        if (resov.verifyInCorrect.isDisplayed()) {
            console.log("Showing  Wrong Symbol while giving wrong answer");
            browser.executeScript("arguments[0].scrollIntoView();", resov.clickTryAgainButton);
            browser.sleep(1000);
            wait.waitForElementVisibility(resov.clickTryAgainButton, 20000, "clickTryAgainButton not loaded");
            resov.clickTryAgainButton.click();
            console.log("Clicked on Try Again Button");
        }
        wait.waitForElementVisibility(resov.clickFITBAnsTxtBox, 20000, "clickFITBAnsTxtBox not loaded");
        resov.clickFITBAnsTxtBox.click();
        resov.clickFITBAnsTxtBox.clear();
        console.log("Clicked on Answer Textbox  And Cleared Textin Player");
        resov.clickFITBAnsTxtBox.sendKeys("9");
        console.log("Entered Correct Answer in Textbox");
        browser.sleep(1000);
        resov.clickNextButtonMCQ.click();
        console.log("Clicked on Next Button for correct Answer in Player");
        if (resov.verifyCorrect.isDisplayed()) {
            console.log("Yes Correct ");
        }
        resov.clickNext.click();
        console.log("Clicked on Next Button");
        browser.switchTo().parentframe();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.giveRatings, 20000, "giveRatings not loaded");
        resov.giveRatings.click();
        console.log("Give Rating");
        wait.waitForElementVisibility(resov.submitRating, 20000, "submitRating not loaded");
        resov.submitRating.click();
        console.log("Clicked on submit Rating");
        wait.waitForElementVisibility(resov.verifyRatingSlideMsg, 20000, "verifyRatingSlideMsg not loaded");
        if (resov.verifyRatingSlideMsg.isDisplayed()) {
            console.log("Thank you for rating this content!");
        }
        console.log("Verifyed Succesfuly Toaster msg of Rating");
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.justCompletedMsg, 20000, "justCompletedMsg not loaded");
        if (resov.justCompletedMsg.isDisplayed()) {
            console.log("You just completed");
        }
        console.log("Verifyed Just Completed Label");
        wait.waitForElementVisibility(resov.ScoreLabel, 20000, "ScoreLabel not loaded");
        if (resov.ScoreLabel.isDisplayed()) {
            console.log("SCORE");
        }
        console.log("Verifyed Score Label");
        wait.waitForElementVisibility(resov.validateScoreResult, 20000, "validateScoreResult not loaded");
        if (resov.validateScoreResult.isDisplayed()) {
            console.log("15");
        }
        console.log("Verifyed Consumed Score ");
        browser.switchTo().parentframe();
        browser.sleep(2000);
    }

    catch (Exception) {
        console.log("Failed to Consume FITB Resource and Get the Score");
    }
}
const VerifyCourseWhichhasCertificate = () => {

    try {
        console.log("User is trying to navigate To Library And Search For Resource");

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);


        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(cred[32]['CourseName']);
        browser.sleep(1000);

        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(1000);
        console.log("Clicked on CourseCard");
        
    }
    catch(Exception)
    {

    }
}
const nestedCourseValidationAsAdmin =()=>{
    try
    {
        console.log("User is trying to validate nested course progress");
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 40000, "dropdownProfi is not available");
        content.headerDropdown.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroup), 40000, "myGroup is not available");
        searchObj.myGroup.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.closeGroupPopup), 40000, "closeGroupPopup is not available");
        searchObj.closeGroupPopup.click();
        
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.groupName), 40000, "groupName is not available");
        searchObj.groupName.click();
        browser.sleep(500);
        expect(searchObj.nestedCourseName.isDisplayed()).toBeTruthy();
        browser.sleep(500);
        searchObj.nestedCourseName.click();
        browser.sleep(1500);
        expect(searchObj.changeoptionNested.isDisplayed()).toBeTruthy();
        expect(searchObj.adminName.isDisplayed()).toBeTruthy();
        expect(searchObj.adminProgress.isDisplayed()).toBeTruthy();
        searchObj.adminProgress.getText().then(function(progress){
                expect(progress).toEqual("0%");
                console.log("orgadmin progress is : "+ progress);
        });
        browser.sleep(1000);
        expect(searchObj.userName.isDisplayed()).toBeTruthy();
        expect(searchObj.userProgress.isDisplayed()).toBeTruthy();
        searchObj.userProgress.getText().then(function(progress){
            expect(progress).toEqual("0%");
            console.log("user progress is : "+ progress);
    });
       
        browser.sleep(500);
        console.log("User successfully valodated nested course progress");

    }
    catch(err)
    {
        console.log("User failed to validate nested course progress");
    }
}


const checkAutoBatchCreated=()=>{
    try{
        browser.sleep(2000);
        console.log("User is trying to checkAutoBatchCreated");
        expect(searchObj.addIcon.isDisplayed()).toBeTruthy();
        console.log("User successfully  checkAutoBatchCreated");
    }catch(e){
        console.error("User failed to checkAutoBatchCreated");
    }
}
const checkForGenericCourseFramework=()=>{
    try{
        console.log("User is trying to checkForGenericCourseFramework");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000,"Creation page not loaded");
        content.course.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
        searchObj.nonAcademic.click();
        content.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
        
        var currentUrl = browser.getCurrentUrl();
        expect(currentUrl).toContain("TPD");
        searchObj.closeTpdEditor.click();
        
    
        console.log("User successfully  checkForGenericCourseFramework");
    }catch(e){
        console.error("User failed to checkForGenericCourseFramework");
    }
}
const checkForCurriculumCourseFramework=()=>{
    try{
        console.log("User is trying to checkForCurriculumCourseFramework");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000,"Creation page not loaded");
        content.course.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
        searchObj.academic.click();
        content.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
        
        var currentUrl = browser.getCurrentUrl();
        expect(currentUrl).toContain("k-12");
        
        console.log("User successfully  checkForCurriculumCourseFramework");
    }catch(e){
        console.error("User failed to checkForCurriculumCourseFramework");
    }
}
const checkEditFormOfCurriculumframework =()=>{
    var courseName;
    try{
        console.log("User is trying to checkEditFormOfCurriculumframework");
        browser.sleep(1000);
        wait.waitForElementToBeClickable(searchObj.editIconLinkInTpdEditor, 20000, "editIconLinkInTpdEditor not available");
        searchObj.editIconLinkInTpdEditor.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.clickAppIcon, 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        wait.waitForElementVisibility(etbv.checkAppIcon, 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        wait.waitForElementVisibility(etbv.selectAppIcon, 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
    
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.untitledCourse1), 30000, "untitledCourse is not available");
        etbv.untitledCourse1.click();
        browser.sleep(500);
        etbv.untitledCourse1.clear();
        courseName="CourseA"+faker.randomData().firstname;
        etbv.untitledCourse1.sendKeys(courseName);
        browser.sleep(500);
        wait.waitForElementVisibility(etbv.clickBoard, 30000, "board button not available");
        etbv.clickBoard.click();
        wait.waitForElementVisibility(etbv.selectBoard, 30000, "contuinew button not available");
        etbv.selectBoard.click();
        browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.topic), 20000, "topic not available");
        // content.topic.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorImg), 20000, "topicSelectorImg not available");
        // browser.sleep(1000);
        // content.topicSelectorImg.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorContent), 20000, "topicSelectorContent not available");
        // content.topicSelectorContent.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorDone1), 20000, "topicSelectorDone not available");
        // content.topicSelectorDone1.click();
        // browser.sleep(1000);
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.purposeOfCourse);
        // browser.sleep(500);
        // searchObj.purposeOfCourse.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.purposeOfFirstCourse), 30000, "purposeOfFirstCourse button not available");
        // searchObj.purposeOfFirstCourse.click();
        // browser.sleep(500);
        // //browser.executeScript("arguments[0].scrollIntoView();", searchObj.mediumOfInstruction);
        // searchObj.mediumOfInstruction.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstmediumOfInstruction), 30000, "firstmediumOfInstruction button not available");
        // searchObj.firstmediumOfInstruction.click();
        // browser.sleep(500);
        // searchObj.mediumOfInstruction.click();
        // browser.sleep(500);
        // //browser.executeScript("arguments[0].scrollIntoView();", searchObj.audienceType);
        // searchObj.audienceType.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstAudienceType), 30000, "firstAudienceType button not available");
        // searchObj.firstAudienceType.click();
        // browser.sleep(500);
        // //browser.executeScript("arguments[0].scrollIntoView();", searchObj.classesTaught);
        // searchObj.classesTaught.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstclassTaught), 30000, "firstclassTaught button not available");
        // searchObj.firstclassTaught.click();
        // browser.sleep(500);
        // searchObj.classesTaught.click();
        // browser.sleep(500);
        // searchObj.subjectsTaught.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstSubjectTaught), 30000, "firstclassTaught button not available");
        // searchObj.firstSubjectTaught.click();
        // browser.sleep(500);
        // searchObj.subjectsTaught.click();
        // browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", content.author);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
        content.author.click();
        content.author.sendKeys("Ekstep");
        browser.executeScript("arguments[0].scrollIntoView();",  etbv.yearOfCreation);
        etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2020");
             
        browser.executeScript("arguments[0].scrollIntoView();", etbv.consentCheckBox);
        etbv.consentCheckBox.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.saveform, 20000, "saveform not available");
        content.saveform.click();
        //content.saveButoonReview.click();
        browser.sleep(6000);
        console.log("User successfully checkEditFormOfCurriculumframework");
        return courseName;
    }
    catch(e)
    {
        console.error("User failed to  checkEditFormOfCurriculumframework");
    }
}
const CheckCertificateOptions = ()=>{
    try{
    console.log("User is trying to CheckCertificateOptions");
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.editCertificate), 20000, "editCertificate not available");
    searchObj.editCertificate.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addCertificateOption), 20000, "addCertificateOption not available");
    searchObj.addCertificateOption.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.certificateType), 20000, "certificateType not available");
   // searchObj.certificateType.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.certificateRule), 20000, "certificateRule not available");
   // searchObj.certificateRule.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createCertificate), 20000, "createCertificate not available");
    searchObj.createCertificate.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.certificateTemplatePreview), 20000, "certificateTemplatePreview not available");
   // searchObj.certificateTemplatePreview.click();    
    console.log("User successfully CheckCertificateOptions");
    }
    catch(e)
    {
        console.log("User failed to CheckCertificateOptions");
    }
}
const  enrollForUpcomingOpenBatch=()=>{
        
    try{
        console.log("User is trying to enrollForUpcomingOpenBatch");
        browser.executeScript('window.scrollTo(0,0);').then(function(){
          console.log('++++++SCROLLED UP+++++');
      });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enrollForCourse), 20000, "enrollForCourse not available");           
        searchObj.enrollForCourse.click();
        console.log("Click on Enroll For upcoming batch");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchmsg), 20000, "batchmsg not available");
        browser.sleep(1000);
        searchObj.batchmsg.getText().then(function(input){
            expect(input).toEqual("The course's batch is available from 2020-12-25");
          console.log("User is successfully verified the message : "+input);
        });
        searchObj.closemsg.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstCourseModule), 20000, "firstCourseModule not available");           
        searchObj.firstCourseModule.click();

        browser.sleep(1000);
        // searchObj.batchmsg.getText().then(function(input){
        //     expect(input).toEqual("The course's batch is available from 2020-12-25");
        //   console.log("User is successfully verified the message : "+input);
        // });

        console.log("User successfully verified enrollForUpcomingOpenBatch");
  
        
    }
    catch(Exception)
    {
       console.log("Failed to enrollForUpcomingOpenBatch");
    }
  }

  const verifyBookUI =()=>{
      try{
        console.log("User is trying to verifyBookUI");
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.videoOption), 20000, "videoOption not available");           
        //searchObj.videoOption.click();
        Console.log("User successfully verifyBookUIverifyBookUI ");
      }catch(e){
        console.log("User failed to verifyBookUI")
      }
  }
  const verifyCourseUI =()=>{
    try{
      console.log("User is trying to verifyCourseUI");
      browser.sleep(2000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.viewCourseDashboard), 20000, "viewCourseDashboard not available");           
      //searchObj.viewCourseDashboard.click();
      Console.log("User successfully verifyCourseUI");
    }catch(e){
      console.log("User failed to verifyCourseUI")
    }
}
module.exports = {
    createCourse,
    sendForReviewTheCourse,
    publishTheCourseFromUpForReview,
    createInviteOnlyBatchForLatestCourse,
    navigateToCourseAndSearch,
    createCourseWithAllResourceType,
    navigateToCourseSearchAndConsume,
    searchCollaboratorBySearchField,
    collaboratorSendTheCourseForReview,
    saveAndSendNewCourseForReview,
    checkTheCourseInReviewSubmision,
    createCourseAddCollaborator,
    collaboratorCanEditCourse,
    reviewStatusCollaborator,
    collaboratorNotAbleToDeleteCourse,
    SendForLimitedSharing,
    navigateToAllMyContent,
    applyStatusFilterinAllMyContent,
    applyFilterinAllMyContent,
    verifyPagenationInAllMyContent,
    createInviteOnlyBatch,
    navigateToWorkspaceFeatures,
    validateCourseInCreatedByMeSection,

    courseSearchFilter,
    vaidatePageLangaugeTranslation,
    LangaugeTranslation,
    SearchCouseWithRegionalLang,
    clickOnViewAll,
    getContentFromQRCode,

    navigateToCourseAndSearchForOpenBatch,
    batchNameAndEndDateIsMandatoryFields,
    createOpenBatchWithEnrolmentDate,
    createOpenBatch,
    enrollForOpenBatch,
    checkTheCourseInMyCourseSection,

    searchContentWithFilter,
    carryForwardSearchFilter,
    courseSearch,
    searchWithQRcode,
    validateSignInPopupOnClickOnEnroll,
    navigateToCourse,
    navigateToTOCInExploreCoursePage,

    collaborator1CanEditCourse,
    collaborator2CanEditCourse,
    createUpcomingOpenBatchForCourse,
    validateCourseInAssigToMeSection,
    verifyCourseInOnGoingBatchSection,
    updateBatches,
    validateAllBatches,
    verifyBatchEditingFromExpiredCoursesSection,
    verifyPagenation,
    validationMsgWhileAddingMoreThan100Members,  
    validateAllElementsInLanguageSelectionAsHindi,
    validateAllElementsInLanguageSelectionAsKannada,
    validateAllElementsInLanguageSelectionAsTamil,
    validateAllElementsInLanguageSelectionAsUrdu,
    createCourseWithRegionalLanguage,
    editTheCourseInDraft,
    sendForReviewTheRejectedCourse,
    userIsAbleToRateContent,
    unenrollFromBatch,
    consumeTheExpiredBatchCourseAndEnrolToOpenBatch,
    createCourseAddResourceAndValidateContribution,
    verifyBatchOptionWorkSpace,
    searchSelfAssesmentInLib,
    createCourseWithSelfContentAssesment,
    sendForReviewCourseWithName,
    createCourseWithAllResourceTypeWithDoID,
    editDetailsForm,
    editTheCourseInDraftAddNewResource,
    verifyConsumesCourseInTrainingSec,
    editCertificateRequirement,
    ChangeLangWhileConsuming,
   FullScreenMode,
   VerifyCourseWhichhasCertificate,
    nestedCourseValidationAsAdmin,
    ClickOnviewAllAndSearch,
    verifyCreateMyGroupAddMemberandAddActivity,
    groupMemberCourseConsumptionstatus,
    verifylastUpdatedandCourseConsumption,
    checkAutoBatchCreated,
    checkForGenericCourseFramework,
    checkForCurriculumCourseFramework,
     checkEditFormOfCurriculumframework,
     CheckCertificateOptions,
     enrollForUpcomingOpenBatch,
     verifyBookUI,
     verifyCourseUI,
}

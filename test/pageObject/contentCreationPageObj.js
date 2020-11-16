const ccpage = require(protractor.basePath +'/test/pages/contentCreation/contentCreation.po.js');
const etbpage = require(protractor.basePath + '/test/pages/etb/etb.po.js');
const tpdPage = require(protractor.basePath + '/test/pages/tpdPage/tpdpage.po.js');
const resourcePag=require(protractor.basePath + '/test/pages/resource/resource.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const wait = require(protractor.basePath + '/helper/waiters.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
var content=ccpage.contentCreation();
var etbv=etbpage.etb();
var searchObj=tpdPage.tpdPage();
var resov=resourcePag.resource();
const sanityPage= require(protractor.basePath + '/test/pages/userOnBoarding/SanityPage.js');
let getExcelPath=require(protractor.basePath + '/test/pathFolder/changePath.js');
const genericFun= require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');

 const searchContentInLibrary =(contentType)=>{
    try{
       
        // console.log("User should be able to get the newly created content by Searching the content with the content name.");
        // content.searchedContentForUpload.click();
        // browser.sleep(2000);
        // try
        // {
        //     // content.folderIcon.click();
        //     browser.sleep(1000);
        //     // content.playVedio.click();
        //     // browser.sleep(2000);
        //     console.log("User should be able to click & consume the content.");
        //     // content.menuIcon1.click();
        //     console.log("Content should render in the content player properly while consuming the content.");

        // }
        // catch(Exception)
        // {
        //     console.log("No content is available to consume.");
        // }

     //   content.closeIconOfContent.click();
         browser.sleep(2000);
         console.log("User is trying to copy content");
         browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkLibraray), 20000, "clkLibraray  is not available");
         sanityPage.SanityElement().clkLibraray.click();
         browser.sleep(2000);
         sanityPage.SanityElement().searchConLib.click();
         browser.sleep(2000);
         sanityPage.SanityElement().searchConLib.sendKeys(contentType);
         browser.sleep(2000);
         sanityPage.SanityElement().clkSearchLib.click();
         browser.sleep(8000);
      }
      catch(Exception)
        {
            console.log("Failed to consumed the content properly in the content player.");
        }
    }
 const navigateToLibraryAndSearchForLessonPlan =()=>{
    try{
         console.log("User is trying to navigate To Library And Search For LessonPlan");
         browser.sleep(1000);   
         content. headerLibrary.click();
         browser.sleep(2000);   
         content.filterSearch.sendKeys('Lesson plan');
         browser.sleep(2000);
         content.searchIcon.click();
         browser.sleep(2000);
         browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchedContentForUpload), 20000, "searchedContentForUpload is not available");
         content.searchedContentForUpload.click();
         browser.sleep(3000);
         console.log("Succesfully to navigate To Library And Search For LessonPlan");
        
        }
    catch(Exception)
        {
                console.log("Failed to navigate To Library And Search For LessonPlan");
        }

 }
 const consumeTheCourseInLibrarySection =()=>{
    try{
         console.log("User is trying to consume the content by clicking on it.");
         browser.sleep(1000);   
        //  content.folderIcon.click();
        //  browser.sleep(2000);   
        //  content.pdfContent1.click();
        //  console.log("User should be able to click on the content card from search results and consume the content.");
        //  browser.sleep(2000);
        
        //  content. menuPlayer.isDisplayed();
        //  browser.executeScript("arguments[0].scrollIntoView(0,-450);",  content.menuPlayer);
        //  browser.sleep(3000);
        
        content.closeIconOfContent.click();
        browser.sleep(500);
     
      
         console.log("User should be able to get content by searching with content name.");
        
        }
    catch(Exception)
        {
                console.log("Failed to get content by searching with content name.");
        }

 }
 const applyFilterInLibrarySection =()=>{
    try{
         console.log("User is trying to get the content by applying filter in library section.");
         browser.sleep(1000);   
         browser.wait(protractor.ExpectedConditions.visibilityOf(content.filter), 20000, "filter is not available");
         content.filter.click();
         browser.sleep(1000);
        //  content.clickBoardFilter.click();
        //  browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectCBSEFilter), 20000, "selectCBSEFilter is not available");
        //  content.selectCBSEFilter.click();
        //  browser.sleep(1000); 
        //  content.submitButtonFilter.click();
        //  browser.sleep(1000);  
        //  browser.wait(protractor.ExpectedConditions.visibilityOf(content.boardInCard,"Board : CBSE"), 20000, "boardInCard is not available");
        //  browser.sleep(2000); 
        //  content.resetButton.click();  
        //  browser.sleep(2000); 

         content.clickMedium.click();
         browser.sleep(1000);  
         content.selectHindi.click();
         browser.sleep(1000);   
         content.submitButtonFilter.click();
         browser.sleep(1000);  
         browser.wait(protractor.ExpectedConditions.visibilityOf(content.medInCard,"Medium : English"), 20000, "medInCard is not available");
         browser.sleep(2000); 
         content.resetButton.click();
         browser.sleep(2000);   

         content.clickClass.click();
         browser.sleep(1000);  
         content.selectClass1.click();
         browser.sleep(1000);   
         content.submitButtonFilter.click();
         browser.sleep(1000); 
         browser.wait(protractor.ExpectedConditions.visibilityOf(content.clssInCard,"Class : Class 1"), 20000, "clssInCard is not available");
         browser.sleep(2000); 
         content.resetButton.click();
         browser.sleep(2000);   

         content.clickSubject.click();
         browser.sleep(2000);   
         content.selectGeography.click();
         browser.sleep(2000);   
         content.submitButtonFilter.click();
         browser.sleep(2000); 
         browser.wait(protractor.ExpectedConditions.visibilityOf(content.subInCard,"Subject : Economics"), 20000, "subInCard is not available");
         browser.sleep(2000); 
         content.resetButton.click();
         browser.sleep(2000);  

    
         console.log("User should be able to get the content by applying filters in Library page.");
        
        }
    catch(Exception)
        {
                console.log("Failed to get content by applying filter");
        }

 }
 const searchContentInLibraryAndFetchFirstContent =(userData)=>{
    var searchContent=null;
  try{
      console.log("User is trying to navigate To Library And Search Content anf fetch the first one");
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerLibrary), 20000, "headerLibrary is not available");
      content.headerLibrary.click();
      browser.sleep(1000);
      console.log(" User/Content creator should be able to click on Library page.");
      content.searchInput.click();
      browser.sleep(1000);
      content.searchInput.sendKeys(userData);
      browser.sleep(1000);
      content.searchIcon.click();
      browser.sleep(2000);
      searchContent=content.searchedCard.getText().then(function(value){
        console.log(value);
      })
      
    //  expect(content.searchedCard.getText()).toEqual('Book');
      
      console.log("User is able to get the name of the first content by Searching the content with the content name.")

    }
    catch(Exception)
    {
      console.log("Failed to navigate To Library And Search Content anf fetch the first one.");
    }
   return searchContent;
}

const navigateToLibraryAndSearchForBook =(bookname)=>{
 
try{
    console.log("User is trying to navigate To Library And Search For Book");
    content.headerLibrary.click();
    browser.sleep(1000);
    content.filterSearch.sendKeys(bookname);
    content.searchIcon.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchedCard), 20000, "courseCard is not available");
    var result=content.searchedCard.getText();
    content.searchedCard.click();
    expect(result).toEqual(bookname);
  
    console.log("User successfully verified the Book : " + bookname);
    console.log("User successfully navigated To Library And Search For Book");

  }
  catch(Exception)
  {
    console.log( "Failed to navigate To Library And Search For Book");
  }
 
}
const clickOnNextButton=()=>{
  var progressStatus;
  try{
      console.log("User is trying to click on next button");
      browser.sleep(2000);
      if( content.closeIcon2.isPresent()){
        content.closeIcon2.click();  
      }else if(searchObj.EnjoyedTheContent.isPresent()){
        
      browser.sleep(2000); 
      browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.starRating), 20000, "save never loaded");
      searchObj.starRating.click();                   
      browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.submitRating), 20000, "save never loaded");
      searchObj.submitRating.click();  
      browser.sleep(4000);  
      }

      
      browser.executeScript("arguments[0].scrollIntoView();",  content.nextButtonContentPlayer); 
      
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextButtonContentPlayer), 20000, "save never loaded");
      content.nextButtonContentPlayer.click();  
      browser.executeScript("arguments[0].scrollIntoView();",  searchObj.progressBarStatus);  
      browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.progressBarStatus), 20000, "save never loaded");
      progressStatus= searchObj.progressBarStatus.getText();   
      console.log("progress status :"+ progressStatus);
      console.log("User successfully clicked on next button");

  return progressStatus;
  }catch(Exception){
      console.log("Failed to click on next button");
  }
}          
const checkConsumptionStatus=(status)=>{
  try{
    console.log("User is trying to check consumption status");
    browser.sleep(3000);  
    browser.executeScript("arguments[0].scrollIntoView();",  searchObj.progressBarStatus);  
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.progressBarStatus), 20000, "progressBarStatus never loaded");
    //expect(searchObj.progressBarStatus.getText()).isNot(status); 
    console.log("User successfully checked consumption status is not : "+status);  
  }catch(Exception){
    console.log("failed to check consumption status");
  }
}
const enrollmentDateEnded=(contentName)=>{
    
  try{
      console.log("User is trying to Enroll the Course But EnrollDate Is Ended");
    
      browser.sleep(2000);
      browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.headerCourse), 20000, " headerCourse not loaded");
      content.headerCourse.click();
      browser.sleep(1000);
      content.searchInput.click();
      content.searchInput.sendKeys(contentName);
      browser.sleep(2000);
      content.searchButton.click();
      browser.sleep(1000);
      content.courseCard.click();
      browser.sleep(1000);
      // expect( content.batchEnrollmentDateEnded.isPresent()).toBe(true);
      // if( content.batchEnrollmentDateEnded.isDisplayed())
      // {
      //  console.log("Enrollment date is ended for the batch");
      // }
      // else
      // {
      //     console.log("Enrollment date is not ended for the batch");
      // }
     // expect(content.joinTraining.isEnabled()).toBe(false);
      if(content.joinTraining.isEnabled())
      {
       console.log("join training button is enabled after enrollment date gets over")
      }
      else
      {
          console.log("join training button is not disabled after enrollment date gets over");
      }
    
  }
  catch(Exception)
  {
     console.log("User successfully enrolled to the course");
  }
}
const createInviteBatch=(contentName)=>{
  
  try{
      console.log("User is trying to create invite only batch for a course");
    
      browser.sleep(2000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, " headerCourse not loaded");
      searchObj.headerCourse.click();
      browser.sleep(1000);
      content.searchCourse1.click();
      content.searchCourse1.sendKeys(contentName);
      content.searchButton1.click();
      browser.sleep(1500);
      content.courseCard.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.addIcon), 20000, " addIcon is not available");
      content.addIcon.click();
      browser.sleep(1000);
      content.nameOfBatch.sendKeys("batch21");
      content.aboutBatch.sendKeys("Invitebatch");
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.startDate), 20000, " startDate is not available");
      content.startDate.click();
      browser.sleep(1000);
      //browser.wait(protractor.ExpectedConditions.visibilityOf(content.startDateCalendar), 20000, "startDateCalendar is not available");
      content.startDateCalendar.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.endDate), 20000, " endDate is not available");
      content.endDate.click();
      browser.sleep(1000);
      //browser.wait(protractor.ExpectedConditions.visibilityOf(content.endDateCalendar), 20000, " endDateCalendar is not available");
      content.endDateCalendar.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.mentorsInBatch), 20000, "mentorsInBatch is not available");
      content.mentorsInBatch.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectMentorsInBatch), 20000, " endDateCalendar is not available");
      content.selectMentorsInBatch.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.mentorDropdown), 20000, "mentorDropdown is not available");
      content.mentorDropdown.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.membersInBatch), 20000, " membersInBatch is not available");
      content.membersInBatch.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.memberDropdown), 20000, "memberDropdown is not available");
      content.memberDropdown.click();
      browser.sleep(1000);
      console.log("Members of the same tenant is added to the batch");
      content.buttonCreate.click();
      console.log("Invite only batch for a course is created sucessfully");
  }
  catch(Exception)
  {
     console.log("Failed to create invite only batch");
  }
}
const  batchNameAndEndDateIsMandatoryFields2=()=>{
 
  try{
      console.log("Batch name and End date are the mandatory fields");
      browser.sleep(2000);
      browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.addIcon), 20000, "headerCourse not available");           
      content.addIcon.click();
      browser.sleep(1000);
    
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.nameOfBatch), 20000, " nameOfBatch is not available");
      content.nameOfBatch.click();
      content.nameOfBatch.sendKeys("batch1");
      console.log("Name Of The Batch is mandatory field");
      content.startDate.isDisplayed();
      console.log("Start Date is mandatory field");
      browser.sleep(1000);
      content.closeBatchPopup.click();
    
       console.log("Batch name and Start date are mandatory fields");
       console.log("Course Mentor is able to create Inviet batch succesfully");
  }
  catch(Exception)
  {
     console.log("failed in verifying Batch name and Start date are mandatory fields");
  }
}
const inviteOnlybatchCanBeCreatedAndUpdatedWithoutEndDate=()=>{
  
  try{
      console.log("User is trying to create invite only batch for a course");
    
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.addIcon), 20000, " addIcon is not available");
      content.addIcon.click();
      browser.sleep(1000);
      content.nameOfBatch.sendKeys("batch");
      content.aboutBatch.sendKeys("Invite batch");
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.startDate), 20000, " startDate is not available");
      content.startDate.click();
      browser.sleep(1000);
      //browser.wait(protractor.ExpectedConditions.visibilityOf(content.startDateCalendar), 20000, "startDateCalendar is not available");
      content.startDateCalendar.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.buttonCreate), 20000, "buttonCreate is not available");
      content.buttonCreate.click();
      console.log("Batch is created without end date");
      browser.sleep(2000);
      browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.editBatchIcon), 20000, "editBatchIcon is not available");
     
      content.editBatchIcon.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.nameOfBatch), 20000, "nameOfBatch is not available");
      content.nameOfBatch.sendKeys("21batch");
      content.aboutBatch.sendKeys("Invite batch");
      browser.sleep(2000);
     // browser.wait(protractor.ExpectedConditions.visibilityOf(content.updateBatchButton), 20000, "updateBatchButton is not available");
      content.updateBatchButton.click();
      console.log("User is successfully creating and updating an invite only batch");

  }
  catch(Exception)
  {
     console.log("Failed to create invite only batch");
  }
}
const consumeTheCourseOfInviteOnly=(content)=>{
  
  try{
      console.log("User is trying to consume invite only batch");
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerCourse), 20000, " headerCourse not loaded");
      content.headerCourse.click();
      browser.sleep(1000);
      content.searchCourse1.click();
      content.searchCourse1.sendKeys(content);
      content.searchButton1.click();
      browser.sleep(1000);
      content.courseCard.click();
      browser.sleep(1000);
      // if(content.contentPlayer.isDisplayed())
      // {
      //     console.log("User is able to consume the course");
      // }
      // content.closePopup1.click();

  }
  catch(Exception)
  {
     console.log("Failed to consume invite only batch");
  }
}
const clearTheFieldNameOfTheBatchAndStartDate=(contentName)=>{
  
  try{
      browser.sleep(2000);
      console.log("User is trying to clear Name of the Batch and Start date");
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerCourse), 20000, " headerCourse not loaded");
      content.headerCourse.click();
      browser.sleep(1000);
     
      content.searchCourse1.click();
      content.searchCourse1.sendKeys(contentName);
      content.searchButton1.click();
      browser.sleep(1000);
      content.courseCard.click();
      browser.sleep(2000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.addIcon), 20000, " addIcon is not available");
      content.addIcon.click();
      browser.sleep(1000);
      content.nameOfBatch.sendKeys("1");
      content.aboutBatch.sendKeys("open batch");
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.startDate), 20000, " startDate is not available");
      content.startDate.click();
      browser.sleep(1000);
      //browser.wait(protractor.ExpectedConditions.visibilityOf(content.endDateCalendar), 20000, "endDateCalendar is not avaialable");
      content.endDateCalendar.click();
      console.log("Course is successfully created by future date");
      browser.sleep(1000);
      content.clearButton.click();
      browser.sleep(1000);
      // var nameOfTheBatch="1";
      // content.nameOfBatch.getText().then(function(input){
      //  expect(input).toEqual(nameOfTheBatch)});
      console.log("Name of the batch is cleared");
      if( content.enterValidStartDate.isDisplayed())
      {
          console.log("Name of the batch and Start date is cleared");
      }
      content.closeBatchPopup.click();
      browser.sleep(1000);
  }
  catch(Exception)
  {
     console.error("failed to Clear button is clearing Name of the Batch and Start date");
  }
}
const  errorMessageShouldComeAsEndDateShouldBeGreaterThanStartDate=()=>{
  
  try{
      console.log("User is trying to clear Name of the Batch and Start date");
     
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.addIcon), 20000, " addIcon is not available");
      content.addIcon.click();
      browser.sleep(1000);
      content.nameOfBatch.sendKeys("2");
      content.aboutBatch.sendKeys("open batch");
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.startDate), 20000, " startDate is not available");
      content.startDate.click();
      browser.sleep(1000);
      //browser.wait(protractor.ExpectedConditions.visibilityOf(content.start1), 20000, " start1 is not available");
      content.start1.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.endDate), 20000, "endDate is not avaialable");
      content.endDate.click();
      browser.sleep(1000);
      //browser.wait(protractor.ExpectedConditions.visibilityOf(content.endDateCalendar), 20000, "endDateCalendar is not avaialable");
      content.endDateCalendar.click();
      browser.sleep(1000);
      content.buttonCreate.click();
      browser.sleep(1000);
      expect(content.endDateShouldBeGreaterThanStartDate.isPresent()).toBe(true);
     if(content.endDateShouldBeGreaterThanStartDate.isDisplayed())
     {
      console.log("User is successfully able to see the error messsage");
     }
     content.closeBatchPopup.click();
     browser.sleep(1000);
  }
  catch(Exception)
  {
     console.log("Clear button is clearing Name of the Batch and Start date");
  }
}
const createUpcomingBatch=()=>{
  
  try{
      console.log("User is trying to Create Upcoming Batches");
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.batchDropDownIcon ), 20000, "batchDropDownIcon  is not available");
      content.batchDropDownIcon .click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.upcomingBatches ), 20000, "upcomingBatches  is not available");
      content.upcomingBatches.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.addIcon), 20000, " addIcon is not available");
      content.addIcon.click();
      browser.sleep(1000);
      content.nameOfBatch.sendKeys("3");
      content.aboutBatch.sendKeys("open batch");
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.startDate), 20000, " startDate is not available");
      content.startDate.click();
      browser.sleep(1000);
      //browser.wait(protractor.ExpectedConditions.visibilityOf(content.start1), 20000, " start1 is not available");
      content.start1.click();
      browser.sleep(1000);
      content.buttonCreate.click();
      browser.sleep(1000);
      // browser.wait(protractor.ExpectedConditions.visibilityOf(content.dropDownIcon), 20000, "dropDownIcon is not available");
      // content.dropDownIcon.click();
      // browser.sleep(1000);
      // content.upcomingBatches.click();

      expect(content.editIcon.isPresent()).toBe(true);
     if(content.editIcon.isDisplayed())
     {
      console.log("editIcon is present");
     }

     expect(content.calendarIcon1.isPresent()).toBe(true);
     if(content.calendarIcon1.isDisplayed())
     {
      console.log("calendarIcon1 is present");
     }
     console.log("User is successfully created the upcoming batch");
  }
  catch(Exception)
  {
     console.log("Failed to create a upcoming batch");
  }
}
const  removeMemberFromTheBatch=()=>{
  
  try{
      console.log("User is able to remove mentors from the batch");
     
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.addIcon), 20000, " addIcon is not available");
      browser.sleep(1000);
      content.addIcon.click();
      browser.sleep(1000);
      content.nameOfBatch.sendKeys("4");
      content.aboutBatch.sendKeys("open batch");
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.startDate), 20000, " startDate is not available");
      content.startDate.click();
      browser.sleep(1000);
      //browser.wait(protractor.ExpectedConditions.visibilityOf(content.start1), 20000, " start1 is not available");
      content.start1.click();
      browser.sleep(1000);
      content.mentorsInBatch.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectMentorsInBatch), 20000, "selectMentorsInBatch is not available");
      content.selectMentorsInBatch.click();
      browser.sleep(1000);
      content.mentorDropdown.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.membersInBatch), 20000, "membersInBatch is not available");
      content.membersInBatch.click();
      browser.sleep(1000);
      console.log("Mentor is able to remove other mentors during batch creation");
      content.buttonCreate.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.editIcon), 20000, "editIcon is not available");
      browser.sleep(1000);
      content.editIcon.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.removeMembers), 20000, "removeMembers is not available");
      content.removeMembers.click();
      browser.sleep(1000);
      content.updateBatchButton.click();
      

     console.log( "Mentors are successfully remove from the batch");
  }
  catch(Exception)
  {
     console.log("Failed to remove mentors from the batch");
  }
}
const  checkInCreatedByMe=()=>{
  
  try{
      console.log("Course Creator check the course in created by me section.");
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
      content.headerDropdown.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, " workSpace is not available");
      content.workSpace.click();
      browser.sleep(1000);
     
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.courseBatchesSection), 20000, "courseBatchesSection is not available");
      content.courseBatchesSection.click();
      content.createdByMeCard.getText().then(function(input){
          expect(input)});
   
  
     console.log("course creator should see the course in created by me section");
  }
  catch(Exception)
  {
     console.log("Failed to see course in created by me section");
  }
}
const checkInAssignToMeSection=()=>{
  
  try{
      console.log("Course Creator check the course in assign to me section");
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
      content.headerDropdown.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, " workSpace is not available");
      content.workSpace.click();
      browser.sleep(1000);
     
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.courseBatchesSection), 20000, "courseBatchesSection is not available");
      content.courseBatchesSection.click();
     
      content.assignedToMe.click();
      browser.sleep(1000);
      content.createdByMeCard.getText().then(function(input){
          expect(input)});
   
     console.log("course creator should see the course in assigned to me section");
  }
  catch(Exception)
  {
     console.log("Failed to see course in created by me section");
  }
}
const applyFilterAndToggleQuestion = () => {
  try {
      browser.sleep(2000);
      
      console.log("User is trying to create a resource")
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
      content.headerDropdown.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
    ccpage.contentCreation().workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(resov.clickresource), 20000,"clickresource is not available");
    resov.clickresource.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(resov.resourceName), 20000,"resourceName is not available");
    resourceName="ResourceA"+faker.randomData().firstname;
    resov.resourceName.sendKeys(resourceName);
    browser.sleep(1000);

    browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
    wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
    etbv.contentType.click();
    browser.sleep(500);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
    etbv.practiceResource.click();

    resov.startCreating.click();
    browser.sleep(2000);
    
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.untitledCollection), 40000, "workSpace is not available");
      content.untitledCollection.getText().then(function (value) {
          console.log('Created Course Name is :' + value);
      });
      //browser.wait(protractor.ExpectedConditions.visibilityOf(content.addQuestionSet), 20000,"addQuestionSet is not available");
      content.addQuestionSet.click();
      browser.sleep(3000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.advancedFilter), 40000, "advancedFilter is not available");
      content.advancedFilter.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.difficulty), 40000, "difficulty is not available");
      content.difficulty.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectDifficulty), 40000, "selectDifficulty is not available");
      content.selectDifficulty.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.questionType), 40000, "questionType is not available");
      content.questionType.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectQuestionType), 40000, "selectQuestionType is not available");
      content.selectQuestionType.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.boardSyllabus), 40000, "boardSyllabus is not available");
      content.boardSyllabus.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectBoardSyllabus), 40000, "selectBoardSyllabus is not available");
      content.selectBoardSyllabus.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.medium), 40000, "medium is not available");
      content.medium.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectMediumQ), 40000, "selectMedium is not available");
      content.selectMediumQ.click();
      browser.sleep(1000);
      // browser.wait(protractor.ExpectedConditions.visibilityOf(content.classType), 40000, "classType is not available");
      // content.classType.click();
      // browser.sleep(3000);
      // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectClassQ), 40000, "selectClass is not available");
      // content.selectClassQ.click();
      // browser.sleep(3000);
      // browser.wait(protractor.ExpectedConditions.visibilityOf(content.subject), 40000, "subject is not available");
      // content.subject.click();
      // browser.sleep(3000);
      // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectSubjectQ), 40000, "selectSubject is not available");
      // content.selectSubjectQ.click();
      // console.log('successfully applied all filters except my toggle')
      // browser.sleep(3000);
      // for (var i = 0; i <= 2; i++) 



      // browser.wait(protractor.ExpectedConditions.visibilityOf(content.myQuestionToggle), 20000, "  myQuestionToggle is not available");
      content.myQuestionToggle.click();
      console.log('Toggle is selected')

      browser.sleep(3000);
      expect(browser.wait(protractor.ExpectedConditions.visibilityOf(content.copyQuestion))).toBeTruthy()
      if (browser.wait(protractor.ExpectedConditions.visibilityOf(content.copyQuestion))) {
          console.log('filtered question is available')
      }
      else {
          console.log('filtered question is not available')
      }

      browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.closePage), 20000, "Dashboard never loaded");
      content.closePage.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.saveCourse), 20000, "Dashboard never loaded");
      content.saveCourse.click();
      browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.closeEditor2), 20000, "Dashboard never loaded");
      content.closeEditor2.click();
      console.log('User has successfully applied Filter And Toggle Question')
  }catch (e) {
    console.log('Failed to apply Filter And Toggle Question');


}

}
const reviewerUpForReview = () => {
  try {
      console.log('User is Navigating to up for review');
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(resov.workSpace), 40000, "workSpace is not available");
      resov.workSpace.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(resov.upForReview), 40000, "upForReview is not available");
      resov.upForReview.click();
      console.log('User successfully navigated to up for review');
  }
  catch (e) {
      console.log('Failed on navigating to Workspace and verifying the latest content');

  }

}

const showFilters = () => {

  try {
      console.log('User is trying to select various filters');
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.filterIcon), 40000, "headerLibrary is not available");
      content.filterIcon.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.resetButton), 40000, "filterSearch is not available");
      content.resetButton.click();

      browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickFilterBoard), 40000, "clickFilterBoard is not available");
      content.clickFilterBoard.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectFilterBoard), 40000, "selectFilterBoard is not available");
      content.selectFilterBoard.click();

      browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickFilterGrade), 40000, "clickFilterSubject is not available");
      content.clickFilterGrade.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.SelectFilterGrade), 40000, "selectFilterSubject is not available");
      content.SelectFilterGrade.click();

      browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickFilterSubject), 40000, "clickFilterSubject is not available");
      content.clickFilterSubject.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectFilterSubject), 40000, "selectFilterSubject is not available");
      content.selectFilterSubject.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickFilterMedium), 40000, "clickFilterMedium is not available");
      content.clickFilterMedium.click();
      browser.sleep(4000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectFilterMedium), 40000, "selectFilterMedium is not available");
      content.selectFilterMedium.click();
      content.selectFilterMedium2.click();

      browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickSubmit), 40000, "clickSubmit is not available");
      content.clickSubmit.click();
      rowser.sleep(2000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.resetButton), 40000, "filterSearch is not available");
      content.resetButton.click();


  }
  catch (Err) {
      console.error('Failed on fetching contents based on filters applied, '+ Err);

  }

}



const allMyContentSortByDropdown = () => {
  try {
     
      wait.waitForElementVisibility(content.sortByDropdown, 30000, "modifiedOnDropdown button not available");
      content.sortByDropdown.click();
      browser.sleep(1000);

      wait.waitForElementVisibility(content.modifiedOnDropdown, 30000, "modifiedOnDropdown button not available");
      content.modifiedOnDropdown.click();

      wait.waitForElementVisibility(content.searchCoursesUpForReview, 50000, "searchCoursesUpForReview button not available");
      expect(content.searchCoursesUpForReview.isDisplayed()).toBeTruthy();
      browser.sleep(3000);

      
      console.log('User is trying to  select modified on and created on option in the dropdown');

     
      console.log('User is trying to  select modified on and created on option in the dropdown');

      wait.waitForElementVisibility(content.sortByDropdown, 30000, "sortByDropdown button not available");
      content.sortByDropdown.click();

      wait.waitForElementVisibility(content.createdOnDropdown, 30000, "createdOnDropdown button not available");
      content.createdOnDropdown.click();

      wait.waitForElementVisibility(content.searchCoursesUpForReview, 50000, "searchCoursesUpForReview button not available");
      expect(content.searchCoursesUpForReview.isDisplayed()).toBeTruthy();
      browser.sleep(3000);

  }
  catch (e) {
      console.log('Failed on selecting options from dropdown');

  }

}


const verifyPagination = () => {
  try {
      console.log('Content is succssefully loaded on first page....');

          browser.executeScript("arguments[0].scrollIntoView();", content.nextLink);

      wait.waitForElementVisibility(content.nextLink, 30000, "contuinew button not available");
      content.nextLink.click();

      wait.waitForElementVisibility(content.firstLink, 30000, "firstLink button not available");
      content.firstLink.click();
      wait.waitForElementVisibility(content.lastLink, 30000, "lastLink button not available");
      content.lastLink.click();
      wait.waitForElementVisibility(content.previousLink, 30000, "contuinew button not available");
      content.previousLink.click();
      console.log('Content is succssefully loaded on previous page....');

  }
  catch (e) {
      console.log('Failed to verify pagination');

  }

}


const navigateToWorkspace = () => {
  try {
      console.log('User is navigating to the Workspace to create or check  Book');
      console.log('User is navigating to workspace');
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(resov.workSpace), 40000, "workSpace is not available");
      resov.workSpace.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(resov.createResource), 40000, "createResource is not available");
      resov.createResource.click();
      console.log('User successfully navigated to book');
  }
  catch (e) {
      console.log('Failed on navigating to Workspace and create');

  }

}

const requestChanges = (contentName) => {
  
  try {
      console.log('User  is trying to send the request changes for all upload content');
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(resov.workSpace), 40000, "workSpace is not available");
      resov.workSpace.click();
      console.log('Clicked on WorkSpace')
      browser.wait(protractor.ExpectedConditions.visibilityOf(resov.upForReview), 40000, "upForReview is not available");
      resov.upForReview.click();
      console.log('User should be able to click on Up for review section')
      // browser.wait(protractor.ExpectedConditions.visibilityOf(resov.searchForReview), 40000, "searchForReview is not available");
      resov.searchForReview.click();
      resov.searchForReview.sendKeys(contentName);
      browser.sleep(3000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchedContentForPublish), 40000, "searchedContentForPublish is not available");
      content.searchedContentForPublish.click();
      console.log('Clicked on publish');
      console.log('User successfully searched in Up for review');
      console.log('Content should render properly in the content player while reviewing the contents')
      browser.executeScript("arguments[0].scrollIntoView();", content.requestChangesButton);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.requestChangesButton), 40000, "searchedContentForPublish is not available");
      content.requestChangesButton.click();
      content.checkBox.each(function (input) {
          input.click()
      });
      browser.executeScript("arguments[0].scrollIntoView();", content.requestChangesComment);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.requestChangesComment), 40000, "searchedContentForPublish is not available");
      content.requestChangesComment.click();
      content.requestChangesComment.sendKeys('Testing');
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.requestChangesBlueButton), 40000, "requestChangesBlueButton is not available");
      content.requestChangesBlueButton.click();
      
  }
  catch (e) {
      console.log('The reviewer failed to rejects the uploaded content');

  }

}

const navigateToWorkspace1 = () => {
  try {
      console.log('User is navigating to the Workspace to create or check  Book');
      console.log('User is navigating to workspace');
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(resov.workSpace), 40000, "workSpace is not available");
      resov.workSpace.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
      resov.drafts.click();
      browser.sleep(3000);
      browser.refresh(); 
                

      console.log('User successfully navigated to Drafts');
  }
  catch (e) {
      console.log('Failed on navigating to Workspace and create');

  }

}

const checkDraftContentRequestComment = () => {
  try {
      console.log('User is check Draft Content Request Comment');
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.firstContentName), 40000, "workSpace is not available");
      content.firstContentName.getText().then(function (firstContentName) {
          console.log('first Content Name is :' + firstContentName);
      });
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.imageCard), 40000, "drafts is not available");
      content.imageCard.click();
      browser.sleep(1000);
      browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
      browser.sleep(3000);
  
      wait.waitForElementVisibility(resov.reviewerSuggestion, 40000, "resov.reviewerSuggestion is not available");
      console.log('User should be able to click on the content from draft section to update/edit the content.')
      resov.reviewerSuggestion.click();
  

      wait.waitForElementVisibility(resov.reviewerSuggestionTitle, 40000, "resov.reviewerSuggestion is not available");
      expect(resov.reviewerSuggestionTitle.isDisplayed()).toBeTruthy();


      browser.sleep(1000);
      
resov.revieDialogClose.click();

     
      console.log('User successfully verified  Draft Content Request Comment')
  }
  catch (e) {
      console.log('Failed to check Draft Content Request Comment');

  }

}
const trainingAttendedIsAvailableInProfilePage = () => {
  try {
      console.log('User is trying to copy the course content from same tenant.');
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerCourse), 40000, "headerCourse is not available");
      content.headerCourse.click();
      // browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchInput), 40000, "searchInput is not available");
      // content.searchInput.click();
      //  content.searchInput.sendKeys(coursename)
      // console.log('Entered Course Name');
      // browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchIcon), 40000, "searchIcon is not available");
      // content.searchIcon.click();
      // browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchPublishedCourses), 40000, "searchIcon is not available");
      // content.searchPublishedCourses.click();
      // browser.sleep(2000);
      // browser.executeScript("arguments[0].scrollIntoView();", content.courseCard);
      browser.sleep(2000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.courseCard), 40000, "courseCard is not available");
      content.courseCard.click();
    //  browser.wait(protractor.ExpectedConditions.visibilityOf(content.courseNameInContentPlayer), 40000, "courseNameInContentPlayer is not available");
    //   content.courseNameInContentPlayer.getText().then(function (value) {
    //  console.log('copy Course Content  is :' + value);
         
    //    });
      browser.executeScript("arguments[0].scrollIntoView();", content.headerDropdown);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 40000, "courseCard is not available");
      content.headerDropdown.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.linkProfile), 40000, "courseCard is not available");
      content.linkProfile.click();
      browser.sleep(2000);
       console.log('User lands on Profile Page');
       browser.executeScript("arguments[0].scrollIntoView();", content.viewMoreButton);
       expect(browser.wait(protractor.ExpectedConditions.visibilityOf(content.viewMoreButton))).toBeTruthy
       //content.viewMoreButton.click();

      console.log('User successfully get course in traing attended section')
}
  catch (e) {
      console.log('Failed to see training attended sction in profile page');

  }

}
const viewCourseDashBoardDetails=()=>{
    
  try{
    var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
    var cred = genericFun.readParticularDataFromExcelFile(sheetPath,'3');
    var contentSearch=cred[7]['CourseName'];

      console.log("Course mentor should be able to see  view course dashboard details");
     
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerCourse), 20000, " headerCourse is not available");
      content.headerCourse.click();
      browser.sleep(3000);
      content.searchInput.sendKeys(contentSearch);
      content.searchButton.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.courseCard), 20000, "courseCard is not available");
      content.courseCard.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.viewCourseDashBoard), 20000, "viewCourseDashBoard is not available");
      content.viewCourseDashBoard.click();
      console.log("Course mentor is able to see the view training dashboard");
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectBatch), 20000, "selectBatch is not available");
      content.selectBatch.click();
      browser.sleep(1000);
      content.batchName.click();
      browser.sleep(2000);
      content.startDateDashboard.getText().then(function(input){
          expect(input).toEqual('Start Date')});
      console.log("Start date is displayed in the view training dashboard section"); 

      content.endDateDashboard.getText().then(function(input){
          expect(input).toEqual('End Date')});
      console.log("End date is displayed in the view training dashboard section"); 

      
      // content.participants.getText().then(function(input){
      //     expect(input).toEqual('Participants')});
      // console.log("Partiipants is displayed in the view training dashboard section"); 

      // content.trainingCompleted.getText().then(function(input){
      //     expect(input).toEqual('Courses completed')});
      // console.log("Trainings completed is displayed in the view training dashboard section"); 


      // content.certificateIssued.getText().then(function(input){
      //     expect(input).toEqual('Certificates Issued')});
      // console.log("Certificates Issued :is displayed in the view training dashboard section");
      
      
      // expect(content.userName1.isPresent()).toBe(true);
      // if(content.userName1.isDisplayed())
      // {
      //  console.log("User name is displayed in view course dashboard");
      // }

      // expect(content.organizationName.isPresent()).toBe(true);
      // if(content.organizationName.isDisplayed())
      // {
      //  console.log("organizationName is displayed in view course dashboard");
      // }

      // expect(content.mobileNumber.isPresent()).toBe(true);
      // if(content.mobileNumber.isDisplayed())
      // {
      //  console.log("Mobile number is displayed in view course dashboard");
      // }

      // expect(content.enrollOn.isPresent()).toBe(true);
      // if(content.enrollOn.isDisplayed())
      // {
      //  console.log("Enroll on is displayed in view course dashboard");
      // }

      // expect(content.status.isPresent()).toBe(true);
      // if(content.status.isDisplayed())
      // {
      //  console.log("Status is displayed in view course dashboard");
      // }

      // expect(content.certificateStatus.isPresent()).toBe(true);
      // if(content.certificateStatus.isDisplayed())
      // {
      //  console.log("Certificate Status is displayed in view course dashboard");
      // }
      // expect(content.sortFunctionalityInAllColumn1.isPresent()).toBe(true);
      // console.log("Sort Functionality is displayed in username column");
      // expect(content.sortFunctionalityInAllColumn2.isPresent()).toBe(true);
      // console.log("Sort Functionality is displayed in organisation name column");
     
      // expect(content.sortFunctionalityInAllColumn3.isPresent()).toBe(true);
      // console.log("Sort Functionality is displayed in status  column");
      // expect(content.sortFunctionalityInAllColumn4.isPresent()).toBe(true);
      // console.log("Sort Functionality is displayed in certificatestatus  column");

      console.log("Sort functionality is working fine for All");

  }
  catch(Exception)
  {
     console.log("Failed to see view course dashboard details");
  }
};

const downloadCSVAndCompare=()=>{
  
  try{
      console.log("User is trying to download csv file and check the data in csv file is matching with dashboard ui");
     
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.downloadCsv), 20000, "downloadCsv is not available");
      content.downloadCsv.click();
      browser.sleep(1000);

  }
  catch(Exception)
  {
     console.log("Failed to download csv and not able to compare with the dashboard data");
  }
};

const checkPagination=()=>{
  
  try{
      console.log("User is trying to check the pagination in course dashboard.");
      console.log("User is able to serach participants");
      content.userEnrolledInToBatch.getText().then(function(input){
          expect(input)});
          browser.executeScript("arguments[0].scrollIntoView();", content.twoHundersUsers);
          expect(content.twoHundersUsers.isPresent()).toBe(true);
          console.log("User is able to see 200 hundered users");
          browser.wait(protractor.ExpectedConditions.visibilityOf(content.secondButton), 20000, "secondButton is not available");
          content.secondButton.click();
          browser.wait(protractor.ExpectedConditions.visibilityOf(content.firstButton), 20000, "firstButton is not available");
          content.firstButton.click();
          browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextButton1), 20000, "nextButton1 is not available");
          content.nextButton1.click();
          browser.wait(protractor.ExpectedConditions.visibilityOf(content.previousButton), 20000, "secondButton is not available");
          content.previousButton.click();
          browser.wait(protractor.ExpectedConditions.visibilityOf(content.closeDashboard), 20000, "closeDashboard is not available");
          content.closeDashboard.click();
          console.log("Pagination is working fine and user is able to close dashboard");
  }
  catch(Exception)
  {
     console.log("Failed to see course in created by me section");
  }
};
const searchContentByUsingFilter =()=>{
  try
  {
     console.log("User is trying to apply filter in library page.");
     browser.sleep(1000);
     browser.wait(protractor.ExpectedConditions.visibilityOf(content.filter), 20000, "filter is not available");
     browser.sleep(1000);
     content.filter.click();
     browser.sleep(2000);
     content.mediumDropDown1.click();
     browser.sleep(1000);
     browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectEng1), 20000, "selectEng is not available");
     content.selectEng1.click();
     browser.sleep(1000);
     browser.wait(protractor.ExpectedConditions.visibilityOf(content.submitFilterButton1), 20000, "submitFilterButton is not available");
     content.submitFilterButton1.click();
     browser.sleep(2000);
     expect(content.verifyDataAfterFilter.isDisplayed()).toBeTruthy();
     browser.sleep(2000);
    
     console.log("User should be able to get the content by applying medium filter");
     content.resetBtn1.click();
     browser.sleep(1000);
     content.classDropDown1.click();
     browser.sleep(2000);
     browser.wait(protractor.ExpectedConditions.visibilityOf(content.sltclass2), 20000, " sltclass1 is not available");
     content.sltclass2.click();
     browser.sleep(1000);
     browser.wait(protractor.ExpectedConditions.visibilityOf(content.submitFilterButton1), 20000, "submitFilterButton is not available");
     content.submitFilterButton1.click();
     browser.sleep(2000);
     expect(content.verifyDataAfterFilter.isDisplayed()).toBeTruthy();
     browser.sleep(2000);
     console.log("User should be able to get the content by applying class filter");
     content.resetBtn1.click();
     browser.sleep(1000);
     browser.wait(protractor.ExpectedConditions.visibilityOf(content.subjectDropDown1), 20000, "subjectDropDown is not available");
     content.subjectDropDown1.click();
     browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.sltsubj1), 20000, " sltsubj is not available");
      content.sltsubj1.click();
     browser.sleep(1000);
     browser.wait(protractor.ExpectedConditions.visibilityOf(content.submitFilterButton1), 20000, "submitFilterButton is not available");
     content.submitFilterButton1.click();
     browser.sleep(2000);
     expect(content.verifyDataAfterFilter.isDisplayed()).toBeTruthy();
     browser.sleep(2000);
     console.log("User should be able to get the content by applying subject filter");
     content.resetBtn1.click();
     browser.sleep(1000);
     console.log("User should be able to get the newly created content by applying filters from library page.");
  }   
  catch(Exception)
  {
     console.log("Failed to get the content after applying filter");
  }  
}

module.exports = {

    searchContentInLibrary,
    navigateToLibraryAndSearchForLessonPlan,
    consumeTheCourseInLibrarySection,
    applyFilterInLibrarySection,
    searchContentInLibraryAndFetchFirstContent,
    navigateToLibraryAndSearchForBook,
    clickOnNextButton,
    checkConsumptionStatus,
    enrollmentDateEnded,
    createInviteBatch,
    batchNameAndEndDateIsMandatoryFields2,
    inviteOnlybatchCanBeCreatedAndUpdatedWithoutEndDate,
    consumeTheCourseOfInviteOnly,
    clearTheFieldNameOfTheBatchAndStartDate,
    errorMessageShouldComeAsEndDateShouldBeGreaterThanStartDate,
    createUpcomingBatch,
    removeMemberFromTheBatch,
    checkInCreatedByMe,
    checkInAssignToMeSection,
    applyFilterAndToggleQuestion,
    reviewerUpForReview,
    showFilters,
    allMyContentSortByDropdown,
    verifyPagination,
    navigateToWorkspace,
    requestChanges,
    navigateToWorkspace1,
    checkDraftContentRequestComment,
    trainingAttendedIsAvailableInProfilePage,
    viewCourseDashBoardDetails,
    downloadCSVAndCompare,
    checkPagination,
    searchContentByUsingFilter,
   
         
       

}
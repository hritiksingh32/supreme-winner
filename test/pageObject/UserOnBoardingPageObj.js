const usronBoardPage = require(protractor.basePath + '/test/pages/userOnBoarding/UserOnBoardingPage.js');
const wait = require(protractor.basePath + '/helper/waiters.js');
const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const signUpPage = require(protractor.basePath + '/test/pages/signUpPage/signUpPage.po.js')
const genericFun = require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');
let getExcelPath = require(protractor.basePath + '/test/pathFolder/changePath.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
var driver = browser.driver;
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
var content = ccpage.contentCreation();
var userOnboard = usronBoardPage.UserOnBoarding();
var signUpPageObj = signUpPage.signUpPage();
const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityPage=require(protractor.basePath+'/test/pages/userOnBoarding/SanityPage.js');

const verifyAdminDashBoard = () => {

    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    wait.waitForElementVisibility(userOnboard.clkAdminDashBoard, 20000, "clkAdminDashBoard is not available");
    userOnboard.clkAdminDashBoard.click();
    console.log("clicked on Admin Dashboard")
    wait.waitForElementVisibility(userOnboard.report, 20000, "Report Section is not available");

    expect(userOnboard.dataset.isDisplayed).toBeTruthy();
    expect(userOnboard.serialNo.isDisplayed).toBeTruthy();
    expect(userOnboard.title.isDisplayed).toBeTruthy();
    expect(userOnboard.lastUpdatedDate.isDisplayed).toBeTruthy();
    expect(userOnboard.tags.isDisplayed).toBeTruthy();
    expect(userOnboard.updatedFrequency.isDisplayed).toBeTruthy();
    expect(userOnboard.status.isDisplayed).toBeTruthy();
    userOnboard.contentName.getText().then(function(input){
    console.log("First content on report is: "+input);
    });
}

const verifyViewAllButton = () => {

    wait.waitForElementVisibility(userOnboard.verifyClassSec, 20000, "Class Section is not available");
    expect(userOnboard.verifyClassSec.getText()).toEqual('Class 2');
    console.log('Class section displayed Succesfully');
}

const usersUploadAndDownload = () => {
    // browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.sleep(2000);
    userOnboard.clkManage.click();
    wait.waitForElementVisibility(userOnboard.ClickSelectFile, 20000, "Select File is not available");
    userOnboard.ClickSelectFile.click();
    wait.waitForElementVisibility(userOnboard.clkDownloadFile,20000);
    expect(userOnboard.clkDownloadFile.isDisplayed()).toBeTruthy();
     userOnboard.clkDownloadFile.click();
    // browser.sleep(3000);
    //  userOnboard.clkSltFile.click();
    //  browser.sleep(5000);
    console.log('User list Downloaded Succesfully');
}

const signInWithSSO = () => {
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    wait.waitForElementVisibility(signUpPageObj.loginButton, 20000);
    signUpPageObj.loginButton.click();
    wait.waitForElementVisibility(userOnboard.signWithStateID, 20000);
    userOnboard.signWithStateID.click();
    wait.waitForElementVisibility(userOnboard.stateDropDown, 20000);
    userOnboard.stateDropDown.click();
    wait.waitForElementVisibility(userOnboard.selectState, 20000);
    userOnboard.selectState.click();
    wait.waitForElementVisibility(userOnboard.clickSubmit, 20000);
    userOnboard.clickSubmit.click();
    wait.waitForElementVisibility(userOnboard.stateUsrName, 20000);
    userOnboard.stateUsrName.click();
    userOnboard.stateUsrName.sendKeys("userName");
    wait.waitForElementVisibility(userOnboard.usrExternalID, 20000);
    userOnboard.usrExternalID.click();
    userOnboard.usrExternalID.sendKeys("extrnalId");
    wait.waitForElementVisibility(userOnboard.schoolExternalID, 20000);
    userOnboard.schoolExternalID.click();
    userOnboard.schoolExternalID.sendKeys("SchoolId");
    wait.waitForElementVisibility(userOnboard.submitState, 20000);
    userOnboard.submitState.click();
    wait.waitForElementVisibility(userOnboard.dropdown, 20000);
    userOnboard.dropdown.click();

}




const mergeAccount = () => {

    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.sleep(1000);
    userOnboard.clkMergeAccount.click();
    userOnboard.clkMerge.click();

    wait.waitForElementVisibility(userOnboard.mergePageAssert, 20000, "Merge Page is not available");

    expect(userOnboard.mergePageAssert.getText()).toEqual('Merge Account');

}

const forgetPassword = () => {
    try {


        browser.sleep(2000);
        console.log('verifying the  recoveryId in ForGot Password')
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
        wait.waitForElementVisibility(userOnboard.loginButton, 20000, "loginButton field is not  available");
        userOnboard.loginButton.click();
        wait.waitForElementVisibility(userOnboard.clkForgot, 20000, "clkForgot field is not available");
        userOnboard.clkForgot.click();
        //browser.wait(protractor.ExpectedConditions.visibilityOf(userOnboard.clkForgot),2000,"clkForgot field is not available");
        // userOnboard.clkForgot.click();
        wait.waitForElementVisibility(userOnboard.enterEmailInRecoveryAcc, 20000, "enterEmailInRecoveryAcc field is not available");
        userOnboard.enterEmailInRecoveryAcc.click();
        wait.waitForElementVisibility(userOnboard.enterEmailInRecoveryAcc, 20000, "enterEmailInRecoveryAcc field is not available");
        userOnboard.enterEmailInRecoveryAcc.sendKeys("emailName");
        wait.waitForElementVisibility(userOnboard.enterNameInRecoveryAcc, 20000, "enterNameInRecoveryAcc field is not available");
        userOnboard.enterNameInRecoveryAcc.click();
        wait.waitForElementVisibility(userOnboard.enterNameInRecoveryAcc, 20000, "enterNameInRecoveryAcc field is not available");
        userOnboard.enterNameInRecoveryAcc.sendKeys("Course Mentor");
        wait.waitForElementVisibility(userOnboard.nextButtonInRecoveryAcc, 20000, "nextButtonInRecoveryAcc field is not available");
        userOnboard.nextButtonInRecoveryAcc.click();
        wait.waitForElementVisibility(userOnboard.sltRecoveryEmailId, 20000, "sltRecoveryEmailId field is not available");
        userOnboard.sltRecoveryEmailId.click();
        wait.waitForElementVisibility(userOnboard.clkGetOTPButton, 20000, "clkGetOTPButton field is not available");
        userOnboard.clkGetOTPButton.click();
    } catch (err) {
        console.error("failed in forgot password, " + err);
    }
}
const addRecoveryID = () => {
    try {


        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(userOnboard.clickProfileIcon, 20000, "clickProfileIcon field is not available");
        userOnboard.clickProfileIcon.click();
        wait.waitForElementVisibility(userOnboard.clkAddRecoveryID, 20000, "clkAddRecoveryID field is not available");
        userOnboard.clkAddRecoveryID.click();
        wait.waitForElementVisibility(userOnboard.emailIdTextBox, 20000, "emailIdTextBox field is not available");
        userOnboard.emailIdTextBox.click();
        wait.waitForElementVisibility(userOnboard.emailIdTextBox, 20000, "emailIdTextBox field is not available");
        userOnboard.emailIdTextBox.sendKeys("automationUser1@gmail.com");
        wait.waitForElementVisibility(userOnboard.clkMerge, 20000, "clkMerge field is not available");
        userOnboard.clkMerge.click();
    } catch (Err) {
        console.error("Failed in add recovery id, " + Err);
    }
}

const userSearch = () => {

    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.linkProfile, 20000);
    content.linkProfile.click();
    wait.waitForElementVisibility(content.profileTickMark, 20000);
    expect(content.profileTickMark.isDisplayed()).toBeTruthy();
    var editButton = content.btnEdit;
    browser.controlFlow().execute(function () {
        browser.executeScript('arguments[0].scrollIntoView({block:"center"})', editButton.getWebElement());
    });
    content.btnEdit.click();
    wait.waitForElementVisibility(content.btnClose, 20000);
    expect(content.btnClose.isDisplayed()).toBeTruthy();
    content.btnClose.click();

}

const verifyLocationPopup = () => {
    try{
    wait.waitForElementVisibility(content.sunbirdOkMsg, 30000);
    content.sunbirdOkMsg.click();
    //browser.navigate().refresh();
    wait.waitForElementVisibility(content.Teacher, 20000);
    expect(content.Teacher.isDisplayed()).toBeTruthy();

    var Url1 = getAppURL.ConfigurePath().AppURL;
    var AppendGet = '/get';
    browser.get(Url1 + AppendGet, 40000);
    wait.waitForElementVisibility(content.Teacher, 20000);
    expect(content.Teacher.isDisplayed()).toBeTruthy();
    content.Teacher.click();
    wait.waitForElementVisibility(content.Continue, 20000);
    content.Continue.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(content.state, 20000);
    content.state.click();
    wait.waitForElementVisibility(content.selectState, 20000);
    content.selectState.click();
    wait.waitForElementVisibility(content.district, 20000);
    content.district.click();
    wait.waitForElementVisibility(content.selectDistrict, 20000);
    content.selectDistrict.click();
    browser.sleep(1000);
    wait.waitForElementVisibility(content.submitForm, 20000);
    content.submitForm.click();

    utility.userLogin('CustodianUser');

    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.linkProfile, 20000);
    content.linkProfile.click();
    var editButton = content.btnEdit;
    browser.controlFlow().execute(function () {
        browser.executeScript('arguments[0].scrollIntoView({block:"center"})', editButton.getWebElement());
    });
    content.btnEdit.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.btnSubmit, 20000);
    wait.waitForElementToBeClickable(content.btnSubmit, 20000);
    
    content.btnSubmit.each(function(input){
    input.click();
    });
   
    browser.sleep(3000);
}catch(e){
    console.error("failed to verify location popup");
}
}

const verifyProfileDetails = () => {

    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.linkProfile, 20000);
    content.linkProfile.click();

    wait.waitForElementVisibility(content.profileTickMark, 20000);
    expect(content.profileTickMark.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.iconI, 20000);
    expect(userOnboard.iconI.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelUserName, 20000);
    expect(userOnboard.labelUserName.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelUserID, 20000);
    expect(userOnboard.labelUserID.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelRoles, 20000);
    expect(userOnboard.labelRoles.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelAddMobileNumber, 20000);
    expect(userOnboard.labelAddMobileNumber.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelEmail, 20000);
    expect(userOnboard.labelEmail.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelSubjects, 20000);
    var scrolling = userOnboard.labelSubjects;
    browser.controlFlow().execute(function () {
        browser.executeScript('arguments[0].scrollIntoView({block:"center"})', scrolling.getWebElement());
    });

    wait.waitForElementVisibility(userOnboard.labelRecoveryMobileNumber, 20000);
    expect(userOnboard.labelRecoveryMobileNumber.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelBoard, 20000);
    expect(userOnboard.labelBoard.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelMedium, 20000);
    expect(userOnboard.labelMedium.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelClasses, 20000);
    expect(userOnboard.labelClasses.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelSubjects, 20000);
    expect(userOnboard.labelSubjects.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelContributions, 20000);
    expect(userOnboard.labelContributions.isDisplayed()).toBeTruthy();

}

const addRecoveryAccountDetails = () => {

    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.linkProfile, 20000);
    content.linkProfile.click();
    wait.waitForElementVisibility(userOnboard.labelRecoveryMobileNumber, 20000);
    expect(userOnboard.labelRecoveryMobileNumber.isDisplayed()).toBeTruthy();
    userOnboard.labelRecoveryMobileNumber.click();
    wait.waitForElementVisibility(userOnboard.popupRecoveryAccount, 20000);
    expect(userOnboard.popupRecoveryAccount.isDisplayed()).toBeTruthy();
    wait.waitForElementVisibility(userOnboard.labelEmailInPopup, 20000);
    expect(userOnboard.labelEmailInPopup.isDisplayed()).toBeTruthy();
    wait.waitForElementVisibility(userOnboard.labelMobileInPopup, 20000);
    expect(userOnboard.labelMobileInPopup.isDisplayed()).toBeTruthy();
    // wait.waitForElementVisibility(userOnboard.checkBoxEmail, 20000);
    // userOnboard.checkBoxEmail.click();
    wait.waitForElementVisibility(userOnboard.fieldEmail, 20000);
    browser.sleep(200);
    userOnboard.fieldEmail.click();
    userOnboard.fieldEmail.sendKeys('mentorsun@gmail.com');
    wait.waitForElementVisibility(userOnboard.btnSubmit, 20000);
    userOnboard.btnSubmit.click();
    // wait.waitForElementVisibility(userOnboard.errorMsgForEmail, 20000);
    // expect(userOnboard.errorMsgForEmail.isDisplayed()).toBeTruthy();
    // wait.waitForElementVisibility(userOnboard.fieldEmail, 20000);
    // userOnboard.fieldEmail.clear();
    // browser.sleep(200);
    // userOnboard.fieldEmail.sendKeys('mentorsungmail.com');
    // expect(userOnboard.btnSubmit.isEnabled()).toBeFalsy();
    // wait.waitForElementVisibility(userOnboard.checkboxPhone, 20000);
    // userOnboard.checkboxPhone.click();
    // wait.waitForElementVisibility(userOnboard.fieldMobileNumber, 20000);
    // userOnboard.fieldMobileNumber.click();
    // userOnboard.fieldMobileNumber.sendKeys('9009900990');
    // expect(userOnboard.btnSubmit.isEnabled()).toBeTruthy();
    // userOnboard.fieldMobileNumber.clear();
    // browser.sleep(200);
    // userOnboard.fieldMobileNumber.sendKeys('900990099');
    // expect(userOnboard.btnSubmit.isEnabled()).toBeFalsy();
    // wait.waitForElementVisibility(userOnboard.checkBoxEmail, 20000);
    // userOnboard.checkBoxEmail.click();
    // wait.waitForElementVisibility(userOnboard.fieldEmail, 20000);
    // userOnboard.fieldEmail.click();
    // userOnboard.fieldEmail.clear();
    // browser.sleep(200);
    // userOnboard.fieldEmail.sendKeys(faker.randomData().emailData);
    // wait.waitForElementVisibility(userOnboard.btnSubmit, 20000);
    // userOnboard.btnSubmit.click();
    // wait.waitForElementVisibility(userOnboard.recoveryIdDisplayed, 20000);
    // expect(userOnboard.recoveryIdDisplayed.isDisplayed()).toBeTruthy();
    
}
const addRecoveryAccountDetailsForSanity = () => {

    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.linkProfile, 20000);
    content.linkProfile.click();
    wait.waitForElementVisibility(userOnboard.labelRecoveryMobileNumber, 20000);
    expect(userOnboard.labelRecoveryMobileNumber.isDisplayed()).toBeTruthy();
    userOnboard.labelRecoveryMobileNumber.click();
    wait.waitForElementVisibility(userOnboard.popupRecoveryAccount, 20000);
    expect(userOnboard.popupRecoveryAccount.isDisplayed()).toBeTruthy();
    wait.waitForElementVisibility(userOnboard.labelEmailInPopup, 20000);
    expect(userOnboard.labelEmailInPopup.isDisplayed()).toBeTruthy();
    wait.waitForElementVisibility(userOnboard.labelMobileInPopup, 20000);
    expect(userOnboard.labelMobileInPopup.isDisplayed()).toBeTruthy();
    // wait.waitForElementVisibility(userOnboard.checkBoxEmail, 20000);
    // userOnboard.checkBoxEmail.click();
    wait.waitForElementVisibility(userOnboard.fieldEmail, 20000);
    browser.sleep(200);
    userOnboard.fieldEmail.click();
    userOnboard.fieldEmail.sendKeys(faker.randomData().emailData);
    wait.waitForElementVisibility(userOnboard.btnSubmit, 20000);
    userOnboard.btnSubmit.click();
    wait.waitForElementVisibility(userOnboard.recoveryIdDisplayed, 20000);
    expect(userOnboard.recoveryIdDisplayed.isDisplayed()).toBeTruthy();

}
const mergeAccountWithCustodian = () =>{
    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    // wait.waitForElementVisibility(content.linkProfile, 20000);
    // content.linkProfile.click();
    wait.waitForElementVisibility(content.mergeAccountWithCusto, 20000);
    content.mergeAccountWithCusto.click();
    wait.waitForElementVisibility(content.btnMerge, 20000);
    content.btnMerge.click();
    browser.sleep(3000);
   // utility.userLogin('CustodianUser');
    utility.mergeAccount('automationd2@yopmail.com','Password@123');
    browser.sleep(1000);
    wait.waitForElementVisibility(content.btnOk, 20000);
    content.btnOk.click();
}
const usersUploadAndDownloadValidations = () => {
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.sleep(2000);
    userOnboard.clkManage.click();
    wait.waitForElementVisibility(userOnboard.selfDeclaredUserDetails, 20000, "selfDeclaredUserDetails is not available");
    expect(userOnboard.selfDeclaredUserDetails.isDisplayed()).toBeTruthy();
    expect(userOnboard.uploadValidationStatus.isDisplayed()).toBeTruthy();
    browser.controlFlow().execute(function () {
        browser.executeScript('arguments[0].scrollIntoView({block:"center"})', userOnboard.selectFile.getWebElement());
    });
    userOnboard.selectFile.click();
// add for explorer validation
    // browser.sleep(500);
    // userOnboard.downloadButton.click();
    browser.sleep(500);
    userOnboard.closeIcon.click();
    browser.sleep(500);
    browser.executeScript('window.scrollTo(0,0);').then(function(){
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(500);
    wait.waitForElementVisibility(userOnboard.downloadUserDetail,20000);
    expect(userOnboard.downloadUserDetail.isDisplayed()).toBeTruthy();
    userOnboard.downloadUserDetail.click();
   // var fileName = genericFun.readLatestDownlaodedFileName("/home/qualitrix/Documents/diksha-Protractor/downloads/");
    //console.log('User list Downloaded Succesfully'+fileName );
}
const custodianUsersProfilePageValidations = () => {
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.sleep(2000);
    userOnboard.clickProfileIcon.click();
    wait.waitForElementVisibility(userOnboard.submitDetails, 20000, "submitDetails is not available");
    expect(userOnboard.submitDetails.isDisplayed()).toBeTruthy();
    userOnboard.submitDetails.click();
    browser.sleep(1000);
    wait.waitForElementVisibility(userOnboard.selectPersona, 20000, "selectPersona is not available");
    userOnboard.selectPersona.click();
    browser.sleep(500);
    expect(userOnboard.teacherOption.isDisplayed()).toBeTruthy();
    expect(userOnboard.otherOption.isDisplayed()).toBeTruthy();
    userOnboard.teacherOption.click();
    wait.waitForElementVisibility(userOnboard.selectTenant, 20000, "selectTenant is not available");
    userOnboard.selectTenant.click();
    browser.sleep(3000);
    expect(userOnboard.andhraOption.isDisplayed()).toBeTruthy();
    expect(userOnboard.assamOption.isDisplayed()).toBeTruthy();
   // expect(userOnboard.CustodianUserpageTnC.isDisplayed()).toBeTruthy();
    userOnboard.andhraOption.click();
    browser.sleep(500);
   // userOnboard.cancel.click();
   browser.navigate().back();
    browser.sleep(2000);
    wait.waitForElementVisibility(userOnboard.editPersonalDetail,20000);
    userOnboard.editPersonalDetail.click();
    browser.sleep(500);
    expect(userOnboard.userName.isDisplayed()).toBeTruthy();
    expect(userOnboard.stateName.isDisplayed()).toBeTruthy();
    expect(userOnboard.districtName.isDisplayed()).toBeTruthy();
    browser.sleep(500);
    userOnboard.closeEditDetail.click();
    browser.sleep(500);
    console.log('Custodian User profile detail validated Succesfully');
}

const verifyLocationPopupForAnonymusUser=()=>{
    wait.waitForElementVisibility(content.sunbirdOkMsg, 30000);
    content.sunbirdOkMsg.click();
    //browser.navigate().refresh();
    wait.waitForElementVisibility(content.Teacher, 20000);
    expect(content.Teacher.isDisplayed()).toBeTruthy();
    content.Teacher.click();
    wait.waitForElementVisibility(content.Continue, 20000);
    content.Continue.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(content.state, 20000);
    content.state.click();
    wait.waitForElementVisibility(content.selectState, 20000);
    content.selectState.click();
    wait.waitForElementVisibility(content.district, 20000);
    content.district.click();
    wait.waitForElementVisibility(content.selectDistrict, 20000);
    content.selectDistrict.click();
    wait.waitForElementVisibility(content.submitForm, 20000);
    content.submitForm.click();
    wait.waitForElementVisibility(content.clickCourse, 20000);
    content.clickCourse.click();
    browser.sleep(3000);
    //browser.navigate().back();
    //expect(content.BasedOnYourPrefernceText.isDisplayed()).toBeTruthy();
    wait.waitForElementVisibility(content.profileImage,20000);
    content.profileImage.click();
    wait.waitForElementVisibility(content.loginLink,20000);
    content.loginLink.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.RegisterHereLink,20000);
    content.RegisterHereLink.click();
    browser.sleep(3000);
    expect(content.RegisterOnDikshaHeader.isDisplayed()).toBeTruthy();
    var Url1 = getAppURL.ConfigurePath().AppURL;
    var AppendGet = '/get';
    browser.get(Url1 + AppendGet, 40000);
    wait.waitForElementVisibility(content.QRcodeSearchBox,20000);
    content.QRcodeSearchBox.sendKeys('234ZNE'); 
    wait.waitForElementVisibility(content.searchQRCode,20000);
    content.searchQRCode.click(); 
    browser.sleep(3000);
    wait.waitForElementVisibility(content.clickOnFirstContent,20000);
    content.clickOnFirstContent.click(); 
    browser.sleep(3000);
    browser.navigate().back();
    browser.navigate().back();
    browser.navigate().back();
    expect(content.RegisterOnDikshaHeader.isDisplayed()).toBeTruthy();
    browser.get(Url1 + '/explore',40000);
    browser.sleep(3000);
}
const verifyIgot=()=>{
    wait.waitForElementVisibility(content.sunbirdOkMsg, 30000);
    content.sunbirdOkMsg.click();
    browser.navigate().refresh();
    expect(userOnboard.welcomeIgotText.isDisplayed()).toBeTruthy();
    wait.waitForElementVisibility(content.state, 20000);
    content.state.click();
    wait.waitForElementVisibility(content.selectState, 20000);
    content.selectState.click();
    wait.waitForElementVisibility(content.district, 20000);
    content.district.click();
    wait.waitForElementVisibility(content.selectDistrict, 20000);
    content.selectDistrict.click();
    wait.waitForElementVisibility(content.submitForm, 20000);
    content.submitForm.click();
    wait.waitForElementVisibility(userOnboard.IgotCourse, 20000);
    userOnboard.IgotCourse.click();
    wait.waitForElementVisibility(userOnboard.selectRoleFilter, 20000);
    userOnboard.selectRoleFilter.click();
    wait.waitForElementVisibility(userOnboard.selectRole, 20000);
    userOnboard.selectRole.click();
    wait.waitForElementVisibility(userOnboard.IgotCourse, 20000);
    userOnboard.IgotCourse.click();
    // wait.waitForElementVisibility(userOnboard.Applybutton, 20000);
    // userOnboard.Applybutton.click();
    wait.waitForElementVisibility(userOnboard.FirstContent, 20000);
    userOnboard.FirstContent.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.JoinCourse, 20000);
    userOnboard.JoinCourse.click();
    expect(userOnboard.logInPermission.isDisplayed()).toBeTruthy();
    wait.waitForElementVisibility(userOnboard.loginButtonForLoginPage, 20000);
    userOnboard.loginButtonForLoginPage.click();
    browser.sleep(3000);
    expect(userOnboard.welComeToDikshaHeader.isDisplayed()).toBeTruthy();
}




const verifyNoBoardValue = () => {

    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.linkProfile, 20000);
    content.linkProfile.click();

    browser.executeScript('window.scrollTo(0,600);').then(function () {
        console.log('++++++SCROLLED Down+++++');
    });
    userOnboard.labelBoard.getText().then(function(firstPart){
       
        expect(firstPart).not.toEqual("Board :");
        console.log('Board didnt displayed');
    });
    
    
    
    


  
}



module.exports = {
    verifyAdminDashBoard,
    signInWithSSO,
    verifyViewAllButton,
    usersUploadAndDownload,
    mergeAccount,
    addRecoveryID,
    forgetPassword,
    userSearch,
    verifyLocationPopup,
    verifyProfileDetails,
    addRecoveryAccountDetails,
    addRecoveryAccountDetailsForSanity,
    mergeAccountWithCustodian,
    usersUploadAndDownloadValidations,
    custodianUsersProfilePageValidations,
    verifyLocationPopupForAnonymusUser,
    verifyIgot,
    verifyNoBoardValue,

}


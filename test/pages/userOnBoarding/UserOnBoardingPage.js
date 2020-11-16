const { element } = require("protractor");

let UserOnBoarding = () => {
    //let dropdownProfile=element(by.xpath("//div[contains(@class,'dropdown right top pointing')]"));
    let dropdownProfile = element(by.xpath("(//div[@class='avatar-content'])[2]"));

    let clkAdminDashBoard = element(by.xpath("//*[contains(text(), 'Admin dashboard')]"));
    let assertReportPulse = element(by.xpath("//*[contains(text(),'Pulse of the Nation Learning')]"));
    let assertreportDigitalNation = element(by.xpath("//*[contains(text(),'Digital Learning Experience Nationwide')]"));
    let assertreportDigitalState = element(by.xpath("//*[contains(text(),'Digital Learning Experience Statewide')]"));
    let assertreportdigitalCapita = element(by.xpath("//*[contains(text(),'Digital Learning per Capita')]"));
    let assertreportGPS = element(by.xpath("//*[contains(text(),'GPS of Learning')]"));
    let assertreportDailyUsage = element(by.xpath("//*[contains(text(),'Daily Usage Report')]"));
    let assertreportConsumption = element(by.xpath("//*[contains(text(),'Content Consumption Report')]"));
    let assertreportLive = element(by.xpath("//*[contains(text(),'Live QR Code Content Status Report')]"));
    let assertreportETB = element(by.xpath("//*[contains(text(),'ETB Creation Status Report')]"));
    var dropdown = element(by.xpath("//div[contains(@class,'dropdown right top pointing')]"));
    var signWithStateID = element(by.xpath("//button[@id='stateButton']"));
    var stateDropDown = element(by.xpath("//i[@class='dropdown icon']"));
    var selectState = element(by.xpath("//i[@class='dropdown icon']/following::span[2]"));
    var clickSubmit = element(by.xpath("//button[contains(text(),'Submit')]"));
    var stateUsrName = element(by.id('name'));
    var usrExternalID = element(by.xpath("//input[@id='user_external_id']"));
    var schoolExternalID = element(by.xpath("//input[@id='school_external_id']"));
    var submitState = element(by.xpath("//input[@value='submit']"));
    let verifyClassSec = element(by.xpath("//div[@id='class1']"));
    let clkManage = element(by.xpath("//*[contains(text(),'Manage')]"));
    let ClickSelectFile = element(by.xpath("//div[contains(text(),'Select file')]"));
    let clkSltFile = element(by.xpath("//input[@class='sb-btn-upload']"));
    let clkDownloadFile = element(by.xpath("//a[@href='/assets/SampleUserCsv.csv']/following::div"));
    //let clkDownloadFile=element(by.xpath("//a[@href='/assets/SampleUserCsv.csv']"));

    let clkFirstContent = element(by.xpath("//div[@class='sb--card__main-area']"));
    let assertTOC = element(by.xpath("//h3[@class='sb-collectionTree-title']"));
    let assertTenantLogo = element(by.xpath("//img[@alt='APeKX']"));
    let clkEnterQRCode = element(by.xpath("//button[@title='Enter QR code']"));
    let enterQrcode = element(by.xpath("//input[@placeholder='Enter 6 digit QR code']"));
    let submitQrcode = element(by.xpath("//div[@class='ui modal scroll transition active visible normal']/div[3]/button"));
    let clkLinkedContent = element(by.xpath("//h4[@class='sb-card-title']"));
    let clkExploreContentAP = element(by.xpath("//a[contains(text(),'EXPLORE CONTENT')]"));

    let clkMergeAccount = element(by.xpath("//a[contains(text(),' Merge Account ')]"));
    let mergePageAssert = element(by.xpath("//div[contains(text(),'Merge Account')]"));

    let clkMerge = element(by.xpath("//button[@class='sb-btn sb-btn-normal sb-btn-primary']"));

    var dropdown = element(by.xpath("//div[contains(@class,'dropdown right top pointing')]"));
    var uploadStatus = element(by.xpath("//a[contains(text(),'Check Upload Status')]"));
    var organizationUpload = element(by.xpath("//a[contains(text(),'Upload Organizations')]"));
    var uploadCSV = element(by.xpath("//button[contains(text(),'UPLOAD ORGANIZATIONS CSV')]"));
    var clkAddRecoveryID = element(by.xpath("//i[contains(@class,'mail blue icon')]//following::span[1]"));
    var emailIdTextBox = element(by.xpath("//input[@type='email']"));
    //  var clkMerge = element(by.xpath("//button[@class='sb-btn sb-btn-normal sb-btn-primary']"));
    var logout = element(by.xpath("//div[@id='dropdown-menu-list-header']//a[.='Logout']"));
    var clkForgot = element(by.xpath("//div[@id='fgtPortalFlow']"));
    var enterEmailInRecoveryAcc = element(by.xpath("//input[@name='identifier']"));
    var enterNameInRecoveryAcc = element(by.xpath("//input[@name='name']"));
    var nextButtonInRecoveryAcc = element(by.xpath("//button[contains(text(),' Next')]"));
    var sltRecoveryEmailId = element(by.xpath("//input[@type='checkbox']//following::label"));
    var clkGetOTPButton = element(by.xpath("//div[contains(text(),'Recover Account')]//following::input//following::button"));
    var loginButton = element(by.xpath("//a[text()=' Login ']"));
    var clickProfileIcon = element(by.xpath("//li[text()=' Profile ']"));
    var iconI = element(by.xpath("(//i[contains(@class,'name-info')])[1]"));
    var labelUserName = element(by.xpath("//div[contains(@class,'profile-user-label')]"));
    var labelUserID = element(by.xpath("(//div[contains(@class,'fnormal')])[2]"));
    var labelRoles = element(by.xpath("//span[contains(@class,'ui dodger-blue basic label mr-15 ')]"));
    var labelAddMobileNumber = element(by.xpath("//i[contains(@class,'phone ')]"));
    var labelEmail = element(by.xpath("//i[contains(@class,'mail ')]"));
    var labelRecoveryMobileNumber = element(by.xpath("//div[contains(@class,'recovery-img')]"));
    var labelBoard = element(by.xpath("//div[@class='mb-15 d-flex flex-jc-center']/span"));
    var labelMedium = element(by.xpath("//span[contains(text(),'Medium :')]"));
    var labelClasses = element(by.xpath("(//span[contains(text(),'Classes :')])[1]"));
    var labelSubjects = element(by.xpath("(//span[contains(text(),'Subjects :')])[1]"));
    var labelContributions = element(by.xpath("(//div[contains(text(),'Contribution')])[2]"));
    var popupRecoveryAccount = element(by.xpath("//span[contains(text(),'Recovery ID')]"));
    var labelEmailInPopup = element(by.xpath("//label[contains(text(),'Email address')]"));
    var labelMobileInPopup = element(by.xpath("//label[contains(text(),'Mobile Number')]"));
    var checkBoxEmail = element(by.xpath("(//input[@id='email'])[1]"));
    var fieldEmail = element(by.xpath("(//input[@id='email'])[2]"));
    var checkboxPhone = element(by.xpath("//input[@id='phone']"));
    var fieldMobileNumber = element(by.xpath("//input[@formcontrolname='phone']"));
    var btnSubmit = element(by.xpath("//button[@class='sb-btn sb-btn-normal sb-btn-primary']"));
    var errorMsgForEmail = element(by.xpath("//span[contains(text(),' This email address is the same as that linked to your profile ')]"));
    var recoveryIdDisplayed = element(by.xpath("(//span[contains(text(),'.')])[1]"));
    var selfDeclaredUserDetails = element(by.xpath("//h4[contains(@class,'sb-manage-section-title')]"));
    var uploadValidationStatus = element(by.xpath("//*[contains(text(),'Upload validation status')]"));
    var downloadUserDetail = element(by.xpath("//button[contains(text(),'Download')]"));
    var selectFile = element(by.xpath("//div[contains(text(),' Select file ')]"));
    var uploadCSVFile = element(by.xpath("//div[contains(text(),' Upload CSV file ')]"));
    var closeIcon = element(by.xpath("//i[@class='icon close']"));
    var downloadButton = element(by.xpath("(//button[contains(text(),'Download')])[2]"));
    var submitDetails = element(by.xpath("//button[contains(text(),'Submit details')]"));
    var selectPersona = element(by.xpath("//*[text()='Select persona']"));
    var selectTenant = element(by.xpath("//*[text()='Select tenants']"));
    var cancel = element(by.xpath("//button[text()=' Cancel ']"));
    var teacherOption = element(by.xpath("//*[contains(text(),'Teacher')]"));
    var otherOption = element(by.xpath("//*[contains(text(),'Other')]"));
    var andhraOption = element(by.xpath("(//*[contains(text(),'Andhra Pradesh')])[1]"));
    var assamOption = element(by.xpath("(//*[contains(text(),'Assam')])[1]"));
    var editPersonalDetail = element(by.xpath("//*[text()='Edit']"));
    var userName = element(by.xpath("//input[@placeholder='Full name']"));
    var stateName = element(by.xpath("//*[@name='state']"));
    var districtName = element(by.xpath("//*[@name='district']"));
    var closeEditDetail = element(by.xpath("(//i[@class='close icon'])[2]"));
    var CustodianUserpageTnC=element(by.xpath("//input[@id='tnc']/following-sibling::label[1]"));
    var welcomeIgotText=element(by.xpath("//h1[text()='Welcome to IGOT']"));
    var IgotCourse=element(by.xpath("//a[contains(@class,'item item--courses')]"));
    var selectRoleFilter=element(by.xpath("//label[contains(text(),'Class')]/following::sui-multi-select[1]"));
    var selectRole=element(by.xpath("//label[contains(text(),'Class')]/following::sui-multi-select[1]/div[2]/sui-select-option[1]/span[2]"));
    var Applybutton=element(by.xpath("//button[text()=' Apply ']"));
    var FirstContent=element(by.xpath("(//div[@class='sb--card__meta']//h4)[1]"));
    var JoinCourse=element(by.xpath("//button[text()='Join Course']"));
    var logInPermission=element(by.xpath("//div[contains(@class,'fsmall px-0')]"));
    var loginButtonForLoginPage=element(by.xpath("//a[contains(@class,'sb-btn sb-btn-normal')]"));
    var welComeToDikshaHeader=element(by.xpath("//div[text()='Welcome to DIKSHA']"));
    var report = element(by.xpath("//*[contains(text(),'Reports')]"));
    var dataset = element(by.xpath("//*[contains(text(),'Datasets')]"));
    var serialNo = element(by.xpath("//*[contains(text(),'Serial No.')]"));
    var title = element(by.xpath("//*[contains(text(),'Title')]"));
    var lastUpdatedDate = element(by.xpath("//*[contains(text(),'Last Updated Date')]"));
    var tags = element(by.xpath("//*[contains(text(),'Tags')]"));
    var updatedFrequency = element(by.xpath("//*[contains(text(),'Update Frequency')]"));
    var status = element(by.xpath("//*[contains(text(),'Status')]"));
    var contentName = element(by.xpath("//div[@class='sb-media-body']/h6"));

    return {

        recoveryIdDisplayed,
        errorMsgForEmail,
        btnSubmit,
        fieldMobileNumber,
        checkboxPhone,
        fieldEmail,
        checkBoxEmail,
        labelEmailInPopup,
        labelMobileInPopup,
        popupRecoveryAccount,
        labelContributions,
        iconI,
        labelUserName,
        labelUserID,
        labelRoles,
        labelAddMobileNumber,
        labelEmail,
        labelRecoveryMobileNumber,
        labelBoard,
        labelMedium,
        labelClasses,
        labelSubjects,
        dropdownProfile,
        clkAdminDashBoard,
        assertReportPulse,
        assertreportDigitalNation,
        assertreportDigitalState,
        assertreportdigitalCapita,
        assertreportGPS,
        assertreportDailyUsage,
        assertreportConsumption,
        assertreportLive,
        assertreportETB,
        dropdown,
        signWithStateID,
        stateDropDown,
        selectState,
        clickSubmit,
        stateUsrName,
        usrExternalID,
        schoolExternalID,
        submitState,
        verifyClassSec,
        clkManage,
        ClickSelectFile,
        clkSltFile,
        clkDownloadFile,
        clkFirstContent,
        assertTOC,
        assertTenantLogo,
        clkEnterQRCode,
        enterQrcode,
        submitQrcode,
        clkLinkedContent,
        clkExploreContentAP,
        clkMergeAccount,
        clkMerge,
        mergePageAssert,
        dropdown,
        uploadStatus,
        organizationUpload,
        uploadCSV,
        clkAddRecoveryID,
        emailIdTextBox,
        clkForgot,
        enterEmailInRecoveryAcc,
        enterNameInRecoveryAcc,
        nextButtonInRecoveryAcc,
        sltRecoveryEmailId,
        clkGetOTPButton,
        loginButton,
        clickProfileIcon,
        logout,
        selfDeclaredUserDetails,
        uploadValidationStatus,
        downloadUserDetail,
        selectFile,
        uploadCSVFile,
        closeIcon,
        downloadButton,
        submitDetails,
        selectPersona,
        selectTenant,
        cancel,
        teacherOption,
        otherOption,
        andhraOption,
        assamOption,
        editPersonalDetail,
        userName,
        stateName,
        districtName,
        closeEditDetail,
        CustodianUserpageTnC,
        welcomeIgotText,
        IgotCourse,
        selectRoleFilter,
        selectRole,
        Applybutton,
        FirstContent,
        JoinCourse,
        logInPermission,
        loginButtonForLoginPage,
        welComeToDikshaHeader,
        report,
        dataset,
        serialNo,
        title,
        lastUpdatedDate,
        tags,
        updatedFrequency,
        status,
        contentName,



        
      
    }
};
module.exports = {
    UserOnBoarding
}
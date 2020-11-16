var signUpPage = () => {
    
    var loginButton = element(by.xpath("//a[contains(text(),'Login')]"));
    var username = element(by.id("username"));
    var password=element(by.id("password"));
    var clickLogin1=element(by.xpath("//p/preceding::button[contains(.,'Login')]"));
    var dropdown=element(by.xpath("//div[contains(@class,'dropdown right top pointing')]"));
    var clickProfileIcon=element(by.xpath("//button[contains(text(),'Close')]"));
    var uploadStatus=element(by.xpath("//i[@id='stage']"));
    var organizationUpload=element(by.xpath("//i[@id='image']"));
    var uploadCSV=element(by.xpath("//div[@class='ui image']"));
    var invalidUpload=element(by.xpath("//a[@data-content='Add Hotspot']"));
    var uploadErrorToast=element(by.xpath("//i[@id='scribblepad']"));
    var errorSummary = element(by.id("error-summary"));
    var district=element(by.xpath("//sui-select[@name='district']"));
    var selectDistrict=element(by.xpath("//sui-select[@name='district']//following::sui-select-option[1]"));
    var submit=element(by.xpath("//label[contains(text(),'District:')]//following::button[contains(text(),' Submit ')]"));
    var selectlanguage=element(by.xpath("//*[@class='dropdown icon']"));
    var clickOnLanguageDropdwon=element(by.xpath("( //sui-select[contains(@valuefield,'value')])[1]"));
    var clickagainEnglish=element(by.xpath("(//sui-select[contains(@valuefield,'value')])[1]"));
    var hindiLanguage=element(by.xpath("//span[contains(text(),'हिंदी')]"));
    var urduLanguage=element(by.xpath("(//sui-select-option[contains(.,'اردو')])[1]"));
    var englishLanguage=element(by.xpath("(//sui-select-option[contains(@class,'item')])[1]"));
    var englishContent=element(by.xpath("(//div[contains(@class,'sb--card__meta')])[1]"));
    var selectLanguageInUrdu=element(by.xpath("(//sui-select[contains(@tabindex,'0')])[1]"));
    var searchTextBox=element(by.xpath("//input[contains(@id,'keyword')]"));
    var hindiContent=element(by.xpath("//div[contains(@class,'sb--card__meta')]"));
    var searchForUrdu=element(by.xpath("//input[contains(@title,'اندر تلاش کریں सभी')]"));
    var searchButton=element(by.xpath("//button[contains(.,'Search')]"));
    var urduSearchButton=element(by.xpath("//button[contains(@title,'اندر تلاش کریں सभी')]"));
    var urduContent=element(by.xpath("(//div[contains(@class,'sb-card-body')])[2]"));
    var districtName=element(by.xpath("//*[@name='district']//following::sui-select-option[1]"));
    var sProfileIcon=element(by.xpath("(//div[contains(.,'S')])[9]"));
    var districtDropdown=element(by.xpath("//*[@name='district']"));
    var stateName=element(by.xpath("//*[@name='state']//following::sui-select-option[1]"));
    var district4=element(by.xpath("(//div[contains(.,'District :')])[4]"));
    var state=element(by.xpath("(//div[contains(.,'State :')])[4]"));
    var editButton=element(by.xpath("//button[contains(.,'Edit')]"));
    var searchInUser=element(by.xpath("//input[contains(@id,'keyword')]"));
    var bookCreator=element(by.xpath("//div[contains(@style,'text-align')]"));
    var textBook=element(by.xpath("//h4[contains(@class,'sb-card-title')]"));
    var searchInAll=element(by.xpath("//input[contains(@id,'keyword')]"));
    var creatorContent=element(by.xpath("//div[contains(@class,'sb-card')]"));
    var bookContent=element(by.xpath("//h4[contains(@class,'sb-card-title')]"));
    var courseDropdownFirstContent=element(by.xpath("//div[@class='menu transition visible']/sui-select-option[1]"));
    var dropDown=element(by.xpath("//sui-multi-select[@name='role']/i"));
    var stateDropdown=element(by.xpath("//*[@name='state']"));
    var selectedDistrict=element(by.xpath("//div[contains(@class,'font-w-bold text-ce')]"));
    var selectedState=element(by.xpath("(//div[contains(@class,' font-w-bold text-ce')])[2]"));
    var editMobile=element(by.xpath("//div[contains(@class,'ui semi-circular update basic label ')]"));
    var editEmail=element(by.xpath("//div[contains(@class,'ui semi-circular dodger-blue basic label ')]"));
    var inputMobile=element(by.name("phone"));
    var inputEmail=element(by.name("email"));
    var submitButton=element(by.xpath("//button[contains(text(),' Submit ')]"));
    var addPhone=element(by.xpath("//i[contains(@class,'phone ')]"));
    var enterPhone=element(by.xpath("//input[@formcontrolname='phone']"));
    var addMail=element(by.xpath("//i[contains(@class,'mail')]"));
    var addRecoveryMail=element(by.xpath("//div[contains(@class,'recovery-img ')]"));
    var enterRecoveryMail=element(by.xpath("//input[@formcontrolname='email']"));
    var selectPhone=element(by.xpath("(//input[@type='radio'])[2]"));
    var enterRecoveryPhone=element(by.xpath("//input[@formcontrolname='phone']"));
    var errorMessage=element(by.xpath("//label[contains(@class,'ui basic blue error label')]"));
    var clickSearchInHindi=element(by.buttonText("ख़ोज"));
    var clickSearchInUrdu=element(by.buttonText("تلاش کریں"));
    var qBookCreator = element(by.xpath("(//*[contains(.,'Profile')])[2]"));
    var profile = element(by.xpath("(//*[contains(.,'Profile')])[3]")); 
    var submitButton2 = element(by.xpath("//button[contains(text(),' Submit ')]"));
    var closeIcon = element(by.xpath("//i[contains(@class,'close icon')]"));
    var logoutInHindi = element(by.xpath("//li[contains(text(),' लॉग आउट ')]"));   
    var tenantFramework = element(by.xpath("//sui-select[contains(@class,'selection sbt-dropdown sbt-dropdown-bold')]/div/span[2]"));
    return {
        loginButton,
        username,
        password,
        clickLogin1,
        dropdown,
        clickProfileIcon,
        uploadStatus,
        organizationUpload,
        uploadCSV,
        invalidUpload,
        uploadErrorToast,
        errorSummary,
        district,
        selectDistrict,
        submit,
        selectlanguage,
        clickOnLanguageDropdwon,
        clickagainEnglish,
        hindiLanguage,
        urduLanguage,
        englishLanguage,
        englishContent,
        selectLanguageInUrdu,
        searchTextBox,
        hindiContent,
        searchForUrdu,
        searchButton,
        urduSearchButton,
        urduContent,
        districtName,
        sProfileIcon,
        districtDropdown,
        stateName,
        district4,
        state,
        editButton,
        searchInUser,
        bookCreator,
        textBook,
        searchInAll,
        creatorContent,
        bookContent,
        courseDropdownFirstContent,
        dropDown,
        stateDropdown,
        selectedDistrict,
        selectedState,
        editMobile,
        editEmail,
        inputMobile,
        inputEmail,
        submitButton,
        addPhone,
        enterPhone,
        addMail,
        addRecoveryMail,
        enterRecoveryMail,
        selectPhone,
        enterRecoveryPhone,
        errorMessage,
        clickSearchInHindi,
        clickSearchInUrdu,
        qBookCreator,
        profile,
        submitButton2,
        closeIcon,
        logoutInHindi,
        tenantFramework,
       
        






    };

};
module.exports = {
    signUpPage
}   
const { element } = require("protractor");

var VerifySignInPopupInExploreCourseEnrollButton = () => {
    
    var loginButton = element(by.xpath("//a[contains(text(),'Login')]"));
    var  username= element(by.id("username"));
    var  password= element(by.id("password"));
    var  clickLogin1 = element(by.xpath("//p/preceding::button[contains(.,'Login')]"));
    var  headerCourse = element(by.xpath("//a[contains(.,' Courses ')]"));
    var  clickSecondCourseInOpenForEnrollment= element(by.xpath("//div[contains(@class,'sb--card__meta')]"));
    var  enrollButton = element(by.xpath("//button[contains(text(),'Join ')]"));
    var  assertSignInPopup = element(by.xpath("(//a[contains(text(),'Log')])[2]"));
    var  validateTOCForOpenBatchCourse= element(by.xpath("//*[contains(@class,'sb-collectionTree')]/following::i"));
    var  clickOnFirstTeacherCourses = element(by.xpath("//span[text()='Teacher courses']/following::bdi"));
    var  teacherCourseLabel = element(by.xpath("//span[text()='Teacher courses']"));
    var  teacherCourseCount = element(by.xpath("//span[text()='Teacher courses']/following-sibling::span"));
    var  studentCourse= element(by.xpath("//span[text()='Student courses']"));
    var  StudentCoursesCount = element(by.xpath("//span[text()='Student courses']/following-sibling::span"));
    var  clickOnFirststudentCourses = element(by.xpath("//span[text()='Student courses']/following::bdi"));
    var addUser = element(by.xpath("//div[contains(text(),'Add')]"));
    var enterName = element(by.xpath("//input[@placeholder='Enter your name']"));
    var addUserButton = element(by.xpath("//button[text()=' Add user ']"));
    var profile = element(by.xpath("//li[text()=' Profile ']"));
    var addedUserInProfile = element(by.xpath("//div[@class='ui container']/following-sibling::div"));
    var startConsuming = element(by.xpath("//button[text()='Start']"));
    var availableUser = element(by.xpath("//label[contains(@class,'sb-member')]/span"));
    var switchUser = element(by.xpath("//button[contains(text(), 'Change user')]"));
    var declaration = element(by.xpath("//span[contains(text(),' I agree')]/../input"));
    var continueDeclaration = element(by.xpath("//button[contains(text(),'Continue')]"));
    return{
        loginButton,
        username,
        password,
        clickLogin1,
        headerCourse,
        clickSecondCourseInOpenForEnrollment,
        enrollButton,
        assertSignInPopup,
        validateTOCForOpenBatchCourse,
        clickOnFirstTeacherCourses,
        teacherCourseLabel,
        teacherCourseCount,
        studentCourse,
        StudentCoursesCount,
        clickOnFirststudentCourses,
        addUser,
        enterName,
        addUserButton,
        profile,
        addedUserInProfile,
        startConsuming,
        availableUser,
        switchUser,
        declaration,
        continueDeclaration
        
        
    };

};
module.exports = {
    VerifySignInPopupInExploreCourseEnrollButton
}   
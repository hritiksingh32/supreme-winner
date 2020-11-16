let LoginPage=()=>{
    let emailid=element(by.xpath("//input[@placeholder='Email id']"));
    let password=element(by.xpath("//input[@placeholder='Password']"));
    let btnSignin=element(by.partialButtonText("Sign in"));
    let logo=element(by.xpath("//img[@class='codetrac-logo']"));
    let loginlink=element(by.xpath("//div[text()='Login']"));
    let signuplink=element(by.xpath("//div[text()='Sign up']"));
    let meritTracLink=element(by.xpath("//a[contains(text(),'MeritTrac')]"));
    let PoweredByMeritTrac=element(by.xpath("//p[@class='footer-text powered-by']"));
    let btnSignup=element(by.buttonText(" Sign up "));
    let IncorrectUserOrPassToast=element(by.xpath("//span[@class='ng-tns-c7-2 ng-star-inserted']"));
    let UserDoesNotExistToast=element(by.xpath("//span[@class='ng-tns-c7-3 ng-star-inserted']"));
    let InvalidUserToast=element(by.xpath("//span[text()='User does not exist.']"));
    let invalidUrl=element(by.xpath("//span[text()='This site can’t be reached']"));
    return{
        emailid,
        password,
        btnSignin,
        logo,
        loginlink,
        signuplink,
        meritTracLink,
        PoweredByMeritTrac,
        btnSignup,
        IncorrectUserOrPassToast,
        UserDoesNotExistToast,
        InvalidUserToast,
        invalidUrl
    };
};


module.exports={
    LoginPage
}
let LogOut = () => {
    let logoutImage = element(by.xpath("//img[@class='ng-star-inserted']"));
    let logoutLink = element(by.xpath("//span[contains(text(),'Logout')]"));
    return {
        logoutImage,
        logoutLink
    }
};
module.exports={
    LogOut
}
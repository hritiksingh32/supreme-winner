let log4jsGen = () => {
    var log4js = require('log4js');
    log4js.configure('log4js.json');
    //var logger = log4js.getLogger(); 
    //for both console and file
    let log = log4js.getLogger("default");
    return log;
}
module.exports={
    log4jsGen
}

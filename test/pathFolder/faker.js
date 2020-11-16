const faker = require('faker');

let randomData = () => {

    let findname = faker.name.findName();
    let firstname = faker.name.firstName();
    let words = faker.lorem.words();
    let word = faker.lorem.word();
    let longSentence = faker.lorem.sentences();
    let paragraph = faker.lorem.paragraph();
    let emailData = faker.internet.email();
    let sentence = faker.lorem.sentence();

 
    return {
        findname,
        firstname,
        word,
        words,
        longSentence,
        sentence,
        paragraph,
        emailData,
        sentence

    }
}
module.exports = {

    randomData

}
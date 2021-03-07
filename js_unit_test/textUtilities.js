var expect = require('chai').expect;

function titleCase(title){
    var words = title.split(' ');
    
    //capitalize each word and ensure that the rest of the letters are lowercase
    var titleCaseWords = words.map(function(word){
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    })
    
    return titleCaseWords.join(' ');
};

//write the cases based on the level of difficulty, starting from the easiest
expect(titleCase('the great mouse detector')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertigo')).to.equal('Vertigo');
expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');
expect(titleCase('x-MEn')).to.equal('X-men');

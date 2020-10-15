// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let array = str.split('');
    array.reverse();
    // debugger
    return array.join('')
    // one line solution
    // return str.split('').reverse().join('')
}

function reverse(str){
    // create an array called reversed 
    let reversed = ''

    // use a for loop to remove the first letter from the string
    // store that letter in the beginning of the reversed array
    for ( let character of str ){
       // console.log(character, reversed)
        reversed = character + reversed
    }
    return reversed
    // return the reversed array 
}

function reverse(str){
    return str.split('').reduce((rev, char) => char + rev, '') 
    /* the reduce function will start with the argument of '' and use that has its base
    i.e. rev = '' for the first time around. It will then check each letter of 
    the string and append it to the what value is stored in the rev variable. 
    So for example: test will begin as '', t + '', e + 't', s + 'et' and so on
    */
}

// reverse('test')
module.exports = reverse;

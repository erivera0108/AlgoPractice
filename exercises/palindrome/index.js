// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     let revStr = str.split('').reduce((rev, char) => char + rev, '')
//     // debugger
//     if (revStr === str) {
//         console.log('This is a palindrome')
//         return true
//     } else {
//         console.log('This is not a palindrome')
//         return false
//     }
// }

// Reduced solution 
function palindrome(str) {
    let revStr = str.split('').reduce((rev, char) => char + rev, '')
    console.log(revStr)
    return revStr === str
}

// Using the reverse() function
// function palindrome(str) {
//     let revStr = str.split('').reverse().join('')

//     return revStr === str
// }

// Using the every() function
// function palindrome(str) {
//     return str.split('').every((char, index) => {
//         return char === str[str.length - index - 1]
//     })
// }

// palindrome(' racecar')
module.exports = palindrome;


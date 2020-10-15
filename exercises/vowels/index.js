// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let counter = 0
    let checker = 'aeiou'.split('') // turn string into an array
    for (let char of str.toLowerCase()){
        // Using includes to determine if the current character could be found 
        // inside of the checker array
        if (checker.includes(char)){
            counter++
        }
    }
    return counter
}

function vowels(str){
    let matches = str.match(/[aeiou]/gi)
    matches ? matches.length : 0
}

// vowels('Hi There')
module.exports = vowels;

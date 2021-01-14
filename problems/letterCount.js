/**
 * Return a frequency map of each letter in a string, ignores spaces.
 * @param {string} str - a string
 * @returns {Object} - the characters and their frequency
 *
 * ex: letterCount("hello world") //=> {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
 *
 */

const letterCount = str => {
    let newArr = str.toLowerCase().split(" ");
    let newStr = newArr.join("")
    let obj = {}
    for (let i = 0; i < newStr.length; i++) {
        const element = newStr[i];
        if (obj[element]) {
            obj[element]++
        }  else {
            obj[element] = 1
        }
    }
    return obj
}

module.exports = letterCount;

/**
 * Returns the longest word in the array.
 * Ties should go to the earlier word
 * @param {string[]} words - an array containing words
 * @returns {string} - longest word
 *
 * ex: longestWord(["cat", "bird", "hello", "corey", "do"])
 * returns "hello"
 */

const longestWord = words => {
    let str = ""
    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        if (element.length > str.length) {
            str = element
        } 
    }
    return str
}


module.exports = longestWord;

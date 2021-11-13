// Ex5.7 - shortest words
// Simple, given a string of words, return the ​length​ of the shortest word(s).
// String will never be empty and you do not need to account for different data types.



const arr = ["1234564", "qweaasd", "hjh", "hjkhjk", "asdaa", "qweqwe"];

const minWordLen = (arr) => {

    const minWord = arr.reduce((a, b) => a.length <= b.length ? a : b);

    return minWord.length
}

console.log(minWordLen(arr));



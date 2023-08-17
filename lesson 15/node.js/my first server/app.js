const { log } = require("console");
const fs = require("fs");
const lodash = require("lodash");

// functions
const reverseString = (str) => {
    const arrayStr = lodash.words(str);
    const reversedArr = lodash.reverse(arrayStr);
    const result = reversedArr.join(" ");
    return result;
};
const uniqStr = (str) => {
    const arr = lodash.words(str);
    const uniqArr = lodash.uniq(arr);
    const result = uniqArr.join(" ");
    return result;
};
const countWords = (str) => {
    const wordsArr = lodash.words(str);
    const result = wordsArr.length;
    return result;
};
const getWordsBiggerThen5 = (str) => {
    const arr = lodash.words(str);
    const result = arr.filter((word) => word.length > 5);
    const string = result.join(" ");
    return string;
};
const upperCaseBiggerThen5 = (str) => {
    const strBigger5 = getWordsBiggerThen5(str);
    return lodash.upperCase(strBigger5);
};
const vowelCount = (str) => {
    const result = [];
    arr = lodash.words(str);
    lodash.forEach(arr, (word) => {
        word = lodash.lowerCase(word);
        let count = 0;
        if (
            word.includes("a") ||
            word.includes("o") ||
            word.includes("e") ||
            word.includes("i") ||
            word.includes("u")
        ) {
            lodash.forEach(word, (letter) => {
                if (
                    letter.includes("a") ||
                    letter.includes("o") ||
                    letter.includes("e") ||
                    letter.includes("i") ||
                    letter.includes("u")
                ) {
                    count++;
                }
            });
            console.log({
                word,
                vowels: count,
            });
        }

        // if (word.match(/[aeiuo]/g)) console.log(word);
    });
};

const handler = () => {
    fs.readFile("./data/file.txt", "utf-8", (err, data) => {
        if (err) throw err;
        // console.log(data);
        // console.log(countWords(data));
        // console.log(reverseString(data));
        // console.log(" ");
        const uniq = uniqStr(data);
        // console.log(uniq);
        // console.log(countWords(uniq));
        // console.log(lodash.upperCase(uniq));
        // console.log(upperCaseBiggerThen5(uniq));
        // console.log(vowelCount(uniq));
    });
};

handler();

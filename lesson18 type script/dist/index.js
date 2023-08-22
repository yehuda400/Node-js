"use strict";
const biggerNumber = (num1, num2) => {
    if (num1 > num2)
        return num1;
    return num2;
};
// console.log(biggerNumber(6, 3));
const printBiggerNumber = (func, x, y) => {
    console.log(func(x, y));
};
// printBiggerNumber(biggerNumber, 5, 3);
const isEven = (num) => {
    if (num % 2 === 0)
        return "is even";
    return "is odd";
};
// console.log(isEven(5));
const lenString = (arg) => {
    return arg.length;
};
// console.log(lenString("shula"));
const arrToNum = (n) => {
    const arr = [];
    for (let i = 1; i < n; i++) {
        arr.push(i);
    }
    return arr;
};
// console.log(arrToNum(4));
const biggestInArr = (arr) => {
    let result = arr[0];
    arr.forEach((num) => {
        if (num > result)
            result = num;
    });
    return result;
};
const yehuda = {
    name: "Yehuda",
    age: 22,
    isStudent: true,
};
const printPerson = (person) => console.log(person);
// printPerson(yehuda);
// צרו פונקציה isMinor שמקבלת Person כארגומנט ומחזירה אמת אם גילו קטן מ-18, אחרת, שקר.
const isMinor = (person) => {
    if (person.age < 18)
        return true;
    return false;
};
// צרו פונקציה שמקבלת מערך של Reader ומחזירה את הקורא הכי מבוגר
const oldestReader = (readers) => {
    let oldest = readers[0].person;
    readers.forEach((reader) => {
        if (reader.person.age > oldest.age) {
            oldest = reader.person;
        }
    });
    return oldest;
};
// צרו פונקציה שמקבלת מערך של Reader ומחזירה את הספר הכי ישן
const oldestBook = (readers) => {
    let oldest = readers[0].favoriteBook;
    readers.forEach((reader) => {
        if (reader.favoriteBook.year > oldest.year) {
            oldest = reader.favoriteBook;
        }
    });
    return oldest;
};

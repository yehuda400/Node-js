import { LanguageServiceMode } from "typescript";

// כל אובייקט מחויב בממשק או טיפוס
console.log("In Type Script!");
const randomNumbers: number[] = [7, 2, 9, 4, 0, 6, 3, 8, 1, 5];

//1.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את הסכום של כל המספרים הזוגיים במערך.
const sumAllEven: (arr: number[]) => number = (arr) => {
    let result: number = 0;
    arr.forEach((num) => {
        if (num % 2 === 0) result += num;
    });
    return result;
};
// console.log(sumAllEven(randomNumbers));

// 2.
type Rectangle = {
    width: number;
    height: number;
};

const calculateRectangleArea: (rectangle: Rectangle) => number = (
    rectangle
) => {
    const area = rectangle.width * rectangle.height;
    return area;
};

const rectangleDimensions: Rectangle = {
    width: 5,
    height: 10,
};

const area: number = calculateRectangleArea(rectangleDimensions);
// console.log(area); // Output: 50

// 3.
// כתוב פונקציה שמקבלת מחרוזת ומחזירה אמת אם המחרוזת היא פלינדרום ושקר אם לא.
// פלינדרום היא מחרוזת שאפשר לקרוא אותה אותו הדבר מהסוף להתחלה.
// דוגמאות: אבא, אמא, שמש, ילד כותב בתוך דלי,1235321

const isPalindrome: (arg: string) => boolean = (arg) => {
    for (let i: number = 0; i < arg.length / 2; i++) {
        if (arg[i] !== arg[arg.length - (i + 1)]) return false;
    }
    return true;
};
// console.log(isPalindrome("121"));

//4.
// כתוב פונקציה שמקבלת מערך של מחרוזות
// הפונקציה מחזירה מערך חדש של מחרוזות שבו האות הראשונה של כל מילה 'גדולה' ושאר האותיות 'קטנות' - לדוגמה
// uppEr -> Upper
const capitalizeFirstLetter: (arr: string[]) => string[] = (arr) => {
    const result: string[] = [];

    for (const word of arr) {
        const capitalizedWord =
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        result.push(capitalizedWord);
    }

    return result;
};

const arrString: string[] = ["uppEr", "miXED", "lowEr"];
const capitalizedArray = capitalizeFirstLetter(arrString);
// console.log(capitalizedArray); // Output: [ "Upper", "Mixed", "Lower" ]

// 5.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה מערך חדש עם המספרים הייחודיים בלבד (הסרת כפילויות).
const uniqueNumbers: (arr: number[]) => number[] = (arr) => {
    const uniqueArr: number[] = [];

    for (const num of arr) {
        if (!uniqueArr.includes(num)) {
            uniqueArr.push(num);
        }
    }

    return uniqueArr;
};

const arrNumbers: number[] = [1, 2, 3, 2, 4, 5, 4, 6];
const uniqueArray = uniqueNumbers(arrNumbers);
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]

// 6.
// כתוב פונקציה שמקבלת אובייקט עם שדות עבור שם פרטי ושם משפחה
// הפונקציה מחזירה אובייקט המכיל את שתי שדות המתארות את ראשי התיבות של האובייקט
// דוגמה
// Input: { firstName: "John", lastName: "Doe" }
// Output: { firstInitial: "J", lastInitial: "D" }
// השתמשו בממשקים מתאימים עבור הקלט והםלט של הפונקציה
interface FullName {
    first: string;
    last: string;
}
interface RasheiTeivot {
    firstInitial: string;
    lastInitial: string;
}
const getRasheiTeivot: (arg: FullName) => RasheiTeivot = (fullName) => {
    return { firstInitial: fullName.first[0], lastInitial: fullName.last[0] };
};
const myName: FullName = {
    first: "Yehuda",
    last: "Koth",
};
// console.log(getRasheiTeivot(myName));

// 7.
// כתוב פונקציה שמקבלת מערך של אובייקטים עם שדות שם וגיל, ומחזירה את הגיל הממוצע של כל האובייקטים במערך.
interface Person {
    name: string;
    age: number;
}
const getAvgAge: (persons: Person[]) => number = (persons) => {
    let result: number = 0;
    if (persons.length === 0) return result;
    for (const person of persons) {
        result += person.age;
    }
    return result / persons.length;
};
const people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
];

const avgAge = getAvgAge(people);
// console.log(avgAge); // Output: 25

//  עבור המערך
// [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 },
//     { name: "Bob", age: 40 },
// ]
// Output: 31.666666666666668

// 8.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את ערכי המקסימום והמינימום במערך כאובייקט בעל שדות מתאימים.
const findMinMax: (numbers: number[]) => { min: number; max: number } = (
    numbers
) => {
    if (numbers.length === 0) {
        return { min: NaN, max: NaN };
    }

    let min: number = numbers[0];
    let max: number = numbers[0];

    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }

    return { min, max };
};

const numberArray: number[] = [5, 2, 9, 1, 7];
const result = findMinMax(numberArray);
// console.log(result); // Output: { min: 1, max: 9 }

// 9.
// כתוב פונקציה שמקבלת מערך ומדפיסה אותו בסדר הפוך
const reverseArr: <T>(arr: T[]) => T[] = (arr) => {
    const reversedArr = arr.reverse();
    return reversedArr;
};
// console.log(reverseArr(arrString));

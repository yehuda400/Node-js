const biggerNumber: (num1: number, num2: number) => number = (num1, num2) => {
    if (num1 > num2) return num1;
    return num2;
};
// console.log(biggerNumber(6, 3));
const printBiggerNumber: (
    func: (x: number, y: number) => number,
    x: number,
    y: number
) => void = (func, x, y) => {
    console.log(func(x, y));
};
// printBiggerNumber(biggerNumber, 5, 3);
const isEven: (num: number) => string = (num) => {
    if (num % 2 === 0) return "is even";
    return "is odd";
};
// console.log(isEven(5));
const lenString: (arg: string) => number = (arg) => {
    return arg.length;
};
// console.log(lenString("shula"));
const arrToNum: (n: number) => number[] = (n) => {
    const arr: number[] = [];
    for (let i = 1; i < n; i++) {
        arr.push(i);
    }
    return arr;
};
// console.log(arrToNum(4));
const biggestInArr: (arr: number[]) => number = (arr) => {
    let result: number = arr[0];
    arr.forEach((num) => {
        if (num > result) result = num;
    });
    return result;
};
// console.log(biggestInArr([2, 10, 6, 9]));
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};
const yehuda: Person = {
    name: "Yehuda",
    age: 22,
    isStudent: true,
};
const printPerson: (arg: Person) => void = (person) => console.log(person);
// printPerson(yehuda);
// צרו פונקציה isMinor שמקבלת Person כארגומנט ומחזירה אמת אם גילו קטן מ-18, אחרת, שקר.
const isMinor: (arg: Person) => boolean = (person) => {
    if (person.age < 18) return true;
    return false;
};
// צרו Interface בשם Book עם מאפיינים
// Title - string
// Author - string
// Year - number
interface Book {
    title: string;
    year: number;
    author: string;
}
// צרו type נוסף בשם Reader. טיפוס זה צריך להכיל Person עם שדה נוסף בשם favoriteBook שהוא מתאר את האינטרפייס Book שיצרתם
type Reader = {
    person: Person;
    favoriteBook: Book;
};
// צרו פונקציה שמקבלת מערך של Reader ומחזירה את הקורא הכי מבוגר
const oldestReader: (arg: Reader[]) => Person = (readers) => {
    let oldest: Person = readers[0].person;
    readers.forEach((reader) => {
        if (reader.person.age > oldest.age) {
            oldest = reader.person;
        }
    });
    return oldest;
};
// צרו פונקציה שמקבלת מערך של Reader ומחזירה את הספר הכי ישן
const oldestBook: (arg: Reader[]) => Book = (readers) => {
    let oldest: Book = readers[0].favoriteBook;
    readers.forEach((reader) => {
        if (reader.favoriteBook.year > oldest.year) {
            oldest = reader.favoriteBook;
        }
    });
    return oldest;
};

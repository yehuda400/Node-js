// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
export enum ItemType {
    Book = "book",
    DVD = "dvd",
}

// Step 2:  ספר צריך להכיל שדות
interface Book {
    type: ItemType.Book;
    title: string;
    author: string;
}

interface DVD {
    type: ItemType.DVD;
    title: string;
    duration: number;
}

// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems(
    items: (Book | DVD)[],
    filterFn: (items: (Book | DVD)[]) => (Book | DVD)[]
) {
    return filterFn(items);
}

// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData(items: (Book | DVD)[]) {
    items.forEach((item) => console.log(item));
    // Your code here
}

// Test data
const libraryItems: (Book | DVD)[] = [
    {
        type: ItemType.Book,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
    },
    { type: ItemType.DVD, title: "Inception", duration: 148 },
    {
        type: ItemType.Book,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
    },
    { type: ItemType.DVD, title: "Avatar", duration: 162 },
    { type: ItemType.Book, title: "Go Set a Watchman", author: "Harper Lee" },
];

// Step 5:  הדפיסו את כל המידע הנתון
printItemsData(libraryItems);
// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך
const filterDvdAbove2Hours: (items: (Book | DVD)[]) => (Book | DVD)[] = (
    items
) => {
    const newItems = items.filter(
        (item) => item.type === ItemType.DVD && item.duration > 120
    );
    return newItems;
};

// console.log(filterItems(libraryItems, filterDvdAbove2Hours));
// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של
const filterHarperLee: (items: (Book | DVD)[]) => (Book | DVD)[] = (items) => {
    const newItems = items.filter(
        (item) => item.type === ItemType.Book && item.author === "Harper Lee"
    );
    return newItems;
};
// console.log(filterItems(libraryItems, filterHarperLee));

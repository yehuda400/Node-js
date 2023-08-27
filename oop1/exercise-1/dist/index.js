"use strict";
console.log("In index.ts!");
class Shape {
    constructor() { }
    draw() {
        console.log("drawing a Shape");
    }
    info() {
        return "This is a Shape";
    }
}
class Rectangle extends Shape {
    constructor(width, length) {
        super();
        this.width = width;
        this.length = length;
    }
    area() {
        return this.length * this.width;
    }
    info() {
        return "This is a Rectangle";
    }
    scale(num) {
        this.length *= num;
        this.width *= num;
        return this;
    }
    static addTwoREctanglesArea(rec1, rec2) {
        const area = rec1.area() + rec2.area();
        const side = Math.sqrt(area);
        return new Square(side);
    }
}
class ColoredRectangle extends Rectangle {
    constructor(color, length, width) {
        super(length, width);
        this.color = color;
    }
    info() {
        return "This is a Colored Rectangle";
    }
}
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
        this.side = side;
    }
}
class Circle extends Shape {
    constructor() {
        super();
    }
    draw() {
        console.log("Drawing a Circle!");
    }
}
class Triangle extends Shape {
    constructor() {
        super();
    }
    draw() {
        console.log("Drawing a Triangle!");
    }
}
const sq = new Square(5);
// console.log(sq.area());
// במחלקת Rectangle, ממש שרשור מתודות (Method Chaining) עבור המתודה scale שמשנה את הגודל של המלבן לפי מקדם מסוים. כמו כן, הוסף מתודה סטטית שמקבלת שני אובייקטים מסוג Rectangle ומחזירה Rectangle חדש המשלב את שטחיהם.
let result = sq.scale(2).area(); // 100

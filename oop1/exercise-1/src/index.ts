console.log("In index.ts!");

class Shape {
    constructor() {}
    draw(): void {
        console.log("drawing a Shape");
    }
    info(): string {
        return "This is a Shape";
    }
    static renderShapes(arr: Shape[]): void{
        arr.forEach(shape => {
            shape.draw()
        });
    }
}
class Rectangle extends Shape {
    width: number;
    length: number;

    constructor(width: number, length: number) {
        super();
        this.width = width;
        this.length = length;
    }
    area(): number {
        return this.length * this.width;
    }
    info(): string {
        return "This is a Rectangle";
    }
    scale(num: number): this {
        this.length *= num;
        this.width *= num;
        return this;
    }
    static addTwoREctanglesArea(rec1: Rectangle, rec2: Rectangle): Rectangle {
        const area: number = rec1.area() + rec2.area();
        const side = Math.sqrt(area);
        return new Square(side);
    }
}
class ColoredRectangle extends Rectangle {
    color: string;
    constructor(color: string, length: number, width: number) {
        super(length, width);
        this.color = color;
    }
    info(): string {
        return "This is a Colored Rectangle";
    }
}
class Square extends Rectangle {
    side: number;
    constructor(side: number) {
        super(side, side);
        this.side = side;
    }
}
class Circle extends Shape {
    constructor() {
        super();
    }
    draw(): void {
        console.log("Drawing a Circle!");
    }
}
class Triangle extends Shape {
    constructor() {
        super();
    }
    draw(): void {
        console.log("Drawing a Triangle!");
    }
}

const sq = new Square(5);
// console.log(sq.area());

// במחלקת Rectangle, ממש שרשור מתודות (Method Chaining) עבור המתודה scale שמשנה את הגודל של המלבן לפי מקדם מסוים. כמו כן, הוסף מתודה סטטית שמקבלת שני אובייקטים מסוג Rectangle ומחזירה Rectangle חדש המשלב את שטחיהם.
let result = sq.scale(2).area(); // 100

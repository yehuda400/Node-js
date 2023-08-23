console.log("In distCopyOfRockPaperScisoors.js");

// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן

// דגשים
// שחקן  יכול לבחור בין אבן נייר ומספרים בלבד! אך שחקן יכול שלא תהיה לו בחירה
// התכנית יכולה להחזיר את המחרוזות
// 'tie', 'player1', 'player2'
// התשובה חייבת להכיל
// ENUM
// type/interface
// union
// במידה ולשחקן אין בחירה הצג זרקו שגיאה
// ממשו את הפונקציה הוסיפו טיפוסים לפרמטרים ולערך החזרה של הפונקציה

enum Choices {
    Rock = "rock",
    Paper = "paper",
    Scissors = "scissors",
}

type GameResult = "tie" | "player1" | "player2";

const playGame: (player1: Choices, player2: Choices) => GameResult = (player1, player2) => {
    if (!player1 || !player2) {
        throw new Error("Both players must make a choice");
    }

    if (player1 === player2) {
        return "tie";
    } else if (
        (player1 === Choices.Rock && player2 === Choices.Scissors) ||
        (player1 === Choices.Paper && player2 === Choices.Rock) ||
        (player1 === Choices.Scissors && player2 === Choices.Paper)
    ) {
        return "player1";
    } else {
        return "player2";
    }
};

const player1Choice: Choices = Choices.Rock;
const player2Choice: Choices = Choices.Scissors;

const play: GameResult = playGame(player1Choice, player2Choice);
console.log(play); // Output: player1


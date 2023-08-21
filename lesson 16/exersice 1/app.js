const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "123456";
const someOtherPlaintextPassword = "not_bacon";
let my_salt = 1;

const port = 3000;
app.use(express.json());
app.use((error, req, res, next) => {
    if (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
});
// data
const USERS = [
    {
        name: "Yehuda",
        age: "21",
        id: "322418203",
        email: "ykoth04@gmail.com",
        password: "123456",
    },
    {
        name: "Yitzchak",
        age: "21",
        id: "324689353",
        email: "Yitzchak@gmail.com",
        password: "123456",
    },
    {
        name: "Meir",
        age: "24",
        id: "233589687",
        email: "Meir@gmail.com",
        password: "123456",
    },
];
//  Functions
const isValidUser = (user) => {
    if (!user) {
        return false;
    } else return true;
};
app.get("/USERS", (req, res) => {
    res.send(USERS);
});
app.get("/USERS/:id", (req, res) => {
    const id = req.params.id;
    const user = USERS.find((user) => user.id === id);
    res.send(user);
});
app.post("/USERS", (req, res) => {
    const newUser = req.body;
    USERS.push(newUser);
    res.send(USERS);
});
app.put("/USERS/:id", (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        if (!isValidUser(newData)) throw new Error("Not valid info");
        const userIndex = USERS.findIndex((user) => user.id === id);
        if (userIndex === -1) throw new Error(`There is no ID: ${id}`);
        USERS[userIndex] = newData;
        res.send(USERS);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});
app.delete("/USERS/:id", (req, res) => {
    try {
        const id = req.params.id;
        const userIndex = USERS.findIndex((user) => user.id === id);
        if (userIndex === -1) throw new Error(`There is no ID: ${id}`);
        USERS.splice(userIndex, 1);
        return res.send(USERS);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// שלב 2
app.post("/USERS", (req, res) => {
    try {
        const newUser = req.body;
        console.log(typeof newUser);
        if (!(newUser.name || newUser.age)) {
            throw new Error("not valid info");
        }
        newUser.id = uuidv4();
        USERS.push(newUser);
        res.send(USERS);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// שלב 3

app.post("/USERS/find", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const userIndex = USERS.findIndex(
        (user) => user.email === email && user.password === password
    );
    if (userIndex === -1) res.send("Wrong credentials");
    else res.send("User is connected");
});

// שלב 4

app.post("/USERS4", (req, res) => {
    const newUser = req.body;
    if (
        !newUser.name ||
        !newUser.age ||
        !newUser.id ||
        !newUser.email ||
        !newUser.password
    ) {
        return res.status(500).send("Not Valid Info");
    }
    const { password, id, email } = newUser;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            // returns hash
            console.log(hash);
            password = hash;
        });
    });
    console.log(password);
    USERS.push(newUser);
    res.send(USERS);
});

app.listen(port);

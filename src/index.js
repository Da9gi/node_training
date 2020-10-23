const { request, response } = require("express");
const express = require("express");
const booksController = require("./controller/books");
const userController = require("./controller/users");
//const authController = require("./controller/auth");
const db = require("./db/index");


const PORT = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

booksController.Init(app);
userController.Init(app);

db.init().then(console.log).catch(console.log);


app.listen(PORT, function () {
    console.log(`Server is running on port : ${PORT}`);
});

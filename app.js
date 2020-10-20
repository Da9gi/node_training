const { request, response } = require("express");
const express = require("express");
const app = express();

let books = ["C", "Java", "Js", "Angular"];

app.use(express.json());
app.use(express.urlencoded());

app.get("/sample", function (request, response) {
    response.status(200).send({ key: books });
});

app.post("/sample", function (request, response) {
    const {body} = request;
    books.push(body.name);
    response.status(201).send({ key: body.name });
});

app.put("/sample", (request, response) => {
    const {body} = request;
    books = body;
    response.status(200).send({key : "PUT request Successful!"});
});

app.delete("/sample/:id", (request, response) => {
    const {id} = request.params;
    books = books.filter((element, index) => index != id);
    response.status(200).send({key : "DELETE request Successful!"});
});

app.listen(8000, function () {
    console.log("Server is running on port : 8000");
});

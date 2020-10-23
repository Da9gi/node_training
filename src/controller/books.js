const {db} = require("../db/index");

function Init(app) {
    app.get("/book", async function (request, response) {
        const book = await db.models.books.findAll({});
        response.status(200).send(book);
    });

    app.post("/book", async function (request, response) {
        const { body } = request;
        const {bookName, publication, description} = body;

        const createBook = await db.models.books.create({
            bookName,
            publication,
            description,
        });

        response.status(201).send(createBook);
    });

    // app.put("/sample", (request, response) => {
    //     const { body } = request;
    //     books = body;
    //     response.status(200).send({ key: "PUT request Successful!" });
    // });

    // app.delete("/sample/:id", (request, response) => {
    //     const { id } = request.params;
    //     books = books.filter((element, index) => index != id);
    //     response.status(200).send({ key: books });
    // });
}


module.exports = {
    Init,
};

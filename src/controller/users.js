const {db} = require("../db/index");

function Init(app) {
    app.get("/user", async function (request, response) {
        const user = await db.models.users.findAll({});
        response.status(200).send(user);
    });

    app.post("/user", async function (request, response) {
        const { body } = request;
        const {fName, lName, email, password} = body;

        const createUser = await db.models.users.create({
            fName, 
            lName, 
            email, 
            password,
        });

        response.status(201).send(createUser);
    });

}

module.exports = {
    Init,
};
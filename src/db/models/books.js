const { Sequelize} = require("sequelize");

module.exports = function (db) {
    return db.define(
        "books",
        {
            bookName: {
                defaultValue: "Book",
                allowNull: false,
                type: Sequelize.STRING,
            },
            publication: {
                defaultValue: "publication",
                allowNull: false,
                type: Sequelize.STRING,
            },
            description: {
                defaultValue: "Book Description",
                allowNull: false,
                type: Sequelize.TEXT,
            },
        },
        { createdAt: false, updatedAt: false }
    );
};



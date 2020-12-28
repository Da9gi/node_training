const {request} = require("express");
const express = require("express");
const passport = require("passport");

const booksController = require("./controller/books");
const userController = require("./controller/users");
const authController = require("./controller/auth");
const dataBase = require("./db/index");
const SIGNING_KEY =  require("./utility");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: SIGNING_KEY,
};

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(passport.initialize());

passport.use(
    new JwtStrategy(opts, async function (payload, done) {
        const user = await dataBase.db.models.users.findOne({ id: payload.id });

        if (!user) {
            done(null, false);
        }
        done(null, extractUser(user));
    })
);

booksController.Init(app);
userController.Init(app);
authController.Init(app);

dataBase.init().then(console.log).catch(console.log);

app.listen(PORT, function () {
    console.log(`Server is running on port : ${PORT}`);
});

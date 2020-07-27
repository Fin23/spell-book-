//web frame work that allows route creation
const express = require("express");
//works with data base to help create models
const mongoose = require("mongoose");
const path = require("path");
//for our config to store environment variables
const dotenv = require("dotenv");
//logging
const morgan = require("morgan");
//template
const exphbs = require("express-handlebars");
//make put and delete request from our template
const methodOverride = require("method-override");
const connectDB = require("./config/db");
//authentication passport-google-oauth20 for google auth
const passport = require("passport");
//sessions and cookies
const session = require("express-session");
//allows use to store sessions in our data base so when server is reset we don't get logged out
const MongoStore = require("connect-mongo")(session);
//load config
dotenv.config({ path: "./config/config.env" });

//passport config
require("./config/passport")(passport);

connectDB();
// const mongoose = require("mongoose");
// const fetch = require("node-fetch");

// create new express app and save it as "app"
const app = express();

//body parse
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//method override looks for underscore method and replace with what ever we add
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      //look in urlencoded POST bodies and delete it
      let method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

//logging morgan when there is a rquest made to a page it shows in console
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//handlebars helpers
const {
  formatDate,
  stripTags,
  truncate,
  editIcon,
  
  select,
} = require("./helpers/hbs");

//handlebars
app.engine(
  ".hbs",
  exphbs({
    helpers: {
      formatDate,
      stripTags,
      truncate,
      editIcon,
    
      select,
    },
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//sessions

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//set global variable
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

//static folder allows us to use our front end styles and js logic  __dirname absolut path to directory 
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/", require("./routes/route"));
app.use("/auth", require("./routes/auth"));
app.use("/stories", require("./routes/stories"));
app.use("/purse", require("./routes/purse"));
// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use("/", express.static("views"));

// app.use("/conditions", require("./routes/conditions"));

// server configuration
// const PORT = 3000;

// make the server listen to requests
// app.listen(PORT, () => {
//   console.log(`Being Servered on PORT : http://localhost:${PORT}/`);
// });

// .process.env allows us to use variables in the config env file
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    // show environment and port running in development or production mode
    `Our Server is running in  ${process.env.NODE_ENV} mode on ${PORT}`
  )
);

module.exports = app;

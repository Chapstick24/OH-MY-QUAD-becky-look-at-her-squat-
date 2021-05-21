const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000
const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// this syntex will run the index.html by defualt 
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useFindAndModify: false

});


require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);



app.listen(PORT, function () {
    console.log(`Now listening on port: ${PORT}`);
  });
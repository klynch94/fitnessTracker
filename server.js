// install packages
const express = require("express");
const mongoose = require("mongoose");
// set port
const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
    { 
        useNewUrlParser: true,
    }
);

app.listen(PORT, () => console.log(`Connected on PORT ${PORT}`));
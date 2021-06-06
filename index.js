var api = require("./routes/api");
var express = require("express");
var app = express();
app.use("/api", api); //path localhost:3000/api/someapi
// app.use(api); //path localhost:3000/someapi
var cors = require('cors')
app.use(cors());
app.listen(3000, () => {
    console.log("Server listening at port 3000");
})

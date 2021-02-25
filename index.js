var api = require("./routes/api");
var express = require("express");
var app = express();
app.use("/api", api);
app.listen(3000, () => {
    console.log("Server listening at port 3000");
})
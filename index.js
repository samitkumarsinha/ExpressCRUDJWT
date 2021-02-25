var api = require("./routes/api");
var express = require("express");
var app = express();
app.use("/api", api);
var cors = require('cors')
app.use(cors());
app.listen(3000, () => {
    console.log("Server listening at port 3000");
})
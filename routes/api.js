var usercontroller = require("../controllers/usercontroller");
var express = require("express");
var router = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var authenticateJWT = require("../middleware/authenticate");
var cors = require('cors')
router.use(cors());

router.get("/list", authenticateJWT, usercontroller.userlist);
router.post("/create",jsonParser, usercontroller.createuser);
router.delete("/delete/:id",jsonParser,authenticateJWT, usercontroller.deleteuser);
router.put("/update/:id",jsonParser, usercontroller.updateuser);
module.exports = router;

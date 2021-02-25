const express = require("express")
var app = express();
var cors = require('cors')
app.use(cors());
var usermodel = require("../models/usermodel");
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';

module.exports = {
  userlist(req, res) {
    usermodel.find({}, function (err, result) {
      if (!err) {
        res.json(result);
      }
    });
  },
  createuser(req,res){
    var user = new usermodel(req.body);
    user.save(function(err, result) {
      const accessToken = jwt.sign(req.body, accessTokenSecret);
      res.json({accessToken});
      //res.send(result);
    });
  },
  deleteuser(req,res){
    // console.log(req.body);
    console.log(req.params.id,"Deleted");
    // usermodel.findByIdAndRemove(req.params.id, (err, result) => { //another way
    usermodel.findByIdAndDelete(req.params.id, (err, result) => {
        res.send(result);
    })
  },
  updateuser(req, res) {
    usermodel.findOneAndUpdate({_id:req.params.id}, req.body, function (err, result) {
      res.send(result);
    });
  }
};

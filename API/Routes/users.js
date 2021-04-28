const usersRoute = require('express').Router();
const usersdb = require("../DatabaseSchemas/User");

usersRoute.get('/', function(req, res){
    usersdb.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });
  
usersRoute.post('/insertUsers',(req,res)=>{
    usersdb.insertMany(data, function(err, result) {
        if (err) {
        res.send(err);
        } else {
        res.send(result);
        }
    });
})

module.exports = usersRoute;
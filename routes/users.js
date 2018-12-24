var express = require('express');
var router = express.Router();
var debug = require('debug')('devops-exercise:server');
const MongoClient = require('mongodb').MongoClient;

const url = process.env["MONGO_URI"];

// Database Name
const dbName = 'devops-exercise';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  if (err) throw err;

  debug("Connected successfully to server");
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  const db = client.db(dbName);
  const usersCollection = db.collection("users");
  usersCollection.find({}).toArray(function (err, result) {
    if (err) throw err;
    res.status(200)
      .send(result)
      .end();
  });
});

router.post('/', function(req, res, next) {
  if (!req.body.username) {
    res.status(400)
      .send({error: "Bad Request Parameters"})
  }
  var username = req.body.username;
  const db = client.db(dbName);
  const usersCollection = db.collection("users");
  usersCollection.insertOne({name:username, date:Date.now()}, function (err, result) {
    if (err) throw err;
    res.status(200)
      .send(result.ops[0])
      .end();
  });
});


module.exports = router;

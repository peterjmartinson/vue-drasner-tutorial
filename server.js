(function() {
  "use strict";

  const express    = require("express");
  const app        = express();
  const port       = process.env.PORT || 3000;
  const assert = require("assert");
  const bodyParser = require("body-parser");

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(logError);

  function logError(err, req, res, next) {
    console.log("Error: ", err.stack);
    res.status(500).send("Something broke...");
  }

  app.use(express.static(__dirname + "/"));


  // ROUTES

  // Default compose view
  app.get("/", function(req, res) {
    res.sendFile(__dirname + "/");
  });

  app.get("/1", function(req, res) {
    res.sendFile(__dirname + "/01");
  });

  app.get("/2", function(req, res) {
    res.sendFile(__dirname + "/02");
  });

  app.get("/test", function(req, res) {
    res.send("/test/index");
  });

  // START SERVER
  app.listen(port, function (){
    console.log("Server is listening to %d port in %s mode",port,app.settings.env);
  });

}())



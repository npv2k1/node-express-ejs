const express = require("express");
const router = express.Router();

const helloService = require("./hello.service");

router.get("/", (req, res) => {
  let mes = helloService.sayHello();
  res.send("Hello World");
});

module.exports = router;

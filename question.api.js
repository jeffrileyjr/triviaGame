"use strict";
const express = require("express");
const trivia = express.Router();
const pool = require('./connection');

function getQuestions(res) {
  pool.query("select * from questions ORDER BY RANDOM() LIMIT 10").then(result => res.json(result.rows));
}


trivia.get("/questions", (req, res) => {
  getQuestions(res);
});



module.exports = trivia;
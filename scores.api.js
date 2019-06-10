"use strict";
const express = require("express");
const scores = express.Router();
const pool = require('./connection');

function topTen(res) {
  pool.query("select * from scores order by score desc limit 10").then(result => res.json(result.rows));
}


scores.get("/scores", (req, res) => {
  topTen(res);
});

scores.post("/scores", (req, res) => {
  pool.query("INSERT INTO scores (username, score) VALUES ($1::text, $2::smallint)", [req.body.username, req.body.score]).then(() => {
   });
 });


module.exports = scores;
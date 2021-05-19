const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const express = require("express");
const path = require("path");

const Path = (publicPath) => express.static(path.join(__dirname, publicPath));

module.exports = { Path };

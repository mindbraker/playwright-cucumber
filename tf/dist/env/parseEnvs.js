"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJsonFromFile = exports.env = void 0;

var env = function env(key) {
  var value = process.env[key];

  if (!value) {
    throw Error("No environment variable found for ".concat(key));
  }

  return value;
};

exports.env = env;

var getJsonFromFile = function getJsonFromFile(path) {
  return require("".concat(process.cwd()).concat(path));
};

exports.getJsonFromFile = getJsonFromFile;
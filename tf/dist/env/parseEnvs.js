"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJsonFromFile = exports.envNumber = exports.env = void 0;

const env = key => {
  const value = process.env[key];

  if (!value) {
    throw Error(`No environment variable found for ${key}`);
  }

  return value;
};

exports.env = env;

const getJsonFromFile = path => {
  return require(`${process.cwd()}${path}`);
};

exports.getJsonFromFile = getJsonFromFile;

const envNumber = key => {
  return Number(env[key]);
};

exports.envNumber = envNumber;
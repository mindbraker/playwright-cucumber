"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateCucumberRuntimeTag = void 0;

const generateCucumberRuntimeTag = (commonConfig, runtimeEnv, availableEnvList, runtimeTag) => {
  const tagExpression = availableEnvList.filter(e => e !== runtimeEnv).map(e => `(@${runtimeTag} and not @${e})`).join(' and ');
  return `${commonConfig} --tags '${tagExpression}'`;
};

exports.generateCucumberRuntimeTag = generateCucumberRuntimeTag;
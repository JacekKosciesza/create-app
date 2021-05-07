#! /usr/bin/env node

const nodePlop = require('node-plop');
const path = require('path');

const plopfileJsPath = path.join(__dirname, "/plopfile.js");
console.log(plopfileJsPath);
const plop = nodePlop(plopfileJsPath);
const generator = plop.getGenerator('controller');
generator.runActions();

#! /usr/bin/env node

import * as path from "path";

const nodePlop = require('node-plop');

const plopfileJsPath = path.join(__dirname, "plopfile.js");
console.log(plopfileJsPath);
const plop = nodePlop(plopfileJsPath);
const generator = plop.getGenerator('controller');
generator.runActions();

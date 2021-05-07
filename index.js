const nodePlop = require('node-plop');

const plop = nodePlop('plopfile.js');
const generator = plop.getGenerator('controller');
generator.runActions();

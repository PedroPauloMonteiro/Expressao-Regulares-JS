const { texto } = require('./base');

const regExp1 = /(maria|Joao|Pedro)(, hoje sua esposa)/i;
const found = regExp1.exec(texto)

console.log(found)
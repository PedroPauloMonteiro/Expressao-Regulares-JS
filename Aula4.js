const { texto, arquivos, html } = require('./base');
const regExp1 = /<.+?>.+?<.+?>/gi;

console.log(html.match(regExp1));
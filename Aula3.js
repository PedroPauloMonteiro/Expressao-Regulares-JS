const { texto, arquivos } = require('./base');

//const regExp1 = /Jo+ão+/gi;

//console.log(texto.match(regExp1));

const regExp2 = /\.jpe?g/gi

for (const arquivo of arquivos) {
    const valido = arquivo.match(regExp2)

    if(!valido) continue;
    
    console.log(arquivo, );
}
// Exercici 4
// Donat el següent array de strings, mostrar per consola la frase completa usant .reduce()

// var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// Resultat per consola: 'a long time ago in a galaxy far far away'

var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const epicReduce = epic.reduce((total, currentValue) => `${total} ${currentValue}`);

console.log(epicReduce);

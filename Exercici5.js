// Exercici 5
// Crear una funció que accepti un string i retornada aquest string revertit. 
// Nota: Usar funció fletxa (arrow functions), l'operador de prograpación (spread operator) y el mètode .reverse()

var string = "Aixo és una cadena de text";

const arrowFunction = (str) => (([...str]).reverse()).join("");

console.log(arrowFunction(string));
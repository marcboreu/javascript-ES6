// Exercici 7
// Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques. 


// - Usar .forEach() per obtenir aquest array.

// - Usar .map() per obtenir aquest array.

// var tasks = [
// {
//    'name' : 'Start React web',
//    'duration' : 120
// },
// {
//    'name' : 'Work out',
//    'duration' : 60
// },
// {
//    'name' : 'Procrastinate on facebook',
//    'duration' : 240
// }
// ];



var tasks = [
{
    'name' : 'Start React web',
    'duration' : 120
},
{
    'name' : 'Work out',
    'duration' : 60
},
{
    'name' : 'Procrastinate on facebook',
    'duration' : 240
}
];

var temporalTasks = [];

const nameForEach = tasks.forEach(task => {temporalTasks.push(task.name);});

console.log(temporalTasks);



const nameTasksMap = tasks.map(task => {
    return {name: task.name} // Return array with property name or without name, only string  --> return (task.name)
    }
);
console.log(nameTasksMap);


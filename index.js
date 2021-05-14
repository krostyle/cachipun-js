//Se definen arrays con los posibles resultados
const results1 = ['Empate', 'Pierdes', 'Ganas'];
const results2 = ['Ganas', 'Empate', 'Pierdes'];
const results3 = ['Pierdes', 'Ganas', 'Empate'];

//Se define la matriz con los posibles resultados
const matrix = [
    results1,
    results2,
    results3
]

//Función para obtener al ganador por cada jugada
const cachipun = (userOp) => {
    const machineOp = Math.floor(Math.random() * 3)
    return matrix[userOp][machineOp];
}

//Función para obtener al ganador de la partida
const winner = (numPlays) => {
    let cont = 0;
    for (let i = 0; i <= numPlays; i++) {
        const element = array[i];

    }

}

//Función para validar la entrada de datos
const validate = (exp, regex) => {
    const re = new RegExp(`${regex}`, 'g')
    let flag = false;
    let num = 0;
    do {
        num = prompt(exp);
        flag = re.test(num);
    } while (!flag)
    return parseInt(num);
}

//Se definen Regex para validar las opciones posibles
const reOP = '^[0-2]$';
const reCant = '^[1-9]$';

const cant = validate('Ingrese la cantidad de veces que desea jugar', reCant);
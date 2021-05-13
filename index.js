//Se definen arrays con los posibles resultados
const results1 = ['Empate', 'Pierdes', 'Ganas']
const results2 = ['Ganas', 'Empate', 'Pierdes']
const results3 = ['Pierdes', 'Ganas', 'Empate']

//Se define la matriz con los posibles resultados
const matrix = [
    results1,
    results2,
    results3
]

//Función para obtener al ganador
const cachipun = (userOp) => {
    const machineOp = Math.floor(Math.random() * 3)
    return matrix[userOp][machineOp];
}

//Se define Regex para validar entrada
const regex = new RegExp('^[0-2]$', 'g')
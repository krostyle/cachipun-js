//Se definen arrays con los posibles resultados
const results1 = ['Empate', 'Pierdes', 'Ganas'];
const results2 = ['Ganas', 'Empate', 'Pierdes'];
const results3 = ['Pierdes', 'Ganas', 'Empate'];

const options = []

//Se define la matriz con los posibles resultados
const matrix = [
    results1,
    results2,
    results3
]

//Se definen Regex para validar las opciones posibles
const reOP = '^[0-2]$';
const reCant = '^[1-9][0-9]*$';


//Función para obtener al ganador por cada jugada
const cachipun = (userOp) => {
    const machineOp = Math.floor(Math.random() * 3)
    return matrix[userOp][machineOp];
}

//Función para obtener al ganador de la partida
const winner = (numPlays) => {
    let contWin = 0;
    let contLose = 0;
    for (let i = 1; i <= numPlays; i++) {
        let gameOp = validate(`Juego N° ${i} de un total de ${numPlays}.\nPor favor elija una de las siguientes opciones :\n0 - Piedra\n1 - Papel\n2 - Tijeras`, reOP);
        const result = cachipun(gameOp);
        console.log(`Resultado del Juego N° ${i} : ${result}`);
        switch (result) {
            case 'Ganas':
                contWin++;
                break;
            case 'Pierdes':
                contLose++;
                break
            default:
                break;
        }
    }

    if (contWin === contLose) {
        console.log('Que juegazo viejo , han empatado , vuelve a intentarlo recargando la pagina');
        return;
    } else {
        const finalResult = contWin > contLose
        switch (finalResult) {
            case true:
                console.log('Felicidades has ganado la Partida');
                break;

            case false:
                console.log('Lo lamento has perdido, puedes volver a intentarlo recargando la pagina');
                break;

            default:
                console.log('!Ah caray! Creo que ha ocurrido un problema');
                break;
        }
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

//Ejecución
const cantGames = validate('Ingrese la cantidad de veces que desea jugar, se debe ingresar un numero mayor 0', reCant);
winner(cantGames);
alert('Todos los resultados se mostrarán por consola')
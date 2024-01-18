let numeroSecreto =   Math.floor(Math.random() * 10) + 1
let numeroUsuario = 0;
let intentos = 1
//let palabraVeces= 'vez'
let maximoIntentos= 5
while (numeroUsuario != numeroSecreto) {
    
    numeroUsuario = parseInt(prompt('Ingrese un número entre 1 y 10'));

    (numeroUsuario == numeroSecreto)
        ? alert(`¡Correcto! El número secreto es ${numeroUsuario} lo hiciste en ${intentos} ${intentos == 1 ? 'Vez': 'Veces'}`)
        : (numeroUsuario > numeroSecreto)
            ? alert('El número secreto es menor')
            : alert('El número secreto es mayor');
                intentos ++;
                //palabraVeces = 'veces'
                if (intentos > maximoIntentos){
                    alert(`leagaste al numero de intentos que son ${maximoIntentos}`)
                    break;
                }
}

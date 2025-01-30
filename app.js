//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
var contadorTentativas = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

//console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {

    let numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));

    console.log(numeroUsuario);
    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición e usamos operador ternario
        alert(`Acertaste, el número es: ${numeroUsuario}. lo hiciste en ${intentos} ${intentos == 1 ? 'vez' :  'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert(`El número secreto es menor`);
        } else {
            alert(`El número secreto es mayor`);
        }
        //Incrementamos el contador cunado no acierta
        intentos ++;
        //palabraVeces = 'veces';

        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
//Variables
let numeroSecreto = 5;
var contadorTentativas = 0;
while (numeroUsuario != numeroSecreto) {

    let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert(`El número secreto es menor`);
        } else {
            alert(`El número secreto es mayor`);
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
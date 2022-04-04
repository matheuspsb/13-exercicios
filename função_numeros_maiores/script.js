/* FORMA 1
let numero1 = 70;
let numero2 = 40;

function retornarNumero(n){
    if(numero1 > numero2){
        return n = numero1;
    } else{
        return n = numero2;
    }
}

retornarNumero();

console.log(retornarNumero()); */

let maiorValor = max(5,9);
console.log(maiorValor);

function max(numero1, numero2){
    if(numero1 > numero2)
        return numero1;
    else return numero2;
}

/* OUTRA FORMA SEM IF E ELSE
function max(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2;
}
*/

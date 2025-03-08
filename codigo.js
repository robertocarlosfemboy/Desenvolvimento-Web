/* EXERCÍCIO 1
console.log("oi");
var num = 10;
if (num %2 == 0 ){
    console.log("O numero é par");
}
else{
    console.log("seu numero é impar");
}
var y;
contador = 0;
for(y=1;y <= num; y++ ){
    if(num %y == 0){
        contador ++;
    }
}
if (contador ==2){
    console.log("é primo")
}
else{
    console.log("não é primo")
}      */             


/* EXERCÍCIO 2
var x = 0;
var y = 1;
var resultado;
var quantidade = 8;
resultado = x + y;
var i = 3;
while (i < quantidade ){
    x = y;
    y = resultado;
    resultado = x+y;
    i ++;
}
alert(resultado);
*/

/* EXERCÍCIO 3 
var x = prompt("Digite os números: ");  
alert();
*/

/* EXERCÍCIO 4
var opcao = 0;
var num1 = 0;
var num2 = 0;
var resultado =0
if (opcao == 0){
    console.log("")
    (resultado + opcao )
}

if (opcao == 1){

}
if (opcao == 2){

}
if (opcao == 3){

}
if (opcao == 4){

}
else{
    /*console.log("opção é invalida") 
} */

/* EXERCÍCIO 5 */
var nome = prompt.str("Insira o nome: ");
var idade = prompt.int("Insira a idade: ");
var salario = prompt.int("Insira o valor do salário: ");
var sexo = prompt.str("Escolha um entre f e m: ");
var estadocivil = prompt.str("Insira o sexo: ")

if (nome.len < 3){
    
};

let conta = {
    nome: "Hubiscleidown",
    numero: "12345-6",
    saldo: 0
};

//função para depositar
function depositar(valor) {
    if (valor > 1000) { 
        console.log("Depósito máximo permitido é R$ 1000,00.")
    } else {
        console.log("Depósito de R$" + valor + "efetuado. Saldo atual: R$" + saldo);
    }
}
//função para sacar
function sacar(valor){
    if (valor > saldo) {
        console.log("Saldo insuficiente.");
    } else {
        console.log -= valor;("Saque de R$" + valor + "realizado. Saldo atual: R$"  + saldo);
    }
}

//função para verificar saldo
function verificarSaldo() {
    console.log("Saldo atual: R$" + saldo);
}

sacar()
function operacao() {
    if () {
        
    }
}


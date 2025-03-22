/*PROGRAMAÇÃO ORIENTADA A OBJETOS*/
/* FEITO PELO PROFESSOR (EXEMPLO)
class Produto {
    constructor(codigo, nome, preco, quantidade) {
        this.cod = codigo;
        this.nome = nome;
        this.preco = preco;
        this.quant = quantidade;
    }
vender(preco){
    this.preco = preco
    console.log("Preço atual do produto: " + this.preco);
    } 
}*/

/* FEITO PELAS CABEÇA DE OVO
class Guerreiro {
    acoes (nome, hp, ataque, defesa, escudo){
        this.nome = nome;
        this.hp = hp;
        this.atk = ataque;
        this.dfs = defesa;
        this.escudo = escudo;
    }
    acao(jogador){
    jogador.hp = jogador.hp - (this.atk - jogador.dfs);
    } 
}

var nome = prompt("Insira o nome do jogador: ")

const janice = new Guerreiro(100,50,30);
const maria = new Guerreiro(100,45,40);

janice.acao(maria);
maria.acao(janice);

var vez = 0
while(janice.hp > 0 && maria.hp > 0) {
    if(vez == 0){
        janice.acao(maria);
        console.log("Maria: 50");
        vez = 1;
    }
    else{
        maria.acao(janice);
        console.log("Janice: 50");
        vez = 0;
    }    
}

if(janice.hp > 0){
    console.log("Janice ganhou.");
}
else(maria.hp > 0){
    console.log("Maria ganhou.");
}


/*EXERCÍCIOS (21/03/2025):*/
/*1. Crie uma classe chamada "Círculo" que possua artributos para armazenar o raio e métodos para calcular a área e o perímetro do círculo.*/
/*var raio = parseFloat(prompt("Insira o valor do raio: "));
class Circulo{
    constructor(raio){
        this.raio = raio;
    }
    calcularPerimetro(){
        console.log(2 * 3.1415 * this.raio);
    }
    calcularArea(){
        console.log(3.1415 * (this.raio * this.raio));
    }
}

const circulo1 = new Circulo(3.67);
const circulo2 = new Circulo(5.69);

circulo1.calcularPerimetro();
circulo1.calcularArea();

circulo2.calcularPerimetro();
circulo2.calcularArea();
*/

/*2. Crie uma classe chamada "ContaBancaria" que possua atributos para armazenar o número da conta, nome do titular e saldo.
Adicione métodos para realizar depósitos e saques.*/
class ContaBancaria{
    var numeroConta = parseInt(prompt)
}





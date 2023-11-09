// Operação de adição
const resultado1 = 10 + 15;
console.log("10 + 15 =", resultado1);

// Concatenação de string
const resultado2 = "10" + 2;
console.log("\"10\" + 2 =", resultado2);

// Multiplicação numérica
const resultado3 = "10" * 2;
console.log("\"10\" * 2 =", resultado3);

// Divisão numérica
const resultado4 = "10" / 3;
console.log("\"10\" / 3 =", resultado4);

// Operação de módulo
const resultado5 = "10" % 3;
console.log("\"10\" % 3 =", resultado5);

// Conversão de tipo e adição
const resultado6 = 10 + true;
console.log("10 + true =", resultado6);

// Igualdade (com conversão de tipo)
const resultado7 = 10 == "10";
console.log("10 == \"10\" =", resultado7);

// Estrita igualdade (sem conversão de tipo)
const resultado8 = 10 === "10";
console.log("10 === \"10\" =", resultado8);

// Operador de comparação menor que
const resultado9 = 10 < 11;
console.log("10 < 11 =", resultado9);

// Operador de comparação maior que
const resultado10 = 10 > 12;
console.log("10 > 12 =", resultado10);

// Operador de comparação menor ou igual a
const resultado11 = 10 <= 10.1;
console.log("10 <= 10.1 =", resultado11);

// Operador de comparação maior ou igual a
const resultado12 = 10 > 9.99;
console.log("10 > 9.99 =", resultado12);

// Operador de desigualdade
const resultado13 = 10 != "dez";
console.log("10 != \"dez\" =", resultado13);

// Conversão de tipo e adição
const resultado14 = 10 + true;
console.log("10 + true =", resultado14);

// Concatenação de string
const resultado15 = "dez" + true;
console.log("\"dez\" + true =", resultado15);

// Conversão de tipo e adição
const resultado16 = 10 + false;
console.log("10 + false =", resultado16);

// Multiplicação por false
const resultado17 = 10 * false;
console.log("10 * false =", resultado17);

// Conversão de tipo e adição
const resultado18 = true + true;
console.log("true + true =", resultado18);

// Pós-incremento
let resultado19 = 10;
resultado19++;
console.log("10++ =", resultado19);

// Pós-decremento
let resultado20 = 10;
resultado20--;
console.log("10-- =", resultado20);

// Operações bit a bit 'E' (&)
const resultado21 = 1 & 1;
console.log("1 & 1 =", resultado21);

const resultado22 = 1 & 0;
console.log("1 & 0 =", resultado22);

const resultado23 = 0 & 0;
console.log("0 & 0 =", resultado23);

const resultado24 = 1 & 0;
console.log("1 & 0 =", resultado24);

// Divisão por zero
const resultado25 = 0 / 1;
console.log("0 / 1 =", resultado25);

// Comparação numérica
const resultado26 = 5 + 5 == 10;
console.log("5 + 5 == 10 =", resultado26);

// Comparação de strings
const resultado27 = "5" + "5" == 10;
console.log("\"5\" + \"5\" == 10 =", resultado27);

// Expressão numérica e comparação
const resultado28 = "5" * 2 > 9;
console.log("\"5\" * 2 > 9 =", resultado28);

// Expressões com parênteses
const resultado29 = (10 + 10) * 2;
console.log("(10 + 10) * 2 =", resultado29);

const resultado30 = 10 + 10 * 2;
console.log("10 + 10 * 2 =", resultado30);

var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;

// a) branco == "branco"
var respostaA = branco == "branco"; // Falso
console.log("a) branco == \"branco\":", respostaA);

// b) branco == cinza
var respostaB = branco == cinza; // Falso
console.log("b) branco == cinza:", respostaB);

// c) carro === branco
var respostaC = carro === branco; // Falso
console.log("c) carro === branco:", respostaC);

// d) var cavalo = carro == "preto" ? "cinza" : "marron";
var cavalo = carro == "preto" ? "cinza" : "marron";
console.log("d) var cavalo =", cavalo);

// e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000?
var entrada = 3000;
var valorRestante = valor - entrada;
var numeroPrestacoes = valorRestante / prestacao;
console.log("e) Número de prestações necessárias:", numeroPrestacoes);

// f) Somando as variáveis de cores é formada uma string de quantos caracteres?
var somaCores = branco + preto + cinza + carro;
var numeroCaracteres = somaCores.length;
console.log("f) Número de caracteres na string somaCores:", numeroCaracteres);

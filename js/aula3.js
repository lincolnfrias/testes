// inserindo texto com javascript
$('#p1').html('Esta frase é diferente, pois foi escrita com javascript.');

// usando variáveis
let palavras = 'Esta frase foi criada ';
let maispalavras = 'a partir de variáveis';
frase = palavras + maispalavras;
$('#p2').html(frase + '.');

// objetos possuem propriedades e métodos
comprimento = frase.length;
pedaco = frase.substring(0, 8);
$('#p3').html(`A frase anterior possui ${comprimento} caracteres. Começando com "${pedaco}".`);

// array em js: lista do python, vetor do R
let lista = ['joão', 'maria', 23];
$('#p4').html(`O segundo elemento da lista é ${lista[1]}.`);

// calculando e usando span
let receitas = 150;
let despesas = 100;
resultado = receitas - despesas;
$('#span1').html(resultado);

// funções
function oi(id, amigo) {
    $(id).html(`<br>Oi, ${amigo}!<br><br>`)
};

oi('#p6', 'pessoal');

// for loop, div e append
for (i = 0; i < 4; i++) {
    $('#div1').append(`<p> coisa ${i} </p>`)
};

// if else
let a = 10;
let b = 20;
if (a < b) {
    $('#p7').html(`${a} é <b>menor</b> do que ${b}.`);
} else {
    $('#p7').html(`${a} é <b>maior</b> do que ${b}.`);
};

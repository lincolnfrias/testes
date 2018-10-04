// máximo
let lista1 = [341.1, 5.2, 67.0];
let maximo = math.max(lista1);
console.log(`o valor máximo é ${maximo}.`);

// média e mediana
let media = math.mean(lista1);
console.log(`o valor médio é ${math.round(media, 2)}.`);

// desvio padrão e variância (var)
let dp = math.std(lista1);
console.log(`o desvio padrão é ${math.round(dp, 2)}.`);

function soma(a, b) {
    return a + b
};



let a = ss.linearRegression([[0, 0], [1, 1]]);
$('#sp1').text(a['m']);

let b = math.chain(3.66789).round(2).add(5).multiply(20);
$("#sp4").text(b);


let dados = [3, 4, 5];


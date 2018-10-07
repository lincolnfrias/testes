$('#sel1', '#sel2').selectmenu();



let vlSpec = {
    '$schema': 'https://vega.github.io/schema/vega-lite/v3.0.0-rc5.json',
    'width': 400,
    'data': { 'url': 'dados/juros.csv' },
    'mark': 'line',
    'encoding': {
        'x': { 'field': 'x', 'type': 'quantitative' },
        'y': { 'field': 'y2', 'type': 'quantitative' },
    },
    'selection': {
        'selector001': {
            'bind': 'scales',
            'encodings': [
                'x',
                'y'
            ],
            'type': 'interval'
        }
    }
};


vegaEmbed('#chart', vlSpec, {actions: false});

$('#sel1').selectmenu({
    change: function () {
                let escolha = $('#sel1').val()
                $('#sp1').html(escolha);
                vlSpec.encoding.y.field = escolha.toString()
                vegaEmbed('#chart', vlSpec, {actions: false});
            }
});





let dados = [
    { 'a': 'C', 'b': 2, 'c': 22 }, { 'a': 'C', 'b': 7, 'c': 24 }, { 'a': 'C', 'b': 4, 'c': 27 },
    { 'a': 'D', 'b': 1, 'c': 27 }, { 'a': 'D', 'b': 2, 'c': 28 }, { 'a': 'D', 'b': 6, 'c': 25 },
    { 'a': 'E', 'b': 8, 'c': 23 }, { 'a': 'E', 'b': 4, 'c': 29 }, { 'a': 'E', 'b': 7, 'c': 23 }
]

let vlSpec2 = {
    '$schema': 'https://vega.github.io/schema/vega-lite/v3.0.0-rc5.json',
    'data': {
        'values': dados,
    },
    'mark': 'bar',
    'encoding': {
        'y': { 'field': 'a', 'type': 'nominal' },
        'x': {
            'aggregate': 'average', 'field': 'b', 'type': 'quantitative',
            'axis': {
                'title': 'Average'
            }
        }
    }
};


vegaEmbed('#chart2', vlSpec2, {actions: false});

$('#sel2').selectmenu({
    change: function () {
    let escolha = $('#sel2').val()
    vlSpec2.encoding.x.field = escolha.toString()
    vegaEmbed('#chart2', vlSpec2, {actions: false});
}});



const cumprod = function(input){
    output = [];
    x = 1;
    for (i = 0; i < input.length; i++) {
        x = x * input[i];
        output.push(x);
    };
    return output;
}

let tabuas = dl.csv('dados/tabuas-de-vida.csv');

// let i = 0.03;
// let idade = 36;
// let b = 10000; 
let qx = tabuas.map(dl.$('at_2000_male'));

const sv_vit = function(i, idade, b, qx){
    let n = dl.max(tabuas.map(dl.$('idade'))) - idade;
    let px = math.subtract(1, qx);
    let serie = math.range(1, n + 1);
    let vp = math.dotPow((1/(i+1)), serie);
    let vp2 = math.dotPow(math.dotPow((1 / (i + 1)), 2), serie);
    let qxx = qx.slice(idade, idade + n);
    let pxx = cumprod(px.slice(idade, idade + n - 1))
    pxx.splice(0, 0, 1); // insere número 1 na posição 0
    let Ax = b * math.sum(math.dotMultiply(math.dotMultiply(vp, pxx), qxx));
    let Ax2 = b * math.sum(math.dotMultiply(math.dotMultiply(vp2, pxx), qxx));
    let Var = (Ax2 - math.pow(Ax, 2)) * 10000;
    let resultado = [math.round(Ax, 1), math.round(Ax2, 1), math.round(Var, 1)];
    return resultado
};

const sv_temp = function (i, idade, n, b, qx) {
    let px = math.subtract(1, qx);
    let serie = math.range(1, n + 1);
    let vp = math.dotPow((1 / (i + 1)), serie);
    let vp2 = math.dotPow(math.dotPow((1 / (i + 1)), 2), serie);
    let qxx = qx.slice(idade, idade + n);
    let pxx = cumprod(px.slice(idade, idade + n - 1))
    pxx.splice(0, 0, 1); // insere número 1 na posição 0
    let Ax = b * math.sum(math.dotMultiply(math.dotMultiply(vp, pxx), qxx));
    let Ax2 = b * math.sum(math.dotMultiply(math.dotMultiply(vp2, pxx), qxx));
    let Var = (Ax2 - math.pow(Ax, 2)) * 10000;
    let resultado = [math.round(Ax, 1), math.round(Ax2, 1), math.round(Var, 1)];
    return resultado
};
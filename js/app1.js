$('#sel1', '#sel2', '#sel3').selectmenu();
$('#numero1').spinner();
$('#btn1').button();

const cumprod = function (input) {
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
// let qx = tabuas.map(dl.$('at_2000_male'));
// let qx = tabuas.map(dl.$('at_2000_male'));

const sv_vit = function (i = 0.03, idade = 36, b = 10000, qx = tabuas.map(dl.$('at_2000_male'))) {
    let n = dl.max(tabuas.map(dl.$('idade'))) - idade;
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

const sv_temp = function (i = 0.03, idade = 36, n = 50, b = 10000, qx = tabuas.map(dl.$('at_2000_male'))) {
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

let escolha1 = $('#sel1').val();
let resultado1 = sv_vit(i = parseFloat(escolha1));
$('#sp1').html(resultado1[0])


$('#sel1').selectmenu({
    change: function () {
        let escolha2 = $('#sel1').val();
        let resultado2 = sv_vit(i = parseFloat(escolha2),
            idade = $('#range1').slider('values', 0),
            b = $('#numero1').val());
        $('#sp1').html(resultado2[0])
        let colunaEscolhida = $('#sel1').val()
        colunaEscolhida = 'y' + colunaEscolhida[3]
        $('#sp3').html(colunaEscolhida);
        vlSpec.encoding.y.field = colunaEscolhida.toString()
        vegaEmbed('#chart', vlSpec, { actions: false });
    }
});

$("#range1").slider({
    value: 36,
    min: 30,
    max: 100,
    slide: function (event, ui) {
        let escolha3 = $('#range1').slider('values', 0);
        $('#sp2').html(escolha3);
        let resultado3 = sv_vit(0.03, idade = parseInt(escolha3))
        $('#sp1').html(resultado3[0]);
    }
});

$('#caixanumero1').on('submit', function (event) {
    let valor = $('#numero1').val();
    console.log(valor);
    resultado4 = sv_vit(0.03, 36, b = parseInt(valor))
    $('#sp1').html(resultado4[0]);
    event.preventDefault();
});


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


vegaEmbed('#chart', vlSpec, { actions: false });



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


vegaEmbed('#chart2', vlSpec2, { actions: false });

$('#sel3').selectmenu({
    change: function () {
        let escolha = $('#sel3').val()
        vlSpec2.encoding.x.field = escolha.toString()
        vegaEmbed('#chart2', vlSpec2, { actions: false });
    }
});






$('#sel1').selectmenu();



let vlSpec = {
    '$schema': 'https://vega.github.io/schema/vega-lite/v3.0.0-rc5.json',
    'width': 400,
    'data': { 'url': 'data/juros.csv' },
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





// var dados = [
//     { 'a': 'C', 'b': 2, 'c': 22 }, { 'a': 'C', 'b': 7, 'c': 24 }, { 'a': 'C', 'b': 4, 'c': 27 },
//     { 'a': 'D', 'b': 1, 'c': 27 }, { 'a': 'D', 'b': 2, 'c': 28 }, { 'a': 'D', 'b': 6, 'c': 25 },
//     { 'a': 'E', 'b': 8, 'c': 23 }, { 'a': 'E', 'b': 4, 'c': 29 }, { 'a': 'E', 'b': 7, 'c': 23 }
// ]

// var vlSpec = {
//     '$schema': 'https://vega.github.io/schema/vega-lite/v3.0.0-rc6.json',
//     'data': {
//         'values': dados,
//     },
//     'mark': 'bar',
//     'encoding': {
//         'y': { 'field': 'a', 'type': 'nominal' },
//         'x': {
//             'aggregate': 'average', 'field': 'b', 'type': 'quantitative',
//             'axis': {
//                 'title': 'Average'
//             }
//         }
//     }
// };


// vegaEmbed('#chart', vlSpec, { actions: false });

// $('#sel1').selectmenu({
//     change: function () {

//     let escolha = $('#sel1').val()
//     $('#sp1').html(` ${escolha} `);
//     vlSpec.encoding.x.field = escolha.toString()
//     vegaEmbed('#chart', vlSpec, { actions: false });

// }});


// console.log(vlSpec['data'])
// console.log(dados[0])

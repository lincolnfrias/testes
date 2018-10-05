// ler csv
let teste = dl.csv('dados/teste.csv');
let stocks = dl.csv('dados/stocks.csv');

// head(), mostrar os dados como tabela
console.log(dl.format.table(teste, {limit: 2}));

// mostrar colunas
let colunas = teste.columns.toString()
$('#um').html(`As colunas do conjunto de dados são ${colunas}.`);

// .toString() é necessário para um valor poder ser mostrado na página,
// ao invés de ser apenas utilizado em cálculos.

// resumo estatístico
console.log(dl.format.summary(teste));

// selecionar apenas uma coluna
let preco = teste.map(dl.$('preco'));

// resumo estatístico de apenas uma coluna
console.log(dl.profile(preco));

// histograma
console.log(dl.histogram(teste, 'preco', {maxbins: 2}))

// tabela de frequência: value_counts
console.log(dl.count.map(teste.map(dl.$('cat'))));

// subselecionar o array: de 2 até 5
console.log(`subseleção: ${preco.slice(2, 5)}`);

// quantil
console.log(`A quantil solicitado é ${dl.quantile(preco, 0.75)}`);

// ordenar (sort)
// sinal de menos indica ordem decrescente
console.log('valores ordenados', teste.sort(dl.comparator('-preco'))) 

// filtrar dados, query
console.log('valores filtrados', teste.filter(function (d) { return d.preco > 100 }));


// amplitude
let amplitude = dl.extent(teste, 'preco');
console.log(`A amplitude do preço é ${amplitude}.`);

// unique
console.log('valores únicos', dl.unique(teste, 'preco'));

// groupby
console.log('saída do groupby', dl.groupby('cat').execute(teste));

let resumo = dl.groupby('cat').summarize({ 'preco': 'sum' }).execute(teste)
console.log(dl.print.table(resumo))

// correlação
let correlacao = dl.cor(teste, 'id', 'preco');
console.log(`A correlação entre data e preço é ${math.round(correlacao, 2)}`);

// regressão linear
console.log('saída da regressão', dl.linearRegression(teste, 'preco', 'id'));





let fields = [
    "CMTE_ID",              // committee id
    "CMTE_NM",              // committee name
    "TRES_NM",              // treasurer name
    "CMTE_ST1",             // street address line 1
    "CMTE_ST2",             // street address line 2
    "CMTE_CITY",            // city
    "CMTE_ST",              // state
    "CMTE_ZIP",             // zip code
    "CMTE_DSGN",            // designation
    "CMTE_TP",              // type
    "CMTE_PTY_AFFILIATION", // party affiliation
    "CMTE_FILING_FREQ",     // filing frequency
    "ORG_TP",               // interest group category
    "CONNECTED_ORG_NM",     // connected organization name (if any)
    "CAND_ID"               // candidate id (if any)
];

let cm = dl.dsv('dados/cm.txt', { delimiter: '|', header: fields });


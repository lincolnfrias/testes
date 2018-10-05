// ler csv
let teste = dl.csv('dados/teste.csv');

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

// números aleatórios
// uniforme, integer, normal
let r = dl.random.uniform(1, 10);
console.log(r.sample(5)) // gera cinco números
// r.pdf(), r.cdf(), r.icdf()

// bootstrap
let bs = dl.random.bootstrap(preco);
console.log(bs.sample(5))

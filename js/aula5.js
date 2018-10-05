// máximo
let lista1 = [341.1, 5.2, 67.0];
let maximo = math.max(lista1);
console.log(`o valor máximo é ${maximo}.`);
$('#sp1').html(maximo);

// média, mediana, somatório
let media = math.mean(lista1);
console.log(`o valor médio é ${math.round(media, 2)}.`);
$('#sp2').html(math.round(media, 2));


// desvio padrão e variância (var)
let dp = math.std(lista1);
console.log(`o desvio padrão é ${math.round(dp, 2)}.`);

// range
let lista2 = math.range(0, 4);
console.log(`a lista criada é ${lista2._data}`);

// encadeando operações
let resultadoEncadeado = math.chain(3.66789).round(2).add(5).multiply(20);
console.log(`o resultado da operação encadeada foi ${resultadoEncadeado}`);

// potencia, raiz quadrada, log, log10, e, pi
let potencia = math.pow(2, 8);
let raiz = math.sqrt(9);
let logaritmoNatural = math.log(2.72);
let logaritmoBaseDez = math.log10(100);

objeto1 = {'potencia': potencia,
           'raiz': raiz,
           'logaritmoNatural': math.round(logaritmoNatural, 4),
           'logaritmoBaseDez': logaritmoBaseDez,
           'e': math.round(math.e, 4),
           'pi': math.round(math.pi, 4)};

console.log(objeto1);

// operações vetoriais
let vetor1 = [20, 15, 4];
let vetor2 = [109, 3, 44];
let resultado1 = math.add(2, vetor1);
let resultado2 = math.add(vetor1, vetor2);
let resultado3 = math.multiply(2, vetor1);
let resultado4 = math.dotMultiply(vetor1, vetor2);         // element-wise
let resultado5 = math.dotMultiply(resultado1, resultado2);

objeto2 = {'resultado1': resultado1,
           'resultado2': resultado2,
           'resultado3': resultado3,
           'resultado4': resultado4,
           'resultado5': resultado5};

console.log(objeto2);

// operações matriciais
let X1 = math.matrix([[0, 1], [2, 3], [4, 5]]);
let X2 = math.add(3, X1);
let X3 = math.dotMultiply(X1, X2);   // element-wise
let X2T = math.transpose(X2)
let X4 = math.multiply(X1, X2T);    // multiplicação matricial
console.log(X2._data);
console.log(`o tamanho da matriz é ${X2._size[0]} por ${X2._size[1]}.`);
console.log(X3._data)
console.log(X4._data)




// resize, transpose, subset, diag, identity, det,  ones, zeros
// mathjs.org/docs/datatypes/matrices.html

// álgebra e derivadas
// math.simplify('x^2 + x + 3 + x^2').toString())
// math.derivative('sin(2x)', 'x').toString()
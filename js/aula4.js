$('#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8, #btn9').button();
$('#sel1, #sel2, #sel3').selectmenu();
$("#numero1").spinner();

$('#btn1').on('click', function(){
    $('#p1').html('Aqui está um texto diferente.');
    });

$('#sel1').selectmenu({
    change: function() {
                let value = $(this).val()
                value = Number(value) + 800 // parseInt()
                let opcao = $('#sel1 option:selected').text()
                $('#p2').html(`A opção selecionada foi ${opcao}, por isso, o valor é ${value}.`);
            }
});

let x = 5;
let y = 6;
let z = x + y;
$('#sp1').html(z * 55);

function multiplicacao(a, b) {
    return a * b;
}

$('#sp2').html(multiplicacao(4, 3));

// arrays
let dados = [5, 10, 25, 30, 34];
dados[5] = 65; // acrescenta um valor à lista

$('#sp3').html(`${dados[0]}, ${dados[5]}, comprimento: ${dados.length}`);

let valor = 40 in dados
$('#sp4').html(valor.toString());

$('#btn2').on('click', function () {
    $('#p3').html('Texto contendo a resposta.');
});

$('#btn3').on('click', function() {
    $('#p3').addClass('errada');
});

let numClicks = 0;
let texto1 = `você clicou ${numClicks} vezes`;
$('#sp5').text(texto1);
$('#btn4').on('click', function () {
    numClicks++;
    texto1 = `você clicou ${numClicks} vezes`;
    $('#sp5').text(texto1);
});

$('#caixa1').on('submit', function (event) {
    let texto = $(this).find('input');
    texto = texto.val();
    $('#sp6').text(texto);
    event.preventDefault();
});

// $('#sel2').on('change', function () {
//     let color = $(this).val();
//     $('#div1').css('background', color);
// });

$('#sel2').selectmenu({
    change: function () {
                let color = $('#sel2').val();
                console.log(color)
                $('#div1').css('background', color);
    }
});



let calcular = function (age) {
    return age * 3 * 365;
};
$('#caixanumero1').on('submit', function (event) {
    let age = $('#numero1').val();
    let resultado = calcular(age);
    $('#sp7').text(resultado);
    event.preventDefault();
});

$('#sel3').selectmenu({
    change: function (event) {
                let resposta = $('#sel3').val();
                $('#sp8').removeClass();
                if (resposta === 'a') {
                    $('#sp8').text('correta').addClass('correta');
                } else {
                    $('#sp8').text('errada').addClass('errada');
                }
                event.preventDefault();
}});

$('#radio1').on('submit', function(event) {
    let resultado = $('input[name="um"]:checked').val()
    $('#sp9').html(resultado);
    event.preventDefault();
});

$('#checkbox1').on('submit', function (event) {
    let resultado = $('input[name="dois"]:checked').val()
    $('#sp10').html(resultado);
    event.preventDefault();
});


$('#range1').on('change', function (event) {
    event.preventDefault();
    $('#sp11').html($(this).val());
});

$("#range2").slider({
    value: 50,
    slide: function (event, ui) {
        $('#sp13').html($('#range2').slider('values', 0));
    }
});


// cria html a partir de lista js     
let produtos = ['café', 'milho', 'soja']

for (i = 0; i < produtos.length; i++) {
    $('#lista1').append(`<li>${produtos[i]}</li>`)
}

// captura elementos da lista
let elementos = $('#lista1 li')

// usando objetos
var apolice = {
    premio: '2.300',
    importanciaSegurada: '30.000',
    cidade: 'Varginha',
    empresa: { 'proprietario': 'Anderson' },
    calculo: function (a, b) { return a + b; }
};

$('#p22').append(`<br> A apólice é de ${apolice.cidade}, seu prêmio é ${apolice.premio} e a importância segurada é ${apolice.importanciaSegurada}. O proprietário da empresa chama-se ${apolice.empresa.proprietario}. O resultado da função que está no objeto é ${apolice.calculo(3, 4)}.`);



// carrega apenas um elemento de um arquivo externo
$('#btn8').on('click', function () {
    $('#sp12').load('data/coisa.txt #p1');
});


// versão simplicada para funções com apenas um comando
// $('#btn1').on('click', () => $('#p1').html('Aqui está um texto diferente.') );

// caixa de texto: focus, blur etc
// var recebeTexto = function (str) {
//     $('#textoCaixa1').html(str);
// };

// $('#caixa1').on('focus', function () {
//     $(this).removeClass('lowlight');
//     $(this).addClass('highlight');
// });

// $('#caixa1').on('blur', function () {
//     $(this).removeClass('highlight');
//     $(this).addClass('lowlight');
// });

// $('#caixa1').on('keypress', function (key) {
//     if (key.keyCode === 13) {
//         recebeTexto(`O texto digitado foi ${$(this).val()}.`);
//         $(this).val(''); // apagar conteúdo
//         $(this).blur();  // retira foco
//     }
// });


// $('#textarea').on('change/focus/blur', function () {
//     // mostra e esconde elementos
//     // $('#p2').hide();
//     // $('#p2').show();    
//        $('#p2').slideDown();
//        $('#p2').slideUp();
// });
// $('#btn2').click(function () {
//     $('p5').toggle();
//     $('p5').fade();
//     $('div1').slideToogle();
// });
// É possível encadear animações, inclusive de svg.

// para remover elementos, filtrando. empty() remove todos os filhos.
//  $('p').remove('.test, .demo'); 
// também há $().removeClass()
// também é possível mudar css e dimensões dos elementos
// para escolher apenas o último elemento
// $('p').last().addClass('correto')

// se o script estiver no head, é preciso usar:
// $(document).ready(function(){ });
// equivalente
// $(function(){ });

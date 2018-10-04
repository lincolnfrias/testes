# Webdesign para analistas de dados

<br>

O objetivo aqui é mostrar como construir páginas interativas, como [esta](https://lincolnfrias.github.io/webdesign/app2.html), em que os usuários podem controlar gráficos e cálculos.   

Elas são chamadas de *apps*, aplicativos web, porque são mais dinâmicas do que as páginas comuns, estáticas.   

Para construir esses apps é necessário usar as três linguagens básicas da internet: html (a estrutura da página), css (cores, formatação etc.) e javascript (a interação propriamente dita).   

Existem pacotes para construí-los diretamente em python ([Dash](https://plot.ly/products/dash/)) ou em R ([Shiny](http://www.shinyapps.io/)). Eles criam html, css e javascript automaticamente, a partir de comandos dessas outras linguagens.   

No entanto, eles têm dois grandes problemas: 

- são limitadores: muitas vezes é difícil modificar coisas simples como espaçamento, cor, acrescentar texto em um determinado lugar etc.

- é difícil colocá-los na web, pois exigem um servidor python (ou R): é muito fácil construir o aplicativo no seu computador, mas bastante complicado disponibilizá-los para outras pessoas.

Esses dois problemas somem se você construir seu app usando diretamente html, css e javascript. Você poderá controlar cada detalhe da página e não precisará de um servidor, porque o navegador de quem abrir seu aplicativo possui um interpretador de javascript, inclusive nos celulares. 

Portanto, se você tem prazer em programar, é muito mais divertido e poderoso aprender a controlar essas linguagens diretamente. O que precisamos saber sobre html e css é muito simples, pois são apenas marcações, você aprenderá em uma tarde. Javascript, no entanto, é mais complicada. 

Por isso, vamos focar apenas no que é importante para fazer o tipo de página que nos interessa. Por exemplo, embora o pacote [D3](https://d3js.org/) seja o pacote em javascript capaz de produzir os gráficos mais impressionantes, ele é muito trabalhoso. Vamos preferir utilizar Vega-Lite, um pacote que torna muito mais simples produzir os gráficos de que precisamos. E melhor, podemos fazer gráficos Vega-Lite usando o python ou o R e incorporá-los diretamente em nossa página.


### Aulas

- primeiros passos, sem instalar nada (JSFiddle).
- no seu computador: instalando VSCode.
- aula1.html: criando uma página. 
- aula2.html: criando a mesma página, mas com arquivos externos.
- aula3.html: usando javascript para modificar html e css.
- aula4.html: criando interatividade.
- app1.html: estabelecendo um servidor local, criando um gráfico interativo, carregando dados em csv e incluindo símbolos matemáticos em uma página.
- app2.html: criando a mesma página, mas com abas. 



Para instalar VSCode:

No Linux:

```
sudo dpkg -i code???
```


Aqui está uma lista do que usaremos:

- jquery: pacote que simplifica javascript.
- jquery-ui: pacote para criar botões e seletores mais bonitos.
- vega-lite e altair: pacotes para criar gráficos (o primeiro é um pacote javascript, o segundo é sua versão em python).  
- datalib: pacote para carregar os dados em csv em nossa página.
- Visual Studio Code (VSCode): editor de texto que simplifica muito a escrita de html, css e javascript.


### Para aprender mais

- Khan Academy
- W3Schools
- MDN
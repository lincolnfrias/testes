# Webdesign para analistas de dados

<br>

O objetivo aqui é mostrar como construir páginas interativas, como [esta](???), em que os usuários podem controlar gráficos e cálculos.   

Vamos chamá-las de *apps*, aplicativos web, porque elas são mais dinâmicas do que as páginas comuns, estáticas.   

Para construí-los é necessário usar as três linguagens básicas da internet: html (a estrutura da página), css (cores, formatação etc.) e javascript (a interação propriamente dita).   

Existem pacotes para construir este tipo de página diretamente no python ([Dash](https://plot.ly/products/dash/)) ou no R ([Shiny](http://www.shinyapps.io/)). Eles permitem que você crie html, css e javascript sem saber, usando comandos da linguagem que você já conhece. Eles são boas opções para quem não se diverte aprendendo programação.

No entanto, se você tem prazer em programar, é muito mais divertido e poderoso aprender a controlar essas linguagens diretamente. O que precisamos saber sobre html e css é muito simples, pois são apenas marcações, você aprenderá em uma tarde. Javascript, no entanto, é mais complicada. 

Por isso, vamos focar apenas no que é importante para fazer o tipo de página que nos interessa. Por exemplo, embora [D3](https://d3js.org/) seja o pacote em javascript capaz de produzir os gráficos mais impressionantes, ele é muito trabalhoso. Vamos preferir utilizar Vega-Lite, pois com ele é muito mais simples produzir os gráficos de que precisamos. E melhor, podemos fazer gráficos Vega-Lite usando o python ou o R e incorporá-los diretamente em nossa página.

Aqui está uma lista do que usaremos:

- Visual Studio Code (VSCode): editor de texto que simplifica muito a escrita de html, css e javascript.
- jquery: pacote que simplifica javascript.
- jquery-ui: pacote para criar botões e seletores mais bonitos.
- vega-lite e altair: pacote para criar gráficos (o primeiro é um pacote javascript, o segundo é sua versão em python).  
- datalib: pacote para carregar os dados em csv em nossa página.

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

- primeiros passos, sem instalar nada ([JSFiddle](http://jsfiddle.net)).
- no seu computador: instalando [VSCode](#vscode).
- [aula1.html](https://lincolnfrias.github.io/webdesign/aula1.html): criando uma página simples. 
- [aula2.html](https://lincolnfrias.github.io/webdesign/aula2.html): criando a mesma página, mas com arquivos externos.
- [aula3.html](https://lincolnfrias.github.io/webdesign/aula3.html): usando javascript para modificar html e css.
- [aula4.html](https://lincolnfrias.github.io/webdesign/aula4.html): criando interatividade.   

**Atençao**: daqui em diante, os arquivos exigem que se crie um servidor local (para carregar o csv). Se você tem a Anaconda instalada, basta executar no terminal <code>python -m http.server</code>.   

- [app1.html](https://lincolnfrias.github.io/webdesign/app1.html): estabelecendo um servidor local, criando um gráfico interativo, carregando dados em csv e incluindo símbolos matemáticos em uma página.
- [app2.html](https://lincolnfrias.github.io/webdesign/app2.html): criando a mesma página, mas com abas. 
- como criar um site usando o GitHub Pages.
- [aula5.html](https://lincolnfrias.github.io/webdesign/aula5.html): operações matemáticas.
- [aula6.html](https://lincolnfrias.github.io/webdesign/aula6.html): carregando csv e fazendo operações com dataframes (agrupar, filtrar, ordenar etc.).
- [aula7.html](https://lincolnfrias.github.io/webdesign/aula7.html): criando tabela interativa.
- [aula8.html](https://lincolnfrias.github.io/webdesign/aula8.html): tabela interativa a partir de arquivo externo.

<br>

---- 
<br>

[em elaboração]

### VSCode <a name='vscode'></a>

Baixe o VSCode [aqui](https://code.visualstudio.com/). 
Para instalar no Windows, basta executar o arquivo. 
No Linux, execute o seguinte comando na pasta em que estiver o arquivo (substitua o nome do arquivo ):

```
sudo dpkg -i code_1.27.2-1536736588_amd64.deb
```

### Ideias básicas sobre HTML
- ctrl+u
- ctrl+i
### Ideias básicas sobre CSS

### Ideias básicas sobre Javascript
- ctrl+shift+j
- declare variáveis com let ou const (var é a versão antiga).
- use ; ao final de cada comando.
- valores booleanos em letras minúsculas: true, false.
- funções e estruturas de repetição são delimitadas por chaves, {}. 
- a declaração da estrutura de repetição exige três elementos

Estruturas de dados:

| python     | R      | javascript |
|:----------:|:------:|:----------:|
|list        | vector | array      |
| dictionary | -      | object     |

### Outras observações

Aqui está uma lista do que usaremos:

- jquery: pacote que simplifica javascript.
- jquery-ui: pacote para criar botões e seletores mais bonitos.
- vega-lite e altair: pacotes para criar gráficos (o primeiro é um pacote javascript, o segundo é sua versão em python).  
- datalib: pacote para carregar os dados em csv em nossa página.
- Visual Studio Code (VSCode): editor de texto que simplifica muito a escrita de html, css e javascript.


### Para aprender mais

- [Khan Academy, programação](https://www.khanacademy.org/computing/computer-programming)
- W3Schools: [html](https://www.w3schools.com/html), [css](https://www.w3schools.com/css), [javascript](https://www.w3schools.com/js) e [jquery](https://www.w3schools.com/jquery)
- [MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web): página da Mozilla que funciona como a documentação oficial de Javascript, com tradução em português e há seções sobre html, css e javascript.
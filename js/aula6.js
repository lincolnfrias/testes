maximo = dl.max([1000, 2, 2000, 3]); // Math.max(...array)
$('#um').html(maximo);



// d3.csv('data/cities.csv').then(function (data) {
//     data.forEach(function (d) {
//         d.population = +d.population;
//         d["land area"] = +d["land area"];
//     });
//     console.log(data);
// });



var coisa = dl.csv('https://vega.github.io/datalib/data/stocks.csv');

// Show summary statistics for each column of the data table.
console.log(dl.format.summary(coisa));

// json > csv: não precisa de conversão 
d3.json("/data/employees.json").then(function (data) {
    console.log(data[0]);
});

// merging data
const articles = [{
    "id": 1,
    "name": "vacuum cleaner",
    "weight": 9.9,
    "price": 89.9,
    "brand_id": 2
}, {
    "id": 2,
    "name": "washing machine",
    "weight": 540,
    "price": 230,
    "brand_id": 1
}, {
    "id": 3,
    "name": "hair dryer",
    "weight": 1.2,
    "price": 24.99,
    "brand_id": 2
}, {
    "id": 4,
    "name": "super fast laptop",
    "weight": 400,
    "price": 899.9,
    "brand_id": 3
}];

const brands = [{
    "id": 1,
    "name": "SuperKitchen"
}, {
    "id": 2,
    "name": "HomeSweetHome"
}];

let formatacao = function (row) {
    return {
        name: row.name,
        age: +row.age,
        color: row.color
    };
}

let callback = function (data) {

    var averageAge = data.reduce(function (prev, curr) {
        return prev + curr.age;
    }, 0) / data.length;

    var ulSelection = d3.select('#lista');
    var valuesSelection = ulSelection.selectAll('li').data(data).enter().append('li').text(function (d) { return d.name; });
    var totalSelection = ulSelection.append('li').text('Average: ' + averageAge);
};

d3.csv('dados/personagens.csv', formatacao).then(callback);

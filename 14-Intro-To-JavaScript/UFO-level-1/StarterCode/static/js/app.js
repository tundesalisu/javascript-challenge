// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(data);
var tbody = d3.select("tbody");
data.forEach((nasa) =>{
    // console.log(nasa);
    var row = tbody.append('tr');
    Object.entries(nasa).forEach(([key,value])=>{
        // console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    })

})


var button = d3.select("#filter-btn")

// var form = d3.select("#form");

// Create event handlers 
button.on("click", runFilter);

function runFilter(){
//alert("no money")
var tbody = d3.select("tbody").html("");

// Prevent the page from refreshing
d3.event.preventDefault();

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

 // Get the value property of the input element
 var inputValue = inputElement.property("value");

 console.log(inputValue);
//  console.log(tableData);

var filteredData = tableData.filter(date => date.datetime === inputValue);

console.log(filteredData);

var tbody = d3.select("tbody");
filteredData.forEach((nasa) =>{
    // console.log(nasa);
    var row = tbody.append('tr');
    Object.entries(nasa).forEach(([key,value])=>{
        // console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    })

})



}

// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(data);
var tbody = d3.select("tbody");
data.forEach((nasa) =>{
    // console.log(nasa);
    var row = tbody.append('tr');
    Object.entries(nasa).forEach(([key,value])=>{
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    })

})
// from data.js

let tableData = data;

console.log(tableData[0].city)
console.log(Object.values(tableData[0]))

// Level 1
// id the table body
let tbody = document.getElementById('tbody');

function renderTable(ufo_data) {
  for (i = 0; i < ufo_data.length; i++) {
    let tr = document.createElement("tr");

    // creating a td for each column
    let newDateCell = document.createElement('td');
    let newCityCell = document.createElement('td');
    let newStateCell = document.createElement('td');
    let newCountryCell = document.createElement('td');
    let newShapeCell = document.createElement('td');
    let newDurationCell = document.createElement('td');
    let newCommentsCell = document.createElement('td');

    // creating a text node for each object value and appending child each text to the cell
    newDateCell.appendChild(document.createTextNode(tableData[i].datetime));
    newCityCell.appendChild(document.createTextNode(tableData[i].city));
    newStateCell.appendChild(document.createTextNode(tableData[i].state));
    newCountryCell.appendChild(document.createTextNode(tableData[i].country));
    newShapeCell.appendChild(document.createTextNode(tableData[i].shape));
    newDurationCell.appendChild(document.createTextNode(tableData[i].durationMinutes));
    newCommentsCell.appendChild(document.createTextNode(tableData[i].comments));

    // append each cell to the row
    tr.appendChild(newDateCell)
    tr.appendChild(newCityCell)
    tr.appendChild(newStateCell)
    tr.appendChild(newCountryCell)
    tr.appendChild(newShapeCell)
    tr.appendChild(newDurationCell)
    tr.appendChild(newCommentsCell)

    // appending each row to the body
    tbody.appendChild(tr)
  } // end for
} // end rendetTable

renderTable(tableData)

// Level 2
let selectDate = d3.select("#filter-btn");

selectDate.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");

  // Get the value property of the input element
  let inputValue = inputElement.property("value");

  // console.log(inputValue);

  let filteredData = tableData.filter(x => x.datetime === inputValue);

  console.log(filteredData)

  d3.selectAll("td").remove()
  
  renderTable(filteredData)


});





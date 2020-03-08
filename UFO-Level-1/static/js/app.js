// from data.js
const tableData = data; 

const tableBody = d3.select("tbody");



//Append rows to table
function AddData(data) {
    
    tableBody.html("");
    
    data.forEach((dataRow) => {
        
        const row = tableBody.append("tr");
        
        Object.values(dataRow).forEach((value) => {
            //console.log(key, value);
            let cell = tableBody.append("td")
            cell.text(value);
        
        });
    });

}

// Define and call function 
 function datesearch() {

    const date  = d3.select("#select-dates").property("value");
    console.log(date);
    let filteredData = tableData;

    if (date){

        filteredData = filteredData.filter(row => row.datetime === date);
    }
    
    console.log(filteredData);
    AddData(filteredData);

 }

/*  Defined functions to call multiple filters but could not complete multi-filter

// Define and call function 
 function citysearch() {

    const date  = d3.select("#select-cities").property("value");
    console.log(city);
    let filteredData = tableData;

    if (city){

        filteredData = filteredData.filter(row => row.city === city);
    }
    
    console.log(filteredData);
    AddData(filteredData);

 }

  // Define and call function 
  function statesearch() {

    const state  = d3.select("#select-states").property("value");
    console.log(state);
    let filteredData = tableData;

    if (state){

        filteredData = filteredData.filter(row => row.state === state);
    }
    
    console.log(filteredData);
    AddData(filteredData);

 }

// Define and call function 
function countrysearch() {

    const country  = d3.select("#select-country").property("value");
    console.log(country);
    let filteredData = tableData;

    if (country){

        filteredData = filteredData.filter(row => row.country === country);
    }
    
    console.log(filteredData);
    AddData(filteredData);

 }

 function shapesearch() {

    const date  = d3.select("#select-shape").property("value");
    console.log(shape);
    let filteredData = tableData;

    if (shape){

        filteredData = filteredData.filter(row => row.shape === shape);
    }
    
    console.log(filteredData);
    AddData(filteredData);

 } */

 // Event Handler to add filtered data
d3.selectAll("#filter-btn").on("click", datesearch);
//d3.selectAll("#filter-btn").on("click", citysearch);

AddData(tableData);




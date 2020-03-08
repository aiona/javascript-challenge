// from data.js
var tableData = data; 

var tableBody = d3.select("tbody");

console.log(tableData)

var columns = ["Date", "City", "State", "Country", "Shape", "Duration","Comments"]


//Append rows to table
function AddData(){
    tableData.forEach(tableBody) =>{
        var row = tbody.append("tr")
        columns.forEach(column => {
            if(column == "date" || column == "city" || column == "state" || column == "country"
            || column == "shape" || column == "duration" || column == "comments"
                row.append("td").text(tableBody[column])
            }
            else row.append("td").text(tableData[column])
    })
}

//Call function 
AddData()

var button = d3.select("#button");

button.on("click", function() {

    //Prevent web page from refreshing
    d3.event.preventDefault();

    //Accept user input
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(data => tableData.date === inputValue);

    console.log(filteredData)

    //Loop through filtered data
    filteredData.forEach((date) => {
        var row = tbody.append("tr");
        Object.defineProperties([key, value]) => {
            cell = tbody.append("td")
            cell.text("value");
        };

    });
});


    


    

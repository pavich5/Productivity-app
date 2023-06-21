let  table = document.querySelector("table");

function createTable(numRows, numCols) {
    for (let i = 0; i < numRows; i++) {
      let row = table.insertRow();
      for (let j = 0; j < numCols; j++) {
        let  cell = row.insertCell();

        cell.innerHTML = "Row-" + (i+1) + " Column-" + (j+1);
      }
    }
  }
  createTable(3, 8);

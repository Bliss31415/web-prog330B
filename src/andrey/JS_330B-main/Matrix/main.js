function createMatrixTable() {
    let rowCount = parseInt(document.getElementById("rowCount").value);
    let colCount = parseInt(document.getElementById("colCount").value);
    let tableBody = document.querySelector("#matrixTable tbody");

    tableBody.innerHTML = "";

    if (rowCount > 9 || colCount > 9) {
      rowCount = 0;
      colCount = 0;
    }

    for (let i = 0; i < rowCount; i++) {
      let row = document.createElement("tr");

      for (let j = 0; j < colCount; j++) {
        let cell = document.createElement("td");
        cell.textContent = 0;

        row.appendChild(cell);
      }

      tableBody.appendChild(row);
    }

  //  let determinantButton = document.getElementById("calculateDeterminant");
  //  determinant.disabled = rowCount !== colCount;

    let transpose = document.getElementById("matrixTranspose");
    let mirrorVertical = document.getElementById("mirrorMatrixVertical");
    let mirrorHorizontal = document.getElementById("mirrorMatrixHorizontal");
    let rotateClockwiseButton = document.getElementById("rotateMatrixClockwise");
    let rotateMatrixCounterClockwise = document.getElementById("rotateMatrixCounterClockwise");
    let determinant = document.getElementById("calculateDeterminant");

    if (rowCount === 1 && colCount === 1) {
        transpose.disabled = true;
        mirrorVertical.disabled = true;
        mirrorHorizontal.disabled = true;
        rotateClockwiseButton.disabled = true;
        rotateMatrixCounterClockwise.disabled = true;
        determinant.disabled = true;
    } else {
        transpose.disabled = false;
        mirrorVertical.disabled = false;
        mirrorHorizontal.disabled = false;
        rotateClockwiseButton.disabled = false;
        rotateMatrixCounterClockwise.disabled = false;
        determinant.disabled = false;
    }

    if(rowCount !== colCount){
        determinant.disabled = true;
    }


 }

  function randomMatrix(){
    let tableBody = document.querySelector("#matrixTable tbody");
    let cell = tableBody.querySelectorAll("td");

    cell.forEach(function(cell){
        cell.textContent = Math.floor(Math.random() * 10) + 6;
        });
}

function zeroMatrix(){
    let tableBody = document.querySelector("#matrixTable tbody");
    let cell = tableBody.querySelectorAll("td")

    cell.forEach(function(cell){
        cell.textContent = 0;
        });
}

function rotateMatrixClockwise() {
    let tableBody = document.querySelector("#matrixTable tbody");
    let rows = tableBody.querySelectorAll("tr");
  
    let newRowCount = rows[0].children.length;
    let newColCount = rows.length;
  
    let newTableBody = document.createElement("tbody");
  
    for (let j = 0; j < newRowCount; j++) {
      let newRow = document.createElement("tr");
  
      for (let i = newColCount - 1; i >= 0; i--) {
        let cellValue = rows[i].children[j].textContent;
        let newCell = document.createElement("td");
        newCell.textContent = cellValue;
  
        newRow.appendChild(newCell);
      }
  
      newTableBody.appendChild(newRow);
    }
  
    tableBody.parentNode.replaceChild(newTableBody, tableBody);
  }

  function rotateMatrixCounterClockwise() {
    let tableBody = document.querySelector("#matrixTable tbody");
    let rows = tableBody.querySelectorAll("tr");
  
    let newRowCount = rows[0].children.length;
    let newColCount = rows.length;
  
    let newTableBody = document.createElement("tbody");
  
    for (let j = newRowCount - 1; j >= 0; j--) {
      let newRow = document.createElement("tr");
  
      for (let i = 0; i < newColCount; i++) {
        let cellValue = rows[i].children[j].textContent;
        let newCell = document.createElement("td");
        newCell.textContent = cellValue;
  
        newRow.appendChild(newCell);
      }
  
      newTableBody.appendChild(newRow);
    }
  
    tableBody.parentNode.replaceChild(newTableBody, tableBody);
  }

  function matrixTranspose() {
    let tableBody = document.querySelector("#matrixTable tbody");
    let rows = Array.from(tableBody.querySelectorAll("tr"));
  
    let newRowCount = rows[0].children.length;
    let newColCount = rows.length;
  
    let newTableBody = document.createElement("tbody");
  
    for (let j = 0; j < newRowCount; j++) {
      let newRow = document.createElement("tr");
  
      for (let i = 0; i < newColCount; i++) {
        let cellValue = rows[i].children[j].textContent;
        let newCell = document.createElement("td");
        newCell.textContent = cellValue;
  
        newRow.appendChild(newCell);
      }
  
      newTableBody.appendChild(newRow);
    }
  
    tableBody.parentNode.replaceChild(newTableBody, tableBody);

  }

  function calculateDeterminant() {
    let rowCount = parseInt(document.getElementById("rowCount").value);
    let colCount = parseInt(document.getElementById("colCount").value);
  
    if (rowCount !== colCount) {
      return;
    }
  
    let tableBody = document.querySelector("#matrixTable tbody");
    let cells = tableBody.querySelectorAll("td");
  
    let matrix = [];
  
    for (let i = 0; i < rowCount; i++) {
      let row = [];
  
      for (let j = 0; j < colCount; j++) {
        let index = i * colCount + j;
        row.push(parseInt(cells[index].textContent));
      }
  
      matrix.push(row);
    }
  
    function determinant(matrix) {
      if (matrix.length === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1];
      }
  
      let result = 0;
  
      for (let i = 0; i < matrix.length; i++) {
        let subMatrix = [];
  
        for (let j = 1; j < matrix.length; j++) {
          let subRow = [];
  
          for (let k = 0; k < matrix.length; k++) {
            if (k !== i) {
              subRow.push(matrix[j][k]);
            }
          }
  
          subMatrix.push(subRow);
        }
  
        result += Math.pow(-1, i) * matrix[0][i] * determinant(subMatrix);
      }
  
      return result;
    }
  
    let det = determinant(matrix);
    let determinantEl = document.getElementById("determinant");
    determinantEl.textContent = "Determinant: " + det;
  }

  function mirrorMatrixHorizontal() {
    let tableBody = document.querySelector("#matrixTable tbody");
    let rows = tableBody.querySelectorAll("tr");
  
    for (let i = 0; i < rows.length; i++) {
      let cells = rows[i].querySelectorAll("td");
      let cellIndex = cells.length - 1;
  
      for (let j = 0; j < Math.floor(cells.length / 2); j++) {
        let temp = cells[j].textContent;
        cells[j].textContent = cells[cellIndex].textContent;
        cells[cellIndex].textContent = temp;
  
        cellIndex--;
      }
    }
    
  }

  function mirrorMatrixVertical() {
    let tableBody = document.querySelector("#matrixTable tbody");
    let rows = tableBody.querySelectorAll("tr");
    let rowCount = rows.length;
    let colCount = rows[0].children.length;
  
    for (let i = 0; i < Math.floor(rowCount / 2); i++) {
      let currentRow = rows[i].querySelectorAll("td");
      let targetRow = rows[rowCount - 1 - i].querySelectorAll("td");
  
      for (let j = 0; j < colCount; j++) {
        let temp = currentRow[j].textContent;
        currentRow[j].textContent = targetRow[j].textContent;
        targetRow[j].textContent = temp;
      }
    }
  }
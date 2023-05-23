
// get base grid
const gridElement = document. getElementById("grid");

// populate all 100 slots in grid and add effect on click
for (let i = 0 ; i < 100 ; i++){
    const newCell = createElement("div", "cell");
    
    newCell.addEventListener ("click", function() {
        newCell.classList.toggle("selected");
    }); 
    
    gridElement.appendChild(newCell);
}

//create cells
function createElement(tagName, className){
    const cellElement = document.createElement(tagName);
    cellElement.className = className;
    for (let i = 0 ; i < 100 ; i++){
        let number = i
        cellElement.innerHTML = (number);
    }

    return cellElement;
}
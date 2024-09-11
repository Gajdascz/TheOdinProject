function populateGrid(dimensions=16) {
  const gridContainer = document.querySelector(`.grid-container`);
  for(let i = 0; i < dimensions; i++) {
    let gridRow = document.createElement(`div`);
    gridRow.classList.add(`grid-row`);
    gridContainer.appendChild(gridRow);
    for( let j = 0; j < dimensions; j++) {
      let gridSquare = document.createElement(`div`);
      gridSquare.classList.add(`grid-square`);
      gridRow.appendChild(gridSquare);
    }
  }
  applyGridSquareListeners();
}

function changeGridDimensions(newDimensions){
  const gridContainer = document.querySelectorAll(`.grid-container > *`);
  gridContainer.forEach((Node) => {
    Node.remove();
  });
  populateGrid(newDimensions);
}

function applyGridSquareListeners() {
  const gridSquare = document.querySelectorAll(`.grid-square`);
  gridSquare.forEach((gridSquare) => {
    let passes = 0;
    let lightness = 90;
    gridSquare.addEventListener(`mouseover`, () => {
      let randomColor = getRandomColor(passes, lightness);
      passes++;
      console.log(randomColor);
      console.log(passes);
      gridSquare.style.cssText = `background-color: ${randomColor};`;
    });
  });
}

function getRandomColor(passes, lightness) {
  let hue = Math.floor(Math.random()*360);
  let saturation = 100;
  if(passes >= 0 && passes < 10) {
    lightness -= (passes*10);
  } else { lightness = 0; }
  let randomColor = `hsl(${hue},${saturation}%,${lightness}%)`;
  return randomColor;
}

(function () {
  const changeDimensionsButton = document.querySelector(`.change-dimensions-button`);
  changeDimensionsButton.addEventListener(`click`, () => {
    let newDimensions = prompt(`Enter a number less than 100 to change the grid dimensions.`);
    if(newDimensions <= 100){
    changeGridDimensions(newDimensions);
    } else { alert(`Please enter a value less than 100.`); }
  });
})();

populateGrid();
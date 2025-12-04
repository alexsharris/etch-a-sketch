// Create grid
let createGrid = function(size) {
    let canvas = document.querySelector(".canvas");
    tileWidth = 480/size;
    tileCount = size ** 2;
    console.log(tileWidth);
    console.log(tileCount);

    //Clear canvas
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    
    //Create and append tiles
    for (i = 0; i < tileCount; i++) {
        let newTile = document.createElement("div");
        newTile.classList.add('tile');
        newTile.style.width = tileWidth + "px";
        newTile.style.height = tileWidth + "px";
        canvas.appendChild(newTile);
    }
}
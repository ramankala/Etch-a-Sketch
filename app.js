

const container = document.querySelector('#container');

const gridContainer = document.querySelector('#gridContainer');

const resetBtn = document.querySelector('#reset');




resetBtn.addEventListener('click', function(){
    let pixelSize = window.prompt('Number of squares per side for the new grid(Max: 100)?');

    createGrid(pixelSize);


});


function createGrid(pixelSize){

    gridContainer.replaceChildren();

    gridContainer.style.setProperty("--grid-rows", pixelSize);
    gridContainer.style.setProperty("--grid-cols", pixelSize);
    
    for (let i = 0; i < pixelSize * pixelSize; i++){
        let box = document.createElement('div');
        box.className = "cell";
        box.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = "black";
        })

        gridContainer.appendChild(box);
        
    }
    

    
}




createGrid(16);


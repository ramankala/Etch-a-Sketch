

const container = document.querySelector('#container');

const resetBtn = document.querySelector('#reset');




resetBtn.addEventListener('click', function(){
    let pixelSize = window.prompt('Number of squares per side for the new grid(Max: 100)?');

    createNewGrid(pixelSize);


});


function createGrid(){

    let initialSize = 16;
    
    for (let i = 0; i < initialSize; i++){
        let row = document.createElement('div');
        row.className = "row";

        for (let j = 0; j < initialSize; j++){
            let box = document.createElement('div');
            box.className = "cell";
            box.addEventListener('mouseover', function(){
                box.className = "cell blackBox";

            });
            row.appendChild(box);
        }
        container.appendChild(row);
        
    }

    
}


// function createGrid(){

//     let initialSize = 16;
    
//     for (let i = 0; i < initialSize; i++){
//         for (let j = 0; j < initialSize; j++){
//             let box = document.createElement('div');
//             box.className = "cell";
//             }
//             container.appendChild(box);
//         }
        
        
//     }


// function createNewGrid(pixelSize){

//     container.replaceChildren();

//     container.style.setProperty("--grid-rows", pixelSize);
//     container.style.setProperty("--grid-cols", pixelSize);

//     // container.style.height = pixelSize;
//     // container.style.width = pixelSize;
    

//     for (let i = 0; i < pixelSize; i++){
//         let row = document.createElement('div');
//         row.className = "row";

//         for (let j = 0; j < pixelSize; j++){
//             let box = document.createElement('div');
//             box.className = "cell";
//             box.addEventListener('mouseover', function(){
//                 box.className = "cell blackBox";

//             });
//             row.appendChild(box);
//         }
//         container.appendChild(row);
        
//     }
// }

createGrid();

//how to create a new grid in the same total space as before? e.g. 64x64
//look into using css grid instead of flexbox
//Redo this with the container css class as the main one to add properties to

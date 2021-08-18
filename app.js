// create 16x16 grid of square divs
// for i > 4
// for j < 4
// give div box properties

const container = document.querySelector('#container');


function createGrid(){
    

    for (let i = 0; i < 16; i++){
        let row = document.createElement('div');
        row.className = "row";

        for (let j = 0; j < 16; j++){
            let box = document.createElement('div');
            box.className = "cell";
            row.appendChild(box);
        }
        container.appendChild(row);
        
    }

    
}

createGrid();
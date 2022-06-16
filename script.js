let initial_size = 16;

const container = document.querySelector('.container');

function createGrid (size) {
    if (size == 0) {
        size = initial_size;
    }

    for (let i = 0; i < size*size; i++) {
        let grid_square = document.createElement('div');
        grid_square.classList.add('grid-sqaure');
        grid_square.style.border = 'solid-black';
        grid_square.style.height = 960/size + "px"
        grid_square.style.width = 960/size + "px"
        container.appendChild(grid_square);
    }
    return
};

let size = window.prompt('Please input a size between 0 - 64, or leave blank for default');

if (typeof(size) == undefined) {
    createGrid(initial_size);
} else {
    createGrid(size);
}
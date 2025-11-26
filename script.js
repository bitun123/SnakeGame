const board = document.querySelector(".board");
const blockHeight = 50;
const blockWidth = 50;
const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);
const blocks = [];
const snake = [{ x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }];
let direction = "down";
let food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) }

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement('div')
        block.classList.add("block");
        board.appendChild(block);
        // block.innerText = `${row},${col}`;
        blocks[`${row},${col}`] = block;
    }
}

function renderSnake() {

  const hey =   blocks[`${food.x},${food.y}`].classList.add("fill");

    let head = null;



    if (direction === "left") {
        head = { x: snake[0].x, y: snake[0].y - 1 };
    }
    else if (direction === "right") {
        head = { x: snake[0].x, y: snake[0].y + 1 };
    }
    else if (direction === "down") {
        head = { x: snake[0].x + 1, y: snake[0].y };
    }
    else if (direction === "up") {
        head = { x: snake[0].x - 1, y: snake[0].y };
    }
    if(head.x <0 || head.y <0 || head.x >= rows || head.y >= cols){
        alert("Game Over"); 
        window.location.reload();
    }

    if(head.x===food.x && head.y===food.y){

    }
    
        snake.forEach((block) => {
            blocks[`${block.x},${block.y}`].classList.remove("fill");
        })
    
    
        snake.unshift(head);
        snake.pop();
    snake.forEach((block) => {
        // console.log(block)
        blocks[`${block.x},${block.y}`].classList.add("fill");
    })
}



 setInterval(() => {

    renderSnake();
}, 400)


addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === "ArrowUp") {
        direction = "up";
    }
    else if (event.key === ("ArrowDown")) {
        direction = "down";
    }
    else if (event.key === ("ArrowLeft")) {
        direction = "left";
    }
    else if (event.key === ("ArrowRight")) {
        direction = "right";
    }
})
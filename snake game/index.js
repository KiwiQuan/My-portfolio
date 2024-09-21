let timeout = setTimeout
let nextTurn
const gameBoard = document.querySelector("#gameBoard")
const ctx = gameBoard.getContext("2d")
const scoreText = document.querySelector("#scoreText")
const resetBtn = document.querySelector("#resetBtn")
const gameWidth = gameBoard.width
const gameHeight = gameBoard.height
const snakeBorder = "black"
let boardBackground = $("#boardBackground").val()
let snakeColor = $("#snakeColor").val()
let foodColor = $("#foodColor").val()
let gridSize = $("#gridSize").val()
let snakeSpeed = $("#snakeSpeed").val()
let unitSize = Number.parseInt(gridSize)
let running = false
let xVelocity = unitSize
let yVelocity = 0
let foodX
let foodY
let score = 0
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
]

window.addEventListener("keydown", changeDirection)
$("#resetBtn").click( () => {
    gridSize = $("#gridSize").val()
    unitSize = Number.parseInt(gridSize)
    snakeSpeed = $("#snakeSpeed").val()
    foodColor = $("#foodColor").val()
    snakeColor = $("#snakeColor").val()
    boardBackground = $("#boardBackground").val()
    resetGame()
})

gameStart()

// functions

function gameStart(){
    running = true
    scoreText.textContent = score
    createFood()
    drawFood()
    nextTick()
}
function nextTick(){
    if(running){
        timeout = setTimeout(()=>{
            clearBoard()
            drawFood()
            turn()
            moveSnake()
            drawSnake()
            drawPopups() 
            checkGameOver()
            nextTick()
        }, snakeSpeed)
    } else{
        displayGameOver()
    } 
}

function drawPopups() {
    ctx.textAlign = 'center';
    ctx.font = '20px Arial';
    
    popups = popups.filter(popup => {
        popup.y -= 1;
        popup.alpha -= 0.02;
        if (popup.alpha > 0) {
            ctx.fillStyle = `rgba(0, 255, 0, ${popup.alpha})`;
            ctx.fillText('+1', popup.x + unitSize / 2, popup.y);
            return true;
        }
        return false;
    });
}

function clearBoard(){
    ctx.fillStyle = boardBackground
    ctx.fillRect(0, 0, gameWidth, gameHeight)
}
function resetGame(){
score = 0
nextTurn = null
xVelocity = unitSize
yVelocity = 0
snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
]
clearTimeout(timeout)
gameStart()
}

function changeDirection(event){
const keyPressed = event.key
const LEFT = "a"
const RIGHT = "d"
const UP = "w"
const DOWN = "s"

const goingUp = (yVelocity == -unitSize)
const goingDown = (yVelocity == unitSize)
const goingLeft = (xVelocity == -unitSize)
const goingRight = (xVelocity == unitSize)

switch (true){
    case(keyPressed == LEFT && !goingRight):
        xVelocity = -unitSize
        yVelocity = 0
        break;
    case(keyPressed == UP && !goingDown):
        xVelocity = 0
        yVelocity = -unitSize
        break;
    case(keyPressed == RIGHT && !goingLeft):
        xVelocity = unitSize
        yVelocity = 0
        break;
    case(keyPressed == DOWN && !goingUp):
        xVelocity = 0
        yVelocity = unitSize
        break;
}

}

function turn(){
    switch(true) {
        case (nextTurn == "turnLeft"):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case (nextTurn == "turnUp"):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case (nextTurn == "turnRight"):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case (nextTurn == "turnDown"):
            xVelocity = 0;
            yVelocity = unitSize;
            break;
    }
};

function createFood(){
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize
        return randNum
    }
    foodX = randomFood(0, gameWidth - unitSize)
    foodY = randomFood(0, gameWidth - unitSize)
    
}
function drawFood(){
    ctx.fillStyle = foodColor
    ctx.fillRect(foodX, foodY, unitSize, unitSize)
}
let popups = [];
function moveSnake(){
    const head = {x: snake[0].x + xVelocity,
                  y: snake[0].y + yVelocity}
    snake.unshift(head)
    //if food is eaten
    if(snake[0].x == foodX && snake[0].y == foodY){
        score += 1
        scoreText.textContent = score
        createFood()
        // Add popup
        popups.push({x: foodX, y: foodY, alpha: 1});
    }else{
        snake.pop()
    }

}
function drawSnake(){
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach((snakePart, index) => {
        // Gradient effect for snake body
        const gradient = ctx.createLinearGradient(snakePart.x, snakePart.y, snakePart.x + unitSize, snakePart.y + unitSize);
        gradient.addColorStop(0, snakeColor);
        gradient.addColorStop(1, lightenColor(snakeColor, 20));
        ctx.fillStyle = gradient;
        
        // Rounded corners for snake parts
        ctx.beginPath();
        ctx.roundRect(snakePart.x, snakePart.y, unitSize, unitSize, unitSize / 5);
        ctx.fill();
        ctx.stroke();
        
        // Eyes for the snake head
        if (index === 0) {
            const eyeSize = unitSize / 5;
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(snakePart.x + unitSize / 3, snakePart.y + unitSize / 3, eyeSize, 0, 2 * Math.PI);
            ctx.arc(snakePart.x + 2 * unitSize / 3, snakePart.y + unitSize / 3, eyeSize, 0, 2 * Math.PI);
            ctx.fill();
        }
    });
}

// Helper function to lighten a color
function lightenColor(color, percent) {
    const num = parseInt(color.replace("#",""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = (num >> 8 & 0x00FF) + amt,
    B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}

function checkGameOver(){
    switch(true){

    case(snake[0].x < 0):
        running = false
        break
    case(snake[0].x >= gameWidth):
        running = false
        break
    case(snake[0].y < 0):
        running = false
        break
    case(snake[0].y >= gameHeight):
        running = false
        break
    }

    for(let i = 1; i < snake.length; i++){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false
        }
    }
}
function displayGameOver(){
       ctx.font = "50px MV"
       ctx.fillStyle = "Black"
       ctx.textAlign = "center"
       ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2)
       running = false 
}

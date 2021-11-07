import { SNAKE_SPEED } from "./constants.js"
import { drawFood, updateFood } from "./food.js"
import { outsideGrid } from "./grid.js"
import { updateSnake, drawSnake, getSnakeHead, snakeIntersection } from "./snake.js"

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

const checkGameOver = () => {
  gameOver =  outsideGrid(getSnakeHead()) || snakeIntersection()
}

const update = () => {
  updateSnake()
  updateFood()
}

const draw = () => {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
  checkGameOver()
}

const main = (currentTime) => {
  if(gameOver) {
    if(confirm("GAME OVER")) {
      window.location = "/"
    }
    return
  }

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime)/1000
  if(secondsSinceLastRender < 1/SNAKE_SPEED) return
  lastRenderTime = currentTime
  update()
  draw()
}

window.requestAnimationFrame(main)

import { BOARD_SIZE } from "./constants.js"
import { getInputDirection } from "./input.js"

const snakeBody = [
  { x: BOARD_SIZE/2, y: BOARD_SIZE/2}
]
let newSegments = 0

export const getSnakeHead = () => snakeBody[0]

export const updateSnake = () => {
  addSegments()
  const inputDirection = getInputDirection()
  for(let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i+1] = {...snakeBody[i]}
  }
  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

export const drawSnake = (gameBoard) => {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.append(snakeElement)
  })
}

export const expandSnake = (amount) => {
  newSegments += amount
}

export const onSnake = (position, { ignoreHead = false } = {}) => {
  return snakeBody.some((segment, index) => {
    if(ignoreHead && index === 0) return false
    return equalPostions(segment, position)
  })
}

const equalPostions = (a, b) => a.x === b.x && a.y === b.y

const addSegments = () => {
  for(let i = 0; i < newSegments; i++) {
    snakeBody.push({...snakeBody[snakeBody.length - 1]})
  }
  newSegments = 0
}

export const snakeIntersection = () => {
  return onSnake(snakeBody[0], {ignoreHead: true})
}
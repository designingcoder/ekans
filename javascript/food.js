import { EXPANSION_RATE } from "./constants.js"
import { randomGridPostions } from "./grid.js"
import { expandSnake, onSnake } from "./snake.js"

const getRandomFoodPostions = () => {
  let newFoodPosition
  while (newFoodPosition === undefined || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPostions()
  }
  return newFoodPosition
}

let food = getRandomFoodPostions()


export const updateFood = () => {
  if(onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPostions()
  }
}

export const drawFood = (gameBoard) => {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

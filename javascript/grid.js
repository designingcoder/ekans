import { BOARD_SIZE } from "./constants.js"

export const randomGridPostions = () => {
  return {
    x: Math.floor(Math.random() * BOARD_SIZE) + 1,
    y: Math.floor(Math.random() * BOARD_SIZE) + 1
  }
}

export const outsideGrid = (position) => {
  return (
    position.x < 1 || position.x > BOARD_SIZE ||
    position.y < 1 || position.y > BOARD_SIZE 
  )
}
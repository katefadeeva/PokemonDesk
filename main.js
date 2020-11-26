import Pokemon from "./src/pokemon.js";
import Button from "./src/button.js";
// import random from "./src/utils.js";

export const player1 = new Pokemon({
  name: 'Pikachu',
  type: 'electric',
  hp: 500,
  selectors: 'character',
})

export const player2 = new Pokemon({
  name: 'Charmander',
  type: 'fire',
  hp: 450,
  selectors: 'enemy',
})

const btn1 =  new Button({
  name: 'btn1',
  title: 'Thunder Jolt',
  count: 5,
})

const btn2 = new Button({
  name: 'btn2',
  title: 'Aqua Jet Jolt',
  count: 8,
})

// const btn2 = {
//   name: 'Aqua Jet Jolt',
//   btn: $getElByID('btn2-click'),
//   count: 8,
//   className: '.count-btn2'
// }


btn1.clickButton(60, 20);
btn2.clickButton(20);
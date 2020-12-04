import Pokemon from "./pokemon.js";
import {addAttackButton} from "./button.js";

let stateWin = false;
const control = document.querySelector('.control');

let player1 = {};
let player2 = {};

async function addPlayer(selector) {
  const responcePlayer = await fetch('https://reactmarathon-api.netlify.app/api/pokemons?random=true');
  const randomPlayer = await responcePlayer.json();
  return new Pokemon({
    ...randomPlayer,
    selectors: selector,
  });
}

async function getPokemons () {
  const responce = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
  const result = await responce.json();
  return result;
}

function startGame () {
  const startButton = document.createElement('button');
      startButton.classList.add('button');
      startButton.innerText = `Start Game`;
      startButton.addEventListener('click', async () => {
        stateWin = false;
        player1 = await addPlayer('player1');
        player2 = await addPlayer('player2');
        clearField();

        addAttackButton(player1, player2);
        addAttackButton(player2, player1);
      })
      control.appendChild(startButton);
}

function clearField() {
  const allButtons = document.querySelectorAll('.control .button');
  allButtons.forEach(item => item.remove());
  const allP = document.querySelectorAll('.control p');

  if (allP) {
    allP.forEach(item => item.remove());
  }

  const allLog = document.querySelectorAll('#logs p');
  if (allLog) {
    allLog.forEach(item => item.remove());
  }
}

function continueGame(players) {
  const continueButton = document.createElement('button');
  continueButton.classList.add('button');
  continueButton.innerText = `Continue to play`;
  continueButton.addEventListener('click', async() => {
    stateWin = false;
    player1 = new Pokemon({
      ...players.find(item => item.name === player1.name),
      selectors: 'player1',
    })
    player2 = await addPlayer('player2');

    clearField();

    addAttackButton(player1, player2);
    addAttackButton(player2, player1);
  })
  control.appendChild(continueButton);
}

export async function winGame (name) {
  const pokemons = await getPokemons();
  clearField();
  if (name !== 'health-player1') {
    stateWin = true;
  }

  if (stateWin) {
    const result = document.createElement('p');
    result.innerText = `You won! Continue playing or start the game again?`;
    control.appendChild(result);
    continueGame(pokemons);
    startGame();
  } else {
    const result = document.createElement('p');
    result.innerText = `You lost! Start the game again.`;
    control.appendChild(result);

    startGame();
  }
}

startGame()
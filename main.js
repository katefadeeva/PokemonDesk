import Pokemon from "./src/pokemon.js";
import { pokemons } from "./pokemons.js";
import {addLogs, generateLog} from "./src/logs.js";
import random from "./src/utils.js";

let stateWin = false;
const randomPokemon1 = pokemons[random(pokemons.length) - 1];
const randomPokemon2 = pokemons[random(pokemons.length) - 1];

let player1 = new Pokemon({
  ...pokemons.find(item => item.name === randomPokemon1.name),
  selectors: 'player1',
});

let player2 = new Pokemon({
  ...pokemons.find(item => item.name === randomPokemon2.name),
  selectors: 'player2',
});

const $control = document.querySelector('.control');

const startButton = document.createElement('button');
startButton.classList.add('button');
startButton.innerText = `Start Game`;
startButton.addEventListener('click', () => {
  resetGame(pokemons);
})
$control.appendChild(startButton);

function addAttackButton(player) {
  player.attacks.forEach(item => {
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = `${item.name} (${item.maxCount})`;
    $btn.addEventListener('click', () => {
      clickButton(item, $btn);
    })
    $control.appendChild($btn);
  })
}

function resetGame(players) {
  const randomPlayer1 = players[random(players.length) - 1];
  const randomPlayer2 = players[random(players.length) - 1];
  player1 = new Pokemon({
    ...players.find(item => item.name === randomPlayer1.name),
    selectors: 'player1',
  });

  player2 = new Pokemon({
    ...players.find(item => item.name === randomPlayer2.name),
    selectors: 'player2',
  });

  clearField();

  addAttackButton(player1);
  addAttackButton(player2);
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

function countClick (attack, btn) {
  attack.maxCount--;
  if (attack.maxCount === 0) {
    btn.disabled = true;
  }
  btn.innerText = `${attack.name} (${attack.maxCount})`;
}

function clickButton (attack, btn) {
  const { maxDamage: max, minDamage: min } = attack;
  player1.changeHP(random(max,min), function (count) {
    addLogs(generateLog(player1, player2, count));
  })
  player2.changeHP(random(max, min), function (count) {
    addLogs(generateLog(player2, player1, count));
  });
  countClick(attack, btn);
}

function startGame() {

}

function continueGame() {

}

export function addResetGame (name) {
  clearField();
  if (name !== player1.name) {
    stateWin = true;
  }

  if (stateWin) {
    const result = document.createElement('p');
    result.innerText = `${name} won!`;
    $control.appendChild(result);

    const continueButton = document.createElement('button');
    continueButton.classList.add('button');
    continueButton.innerText = `Continue to play`;
    continueButton.addEventListener('click', () => {
      const randomPlayer2 = pokemons[random(pokemons.length) - 1];
      player1 = new Pokemon({
        ...pokemons.find(item => item.name === player1.name),
        selectors: 'player1',
      })
      player2 = new Pokemon({
        ...pokemons.find(item => item.name === randomPlayer2.name),
        selectors: 'player2',
      });

      clearField();

      addAttackButton(player1);
      addAttackButton(player2);

    })
    $control.appendChild(continueButton);

    const startButton = document.createElement('button');
    startButton.classList.add('button');
    startButton.innerText = `Reset Game`;
    startButton.addEventListener('click', () => {
      clearField();
      resetGame(pokemons);
    })
    $control.appendChild(startButton);

  } else {
    const startButton = document.createElement('button');
    startButton.classList.add('button');
    startButton.innerText = `Reset Game`;
    startButton.addEventListener('click', () => {
      clearField();
      resetGame(pokemons);
    })
    $control.appendChild(startButton);
  }

}
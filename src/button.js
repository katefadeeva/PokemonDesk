import {addLogs, generateLog} from "./logs.js";

const control = document.querySelector('.control');

function countClick (attack, btn) {
  attack.maxCount--;
  if (attack.maxCount === 0) {
    btn.disabled = true;
  }
  btn.innerText = `${attack.name} (${attack.maxCount})`;
}

function clickButton (player1, player2, count, attack, btn) {
  const { kick } = count;
  player1.changeHP(kick.player1, function (count) {
    addLogs(generateLog(player1, player2, count));
  })
  player2.changeHP(kick.player2, function (count) {
    addLogs(generateLog(player2, player1, count));
  });
  countClick(attack, btn);
}

export function addAttackButton(player1, player2) {
  player1.attacks.forEach(item => {
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = `${item.name} (${item.maxCount})`;
    $btn.addEventListener('click', async () => {
      const responce = await fetch(`https://reactmarathon-api.netlify.app/api/fight?player1id=${player1.id}&attackId=${item.id}&player2id=${player2.id}`);
      const body = await responce.json();
      clickButton(player1, player2, body, item, $btn);
    })
    control.appendChild($btn);
  })
}
import random from "./utils.js";

export function addLogs(log) {
  const $logs = document.querySelector('#logs');
  const p = document.createElement('p');
  p.innerText = log;
  $logs.insertBefore(p, $logs.children[0]);
}

export function generateLog(fistPerson, secondPerson, count) {
  const { name, hp: { current, total } } = fistPerson;
  const { name: nameSecond } = secondPerson;
  const logs = [
    `${name} вспомнил что-то важное, но неожиданно ${nameSecond}, не помня себя от испуга, ударил в предплечье врага. Урон: ${count}. [${current}/${total}]`,
    `${name} поперхнулся, и за это ${nameSecond} с испугу приложил прямой удар коленом в лоб врага. Урон: ${count}. [${current}/${total}]`,
    `${name} забылся, но в это время наглый ${nameSecond}, приняв волевое решение, неслышно подойдя сзади, ударил. Урон: ${count}. [${current}/${total}]`,
    `${name} пришел в себя, но неожиданно ${nameSecond} случайно нанес мощнейший удар. Урон: ${count}. [${current}/${total}]`,
    `${name} поперхнулся, но в это время ${nameSecond} нехотя раздробил кулаком <вырезанно цензурой> противника. Урон: ${count}. [${current}/${total}]`,
    `${name} удивился, а ${nameSecond} пошатнувшись влепил подлый удар. Урон: ${count}. [${current}/${total}]`,
    `${name} высморкался, но неожиданно ${nameSecond} провел дробящий удар. Урон: ${count}. [${current}/${total}]`,
    `${name} пошатнулся, и внезапно наглый ${nameSecond} беспричинно ударил в ногу противника. Урон: ${count}. [${current}/${total}]`,
    `${name} расстроился, как вдруг, неожиданно ${nameSecond} случайно влепил стопой в живот соперника. Урон: ${count}. [${current}/${total}]`,
    `${name} пытался что-то сказать, но вдруг, неожиданно ${nameSecond} со скуки, разбил бровь сопернику. Урон: ${count}. [${current}/${total}]`
  ];

  return logs[random(logs.length) - 1];
}
function $getElByID(id) {
  return document.getElementById(id);
}

const btn1 = {
  name: 'Thunder Jolt',
  btn: $getElByID('btn-kick1'),
  count: 0,
  className: '.count-btn1'
}

const btn2 = {
  name: 'Aqua Jet Jolt',
  btn: $getElByID('btn-kick2'),
  count: 0,
  className: '.count-btn2'
}

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElByID('health-character'),
  elProgressbar: $getElByID('progressbar-character'),
  changeHP,
  renderHP,
  renderHPLife,
  renderProgressbarHP,
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElByID('health-enemy'),
  elProgressbar: $getElByID('progressbar-enemy'),
  changeHP,
  renderHP,
  renderHPLife,
  renderProgressbarHP,
}

clickButton(btn1, 30);
clickButton(btn2, 15);

function clickButton(button, num) {
  button.btn.addEventListener('click', () => {
    character.changeHP(random(num));
    enemy.changeHP(random(num));
    countClick(button);
  });
}

function countClick(button) {
  button.count++;
  if (button.count >= 6) {
    button.btn.disabled = true;
  }
  addCount(button);
}

function addCount(button) {
  document.querySelector(button.className).innerText = `${6 - button.count} clicks left`;
}

function init() {
  character.renderHP();
  enemy.renderHP();
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressbarHP();
}

function renderHPLife() {
  const { elHP, damageHP, defaultHP } = this;
  elHP.innerText = damageHP + ' / ' + defaultHP;
}

function renderProgressbarHP() {
  const { elProgressbar, damageHP } = this;
  elProgressbar.style.width = damageHP + '%';
}

function changeHP(count) {
  this.damageHP -= count;
  const log = this === enemy ? generateLog(this, character, count, this.damageHP, this.defaultHP) : generateLog(this, enemy,  count, this.damageHP, this.defaultHP);
  const $logs = document.querySelector('#logs');
  const p = document.createElement('p');
  p.innerText = log;
  $logs.insertBefore(p, $logs.children[0]);

  if (this.damageHP <= 0) {
    this.damageHP = 0;
    alert('Бедный ' + this.name + ' проиграл!')
    btn1.btn.disabled = true;
    btn2.btn.disabled = true;
  }

  this.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num)
}

function generateLog(fistPerson, secondPerson, count, damageHP, defaultHP) {
  const logs = [
    `${fistPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. Урон: ${count}. [${damageHP}/${defaultHP}]`,
    `${fistPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. Урон: ${count}. [${damageHP}/${defaultHP}]`,
    `${fistPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. Урон: ${count}. [${damageHP}/${defaultHP}]`,
    `${fistPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. Урон: ${count}. [${damageHP}/${defaultHP}]`,
    `${fistPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком <вырезанно цензурой> противника. Урон: ${count}. [${damageHP}/${defaultHP}]`,
    `${fistPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. Урон: ${count}. [${damageHP}/${defaultHP}]`,
    `${fistPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. Урон: ${count}. [${damageHP}/${defaultHP}]`,
    `${fistPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. Урон: ${count}. [${damageHP}/${defaultHP}]`,
    `${fistPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. Урон: ${count}. [${damageHP}/${defaultHP}]`,
    `${fistPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. Урон: ${count}. [${damageHP}/${defaultHP}]`
  ];

  return logs[random(logs.length) - 1];
}

init();
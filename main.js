const $btn1 = document.getElementById('btn-kick1');
const $btn2 = document.getElementById('btn-kick2');

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  elProgressbar: document.getElementById('progressbar-character')
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-enemy'),
  elProgressbar: document.getElementById('progressbar-enemy')
}

clickButton($btn1, 30);
clickButton($btn2, 15);

function clickButton(btn, num) {
  btn.addEventListener('click', () => {
    changeHP(random(num), character);
    changeHP(random(num), enemy);
  });
}

function init() {
  renderHP(character);
  renderHP(enemy);
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressbarHP(person);
}

function renderHPLife(person) {
  person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
  person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
  if (person.damageHP < count) {
    person.damageHP = 0;
    alert('Бедный ' + person.name + ' проиграл!')
    $btn1.disabled = true;
  } else {
    person.damageHP -= count;
  }

  renderHP(person);
}

function random(num) {
  return Math.ceil(Math.random() * num)
}

init();
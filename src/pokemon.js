class Selectors {
  constructor(name) {
    this.elHP = document.getElementById(`health-${name}`);
    this.elProgressbar = document.getElementById(`progressbar-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor({ name, hp, type, selectors }) {
    super(selectors);
    this.name = name;
    this.hp = {
      current: hp,
      total: hp,
    }
    this.type = type;

    this.renderHP();
  }

  changeHP = (count, cb) => {
    this.hp.current -= count;
    // const log = this === enemy ? generateLog(this, character, count, this.damageHP, this.defaultHP) : generateLog(this, enemy,  count, this.damageHP, this.defaultHP);
    // const $logs = document.querySelector('#logs');
    // const p = document.createElement('p');
    // p.innerText = log;
    // $logs.insertBefore(p, $logs.children[0]);

    if (this.hp.current <= 0) {
      this.hp.current = 0;
      // alert('Бедный ' + this.name + ' проиграл!')
      // btn1.btn.disabled = true;
      // btn2.btn.disabled = true;
    }

    this.renderHP();
    cb && cb(count);
  }

  renderHP = () => {
    this.renderHPLife();
    this.renderProgressbarHP();
  }

  renderHPLife = () => {
    const { elHP, hp: { current, total } } = this;
    elHP.innerText = current + ' / ' + total;
  }

  renderProgressbarHP = () => {
    const { elProgressbar, hp: { current, total } } = this;
    const procent = current / (total / 100);
    elProgressbar.style.width = procent + '%';
  }
}

export default Pokemon;
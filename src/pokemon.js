import {addResetGame} from "../main.js";

class Selectors {
  constructor(name) {
    this.elHP = document.getElementById(`health-${name}`);
    this.elProgressbar = document.getElementById(`progressbar-${name}`);
    this.elName = document.getElementById(`name-${name}`);
    this.elImg = document.querySelector(`.${name} img`)
  }
}

class Pokemon extends Selectors {
  constructor({ name, hp, type, selectors, attacks, img }) {
    super(selectors);
    this.name = name;
    this.hp = {
      current: hp,
      total: hp,
    }
    this.type = type;
    this.attacks = attacks;
    this.img = img;
    this.renderImg();
    this.renderHP();
    this.renderName();
  }

  changeHP = (count, cb) => {
    this.hp.current -= count;

    if (this.hp.current <= 0) {
      addResetGame(this.name);
      this.hp.current = 0;
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

  renderImg = () => {
    this.elImg.src = this.img;
  }

  renderName = () => {
    this.elName.innerText = this.name;
  }
}

export default Pokemon;
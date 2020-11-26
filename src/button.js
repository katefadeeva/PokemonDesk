import { player1, player2 } from "../main.js";
import {addLogs, generateLog} from "./logs.js";
import random from "./utils.js";

class Button {
  constructor({ name, title, count }) {
    this.title = title;
    this.name = name;
    this.count = count;
  }

  className = `.count-${this.name}`;
  btn = document.getElementById(`${this.name}-click`);

  countClick = () => {
    this.count--;
    if (this.count === 0) {
      this.btn.disabled = true;
    }
    document.querySelector(this.className).innerText = `${this.count} clicks left`;
  }

  clickButton = (max, min) => {
    console.log(this.btn)
    if (this.btn !== null) {
      this.btn.addEventListener('click', () => {
        player1.changeHP(random(max,min), function (count) {
          addLogs(generateLog(player1, player2, count));
        })
        player2.changeHP(random(max, min), function (count) {
          addLogs(generateLog(player2, player1, count));
        });
        this.countClick();
      });
    }
  }

}

export default Button;
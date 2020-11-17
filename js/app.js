import {getRow} from './main1.js';
import {formattedPhone} from "./main2.js";

document.querySelector('#buttLetter').addEventListener('click',() => {
  const valueText1 = document.getElementById('text1').value;
  const valueText2 = document.getElementById('text2').value;
  const symbol = document.getElementById('symbol').value;
  document.getElementById('str').innerHTML = getRow(valueText1, valueText2, symbol);
});

document.querySelector('#buttPhone').addEventListener('click', () => {
  const phone = document.getElementById('phone').value;
  document.getElementById('phoneResult').innerHTML = `Результат: ${formattedPhone(phone)}`
})
// Homewort Task 1

function countSymbol(str, symbol) {
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    if(str.charAt(i) === symbol) count++;
  }
  return count;
}

export function getRow(firstRow, secondRow, symbol) {
  firstRow = firstRow.toLowerCase();
  secondRow = secondRow.toLowerCase();
  symbol = symbol.toLowerCase();
  if (firstRow === '' || secondRow === '') {
    alert('Введите оба слова!');
    return '';
  }

  if (symbol === '' || symbol.length > 1) {
    alert('Введите один символ!');
    return '';
  }

  if (countSymbol(firstRow, symbol) === 0 && countSymbol(secondRow, symbol) === 0) {
    return 'В этих словах нет данной буквы';
  } else {
    return (countSymbol(firstRow, symbol) > countSymbol(secondRow, symbol)) ? `Во фразе: '${firstRow}' буква '${symbol}' встречается чаще` :
        (countSymbol(firstRow, symbol) < countSymbol(secondRow, symbol)) ? `Во фразе: '${secondRow}' буква '${symbol}' встречается чаще` :
            'Данная буква одинаково встречается в этих фразах';
  }
}
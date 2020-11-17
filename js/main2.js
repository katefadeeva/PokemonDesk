// Homewort Task 2

function loopPhone(str) {
  let newStr;
  for(let i = 0; i < str.length; i++) {
    if (i === 0) {
      newStr = '+' + str.charAt(i);
    } else if (i === 1) {
      newStr += ' (' + str.charAt(i);
    } else if (i === 3) {
      newStr += str.charAt(i) + ') ';
    } else if (i === 6 || i === 8) {
      newStr += str.charAt(i) + '-';
    } else {
      newStr += str.charAt(i);
    }
  }
  return newStr;
}

export function formattedPhone(phone) {
  phone = phone.replace(/\s+/g, '');
  const regExp = /([^\d+])/;
  if(!regExp.test(phone)) {
    phone = phone.replace(/[^\d]/g, '');
    if (phone.length === 11) {
      if (phone[0] === '7') {
        return loopPhone(phone);
      } else {
        phone = '7' + phone.slice(1);
        return loopPhone(phone);
      }
    } else if (phone.length === 10) {
      phone = '7' + phone;
      return loopPhone(phone);
    } else {
      alert('Не корректно введен номер!');
      return '';
    }
  } else {
    alert('Не корректно введен номер!');
    return '';
  }
}
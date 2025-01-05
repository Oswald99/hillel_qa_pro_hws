console.log('number' + 3 + 3);
// number33, відбувається конкатенація, бо є стрінга

console.log(null + 3);
// 3 бо null конверується до 0

console.log(5 && "qwerty");
// "qwerty", бо обидва true і повертається останнє true

console.log(+'40' + +'2' + "hillel");
// 42hillel, + перед строкою, в якій число, конвертує в number і потім конкатенація числа і строки
 

console.log('10' - 5 === 6);
// false, бо 5 (10 приводится до числа, тому 10-5) не дорівнє 6

console.log(true + false);
// 1, тому що true це 1 and false - це 0 -> 1+0


console.log('4px' - 3);
// NaN, до цю стрінгу не можна привести до числа

console.log('4' - 3);
// 1, оператор - приводить '4' до числа

console.log('6' + 3 ** 0);
// 61, бо 6 так і залишається строкою і до нього конкатенується 1(результат взведення 3 у 0 ступінь)

console.log(12 / '6');
// 2, оператор / приводить '6' до числа

console.log('10' + (5 === 6));
// 10false, у дужках false і відбувається конкатенація

console.log(null == '');
// true, бо 0 == 0

console.log(3 ** (9 / 3));
// 27, спочатку виконуємо що в дужках, а потім возводимо у ступінь 

console.log(!!'false' == !!'true');
// true, бо 'false' і 'true' - це непусті рядки, тому тру і подвійним заперечення все одно буде тру з обох боків

console.log(0 || '0' && 1);
// 1, бо false || true -> поверне true '1'; а в '0' && 1 обидва true, тому поверне останнє значення - 1.

console.log((+null == false) < 1);
// false, унарний плюс ковертує null в 0 -> 0 == false, що є true і виходить true < 1, що є false; от якби було <=, то було б true

console.log(false && true || true);
// true, бо виходить false || true і поверне перше тру(у нашому випадку друге)

console.log(false && (false || true));
// false, спочатку виконується те, що в душках, тому буде false && true 

console.log((+null == false) < 1 ** 5);
// false, (+null == false) - це true, 1**5 - це 1; виходить true < 1 або 1 < 1, що є false.
/* Написати функцію pow(x,y) яка буде приймати 2 цисла, перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.
Наприклад pow(2,3) функція поверне значення 8.
Умови виконання ДЗ
Не використовувати **
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки */

function pow (x, y) {
    let result = 1;

    if (y >= 0) {
        for (let i = 0; i < y; i++) {
            result = result * x;
            
    }
    return result
}

    else if (y< 0) {

        let positiveY = -y;
        for (let i = 0; i < positiveY; i++) {
            result = result * x;
            
    }
    return 1 / result
    
}
    else { 
        return 'Both x and y must be numbers';
}}

let result1 = pow(2,3);
let result2 = pow(2,-3);
let result3 = pow(2,"bbkjj");
console.log(result1)
console.log(result2)
console.log(result3)
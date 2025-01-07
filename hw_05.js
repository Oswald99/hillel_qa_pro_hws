/* Опис ДЗ: Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. 
Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? 
Приклад функції checkProbabilityTheory(count). Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

Умови виконання ДЗ
Функція виводить інформацію
Кількість згенерованих чисел: кількість чисел
Парних чисел: кількість парних чисел
Не парних чисел: кількість не парних чисел
Відсоток парних до не парних:
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки */

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let quantityOfGeneratedNumbers = 0;
let quantityOfOddNumbers = 0;
let quantityOfEvenNumbers = 0;
let evenPercentage = 0;
let oddPercentage = 0;

function checkProbabilityTheory(count) {

    if (isNaN(count) || !Number.isInteger(count) || count <= 0){
        console.log('The count must be a positive integer');
        return;
    }

    else {
        for (let i=0; i< count; i++) {
            let result = getRandomIntInclusive(100, 1000);
            console.log(result);
            if (result % 2 === 0) {
             quantityOfEvenNumbers++;
            }
            else {
                quantityOfOddNumbers++;
            }
            quantityOfGeneratedNumbers++;
         } 
         evenPercentage = (quantityOfEvenNumbers / quantityOfGeneratedNumbers * 100).toFixed(2);
         oddPercentage = (quantityOfOddNumbers / quantityOfGeneratedNumbers * 100).toFixed(2);
    }
    
    console.log(`Кількість згенерованих чисел: ${quantityOfGeneratedNumbers}\nПарних чисел: ${quantityOfOddNumbers}\nНе парних чисел: ${quantityOfEvenNumbers}\nВідсоток парних до не парних: ${evenPercentage}% / ${oddPercentage}%`);
}

checkProbabilityTheory(4);
checkProbabilityTheory(0);
checkProbabilityTheory(-7);
checkProbabilityTheory("some str");
checkProbabilityTheory("3");
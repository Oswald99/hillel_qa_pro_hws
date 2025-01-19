/* Опис ДЗ: Припустимо, у нас є об'єкт, властивості якого — назва послуги та її вартість:

Послуги можуть додаватися по ходу роботи:

Створити метод price(), який обчислює та повертає загальну вартість наданих послуг.
Створити метод minPrice(), який повертає мінімальну ціну.
Створити метод maxPrice(), який повертає максимальну ціну.
Будь ласка, надайте наступні дані для перевірки вашої роботи:

Створіть гілку js_homework5.
Додайте в неї виконане завдання.
Надішліть вашу гілку. */


var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    price: function() {
        let totalPrice = 0;
        for (let key in this){
            if (typeof this[key] !== 'function') {
                let numberPrice = parseFloat(this[key]); 

                if (!isNaN(numberPrice)) {
                    totalPrice = totalPrice + numberPrice;
                }
            }
        }
        console.log(`Загальна вартість наданих послуг: ${totalPrice} грн.`);
    }, 

    minPrice: function() {
        let minValue = Infinity;
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                let value = parseFloat(this[key]);

                if (!isNaN(value) && value < minValue) {
                    minValue = value;
                }
            }
        }
        console.log(`Мінімальна ціна послу: ${minValue}.`);
    },

    maxPrice: function() {
        let maxValue = -Infinity;
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                let value = parseFloat(this[key]);

                if (!isNaN(value) && value > maxValue) {
                    maxValue = value;
                }
            }
        }
        console.log(`Максимальна ціна послу: ${maxValue}.`);
    },

};

services.price();
services.minPrice();
services.maxPrice();
services['масаж голови'] = '30 грн';
services['манікюр'] = '230 грн';
services.price();
services.minPrice();
services.maxPrice();
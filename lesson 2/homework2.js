var mem;
var color;
var price;
var img;


var mems = [16, 32, 64, 128, 256];
var colors = ['black', 'white', 'red'];

var memSet = false;
var colorSet = false;

while (!memSet) {
    mem = prompt('Введите объем памяти телефона:');
    for (var i = 0; i < mems.length; i++) {
        if (mem == mems[i]) {
            memSet = true;
            break;
        }
    }

    if (memSet) {
        break;
    } else {
        var diff = Number.MAX_VALUE;
        var closestMem;

        for (var i = 0; i < mems.length; i++) {
            if (Math.abs(mem - mems[i]) < diff) {
                diff = mem - mems[i];
                closestMem = mems[i];
            }
        }

        if (confirm('Введенная память отсутствует. Использовать модель с памятью' + closestMem + 'Gb?')) {
            mem = closestMem;
            memSet = true;
        }
    }
}

while (!colorSet) {
    color = prompt('Введите цвет телефона:');
    for (var i = 0; i < colors.length; i++) {
        if (color == colors[i]) {
            colorSet = true;
            break;
        }
    }
}

img = color + '.jpg';

if (mem == 32) {
    price = 500;
} else if (mem == 128) {
    price = 600;
} else if (mem == 256) {
    price = 700;
} else {

}

if (color == 'black') {
    price = price;
} else if (color == 'white') {
    price += 50;
} else if (color == 'red') {
    price += 100;
}

document.write('<img src="' + img + '"><p>Цена - ' + price + ' $</p>');
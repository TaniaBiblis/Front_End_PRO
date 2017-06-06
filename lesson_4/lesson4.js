function Phone(price, mem, color) {
    this.price = price;
    this.mem = mem;
    this.color = color;
}

function compare(phone1,phone2) {
    if (phone1.price < phone2.price)
        return 1;
    if (phone1.price > phone2.price)
        return -1;
    return 0;
}

var budget;

var mems = [32, 64, 128, 256];
var colors = ['black', 'white', 'red'];
var phones = [];

var phone1 = new Phone(500, mems[0], colors [0]);
var phone2 = new Phone(650, mems[1], colors [1]);
var phone3 = new Phone(700, mems[2], colors [2]);

phones.push(phone1);
phones.push(phone2);
phones.push(phone3);

phones.sort(compare);

console.log(phones);

budget = prompt("Сколько денег у Вас есть для покупки телеона?");

var affordablePhone;

for (var i = 0; i < phones.length; i++) {
    if (budget >= phones[i].price) {
        affordablePhone = phones[i];

        break;
    }
}

if ("undefined" === typeof affordablePhone) {
    document.write("<div><p>Телефон по введенной цене не найден.</p></div>");
} else {
    document.write("+ <div><p>Найден iPhone " + affordablePhone.color + " " + affordablePhone.mem + " по цене " + affordablePhone.price + "</p></div>");
}

let array = ["Banan", "Olma", "Shaftoli", "Nok"];
alert (`Arrayning uzunligi ${array.length}`);
let message = confirm ("Sizning arrayingizdan malumot olib tashlamoqchimiz");
let arrey = array.slice(Math.round(Math.random() * 4));

if (message == true) {
    alert (arrey.length);
}else {
    alert ("OK");
}
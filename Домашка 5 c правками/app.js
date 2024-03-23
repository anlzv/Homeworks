let titleProject = "Оценка стоимости";
let screensValue = "Шаблонные, с уникальным дизайном, с анимациями";
let screenPrice = 180;
let percentage = 14;
let fullPrice = 367;
let responsive = true;

let service1 = "";
let service2 = "";
let servicePrice1 = 0;
let servicePrice2 = 0;

titleProject = prompt("Название проекта?");
screensValue = prompt(
  "Какой тип экрана: шаблонный, с уникальным дизайном, с анимациями?"
);
responsive = confirm("Должен ли сайт быть респонсивный?");

function getTitle() {
  return (
    titleProject[0].toUpperCase() + titleProject.substring(1).toLowerCase()
  );
}
titleProject = getTitle();

// Проверка на число

function checkIsNumber(value) {
  let parsedValue = parseFloat(value);
  return parsedValue == value && !isNaN(parsedValue) && isFinite(parsedValue);
}

function getServicePrice() {
  let num = 0;

  do {
    num = prompt("Сколько это будет стоить?");
  } while (checkIsNumber(num) == false);

  return +num;
}

function getAllServicePrices() {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i == 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?", "услуга 1");
    } else if (i == 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?", "услуга 2");
    }

    sum += getServicePrice(); // sum = sum + getServicePrice();
  }
  return sum;
}

function getFullPrice() {
  return +allServicePrices + +screenPrice;
}

function getServicePercetPrice() {
  return Math.round(fullPrice - (percentage * fullPrice) / 100);
}

function getRrollbackMessage() {
  if (fullPrice >= 50000) return "Скидка 10%";
  else if (fullPrice < 50000 && fullPrice >= 20000) {
    return "Скидка 5%";
  } else if (fullPrice < 20000 && fullPrice >= 0) {
    return "Скидка не предусмотрена";
  } else if (fullPrice < 0) return "Что-то пошло не так";
}

let allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercetPrice();
titleProject = getTitle();

console.log("titleProject: " + titleProject);
console.log("screensValue: " + screensValue);
console.log("screenPrice: " + screenPrice);
console.log("percentage: " + percentage);
console.log("fullPrice: " + fullPrice);
console.log("responsive: " + responsive);
console.log("service1: " + service1);
console.log("service2: " + service2);
console.log("servicePercentPrice: " + servicePercentPrice);
console.log(getRrollbackMessage());

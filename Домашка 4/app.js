let titleProject = "Оценка стоимости";
let screensValue = "Шаблонные, с уникальным дизайном, с анимациями";
let screenPrice = 180;
let percentage = 14;
let fullPrice = 367;
let responsive = true;

titleProject = prompt("Название проекта?");
screensValue = prompt(
  "Какой тип экрана: шаблонный, с уникальным дизайном, с анимациями?"
);
responsive = confirm("Должен ли сайт быть респонсивный?");

let service1 = prompt("Какой сервис нужен?");
let servicePrice1 = prompt("Сколько это будет стоить?");
let service2 = prompt("Какой еще нужен сервис?");
let servicePrice2 = prompt("Сколько будет стоить второй сервис?");

// fullPrice = screenPrice + +servicePrice1 + +servicePrice2;
// servicePercentPrice = Math.round(fullPrice - (percentage * fullPrice) / 100);


let getAllServicePrices = function () {
  return +servicePrice1 + +servicePrice2;
};
let allServicePrices = getAllServicePrices();

function getFullPrice() {
  return +allServicePrices + +screenPrice;
}
fullPrice = getFullPrice();

function getTitle() {
  return (
    titleProject[0].toUpperCase() + titleProject.substring(1).toLowerCase()
  );
}
titleProject = getTitle();

function getServicePercetPrice() {
  return Math.round(fullPrice - (percentage * fullPrice) / 100);
}
servicePercentPrice = getServicePercetPrice();

function getRrollbackMessage() {
  if (fullPrice >= 50000) return "Скидка 10%";
  else if (fullPrice < 50000 && fullPrice >= 20000) {
    return "Скидка 5%";
  } else if (fullPrice < 20000 && fullPrice >= 0) {
    return "Скидка не предусмотрена";
  } else if (fullPrice < 0) return "Что-то пошло не так";
}

console.log("titleProject: " + titleProject);
console.log("screensValue: " + screensValue);
console.log("screenPrice: " + screenPrice);
console.log("percentage: " + percentage);
console.log("fullPrice: " + fullPrice);
console.log("responsive: " + responsive);
console.log("service1: " + service1);
console.log("servicePrice1: " + servicePrice1);
console.log("service2: " + service2);
console.log("servicePrice2: " + servicePrice2);
console.log("servicePercentPrice: " + servicePercentPrice);
console.log(getRrollbackMessage());

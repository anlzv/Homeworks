// let titleProject = "Оценка стоимости";
// let screensValue = "Шаблонные, с уникальным дизайном, с анимациями";
// let screenPrice = 180;
// let percentage = 14;
// let fullPrice = 367;
// let responsive = true;
// let sceensValue;

// const asking = function() {
//   titleProject = prompt("Название проекта?");
//   screensValue = prompt("Какой тип экрана: шаблонный, с уникальным дизайном, с анимациями?");
//   responsive = confirm("Должен ли сайт быть респонсивный?");
// }


// let service1 = prompt("Какой сервис нужен?");
// let servicePrice1 = prompt("Сколько это будет стоить?");
// let service2 = prompt("Какой нужен сервис?");
// let servicePrice2 = prompt("Сколько будет стоить второй сервис?");


// servicePercentPrice = Math.round(fullPrice - (percentage * fullPrice) / 100);

// if (fullPrice >= 50000) {
//   console.log("Скидка 10%");
// } else if (fullPrice < 50000 && fullPrice >= 20000) {
//   console.log("Скидка 5%");
// } else if (fullPrice < 20000 && fullPrice >= 0) {
//   console.log("Скидка не предусмотрена");
// } else if (fullPrice < 0) {
//   console.log("Что-то пошло не так");
// }

// let getAllServicePrices = function () {
//   return +servicePrice1 + +servicePrice2;
// };

// function getFullPrice() {
//   return +allServicePrices + +screenPrice;
// }

// function getTitle() {
//   return (
//     titleProject[0].toUpperCase() + titleProject.substring(1).toLowerCase()
//   );
// }

// function getServicePercetPrice() {
//   return Math.round(fullPrice - (percentage * fullPrice) / 100);
// }

// function getRrollbackMessage() {
//   if (fullPrice >= 50000) return "Скидка 10%";
//   else if (fullPrice < 50000 && fullPrice >= 20000) {
//     return "Скидка 5%";
//   } else if (fullPrice < 20000 && fullPrice >= 0) {
//     return "Скидка не предусмотрена";
//   } else if (fullPrice < 0) return "Что-то пошло не так";
// }

// Проверяем число ли это

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
    sum += getServicePrice(); // sum = sum + getServicePrice();
  }

  console.log("Итого: " + sum);
}

// asking();
getAllServicePrices();
// fullPrice = getFullPrice();
// servicePercentPrice = getServicePercetPrice();

// let allServicePrices = getAllServicePrices();

// titleProject = getTitle();

// console.log("titleProject: " + titleProject);
// console.log("screensValue: " + screensValue);
// console.log("screenPrice: " + screenPrice);
// console.log("percentage: " + percentage);
// console.log("fullPrice: " + fullPrice);
// console.log("responsive: " + responsive);
// console.log("service1: " + service1);
// console.log("servicePrice1: " + servicePrice1);
// console.log("service2: " + service2);
// console.log("servicePrice2: " + servicePrice2);
// console.log("servicePercentPrice: " + servicePercentPrice);
// console.log(getRrollbackMessage());

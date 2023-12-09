// import { menu } from "./model";
// import { createMenu } from "./templates";

//Создание переменных для кнопок верхнего Меню

const $ = document.querySelector.bind(document);

const docElements = document.body;

const childNodes = docElements.childNodes;
console.log(childNodes); //Получить все узлы Документа

// Вариант не работает:
getElementById("n1").addEventListener("click", function (event) {
  console.log("I was clicked!");
});
// const navButton2 = getElementById("n2").addEventListener(
//   "click",
//   generateLeftMenu()
// );
// const navButton3 = getElementById("n3").addEventListener(
//   "click",
//   generateLeftMenu()
// );
// const navButton4 = getElementById("n4").addEventListener(
//   "click",
//   generateLeftMenu()
// );
// const navButton5 = getElementById("n5").addEventListener(
//   "click",
//   generateLeftMenu()
// );

// // model.nav.forEach((element) => {
// //   element.addEventListener("click", generateLeftMenu());
// // });

// function generateLeftMenu() {
//   if (navButton1) {
//     button1 = "Apricot";
//     button2 = "Orange";
//     button3 = "Apple";
//     button4 = "Banana";
//     button5 = "Plump";
//     createMenu();
//   }
//   if (navButton2) {
//     button1 = "Точка безубыточности";
//     button2 = "";
//     button3 = "";
//     button4 = "";
//     button5 = "";
//     createMenu();
//   }
//   if (navButton3) {
//     button1 = "Расчёт годовых по вкладу";
//     button2 = "2";
//     button3 = "3";
//     button4 = "4";
//     button5 = "5";
//     createMenu();
//   }
//   if (navButton4) {
//     button1 = "1";
//     button2 = "2";
//     button3 = "3";
//     button4 = "4";
//     button5 = "5";
//     createMenu();
//   }
//   if (navButton5) {
//     button1 = "";
//     button2 = "";
//     button3 = "";
//     button4 = "";
//     button5 = "";
//     createMenu();
//   }
//   return;
// }

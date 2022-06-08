//! Ловим ошибку !\\
// const fnError = () => {
//    throw new Error('Some error')
// }


// try {
//    fnError()  // <--- ловим ошыбку в этом коде.
// } catch (error) {
//    console.error(error);
//    console.log(error.message);
// }

// console.log('Continue...');

////////////////////////////////////////////////////////////////////

//! Деструктуризация обьекта !\\

// const userProfile = {
//   name: "Bogdan",
//   commentsQty: 23,
//   hesSignedAgreement: false,
// };

// const userInfo = ({ name, commentsQty }) => {
//   if (!commentsQty) {
//     return `User ${name} has no comments`;
//   }
//   return `User ${name} has ${commentsQty} comments`;
// };

// console.log(userInfo(userProfile));

//! Мой пример кода !\\

// const userAlenka = {
//   name: 'Alena',
//   age: 26,
// }

// const userInfo = ({ name, age }) => {
//   if (!age) {
//     return `Меня зовут ${name}, я не скажу сколько мне лет`
//   }
//   return `Меня зовут ${name}, мне ${age} лет`
// }

// console.log(userInfo(userAlenka));

////////////////////////////////////////////////////////////////////

// const age = 15;

//! 1й вариант !\\

// if (age > 18) {
//   console.log("is adult");
// } else if (age >= 12) {
//   console.log("is trenager");
// } else {
//   console.log("is child");
// }

//! 2й вариант !\\

// if (age >= 18) {
//   console.log("is adult");
// }

// if (age >= 12 && age < 18) {
//   console.log("is trenager");
// }

// if (age < 12) {
//   console.log("is child");
// }

////////////////////////////////////////////////////////////////////
//! Тернарный оператор !\\

// const value = -5;

// const result = value >= 0 ? value : -value;
// console.log(result);

////////////////////////////////////////////////////////////////////

//! Циклы !\\

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// const myArray = ["first", "second", "third"];
// myArray.forEach((element, index) => {
//   console.log(element, index)
// });

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// const myObject = {
//   x: 10,
//   y: true,
//   z: "abc",
// };

// for (const key in myObject) {
//   console.log(key, myObject[key]);
// }

// Object.values(myObject).forEach((value) => {
//   console.log(value);
// });

// const myString = "Hey";
// for (const letter of myString) {
//   console.log(letter);
// }

// const myArray = [true, 10, "abc", null];
// myArray.forEach((element) => {
//   console.log(element);
// });

////////////////////////////////////////////////////////////////////

//! Модули !\\

//* обьявляем
// const myName = () => {
//   console.log("Vetal");
// };
//* експортируем
// export default myName;
//* импортируем в другой файл
// import myName from "./test.js";
//* вызиваем
// myName();
//* end

////////////////////////////////////////////////////////////////////

//! Классы и прототипы !\\

// class Comment {
//   constructor(text) {
//     this.text = text;
//     this.votesQty = 0;
//   }

//   upvote() {
//     this.votesQty += 1;
//   }

//   static mergeComments(first, second) {
//     return `${first} ${second}`;
//   }
// }

// Comment.mergeComments("First comment.", "Second comment.");

// const firstComment = new Comment("First comment");
// const secondComment = new Comment("Second comment");
// const thirdComment = new Comment("Third comment");

// console.log(firstComment);
// firstComment.upvote()
// console.log(firstComment.votesQty);
// firstComment.upvote()
// console.log(firstComment.votesQty);
// firstComment.upvote()
// console.log(firstComment.votesQty);

////////////////////////////////////////////////////////////////////

//!  !\\

// class NumberArray extends Array {
//   sum() {
//     return this.reduce((el, acc) => (acc += el), 0);
//   }
// }

// const myArray = new NumberArray(2, 5, 7);

// console.log(myArray);
// console.log(myArray.sum());

////////////////////////////////////////////////////////////////////

//! Промисы !\\

// const myPromise = new Promise((resolve, reject) => {
//   // действие в случие успешного исполнения Промиса
// });

// myPromise
//   .then((value) => {
//     // выполнять успешное действие
//   })
//   .catch((error) => {
//     // действие в случие отклонения Промиса
//   });

//***** */

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error.massege));

//***** */

// const getData = (url) =>
//   new Promise((resolve, reject) =>
//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => resolve(json))
//       .catch((error) => reject(error))
//   );

// getData("https://jsonplaceholder.typicode.com/todos")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.massege));

//***** */

////////////////////////////////////////////////////////////////////

//! ASYNC / AWAIT !\\

// async function asyncFn() {
//   // Всегда возвращает Промис
// }

// const asyncFn = async () => {
//   // Всегда возвращает Промис
// };

//***** */

// const asyncFn = async () => {
//   return 10
// };

// asyncFn()

//***** */

// const asyncFn = async () => {
//   return "Success!";
// };

// asyncFn()
//   .then((value) => console.log(value));

//***** */

// const asyncFn = async () => {
//   throw new Error("There was an errore!");
// };

// asyncFn()
//   .then((value) => console.log(value))
//   .then((error) => console.log(error.massage));

//***** */

// const timePromise = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve(), 2000));

// const asyncFn = async () => {
//   console.log("Timer starts");
//   await timePromise();
//   console.log("Timer ended");
// };

// asyncFn()

//***** */

// const timePromise = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve(), 2000));

// const asyncFn = async () => {
//   console.log("Timer starts");
//   const startTime = performance.now();
//   await timePromise();
//   const endTime = performance.now();
//   console.log("Timer ended", endTime - startTime);
// };

// asyncFn();

//***** */

// const getData = async (url) => {
//   const res = await fetch(url);
//   const json = await res.json();
//   return json;
// };

// getData("https://jsonplaceholder.typicode.com/todos/5")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.massege));

//***** */

// const getData = async (url) => {
//   const res = await fetch(url);
//   const json = await res.json();
//   return json;
// };
// const url = "https://jsonplaceholder.typicode.com/todos/5";

// try {
//   const data = await getData(url);
//   console.log(data);
// } catch (error) {
//   console.log(error.massage);
// }



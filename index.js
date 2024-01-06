// let age = 10,
//   name = "Sergii";
// const price = 100;

// age = 29;

// price = 101;

// age = 10;
// name = "Sergii";

// age = name = "10";

// console.log("Log:", age, name, price);

/////////////////////////////////////////////
// let n = 10.653625 / "test";
// console.log(n);

// console.log(1 / 0);
// console.log(999999999999999999999999999n);
// console.log(999999999999999999999999 < Infinity);

// let nrt = "Test";
// console.log(`Привет как ты ${nrt} ${2 + 6}`);

// let none = null;
// console.log(none);

// console.log(typeof nrt);
//////////////////////////////////////////////// Арифметичні оператори

// let a = 2;
// let b = 3;
// const d = 12;
// const c = "Hello World!";
// console.log(a + b);
// console.log(c);
// const e = 1 + 10;
// const f = "Test" + "Hello";
// let t = 5 ** 4;
// let c = 6;
// console.log(t, c);
// t = ++c;
// console.log(t, c);

// let x = 5;
// let y = ++x;
// console.log(y, x);
// let z = x++;
// console.log(z, x);

// let r = 5;
// console.log(++r);
// console.log(++r);
// console.log(++r);
// console.log(++r);

// let w = 5;
// // w = w + 2;
// w += 2;
// console.log(w);

// let y = 5;
// y = y + 2;
// y += 2;
// console.log(y);

// const PersonAge = Boolean;
// const DogAge = Boolean;
// console.log(PersonAge == DogAge);
//////////////////////////////////// Логічні оператори

// const userRole = 1;
// const adminRole = 2;
// const productPrice = 400;

// const ivanRole = userRole;
// const ivanBalance = 300;

// const result = ivanRole === adminRole || ivanBalance >= productPrice;

// console.log(result);

// const name = console.log("Hello world") || console.log("Hello world2");
// console.log(name);

// const result = ivanRole !== adminRole && "Admin";
// console.log(result);

// let x = 1 && 2;
// console.log(x);

// adr = null;
// qwer = null;
// asd = null;

// const ret = !(adr ?? qwer ?? asd ?? 100);
// console.log(ret);

// producttitle = "";

// producttitle ||= "Назва товару";
// console.log("producttitle:", producttitle);

////////////////////////////////////// Побітові операції

// let a = 0b1000;
// let b = 0b1100;

// console.log(a, a.toString(a));
// console.log(b, b.toString(b));

// let userRole = 0b1100;
// let adminRole = 0b0101;
// dopuskRole = ~adminRole;
// console.log(dopuskRole.toString(2));

// let freetea = 0b00001;
// freetea = freetea << 1;
// console.log(freetea.toString(2));
// freetea = freetea << 1;
// console.log(freetea.toString(2));
// freetea = freetea << 1;
// console.log(freetea.toString(2));
// // freetea = freetea << 1;
// // console.log(freetea.toString(2));
// console.log(freetea === 0b10000);

// let a = -10;
// console.log(a, a.toString(2));

////////////////////////////////// Умовні розгалудження
// const r = "ert";
// const t = 2;
// const y = 3;
// let age = 17;
// let message = age >= 18 ? "Да" : r ? t : y;
// console.log(message);

//_________________________________________
// Ukraine

// {
//   r = test;
//   let test = "test";
// }

// console.log(r);
// USA

// {
//   const test = "test";
// }
//_________________________________________

// const NAME = "My Robot";
// const MODE = 2;
// const ROOM = "Вітальня";

// const COMAND = "work1";

// if (COMAND === "work1" && MODE == 2) {
//   const name = NAME || "Robot Bil";
//   console.log("Start ${name}");
// }

// if (COMAND === "work2") {
//   const room = ROOM;
//   const mode = MODE;
//   console.log("Я прибираю кімнату ${room} в режимі ${mode}");
// }

// if (MODE === 0) {
//     console.log("Я відпочиваю)");
// }
//_________________________________________

// const user = true;
// const password = true;
// const isAdmin = false;
// const isLoginedin = false;

// if (isLoginedin) {
//   if (isAdmin) {
//     console.log("Ви в аккунті");
//   } else {
//     console.log("Доступ припинено");
//   }
// }

// if (!isLoginedin) {
//   if (user && password) {
//     console.log("Token: 2342134234234");
//     if (isAdmin) {
//       console.log("Ви в аккунті");
//     } else {
//       console.log("Доступ припинено");
//     }
//   }
// }

//_________________________________________

// const price = 100;
// let cashbacklevel = 0.04;
// let cashbackAmount = 2; // %

// const useCashBack = true;
// if (price < 100) {
//   console.log("Система доступна лыше для товарив выше за 100");
//   cashbackAmount = 0;
// } else {
//   if (cashbacklevel > 0) {
//     cashbackAmount = price * cashbacklevel;
//   }

//   cashbacklevel++;
//   if (cashbacklevel > 5) {
//     cashbacklevel = 1;
//   }
//   orderprice = price - cashbackAmount;
//   console.log(orderprice);
// }

//_________________________________________

// const buttonType = "secondary";

// if (buttonType === "primary") {
//   console.log("primary button");
// } else if (buttonType === "secondary") {
//   console.log("secondary button");
// } else if (buttonType === "basic") {
//   console.log("basic button");
// } else {
//   console.log("basic button");
// }

//_________________________________________

// const buttonType = "primary";

// switch (buttonType) {
//   case "primary":
//     console.log("primary button");
//   break;
//   case "secondary":
//     console.log("secondary button");
//   case "basic":
//     console.log("basic button");
//   default:
//     console.log("Все пропало");
// }

////////////////////////////////// Цикли

// let count = 0;
// let isFast = true;
// while (count < 5) {
//   let a = 1;
//   console.log("Hello world!", count);
//   if (isFast && count >= 4) {
//     count = 5;
//   } else {
//     count++;
//   }
// }
//_______________________________________________

// const Product_Amount = 6;

// let discountAmount = 0;
// let productCount = 0;

// while (productCount < Product_Amount) {
//   if (productCount <= 0) {
//     break;
//     console.log("стоп");
//   }
//   if (productCount <= 3) {
//     discountAmount += 1;
//   } else if (productCount > 3 && productCount <= 5) {
//     discountAmount += 1.5;
//   } else if (productCount > 5 && productCount <= 8) {
//     discountAmount += 2;
//   }
//   productCount++;

//   console.log(productCount, discountAmount);
// }

// console.log("Знижка:", discountAmount, "%");

// _______________________________________________

// let cont = 5;
// let storage = 20;

// let car = 5;
// while (car <= 5) {
//   car++;
//   storage -= cont;
//   console.log(car, storage);
// }

// _______________________________________________

// let start = 40;
// let goal = 100;

// let step = 0;
// let set = 8;
// let rest = 10;

// do {
//   if (step === 0) {
//     console.log("Ви розпочали тренування", start);
//   }

//   start++;
//   step++;

//   if (step === goal || start === goal) {
//     console.log("Ви завершили тренування");
//     break;
//   }

//   if (step % rest === 0) {
//     console.log("Зробіть перерву");
//     continue;
//   }

//   if (step % set === 0) {
//     console.log(`Ви зробили ${step / set} сета(ів)`);
//   }

//   if (step === goal / 2) {
//     console.log("Ви завершили половину тревань");
//   }

//   console.log("Поточний прогрес", step);
// } while (step < goal && start < goal);

// _______________________________________________

// for (let i = 0, j = 5; i <= j; i++) {
//   console.log("Test", i, j);

//   let t = 4;

//   if (i === t) {
//     console.log("пфф");
//   }
// }

// _______________________________________________

// for (let i = 1; i <= 10; i++) {
//   console.log(`Число====================== ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// ______________________________________________

// for (;;) {
//   console.log("sdfgsdsdf");
//   break;
// }

// ______________________________________________

////////////////////////////////// Функції

// function calcSpace(a, b, c, d) {
//   if (b !== undefined) {
//     return `${a * 4}${b}`;
//   } else {
//     return "Error";
//   }
// }
// console.log(calcSpace(5, 0));

//_______________________________________________

// function calcSpace(a, b) {
//   return `${a * 4}${b}`;
// }

// console.log(calcSpace(2, null));

//_______________________________________________

//__Рекурсія:
// function reloadTrack(amount) {
//   if (amount <= 0) {
//     console.log("Данні оновлено");
//   } else {
//     console.log("Йде оновлення данних");
//     reloadTrack(amount - 1);
//   }
// }

// reloadTrack(5);

//____________________________________________

// Замикання:
// function creator(n) {
//   return function (r) {
//     console.log(`${r}+${n}`);
//   };
// }

// const test1 = creator(5);
// test1(3);

// const test2 = creator(5);
// test2(4);

//____________________________________________
// Функціональний вираз:

// const runCommand = function (command, errorFn) {
//   const result = command();

//   if (!result) {
//     return errorFn();
//   }
// };

// runCommand(
//   () => {
//     console.log("Start");
//     return 1 - 1;
//   },
//   () => console.log("Error")
// );

//_____________________________________________
// Стрілкова функція:

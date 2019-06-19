// console.log("Hello world!");

// const variable = 1000;

// // console.log(variable); // 1000

// // variable = "Hello!";

// // console.log(variable); // 

// let a = null;

// var b = "hello";

// console.log(typeof undefinedVariable); // undefined

// console.log(typeof a); // null/object/number
// console.log(typeof(b)); // string

// a = true;

// b = 1000;

// console.log(typeof a); // bolean
// console.log(typeof(b)); // number

// var obj = {
// 	a: 5,
// 	b: "Hello"
// };

// console.log(obj.a);
// console.log(obj["a"]);

// obj.a = true;

// console.log(obj);

// obj.c = 1000;

// console.log(obj);

// delete obj.a;

// console.log(obj);

// const arr = [ 1, 213, 283, "hello", true, 100 ];

// console.log(arr.length);
// console.log(arr.push("a"));
// console.log(arr);

// console.log((1232.8213).toFixed(2));
// console.log("ioasdjaIUHsadjoaIJIsad".toUpperCase());

// console.log(new Date().getDate());
// // /asiojdsaio/.test()
// console.log(/([A-Z])\w+/.test('siodjisao'));

// const error = new Error("Lỗi rồi!!!");

// error.name = "Đơn giản là lỗi!";

// throw error;

// Function scope - var

// var a = "Hello";

// function aFunction() {
// 	var b = "World";

// 	function bFunction() {
// 		console.log(a); // Hello
// 		console.log(b); // World
// 	}

// 	bFunction();

// 	console.log(a); // Hello
// 	console.log(b); // World
// }

// aFunction();

// console.log(a); // Hello
// console.log(b); // null/undefined


// Block scope - let

// let c = 10;

// if (true) {
// 	// Block
// 	var d = 100;

// 	console.log(c); // 10
// 	console.log(d); // 100
// }

// console.log(c); // 10
// console.log(d); // 100

// function countDown(count) {
// 	for (let i = count; i >= 0; i--) {
// 		setTimeout(function() {
// 			console.log(i);
// 		}, (count-i)*1000);
// 	}
// }

// countDown(5);

// const countDownClone = countDown;

// function excute(func) {
// 	func(5);
// }

// excute(countDownClone);

// console.log("Begin");

// setTimeout(function() {
// 	console.log("Running");
// }, 0);

// console.log("End");

// function waitGirlFriend(callback) {
// 	setTimeout(function() {
// 		console.log("waitGirlFriend Done");
// 		callback();
// 	}, 5000);
// }

// function goOut() {
// 	setTimeout(function() {
// 		console.log("goOut Done")
// 	}, 1000);
// }

// waitGirlFriend(goOut);


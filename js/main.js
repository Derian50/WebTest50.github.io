
/*
 var years = confirm("Ты пидорас? ОК — это ОК, а отмена — это ОК");
 alert(typeof years);
 alert('Ну ты и пидорас');
 prompt("Ты любишь ананасы?");
var userName = prompt('Здравствуйте. Как вас зовут?', '');
if(confirm(userName + ', вам есть 18 лет?')) alert(userName + ', добро пожаловать на PonyHub!');
else alert(userName + ', пожалуйста, покиньте наш проект');
for (var i = 0; i < 10; i++) {
	confirm("Sosi" + i + "Pa3")
	}

alert("Это супер пупер мега хуюпер текстовый квест в вебе, возрадуйся же!!!");

var UserName = prompt("Ну а для начала, каков твой никнейм?");

alert("Хуевый ник, буду называть тебя аббревиатурой ЧМО");

var Race = prompt("Ну так что, ЧМО, какую рассу ты хочешь выбрать?\n1.Люди\n2.Женщины\n3.Орки\n4.Рыжие");



*/
// var i = 100;
// console.log("IronMan2");
// console.log("IronMan2");
// while(i--) { window.open('http'); }2
// var Ok = confirm("Леха блять Нажми ОК");
// while(Ok) { console.log("SOsi"); }

/*console.log("Wow lovereload work!!")
function min(a,b){
	return a > b ? b : a;
}
console.log(min(23, 10));*/

/*var x = prompt("Введите число x");
var n = prompt("Введите число n");

var result = x;
function pow(x,n){
	for (var i = 0; i < n-1; i++) {
		result*=x;
	}
	return result;
}

alert(pow(x,n));*/
/*var result = 0;
var n = Number(prompt("Введите число n"));
alert(sumTo(n));

function sumTo(n){
	var i;
	var j = n;

	for(i = 0; i < j; i++)
	{
		result+=n;
		n--;
	}
	return result;
}*/

/*var n = Number(prompt("Введите число n"));
var result;
alert(sumTo(n));
function sumTo(n){
	if (n === 1){ return 1; }
 	return n + sumTo(n - 1);
 	
}*/

/*var n = prompt("Введите число n, я возведу его в факториал");
var result;
alert(factorial(n));
function factorial(n){
	if( n === 1) return 1;
	return n*(factorial(n-1));
}*/
/*var n = prompt("Введите число n, я возведу его в Фаббоначи");
var result;
alert(fib(n));
function fib(n){
	if( n === 1 || n === 2) return 1;
	return fib(n-1)+fib(n-2);
}*/

/*var n = prompt("Введите число n, я возведу его в число Фаббоначи");
var result;
alert(fib(n));
function fib(n){
	var a = 1;
	var b = 1;
	var c = a + b;
	for (var i = 4; i <= n; i++) {
		a = b;
		b = c;
		c = a + b;
	}
	return c;
}*/
/*var speed = prompt("За сколько ms змейка будет проходить клетку" , 100);
var lenght = prompt("Какая первоначальная длина змейки" , 5);*/
/*var speed = 100;
var lenght = 5;
var h_pos= 0, f_pos= 0, score=0, len=lenght, move=1, snake=[0], dx=15, dy=10, dxy=150;

function _$ (body) { return eval("(function (a, b) { return "+body+"; })"); }
elem = _$("document.getElementById (a)");
set_class = _$("elem('cell_'+a).className = 'cell'+ (b ? ' '+b : '')");
is_snake = _$("elem('cell_'+a).className.indexOf(' s') >= 0");
new_food = _$("is_snake (f_pos = Math.floor(Math.random() * a) + b) \
                        ? new_food(a,b) : f_pos");
new_cell = _$("'<div id=cell_'+a+' class=\"cell'+(a ? '': ' s')+'\"></div>'");
new_line = _$("a ? '<div class=line></div>' : ''");
line_change = _$("dx * (parseInt ((a + b%dx)/dx) - parseInt (a/dx))");

for (var i=0; i<dxy; ++i) 
    elem ("main").innerHTML += new_cell (i) +new_line(i%dx == dx-1);

document.body.onkeydown = function(e) { 
    move = ([-1, -dx, 1, dx])[e.keyCode-37]; 
};

set_class (new_food(dxy-2, 1), 'f');
var interval = setInterval (function () {
    h_pos = (h_pos +dxy + move - line_change (h_pos, move)) %dxy;
    if ( is_snake(h_pos) && !clearInterval(interval) ){  
        alert('Ебать ты лошара, у тебя всего ' + score + " очков и ты уже проиграл");
    	
    }
    set_class (h_pos, 's');
    f_pos == h_pos && new_food(dxy-1, 0)>=0 
                   && ++len && ++score && set_class (f_pos, 'f');
    snake.push (h_pos);
    snake.length>=len && set_class (snake.shift());
}, speed);
*/

/*function ucFirst(str){
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}
console.log(ucFirst("саранча"))

function checkSpam(str){
	if ((str.indexOf("VIAGRA") >= 0) || (str.indexOf("XXX") >= 0)) return true;
	else return false;

}
console.log(checkSpam("viaGRa my love, really".toUpperCase()))*/

/*function truncate(str, maxlength){
	if(str.lenght > maxLenght){
		str = str.slice(0, maxLenght-3) + "...";
		return str;
	} else return str;
}
console.log(truncate("А вот знаете, что думали древнегреческие филсоофы о свободе?", 20));

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 3) + '...';
  }
  return str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));*/

/*function extractCurrencyValue(str){
	var newstr = "";
	for(var i = 0; i < str.length; i++)
	{
		if(!isNaN(str.charAt(i)) && (!(str.charAt(i) === ' ')))
		{ 
			newstr = String(newstr) + str.charAt(i);
		}
	}
	return newstr;
}
 console.log(extractCurrencyValue("Я потратил 120 доларов на эту бл№*\"ть, ненавижу блять число 4"));
 console.log("Ты умрешь страшной и мучительной смертью, все от тебя отвернутся, запомни");*/

/*"use strict";*/

/*function isEmpty(obj){
	for(key in obj){
		return false;
	}
	return true;
}
var schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "подъем";
console.log(isEmpty(schedule));*/

/*var salaries = {
	"Вася": 100,
	"Петя": 300,
	"Даша": 250
}

function sumSal(obj){
	var result = 0;
	for(key in obj){
		result+=obj[key];
	}
	return result;
}

console.log(sumSal(salaries));*/

/*var salaries = {
	"Вася": 320,
	"Петя": 320,
	"Даша": 320
};

function maxSal(obj){
	result = "нет сотрудников"
	max = 0;
	for(key in obj){
		if(obj[key] > max){
		result = key;
		 max = obj[key]
		}
	}
	return result;
}
console.log(maxSal(salaries));*/
/*"use strict"
var menu = {
	width: 2200,
	height: 3000,
	title: "+233"
};

function multiplyNumeric(obj){
	for(key in obj){
		if(!isNaN(obj[key])){
			obj[key] *= 2;
		}
	}
	return obj;
}
console.log(multiplyNumeric(menu));*/


/*var goods = [2, 4, 12, 1512, "Sosi", "posom", 18, 'иди нахуй блять'];
goods.push('Компьютер');

function getLastArr(arr){
	return arr[arr.length-1];
}
console.log(getLastArr(goods));

*/
/*
var styles = ["Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-Ролл");
console.log(styles);
styles[styles.length-2] = "Классика";
console.log(styles);
alert(styles.shift());
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles);
*/

/*
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"]
var min = 0;
var max = arr.length-1;
var rand = min + Math.floor(Math.random() * (max + 1 - min));
for(var i = 0; i < 15; i++){
	rand = min + Math.floor(Math.random() * (max + 1 - min)); 
	console.log(arr[rand]);
}*/
/*

var numbers = [];
while (true) {
  var value = prompt("Введите число", 0);
  if (value === "" || value === null || isNaN(value)) break;
  numbers.push(+value);
}
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
alert(sum);*/
/*
function find(arr, value){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === value) return i;
	}
	return -1;
}

arr = ["test", 2, 1.5, false];

console.log(find(arr, "test")); // 0
console.log(find(arr, 2)); // 1
console.log(find(arr, 1.5)); // 2
console.log(find(arr, 0)); // -1*/


/*var arr = [5, 4, 3, 8, 0 ,7 ,8 ,2, 10, 7, 8, 22, 5];
var filtered = filterRange(arr, 0, 2);
function filterRange(arr, a, b){
	var newArr = [];
	for(var i = 0; i<arr.length; i++){
		if(arr[i] <= b && arr[i] >= a){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
console.log(filtered);*/


/*console.log(Math.round(10/3));*/

/*var arr = [];
var arrCommon = [];
var n = 10000;
var p = 2;
for(var i = 0; i < n; i++){
	arr.push(i);
}

while(p*p < n){
	for(var i = 0; i < arr.length; i++){
		if((!(arr[i]/p === Math.floor(arr[i]/p)) || arr[i]/p === 1) && arr[i] != 1) arrCommon.push(arr[i]);
	}
	arr = arrCommon;
	arrCommon = [];
	p++;
}
var result = 0;
for(var i = 0; i < arr.length; i++){
	result+=arr[i];
}
console.log(arr);
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
//1, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
*/
/*var obj = {
  className: 'open menu'
}
function addClass(obj, cls){
	var detect = false;
	var arr = obj.className.split(' ');
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === cls){
			detect = true;
		}
	}
	if(!detect){
	 	obj.className = obj.className + ' ' + cls; 	
	}
}
addClass(obj, 'new'); //Я б-г
addClass(obj, 'open');
addClass(obj, 'me'); 
console.log(obj);
*/
/*
function camelize(str){
	var arr = str.split('');
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === '-'){
			arr[i+1] = arr[i+1].toUpperCase();
			arr.splice(i, 1);
		}
	}
	return arr.join('');
}
*/
/*

function camelize(str) {
  var arr = str.split('-');
  console.log(arr);
  for (var i = 1; i < arr.length; i++) {
    // преобразовать: первый символ с большой буквы

    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join('');
}

//console.log(camelize("background-color"));
//console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));*/

/*var obj = {
  className: 'open menu open open blabla suka'
};
function removeClass(obj, str){
	var arr = obj.className.split(' ')
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === str){
			arr.splice(i, 1);
			i--;
		}
	}
	obj.className =  arr.join(' ');
}

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса
console.log(obj);*/
/*function filterRangeInPlace(arr, a, b) {
  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (val < a || val > b) {
      arr.splice(i--, 1);
    }
  }
}
var arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log( arr ); // [3, 1]*/

/*var arr = [5, 2, 1, -10, 8];
for(var j = 0; j < arr.length; j++){
for(var i = 0; i < arr.length; i++){
	var a;
	var b;
	if(arr[i+1] < arr[i]){
		a = arr[i+1];
		b = arr[i];
		arr[i+1] = b;
		arr[i] = a;
	}
}
}
console.log(arr);*/
/*
var arr = [5,2,1,-10,8];
function compareReversed(a,b){
	return a-b;
}
arr.sort(compareReversed)
console.log(arr);*/

/*var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = arr.slice().sort();

console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)*/

/*var arr = [1,2,3,4,5];
arr.sort(randomSort);
function randomSort(a,b){
	return Math.random()-0.5;
}
console.log(arr);
console.log(Math.random()-0.5);
console.log(Math.random()-0.5);*/

/*var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

function AgeSort(a,b){
	return a.age-b.age;
}
people.sort(AgeSort)

// теперь people: [vovochka, masha, vasya]
console.log(people); // 6
console.log(vasya.age);
*/
/*var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};*/

/*function printList(list){
	var tmp = list;
	while(tmp){
		console.log(tmp.value);
		tmp = tmp.next;
	}
}
printList(list);*/

/*function printList(list){
	if(list){
	console.log(list.value);
	list = list.next;
	printList(list);
	}
}
printList(list);*/
/*function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}
printReverseList(list);*/

/*
function printReverseList(list) {
  var arr = [];
  var tmp = list;
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  for (var i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}
printReverseList(list);*/

/*var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор", "ВоЗ, Горкиб"];

function aclean(arr){
	var word1;
	var word2;
	for(var i = 0; i < arr.length; i++){
		word1 = arr[i].split('');
	for(var j = 0; j < arr.length; j++){
		word2 = arr[j].split('');
		if(word1.length === word2.length && i != j){
			word1.sort();
			word2.sort();
			console.log(word1 + ' i ' + i);
			console.log(word2 + ' j ' + j);

			for(var z = 0; z < word1.length; z++){
				if(word1[z].toUpperCase() != word2[z].toUpperCase()){
					break;

				}else if(z === word1.length-1){
				console.log('Элемент ' + arr[j] + ' Удален')
				arr.splice(j, 1);
			}
		}
	}
	}	
}
}
console.log(arr);
aclean(arr);
console.log(arr);
*/
/*function unique(arr){
	for(var i = 0; i < arr.length-1; i++){
		for(var j = 0; j < arr.length; j++){
		if(arr[i] === arr[j] && i != j){
			arr.splice(j,1);	
			j--;
		}									//моё решение
	}
	}
	return arr;
}
var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"];
console.log(unique(strings));*/

/*function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {	//быстрое решение
    var str = arr[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }

  return Object.keys(obj); // или собрать ключи перебором для IE8-
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) ); // кришна, харе, 8-()*/

/*
var result = '';
var a;
for(var i = 0 ; i < 400; i++){
	a = Math.round(Math.random());
	if(a === 1) result += 'O';
	if(a === 0) result += 'P';
}
console.log(result);

// поиск самой длинной цепочки одинаковых букв

var arrResult = result.split('');
var findMax = 1;
var b = 0;
for(var i = 1; i < result.length; i++){
	if(arrResult[i-1] === arrResult[i]){
		findMax++;
	}
	else if(arrResult[i-1] != arrResult[i]){
		if(b < findMax)	b = findMax;
		findMax = 1;
	}
}
console.log(b);*/


/*console.log(navigator.platform);
console.log(navigator.userAgent);


var Title = document.getElementById("Title");
console.log(Title);
Title.innerText = "#####";
Title.onclick = function(){
	Title.innerText = "000000";
}

console.log(Title);*/

var upgrade_number = 10;
var text_upgrade_num = document.getElementById("upgrade");
var hp_value_1 = document.getElementById("hp_value_1");
var hp_add_1 = document.getElementById("hp_add_1");
var shield_value_1 = document.getElementById("shield_value_1");
var shield_add_1 = document.getElementById("shield_add_1");
var atack_value_1 = document.getElementById("atack_value_1");
var atack_add_1 = document.getElementById("atack_add_1");
hp_add_1.onclick = function(){
	if(upgrade_number > 0) {
		hp_value_1.innerHTML += ' ◘';
		upgrade_number--;
		text_upgrade_num.innerHTML = upgrade_number;
	}
}
shield_add_1.onclick = function(){
	if(upgrade_number > 0) {
		shield_value_1.innerHTML += ' ◘';
		upgrade_number--;
		text_upgrade_num.innerHTML = upgrade_number;
	}
}
atack_add_1.onclick = function(){
	if(upgrade_number > 0) {
		atack_value_1.innerHTML += ' ◘';
		upgrade_number--;
		text_upgrade_num.innerHTML = upgrade_number;
	}
}








/*


var arr = ["Есть", "жизнь", "на", "Марсе"];
arrLength = arr.map(function(s){
	return s.length;
})
console.log(arrLength);
*/


/*arr = [1, 2, 3, 4, 5, 6, 7];

function getSums(arr){
	var result = arr.reduce(function())
}

getSums(arr);*/
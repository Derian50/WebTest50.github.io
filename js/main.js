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
var speed = 100;
var lenght = 5;
var h_pos=f_pos=score=0, len=lenght, move=1, snake=[0], dx=15, dy=10, dxy=150;

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

function extractCurrencyValue(str){
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
 console.log("Ты умрешь страшной и мучительной смертью, все от тебя отвернутся, запомни");
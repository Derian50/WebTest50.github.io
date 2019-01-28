var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

//добавляем изображения
var imgMexRed = new Image();   
imgMexRed.src = 'img/MexRed.png'; 
var imgMexYellow = new Image();  
imgMexYellow.src = 'img/MexYellow.png';
var imgShield = new Image();   
imgShield.src = 'img/Shield.png';
var imgShield180 = new Image();  
imgShield180.src = 'img/Shield180.png';
var imgbullet = new Image();  
imgbullet.src = 'img/bullet.png';
var imgKAPKAC_left = new Image();  
imgKAPKAC_left.src = 'img/KAPKAC_left.png';
var imgKAPKAC_right = new Image();  
imgKAPKAC_right.src = 'img/KAPKAC_right.png';
var imgButtonFight = new Image();  
imgButtonFight.src = 'img/ButtonFight.png';
var imgButtonFirstWin = new Image();
imgButtonFirstWin.src = 'img/FirstWin.png';
var imgButtonSecondWin = new Image();
imgButtonSecondWin.src = 'img/SecondWin.png';
var imgButtonTie = new Image();
imgButtonTie.src = 'img/tie.png';


	/*	x = 20;
		context.fillStyle = 'red';*/
//context.clearRect(0,0,900,500);
//context.fillRect(x, 50, 50, 10); //закрашенный прямоугольник 1 и 2 - координаты 3 и 4 - размер
/*var z = setInterval(function(){
	context.clearRect(0,0,500,500);
	context.fillRect(x, 10, 20, 50);
	x+=10;
},1000)
*/

//чекаем надо ли запускать пули + координаты пули
var ShotLeftTrue = false;
var ShotRightTrue = false;
var bulletX1 = 155;
var bulletX2 = 747
var bulletY = 392;
var temp_Atack1;
var temp_Atack2;
var FirstWin = false;
var SecondWin = false;

/*	var temp_Atack1 = Atack_robot_1;
	var temp_Shield2 = Shield_robot_2;
	context.drawImage(imgbullet, bulletX1, bulletY, 20, 4);
	if(bulletX1 <= 680){
	bulletX1 += 40
	}
	else if(Shield_robot_2 > 0){
		temp_Shield2 = Shield_robot_2 - Atack_robot_1;
		temp_Atack1 = temp_Atack1 - Shield_robot_2;
		if(temp_Atack > 0){

		}
	}
}*/
/*function fireRight(){
	context.drawImage(imgbullet, bulletX2, bulletY, 20, 4);
	if (bulletX2 > 0) bulletX2 -= 40;
}*/
//функция для начала боя
function StartFight(){
		/*if(Fight){
				setInterval(function(){
				StartFight();
				}, 2000)*/
		if(bulletX1 === 155 && bulletX2 === 747){
			console.log("sic");
			really_Shield_robot_1 = really_Shield_robot_1 + (Shield_robot_1/2);
			if(really_Shield_robot_1 > Shield_robot_1) really_Shield_robot_1 = Shield_robot_1;
			really_Shield_robot_2 = really_Shield_robot_2 + (Shield_robot_2/2);
			if(really_Shield_robot_2 > Shield_robot_2) really_Shield_robot_2 = Shield_robot_2;
			
			temp_Atack1 = Atack_robot_1;
			temp_Atack2 = Atack_robot_2;
	
			ShotLeftTrue = true;
			ShotRightTrue = true;
			
		}
			}
//
function fireLeft(){
	context.drawImage(imgbullet, bulletX1, bulletY, 30, 2);
	if(bulletX1 < 900){
		bulletX1+=20;
	} 
	else{
		bulletX1 = 155;
		ShotLeftTrue = false;
	}
	if(bulletX1 >= 680){
		temp_Atack1 = temp_Atack1 - really_Shield_robot_2;
		really_Shield_robot_2 = really_Shield_robot_2 - Atack_robot_1;
		if(really_Shield_robot_2 <= 0) really_Shield_robot_2 = 0;
		if(really_Shield_robot_2 > 0){ 
			ShotLeftTrue = false;
			bulletX1 = 155;
		}
		if(temp_Atack1 > 0 && bulletX1 > 740){
			really_HP_robot_2 = really_HP_robot_2 - temp_Atack1;
			if(really_HP_robot_2 <= 0) {
				FirstWin = true;
				ShotLeftTrue = false;
				Fight = false;
				really_HP_robot_2 = 0;
			}
			if(really_HP_robot_2 > 0){
				ShotLeftTrue = false;
					bulletX1 = 155;
			}
		}
	}
}
function fireRight(){
	context.drawImage(imgbullet, bulletX2, bulletY, 30, 2);
	if(bulletX2 > 0){ 
		bulletX2 -=20;
	}
	else{
		bulletX2 = 747;
		ShotRightTrue = false;
	}
	if(bulletX2 <= 215){
		temp_Atack2 = temp_Atack2 - really_Shield_robot_1;
		really_Shield_robot_1 = really_Shield_robot_1 - Atack_robot_2;
		if(really_Shield_robot_1 <= 0) really_Shield_robot_1 = 0;
		if(really_Shield_robot_1 > 0) {
			ShotRightTrue = false;
			bulletX2 = 747;
		}
		if(temp_Atack2 > 0 && bulletX2 < 140){
			really_HP_robot_1 = really_HP_robot_1 - temp_Atack2;
			if(really_HP_robot_1 <= 0) {
				SecondWin = true;
				ShotRightTrue = false;
				Fight = false;
				really_HP_robot_1 = 0;
			}
			if(really_HP_robot_1 > 0){
				ShotRightTrue = false;
					bulletX2 = 747;
				}
		}
	}
}
//чекаем координаты мыши и нажимаем таким образом на кнопочки
canvas.addEventListener('click', getClickXY, false);
function getClickXY(event){
	console.log(event);
    var x = event.pageX;
    var y = event.pageY;
    console.log(x, y);
    if(!Fight && x > 332 && x < 378 && y > 64 && y < 103 && PowerScore_robot_1 >= 1 && HP_robot_1 < 19){
    	PowerScore_robot_1--;
  		HP_robot_1+=1.5;
  		really_HP_robot_1 = HP_robot_1;
    }
    else if(!Fight &&x > 287 && x < 333 && y > 108 && y < 152 && PowerScore_robot_1 >= 1){
    	PowerScore_robot_1--;
    	Shield_robot_1++;
  		really_Shield_robot_1 = Shield_robot_1;
    }
    else if(!Fight &&x > 239 && x < 287 && y > 150 && y < 197 && PowerScore_robot_1 >= 1){
    	PowerScore_robot_1--;
    	Atack_robot_1++;
    }
  	else if(!Fight &&x > 522 && x < 567 && y > 61 && y < 108 && PowerScore_robot_2 >= 1 && HP_robot_2 < 19){
    	PowerScore_robot_2--;
  		HP_robot_2+=1.5;
  		really_HP_robot_2 = HP_robot_2;
    }
    else if(!Fight &&x > 567 && x < 615 && y >  108 && y < 154 && PowerScore_robot_2 >= 1){
    	PowerScore_robot_2--;
    	Shield_robot_2++;
    	really_Shield_robot_2 = Shield_robot_2;
    }
    else if(!Fight &&x > 615 && x < 663 && y > 154 && y < 198 && PowerScore_robot_2 >= 1){
    	PowerScore_robot_2--;
    	Atack_robot_2++
    }
    else if(!Fight &&x > 325 && x < 577 && y > 226 && y < 294){
		Fight = true;
    	setInterval(function(){
					StartFight()
					}, 1000);
    }
}



// создаём параметры для текста 
context.textAlign = "center";
// хар-ки хп, щита и атаки
var HP_robot_1 = 1;
var really_HP_robot_1 = 1;
var HP_robot_2 = 1;
var really_HP_robot_2 = 1;
var Shield_robot_1 = 0;
var really_Shield_robot_1 = 0;
var Shield_robot_2 = 0;
var really_Shield_robot_2 = 0;
var Atack_robot_1 = 0;
var Atack_robot_2 = 0;
var PowerScore_robot_1 = 10;
var PowerScore_robot_2 = 10;
var Fight = false;
//психология влияния
//функции для отрисовки всего и вся
//по названию должно быть понятно

function drawHP(){
	var countHP1 = 0;
	var countHP2 = 0
	context.fillStyle = "#67E300";
	//рисуем для левого робота хп
	for(var z = 0; z < HP_robot_1; z++){
		countHP1++;
		if(countHP1<11) context.fillRect(107+z*22, 64, 25, 41);
		if(countHP1 === 10) context.fillRect(107, 20, 25, 41)
	}
	for(var x = 0; x < HP_robot_1-11; x++){
		countHP1++;
		context.fillRect(129+x*22, 20, 25,41);
		if(countHP1 >= 19) context.clearRect(289, 20, 25, 41);
	}
	//и для правого
	for(var z = 0; z < HP_robot_2; z++){
		countHP2++; //context.width-107-z*22
		if(countHP2<11) context.fillRect(canvas.width-132-z*22, 64, 28, 41);
		if(countHP2 === 10) context.fillRect(canvas.width-129, 20, 25, 41)
	}
	for(var x = 0; x < HP_robot_2-11; x++){
		countHP2++;
		context.fillRect(canvas.width-157-x*22, 20, 28,41);
		if(countHP2 >= 19) context.clearRect(canvas.width-313, 20, 25, 41);
	}

}
function drawShieldAndAtack(){
	context.fillStyle = "#4671D5"
	for(var z = 0; z < Shield_robot_1; z++){
		context.fillRect(61+z*22, 108, 25, 43);
	}
	for(var z = 0; z < Shield_robot_2; z++){
		context.fillRect(canvas.width-83-z*23, 108, 25, 43);
	}
	context.fillStyle = "#FF1800"
	for(var z = 0; z < Atack_robot_1; z++){
		context.fillRect(12+z*23, 154, 23, 43);
	}
	for(var z = 0; z < Atack_robot_2; z++){
		context.fillRect(canvas.width-35-z*23, 154, 23, 43);
	}
}
function drawNumbers(){

	context.font = "64px Comic Sans MS"
	context.fillStyle = "Black";
	context.fillText(PowerScore_robot_1, 60, 90);
	context.fillText(PowerScore_robot_2, canvas.width-60, 90);
	context.fillStyle = "#4671D5"
	context.font = "32px Comic Sans MS"
	context.fillText(really_Shield_robot_1 + "/" + Shield_robot_1, 185, 276);
	context.fillText(really_Shield_robot_2 + "/" + Shield_robot_2, 715, 276);
	context.fillStyle = "#67E300"
	context.fillText(really_HP_robot_1 + "/" + HP_robot_1, 45, 276);
	context.fillText(really_HP_robot_2 + "/" + HP_robot_2, 840, 276);
	context.fillStyle = "#FF1800"
	context.fillText(Atack_robot_1, 160, 371);
	context.fillText(Atack_robot_2, 735, 371);
	

}
function drawKAPKAC(){
	context.drawImage(imgKAPKAC_right, canvas.width-380, 14, 370, 186);
	context.drawImage(imgKAPKAC_left, 10, 14, 370, 186);
}
function drawButtons(){
	
	if(!Fight){
		if(SecondWin && FirstWin){
			context.drawImage(imgButtonTie, canvas.width/2-128, 228, 256,64);
		}else if(SecondWin){
			context.drawImage(imgButtonSecondWin, canvas.width/2-128, 228, 256,64);
		}else if(FirstWin){
			context.drawImage(imgButtonFirstWin, canvas.width/2-128, 228, 256,64);
		}else context.drawImage(imgButtonFight, canvas.width/2-128, 228, 256, 64);
	}
}
function drawMexAndShields(){
	context.drawImage(imgMexRed, canvas.width-160, canvas.height-180, 157, 177); //рисуем картинку в канвас
	context.drawImage(imgMexYellow, 3, canvas.height-180, 157, 177);
	context.drawImage(imgShield, canvas.width-160-60, canvas.height-200, 61, 200);
	context.drawImage(imgShield180, 3+160, canvas.height-200, 61, 200);
}
//отрисовка всего нахуй
function gameLoop(){
	context.clearRect(0,0,900,500);

	
	if(ShotRightTrue) fireRight();
	if(ShotLeftTrue) fireLeft();
		 
		
	drawHP();
	drawShieldAndAtack();
	drawNumbers();
	drawKAPKAC();
	drawButtons();
	drawMexAndShields();
	
		
	requestAnimationFrame(gameLoop);
}

//запуск веселухи
gameLoop();




// Начало скрипта для текста и книги
var S01E01 = document.getElementById("S01E01");
var S01E02 = document.getElementById("S01E02");
var S01E03 = document.getElementById("S01E03");
var S02 = document.getElementById("S02");
var S02E01 = document.getElementById("S02E01");
var S02E02 = document.getElementById("S02E02");
var S02E03 = document.getElementById("S02E03");
var S02E04 = document.getElementById("S02E04");
var returnToS01 = document.getElementById("returnToS01");



returnToS01.style.visibility='hidden';

S01E01.onclick = function(){
	S02E01.innerHTML = "☺— А НУ СУКА БЫСТРО ОТПУСТИЛИ МЕНЯ ТВАРИ Я ВАС ВСЕХ ммхмхм... — Вот что успел произнести Валера";
	S02E02.innerHTML = "☺ Чтож, это была плохая идея. Наш эльф БДСМщик не любит злых мальчиков, он привязал Валеру к потолку и жёстко отымел его во все дыры. После этого он бросил обконченного пацана на пол и нассал на него.";
	S02E03.innerHTML = "☺ После долгих ночей, проведённых наедине с психологической травмой, Валера скончался прямо в ебаном лагере эльфов.";
	S02E04.innerHTML = "☺ Хотите спасти анальную девственность Валеры?";
	returnToS01.style.visibility='visible';

}
returnToS01.onclick = function(){
	S02E01.innerHTML = "";
	S02E02.innerHTML = "";
	S02E03.innerHTML = "";
	S02E04.innerHTML = "";
	returnToS01.style.visibility='hidden';
}

function Part2(){
 	console.log("fisk");
	S02E02.innerHTML = "Что вы хотите? — всё же произнес Валера. Ему показалось, что это максимально нейтральная и анальносберегающая фраза. После этих слов эльф наконец-то начал свой долгожданный диалог, ради которого он и сидел с этим пацаном уже длительное время.";
	S02E03.innerHTML = "*начало диалога*"
	S02E04.innerHTML = "*середина диалога*"
	S02E05.innerHTML = "*конец диалога*"	
	S02E06.innerHTML = "Х-х-хорошо, я понял — После продолжительной беседы, Валера наконец осознал всю суть пиздеца, в который попал. Ему предстояло быть доносчиком на своих, выдавая всё, что знает, эльфам. Также ему могут давать и другие задания, о которых будет известно позже. Если он решит предать фиолетовокожих, то его пообещали выебать, что звучало весьма убедительно."
	S02E07.innerHTML = "Вырубив, его выкинули куда-то в лес, примерно туда же, откуда и взяли."
	S02E08.innerHTML = "Это всё очень огорчило Валеру. Проснувшись, ему стало грустно, одиноко, тоскливо. Он вспомнил о кончине своих родителей, об обстоятельствах их смерти, а также о других вещах, которые также заставили его рассудок помутниться. Он как в бреду доковылял до своего дома, не замечая ничего вокруг. "
	S02E09.innerHTML = "Проспав, казалось бы, несколько суток, он проснулся и всё обдумал. Заняло это также почти весь день, в течение которого он просто пялился в потолок, порой в окно, но больше в потолок. Этот очень продуктивный день запомнился ему тем, что он смирился и решил жить дальше и бла-бла-бла. Но потом он вспомнил, что будет крысой среди своих, и ему что-то взгрустнулось."
	S02E10.innerHTML = "К счастью(лол, нет), в дверь постучали. Очко сжалось. С одной стороны, он понимал, что рановато от него узнавать информацию, с другой, он нихуя не разузнал в эти дни. Чё-то стрёмно ему стало. "
	S02E11.innerHTML = "Успокоив внутреннюю истеричку и открыв дверь, Валера увидел пацана. Обычного. Деревенского. Он его даже знал. Но подумать о нём было мало времени, т.к. тот стал сразу говорить."
	S02E12.innerHTML = "Говорил он красиво, с энтузиазмом, Валера даже проникся. Однако, он как-то не уловил сути, так что пришлось попросить сократить весь монолог до одного предложения."
	S02E13.innerHTML = "— Я знаю, что с тобой случилось, я хочу помочь. — сообщил таинственный друг-незнакомец(почти).  <br \/>  — Пошли обкашляем это — Валера позиционировал себя как хороший хозяин, так что ещё и предложил гостю чаю с печеньками. "
	S02E14.innerHTML = "— Т.е. ты просто увидел как меня схватили эльфы, а всё остальное додумал сам?<br \/>— Угадал ведь.<br \/>— Ну да."
	S02E15.innerHTML = "— Так чем ты можешь мне помочь, да и зачем? — После этого последовал ещё один монолог, но Валера зная страсть собеседника к таким вещам всё же выслушал и понял его.";
	S02E16.innerHTML = " Оказывается, тот из каких-то своих источников знает, чего хотят эльфы, но распространяться об этом не желает. Просто надо помешать фиолетовым и всё. Что ж, Валеру это устраивало более чем. "
	S02E17.innerHTML = " План был составлен, обговорен, и приведён в действие."
	S02E18.innerHTML = "Эльфы назначили встречу Валере, которая должна произойти меньше чем через час. Таких уже было несколько десяток, так что достоверность информации, которую скоро получат эльфы, не должна вызывать сомнений."
	S02E19.innerHTML = "— И действительно, эти фиолетовые лошки с лёгкостью заглотнули наживку, целиком полагаясь на слова Валеры. Они и взаправду решили, что какой-то пацан может знать место хранения городской казны, вплоть до того, сколько там денег."
	S02E20.innerHTML = "— План был в том, чтобы красочно рассказать о целой горе денег, которая только того и ждёт, что её кто-то украдёт. Конечно, всё было преподнесено так, будто это прямо таки чудо, что Валера узнал об этом. Как бы то ни было, план сработал. "
	S02E21.innerHTML = '— В час Х, как и планировалось, был засечён отряд инокожих, которые незаметно(нет) пробирались к одному неприметному зданию на отшибе, у которого стояли лишь два человека, якобы "охранники".'
	S02E22.innerHTML = '— Операцией руководил один мужик, который вроде как какой-то крутой военный. Ему рассказал об эльфах тот парень, который приходил к Валере недавно, и которого, как оказалось, зовут Салех. Никто так и не узнал, что Валера пусть и немножко, но побыл "крысой", а сознаваться он всё ещё не собирался, ведь вреда для своего города он не наносит. Почти всё, что говорил Валера врагам было ложью, очень, надо сказать, профессиональной ложью. Ведь надо было рассказывать так, чтобы и вроде бы удостовериться в полученной информации можно было, но не хотелось.'
	S02E23.innerHTML = "— Как и ожидалось, эльфы шустро вырубили двух охранников и пробрались внутрь здания, оставив примерно троих на шухере. Внутри почти ничего не было, так что захват эльфов должен был произойти быстро. И действительно, не успел Валера толком всех разглядеть, как тут же этих троих, что на шухере, заломали и уложили мордой в пол. Они, вроде бы, даже и не сопротивлялись особо. Странно конечно, но всякое бывает. Несколько солдат вошли по трое в здание с двух сторон, планируя выбить врагов из здания."
	S02E24.innerHTML = "...<br\/>...<br\/>...<br\/>"
	S02E26.innerHTML = "— Чтож, выяснилось, что Валера не самый лучший лжец. Конечно, он об этом подозревал и сам, но когда уже ИХ взяли в плен эльфы, он в этом окончательно убедился. Начнём с того, что пока люди готовили засаду на эльфов, те готовили засаду на людей и... Вторая перебила первую. Это стало полной неожиданностью для всех солдат, что принимали участие в захвате фиолетовых, так что бой не продлился так уж чтобы долго. "
	S02E27.innerHTML = "— Пока Валеру и компанию вели к поселению эльфов, он много думал о собственной тупости, а также о трусости — ведь расскажи он всё какому-то то там капитану, этого точно удалось бы избежать. Вместо этого он зацепился за Салеха, вероятнее всего, потому что тот первый предложил помощь. Его, кстати, не было видно. Может, убежал."
	S02E28.innerHTML = '— По ощущениям, шёл он долго, но повязка на глазах мешала ориентироваться. Несмотря на это, он почуствовал, что все остановились, поднялась возня. Валера встал как вкопаный, как, наверное, и остальные заложники. Однако, довольно скоро ему сказали, цитирую "Заебал стоять помоги давай, блять". Оказалось, что на самом-пресамом деле это была двойная ловушка людей. Т.е. люди знали, что эльфы устроят западню, и, чтобы узнать где их поселение, дали захватить нескольких людей в плен, чтобы те отвели их к себе и выдали своё местоположение. Валера мысленно похлопал плану, но на деле выматерелся, ведь его-то никто не посвятил в это.'
	S02E29.innerHTML = "— Валера был не очень удивлён, узнав, что все лавры от этой операции получил Салех. Да-да, именно он придумал весь план. Валера хоть и был рад избавиться от гнёта эльфов, но все равно чувствовал себя использованным. "
	S02E30.innerHTML = '— На все последующие вопросы военных, как, например, "Ты кто ваще такой и что там делал" Валера отвечал всё также ложью, выдавая себя за обычного парня, который увидел солдат и захотел посмотреть, чего они там делают. Сознаваться он уже не видел смысла, ведь всё разрешилось. Наверное.'

}
S01E02.onclick = function(){
	S02E01.innerHTML = "Эльф всё также смотрит, Валера всё так же молчит. Это могло длиться вечно, если бы не жирный таракан, упавший прямо на лицо мальчугана. Выматеревшись, он понимает, насколько его всё это заебало и начинает требовать(ахахахх) от эльфа, чтобы тот его развязал и отпустил." + 
"— Эльф наклоняет голову к плечу аки псих, причём ,сука, медленно, и начинает жутко скалиться. Да уж, тут лучше заткнуться и начать думать, что делать.";
	
	Part2();
}
S01E03.onclick = function(){
	Part2()
}


function resize()
{
    $('#S01E01').width($('#normalSize').width())
    $('#S01E02').width($('#normalSize').width())
    $('#S01E03').width($('#normalSize').width())
    $('#returnToS01').width($('#normalSize').width())
}
resize();
$( window ).resize(function() {
    resize()
});

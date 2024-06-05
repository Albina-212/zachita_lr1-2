const blockTable = document.getElementById("blockTable");
const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");

let leftPrcnt = 0;
btnRight.addEventListener('click', ()=>{
	if(leftPrcnt<61){
		leftPrcnt += 15;
		blockTable.style.transform = `translateX(-${leftPrcnt}rem)`;
	}
});

btnLeft.addEventListener('click', ()=>{
	if(leftPrcnt > 0){
		leftPrcnt -= 15;
		blockTable.style.transform = `translateX(-${leftPrcnt}rem)`;
	}
});

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");

const allCells = document.querySelectorAll('#blockTable table tr td');
function fitCells(startingPoint){
	for(let i=startingPoint; i < allCells.length; i+=7){
		allCells[i].style.backgroundColor = '#E0FB52';
	}
}
btn1.addEventListener('click', ()=>{
	btn1.style.display = 'none';
	fitCells(1);
	
});
btn2.addEventListener('click', ()=>{
	btn2.style.display = 'none';
	fitCells(2);
});
btn3.addEventListener('click', ()=>{
	btn3.style.display = 'none';
	fitCells(3);
});
btn4.addEventListener('click', ()=>{
	btn4.style.display = 'none';
	fitCells(4);
});
btn5.addEventListener('click', ()=>{
	btn5.style.display = 'none';
	fitCells(5);
});
btn6.addEventListener('click', ()=>{
	btn6.style.display = 'none';
	fitCells(6);
});

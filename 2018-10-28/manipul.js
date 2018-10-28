console.log(document.querySelector("#btn1"));
console.log(document.querySelector("div.bubu"));
console.log(document.querySelector("div.bubu.groot"));

console.log(document.querySelectorAll("div.bubu"));

const divBubu = document.querySelectorAll("div.bubu");
for(let i=0; i<divBubu.length; i++){
	divBubu[i].textContent += i;
}

const divGroot = document.querySelector("div.groot");
const parts = divGroot.textContent.split(" ");
const num = parts[1]; 
divGroot.textContent = parts[0]+" "+(num*1 + 1);

const divSquare = document.querySelectorAll("div.square");
for(let i=0, size=100; i<divSquare.length; i++, size *= 1.5){
	divSquare[i].style.width = size+"px";
	divSquare[i].style.height = size+"px";
}
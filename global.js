/* ceci est un commentaire*/
console.log("toto");
// string
let myVar = "ma variable ";
const myVar2 = "ma variable 2";
let div = document.createElement('div');
div.classList.add('top');
div.innerHtml = '<span>top zone</ul>'; 
// fonction du theme

function menuMobile(){
	const header = document.querySelector('.burger');
	 const header = document.querySelector('.header');

	 btn.addEventListener('click' , () => {

	 	header.classList.toggle('show-nav');
	 	console.log('click');

	 })
}
menuMobile();

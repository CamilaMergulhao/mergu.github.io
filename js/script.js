function letreiro(){

const titulo = document.querySelector('h1');
typeWriter(titulo);


function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}

}

letreiro()

////////////////////////////////////////////////////////////////



function tudoAqui(){


  const faqPerguntas = document.querySelectorAll ('.js-accordion dt');
  
  if(faqPerguntas.length){
  
  function listClick(){
  
  this.classList.toggle('ativo');
  this.nextElementSibling.classList.toggle('ativo');
  }
  
  
  faqPerguntas.forEach((item) => {
  
      item.addEventListener('click', listClick);
  
  });
  
  }
  
  }
  
  tudoAqui()
  

////////////////////////////////////////////////////////////////


function initScrollSuave(){

const linksInternos = document.querySelectorAll ('.js-menu a[href^="#"]');

if(linksInternos.length){

function scrollToSection(event){

event.preventDefault(); 

const href = event.currentTarget.getAttribute('href');
const section = document.querySelector(href);


section.scrollIntoView({
behavior: "smooth",
block: "start"

});

}



linksInternos.forEach((link) =>{
link.addEventListener('click', scrollToSection);
});  

}

}

initScrollSuave();



////////////////////////////////////////////////////////////////

// function btnNormal(){

// const btnTesteBaixo = document.querySelector('.btn-teste-baixo');
// const conteudo = document.querySelector('.conteudo');

// let scrollInterval;

// btnTesteBaixo.addEventListener('mousedown', () => {
//   scrollInterval = setInterval(() => {
//     conteudo.scrollBy({
//       top: 50,
//       behavior: 'smooth'
//     });
//   }, -50);
// });

// btnTesteBaixo.addEventListener('mouseup', () => {
//   clearInterval(scrollInterval);
// });

// const btnTesteCima = document.querySelector('.btn-teste-cima');
// const conteudocima = document.querySelector('.conteudo');

// btnTesteCima.addEventListener('mousedown', () => {
//   scrollInterval = setInterval(() => {
//     conteudo.scrollBy({
//       top: -500,
//       behavior: 'smooth'
//     });
//   }, 500);
// });

// btnTesteCima.addEventListener('mouseup', () => {
//   clearInterval(scrollInterval);
// });

// }
// btnNormal()

/////////////////////////////////////////////////////////////////////////


// function atekita(){
// const btnTesteBaixo = document.querySelector('.btn-teste-baixo');
// const conteudo = document.querySelector('.conteudo');

// btnTesteBaixo.addEventListener('mousedown', () => {
//   const height = window.innerHeight;
//   conteudo.scrollBy({
//     top: height,
//     behavior: 'smooth'
//   });
// });

// btnTesteBaixo.addEventListener('mouseup', () => {
//   conteudo.scrollIntoView({behavior: 'smooth'});
// });


// const btnTesteCima = document.querySelector('.btn-teste-cima');

// btnTesteCima.addEventListener('mousedown', () => {
//   const height = window.innerHeight;
//   conteudo.scrollBy({
//     top: -height,
//     behavior: 'smooth'
//   });
// });

// btnTesteCima.addEventListener('mouseup', () => {
//   conteudo.scrollIntoView({behavior: 'smooth'});
// });


// }
// atekita()


//////////////////////////////////////////////////////////

function btnHamburguer(){
const btnMobile = document.getElementById ('btn-mobile');


function toggleMenu(event){
  if (event.type === 'touchstart') event.preventDefault();

  const nav = document.getElementById ('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  } 
}


btnMobile.addEventListener ('click', toggleMenu);
btnMobile.addEventListener ('touchstart', toggleMenu); 
}

btnHamburguer()

/////////////////////////////////////////////////////////////////////////////


const tamanho = document.querySelector('h1');

const altura = tamanho.offsetHeight;


console.log(altura);



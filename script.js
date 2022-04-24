/* Carousel */

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("first");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}

/* Botão hamburguer */

/*Botão menu hamburguer*/

const btnHamburguer = document.getElementById('btn-hamburguer');
//Pegou o elemento pelo id(no caso o button btn-hamburguer)

function toggleMenu(event){ //Função que vai executar a ação do toggle
 if (event.type === 'touchstart') event.preventDefault();/*Ou seja,
 se o evento for "touch", colocamos para que não ative nada além
 do padrão(preventDefault), que nesse caso seria o "touch" */ 

const header = document.getElementById('header'); 
//header de navegação(header)
  header.classList.toggle('active'); /*(Adicione caso tenha, remova caso nn tenha)
  Essa é a fuunção do toggle nesse caso*/
  const active = abouts.classList.contains('active'); /*Ou seja,
  caso for active é true, caso contrário, é false.*/ 
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) 
  event.currentTarget.setAttribute('area-label', 'Fechar Menu');
  /*Ou seja, assim que abrir o menu, vai ler a mensagem de fechar menu*/ 
  event.currentTarget.setAttribute('area-label', 'Abrir Menu');
}


btnHamburguer.addEventListener('click', toggleMenu);
//Ele vai observar o evento, no caso o evento de click
// Código destinado para o menu hamburguer

btnHamburguer.addEventListener('touchstart', toggleMenu);
/*Se não corrigir, ele vai aplicar o efeito de "click" duas vezes, 
ou seja, abre e fecha, impossibilitando assim de abrir o menu*/ 


function toggleMenu(){
  var aboutsToggle = document.getElementById('header');
  var contentMenu = document.querySelector('.sobre');
  aboutsToggle.classList.toggle('active');
  contentMenu.classList.toggle('active');
}
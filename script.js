// Seleciona os elementos
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('nav.menu ul li a'); // Seleciona todos os links no menu

// Abre o menu ao clicar no botão hamburger
menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
});

// Fecha o menu ao clicar no botão de fechar
closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Fecha o menu ao clicar em um link de navegação (quando em telas pequenas)
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});




//resumo atuações
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  updateSliderPosition();
}







// Função para alternar a visibilidade dos detalhes de cada advogado
document.addEventListener("DOMContentLoaded", () => {
  // Selecionar todos os botões de alternância dentro dos cards
  const profileCards = document.querySelectorAll(".profile-card");

  profileCards.forEach((card) => {
    const toggleBtn = card.querySelector(".toggle-btn");
    const resume = card.querySelector(".resumo-cv");
    const details = card.querySelector(".profile-details");

    // Inicializar estado (garantir que os detalhes estejam escondidos)
    details.style.display = "none";

    // Adicionar evento ao botão de alternância
    toggleBtn.addEventListener("click", () => {
      if (details.style.display === "none") {
        // Mostrar detalhes e esconder resumo
        details.style.display = "block";
        resume.style.display = "none";
        toggleBtn.textContent = "↩ Voltar";
      } else {
        // Esconder detalhes e mostrar resumo
        details.style.display = "none";
        resume.style.display = "block";
        toggleBtn.textContent = "🔍 Ver mais";
      }
    });
  });
});



function moveSlideTo(index) {
  currentIndex = index;
  updateSliderPosition();
}

function updateSliderPosition() {
  const newTransformValue = -currentIndex * 100;
  document.querySelector('.slider-container').style.transform = `translateX(${newTransformValue}%)`;

  // Atualizar os pontos de navegação
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Auto Slide (mudar automaticamente a cada 5 segundos)
setInterval(() => {
  moveSlide(1);
}, 5000);

// Marcar o ponto ativo na inicialização
updateSliderPosition();



function toggleArea(id) {
  const card = document.getElementById(id);
  const detalhes = card.querySelector('.detalhes');
  const miniResumo = card.querySelector('.mini-resumo');
  const btnExpand = card.querySelector('.btn-expand');
  const btnCollapse = card.querySelector('.btn-collapse');

  // Alterna a exibição dos detalhes e do resumo
  if (detalhes.style.display === 'block') {
    detalhes.style.display = 'none';
    miniResumo.style.display = 'block';
    btnExpand.style.display = 'inline-block';
    btnCollapse.style.display = 'none';
    card.style.height = 'auto';
  } else {
    detalhes.style.display = 'block';
    miniResumo.style.display = 'none';
    btnExpand.style.display = 'none';
    btnCollapse.style.display = 'inline-block';
    card.style.height = 'auto';
  }
}





// Selecione todos os links de ancoragem
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Realize a rolagem suave até a seção, com um ajuste de deslocamento
    const targetId = this.getAttribute('href').substring(1); // Remove o '#' do link
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 100, // Ajuste a posição do "respiro"
      behavior: 'smooth'
    });
  });
});



  //ativação de animações
  document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com as classes de animação
    const elements = document.querySelectorAll('.surge-bottom, .surge-right, .surge-left');
  
    // Configura o IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona a classe 'visible' quando o elemento entra na visualização
          entry.target.classList.add('visible');
          // Para observar uma vez e parar, economizando recursos
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Ajusta para que o elemento seja considerado visível quando 10% dele estiver na viewport
    });
  
    // Observa todos os elementos
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  


 // Contagem
 const counters = document.querySelectorAll('.counter');

 const updateCounter = (counter) => {
     counter.innerText = '0';
     const target = +counter.getAttribute('data-target');
     const increment = target / 200;

     const incrementCounter = () => {
         const c = +counter.innerText;
         if (c < target) {
             counter.innerText = `${Math.ceil(c + increment)}`;
             requestAnimationFrame(incrementCounter);
         } else {
             counter.innerText = target;
         }
     };

     incrementCounter();
 };

 const observerCounters = new IntersectionObserver((entries, observer) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             const counter = entry.target;
             updateCounter(counter);
             observer.unobserve(counter); // Desativar o observador após a atualização do contador
         }
     });
 }, { threshold: 0.1 });

 counters.forEach(counter => {
     observerCounters.observe(counter);
 });




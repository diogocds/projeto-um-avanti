// Função para inicializar o carrossel
function initializeCarousel(carouselId, prevBtnId, nextBtnId) {
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);

  const carousel = document.querySelector(`#${carouselId} .cards-carousel`);
  const totalCards = document.querySelectorAll(
    `#${carouselId} .card-carousel`
  ).length;

  let currentIndex = 0;

  function updateCarousel() {
    const offset = -(currentIndex * (carousel.clientWidth / totalCards));
    carousel.style.transform = `translateX(${offset}px)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? totalCards - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex === totalCards - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  });

  updateCarousel();
}

initializeCarousel("carousel1", "prevBtn1", "nextBtn1");
initializeCarousel("carousel2", "prevBtn2", "nextBtn2");

// Função para simular busca

document.getElementById("buscar-icon").addEventListener("click", function () {
  resultadoBusca();
});

document
  .getElementById("excluir-resultado")
  .addEventListener("click", function () {
    const resultado = document.getElementById("resultado-busca");
    resultado.style.display = "none";
  });

function resultadoBusca() {
  const busca = document.getElementById("busca-input").value;
  const resultado = document.getElementById("resultado-busca");
  const resultadoText = document.getElementById("resultado-text");

  if (busca.trim() !== "") {
    resultado.style.display = "block";
    resultadoText.innerHTML = `Você buscou por: <strong>${busca}</strong>`;
  } else {
    resultado.style.display = "none";
  }
}

// função de navegação do carousel

document.addEventListener("DOMContentLoaded", function () {
  // Carrossel 1
  const radios1 = document.querySelectorAll("#carousel1 .carousel-radio");
  const cards1 = document.querySelectorAll("#carousel1 .card-carousel");
  const prevBtn1 = document.getElementById("prevBtn1");
  const nextBtn1 = document.getElementById("nextBtn1");

  // Carrossel 2
  const radios2 = document.querySelectorAll("#carousel2 .carousel-radio");
  const cards2 = document.querySelectorAll("#carousel2 .card-carousel");
  const prevBtn2 = document.getElementById("prevBtn2");
  const nextBtn2 = document.getElementById("nextBtn2");

  // Função para atualizar o carrossel com base no rádio selecionado
  function updateCarousel(carouselIndex, radios, cards) {
    radios.forEach((radio, index) => {
      radio.addEventListener("change", function () {
        cards.forEach((card, cardIndex) => {
          if (index === cardIndex) {
            card.classList.add("active");
          } else {
            card.classList.remove("active");
          }
        });
      });
    });
  }

  // Função para navegar para o próximo slide
  function nextSlide(carouselIndex, radios, cards, direction = 1) {
    let checkedRadioIndex = Array.from(radios).findIndex(
      (radio) => radio.checked
    );
    if (checkedRadioIndex === -1) checkedRadioIndex = 0;

    let nextIndex = checkedRadioIndex + direction;
    if (nextIndex < 0) nextIndex = radios.length - 1;
    if (nextIndex >= radios.length) nextIndex = 0;

    radios[nextIndex].checked = true;
    radios[nextIndex].dispatchEvent(new Event("change"));
  }

  // Atualiza carrosséis com base nos rádios
  updateCarousel(1, radios1, cards1);
  updateCarousel(2, radios2, cards2);

  // Navegação através das setas para o Carrossel 1
  nextBtn1.addEventListener("click", () => nextSlide(1, radios1, cards1, 1));
  prevBtn1.addEventListener("click", () => nextSlide(1, radios1, cards1, -1));

  // Navegação através das setas para o Carrossel 2
  nextBtn2.addEventListener("click", () => nextSlide(2, radios2, cards2, 1));
  prevBtn2.addEventListener("click", () => nextSlide(2, radios2, cards2, -1));
});

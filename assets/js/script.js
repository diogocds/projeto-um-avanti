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

$(document).ready(function () {
  $(".cards-carousel").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    prevArrow: '<i class="bi bi-arrow-left-circle slick-prev"></i>',
    nextArrow: '<i class="bi bi-arrow-right-circle slick-next"></i>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

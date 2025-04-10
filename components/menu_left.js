class MenuLeft extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="list-categorias menu-icon" >
      <i class="bi bi-list"></i>
      <p>Todas as categorias</p>
    </div>
    
    <div class="menu-left " >
      <ul class="sub-menu ">
        <li class="categoria color-categorias">Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
        <li>Departameto<i class="bi bi-chevron-compact-right"></i></li>
      </ul>

      <div class="div-categorias">
        <div class="categorias-menu-left-1">
          <ul class="ul-categorias">
            <li class="color-categorias">Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
          </ul>
        </div>

        <div class="categorias-menu-left-2">
          <ul class="ul-categorias">
            <li class="color-categorias">Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
          </ul>
        </div>

        <div class="categorias-menu-left-3">
          <ul class="ul-categorias">
            <li class="color-categorias">Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
            <li>Categoria</li>
          </ul>
        </div>
      </div>
      
      <div class="img-categoria">
        <div class="texto-img-categoria">
          <div class="texto-categoria">
            <h5>
              Confira os Produtos <span style="color: #fff">Que <br>acabaram De chegar</span>
            </h5>
          </div>     
          <button class="button-img-categoria">Ver Todos</button>
        </div>      
      </div>
    </div>
    `;

    const menuLeft = this.querySelector(".menu-left");
    const menuIcon = this.querySelector(".menu-icon");

    const categoria = this.querySelector(".categoria");
    const colorCategoria = this.querySelectorAll(".color-categorias");

    menuIcon.addEventListener("click", () => {
      menuLeft.classList.toggle("active");
    });

    colorCategoria.forEach((colorCategoria) => {
      categoria.addEventListener("click", () => {
        colorCategoria.classList.toggle("active");
      });
    });
  }
}

customElements.define("menu-left", MenuLeft);

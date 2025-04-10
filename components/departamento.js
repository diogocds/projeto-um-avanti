class MenuDepartamento extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

      <ul class="ul-menu departamentos">
        <li class=" categoria color-categorias "><a href="#">Departamento</a></li>
        <li><a href="#">Departamento</a></li>
        <li><a href="#">Departamento</a></li>
        <li><a href="#">Departamento</a></li>
        <li><a href="#">Departamento</a></li>
        <li><a href="#">Departamento</a></li>
        <li><a href="#">Departamento</a></li>
        <li><a href="#">Departamento</a></li>
      </ul>
    <div class="menu-departamento" >
      <span>Departamento</span>
      <div class="categorias-departamento-1">
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

      <div class="categorias-departamento-2">
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

      <div class="categorias-departamento-3">
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

    const MenuDepartamento = this.querySelector(".menu-departamento");
    const departamento = this.querySelector(".departamentos");

    const categoria = this.querySelector(".categoria");
    const colorCategoria = this.querySelectorAll(".color-categorias");

    departamento.addEventListener("click", () => {
      MenuDepartamento.classList.toggle("active");
    });

    colorCategoria.forEach((colorCategoria) => {
      categoria.addEventListener("click", () => {
        colorCategoria.classList.toggle("active");
      });
    });
  }
}

customElements.define("menu-departamento", MenuDepartamento);

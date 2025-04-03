class FooterOptions extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="links-uteis-select mobile">
      
        <div id="institucional" class="footer-option">
        <div class="span-options"><h5><span>Institucional</span></h5><i class="bi bi-chevron-compact-down"></i></div>
        <div id="conteudoInstitucional"></div>
        </div>
        
        <div id="central-ajuda" class="footer-option">
          <div class="span-options"><h5><span>Central de Ajuda</span></h5><i class="bi bi-chevron-compact-down"></i></div>
          <div id="conteudoCentralAjuda"></div>
        </div>

        <div id="atendimento" class="footer-option">
          <div class="span-options"><h5><span>Atendimento</span></h5><i class="bi bi-chevron-compact-down"></i></div>
          <div id="conteudoAtendimento"></div>
        </div>

    </div>
    `;

    this.querySelector("#institucional").addEventListener("click", () =>
      this.toggleOptions("institucional")
    );
    this.querySelector("#central-ajuda").addEventListener("click", () =>
      this.toggleOptions("central-ajuda")
    );
    this.querySelector("#atendimento").addEventListener("click", () =>
      this.toggleOptions("atendimento")
    );
  }

  toggleOptions(Value) {
    const conteudoInstitucional = this.querySelector("#conteudoInstitucional");
    const conteudoCentralAjuda = this.querySelector("#conteudoCentralAjuda");
    const conteudoAtendimento = this.querySelector("#conteudoAtendimento");

    let isOpen = false;

    if (Value === "institucional") {
      isOpen = conteudoInstitucional.innerHTML !== "";
    } else if (Value === "central-ajuda") {
      isOpen = conteudoCentralAjuda.innerHTML !== "";
    } else if (Value === "atendimento") {
      isOpen = conteudoAtendimento.innerHTML !== "";
    }

    if (Value === "institucional") {
      if (isOpen) {
        conteudoInstitucional.innerHTML = "";
      } else {
        conteudoInstitucional.innerHTML = `
          <h5>Sobre Nós</h5>
          <h5>Nossas Lojas</h5>
          <h5>Privacidade e Segurança</h5>
          <h5>Termos e Condições</h5>
        `;
        conteudoCentralAjuda.innerHTML = "";
        conteudoAtendimento.innerHTML = "";
      }
    } else if (Value === "central-ajuda") {
      if (isOpen) {
        conteudoCentralAjuda.innerHTML = "";
      } else {
        conteudoCentralAjuda.innerHTML = `
          <h5>Fale Conosco</h5>
          <h5>Frete e Entrega</h5>
          <h5>Trocas e Devoluções</h5>
          <h5>Formas de Pagamentos</h5>
          <h5>FAQ</h5>
        `;
        conteudoInstitucional.innerHTML = "";
        conteudoAtendimento.innerHTML = "";
      }
    } else if (Value === "atendimento") {
      if (isOpen) {
        conteudoAtendimento.innerHTML = "";
      } else {
        conteudoAtendimento.innerHTML = `
          <h5><span style="color: black">Telefone</span> (00) 1234-5678</h5>
          <h5><span style="color: black">E-mail</span> exemplo@exemplo.com.br</h5>
          <h5>Nossas Lojas</h5>
          <h5>Privacidade e Segurança</h5>
          <h5>Termos e Condições</h5>
        `;
        conteudoInstitucional.innerHTML = "";
        conteudoCentralAjuda.innerHTML = "";
      }
    }
  }
}

customElements.define("footer-options", FooterOptions);

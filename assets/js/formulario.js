document
  .querySelector(".conteudo")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const telInput = document.getElementById("tel");
    const enderecoInput = document.getElementById("endereco");
    const numInput = document.getElementById("num");
    const cepInput = document.getElementById("cep");
    const bairroInput = document.getElementById("bairro");
    const cidadeInput = document.getElementById("cidade");
    const idCustoSelect = document.getElementById("idCusto");

    // Realizando a verificação do codigo
    if (
      nameInput.value.trim() === "" ||
      lastNameInput.value.trim() === "" ||
      emailInput.value.trim() === "" ||
      telInput.value.trim() === "" ||
      enderecoInput.value.trim() === "" ||
      numInput.value.trim() === "" ||
      cepInput.value.trim() === "" ||
      bairroInput.value.trim() === "" ||
      cidadeInput.value.trim() === "" ||
      idCustoSelect.value === "0"
    ) {
      alert(
        "Por favor, preencha todos os campos antes do envio do formulário."
      );
      return;
    }

    // Caso todos os campos sejam preenchidos o formulario será enviado
    {
      alert("O formulário foi validado com sucesso.");
      return;
    }
    this.submit();
  });

function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "../assets/img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "../assets/img/close_white_36dp.svg";
  }
}
function toggleMenu() {
  let navMenu = document.querySelector(".nav-menu");
  if (navMenu.classList.contains("hidden-menu")) {
    navMenu.classList.remove("hidden-menu");
    document.querySelector(".icon-nav").src =
      " ../assets/img/menu_white_36dp.svg";
  } else {
    navMenu.classList.add("hidden-menu");
    document.querySelector(".icon-nav").src =
      "../assets/img/close_white_36dp.svg";
  }
}

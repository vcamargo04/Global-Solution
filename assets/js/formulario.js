const inputUser = document.getElementById("user");
const inputPass = document.getElementById("senha");
const inputName = document.getElementById("name");
const inputLastname = document.getElementById("lastName");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("tel");
const inputEndereco = document.getElementById("endereco");
const inputNum = document.getElementById("num");
const inputCep = document.getElementById("cep");
const inputBairro = document.getElementById("bairro");
const inputCidade = document.getElementById("cidade");
const labelCep = document.querySelector("label[for='cep']");
const labelBairro = document.querySelector("label[for='bairro']");
const labelCidade = document.querySelector("label[for='cidade']");
const labelNum = document.querySelector("label[for='num']");
const labelEndereco = document.querySelector("label[for='endereco']");
const labelTel = document.querySelector("label[for='tel']");
const labelEmail = document.querySelector("label[for='email']");
const labelLastname = document.querySelector("label[for='lastName']");
const labelName = document.querySelector("label[for='name']");
const labelUser = document.querySelector("label[for='user']");
const labelPass = document.querySelector("label[for='senha']");

inputUser.addEventListener("keyup", () => {
  if (inputUser.value.length < 4) {
    labelUser.style.color = "#ff0000";
  } else {
    labelUser.style.color = "#00ff00";
  }
});
inputCidade.addEventListener("keyup", () => {
  if (inputCidade.value.length < 4) {
    labelCidade.style.color = "#ff0000";
  } else {
    labelCidade.style.color = "#00ff00";
  }
});
inputBairro.addEventListener("keyup", () => {
  if (inputBairro.value.length < 4) {
    labelBairro.style.color = "#ff0000";
  } else {
    labelBairro.style.color = "#00ff00";
  }
});
inputCep.addEventListener("keyup", () => {
  if (inputCep.value.length < 4) {
    labelCep.style.color = "#ff0000";
  } else {
    labelCep.style.color = "#00ff00";
  }
});
inputNum.addEventListener("keyup", () => {
  if (inputNum.value.length < 4) {
    labelNum.style.color = "#ff0000";
  } else {
    labelNum.style.color = "#00ff00";
  }
});
inputEndereco.addEventListener("keyup", () => {
  if (inputEndereco.value.length < 7) {
    labelEndereco.style.color = "#ff0000";
  } else {
    labelEndereco.style.color = "#00ff00";
  }
});
inputTel.addEventListener("keyup", () => {
  if (inputTel.value.length < 11) {
    labelTel.style.color = "#ff0000";
  } else {
    labelTel.style.color = "#00ff00";
  }
});
inputName.addEventListener("keyup", () => {
  if (inputName.value.length < 3) {
    labelName.style.color = "#ff0000";
  } else {
    labelName.style.color = "#00ff00";
  }
});

inputPass.addEventListener("keyup", () => {
  if (inputPass.value.length < 5) {
    labelPass.style.color = "#ff0000";
  } else {
    labelPass.style.color = "#00ff00";
  }
});
inputLastname.addEventListener("keyup", () => {
  if (inputLastname.value.length < 5) {
    labelLastname.style.color = "#ff0000";
  } else {
    labelLastname.style.color = "#00ff00";
  }
});
inputEmail.addEventListener("keyup", () => {
  if (inputEmail.value.length < 10) {
    labelEmail.style.color = "#ff0000";
  } else {
    labelEmail.style.color = "#00ff00";
  }
});

document
  .querySelector(".conteudo")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const idCustoSelect = document.getElementById("idCusto");

    if (

      inputName.value.trim() === "" ||
      inputLastname.value.trim() === "" ||
      inputEmail.value.trim() === "" ||
      inputPass.value.trim() === "" ||
      inputTel.value.trim() === "" ||
      inputEndereco.value.trim() === "" ||
      inputNum.value.trim() === "" ||
      inputCep.value.trim() === "" ||
      inputBairro.value.trim() === "" ||
      inputCidade.value.trim() === "" ||
      idCustoSelect.value === "0"
    ) {
      alert(
        "Por favor, preencha todos os campos antes do envio do formulário."
      );
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

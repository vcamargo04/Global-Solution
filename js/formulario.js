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
        "Por favor, preencha todos os campos antes de tentar enviar  o formulário."
      );
      return;
    }

    // Caso todos os campos sejam preenchidos o formulario será enviado
    this.submit();
  });

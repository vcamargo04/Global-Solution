// Obtém referências aos elementos HTML
const menuButton = document.getElementById("menu-button");
const menuList = document.getElementById("menu-list");

// Define o evento de clique no botão
menuButton.addEventListener("click", function () {
  // Alterna a visibilidade do menu
  if (menuList.style.display === "none") {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
});

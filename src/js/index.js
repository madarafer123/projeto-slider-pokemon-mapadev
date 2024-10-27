// Selects the "Next" and "Back" buttons by their IDs
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
// Selects all Pokémon cards
const cartoes = document.querySelectorAll(".cartao");
// Initializes the current card index
let cartaoAtual = 0;

// Function to hide the currently selected card
function esconderCartaoSelecionado() {
  // Selects the card with the "selecionado" class
  const cartaoSelecionado = document.querySelector(".selecionado");
  // Removes the "selecionado" class from the currently selected card
  cartaoSelecionado.classList.remove("selecionado");
}

// Function to show the card at the specified index
function mostrarCartao(indiceCartao) {
  // Adds the "selecionado" class to the card at the specified index
  cartoes[indiceCartao].classList.add("selecionado");
}

// Event listener for the "Next" button
btnAvancar.addEventListener("click", function () {
  // Prevents advancing if the current card is the last one
  if (cartaoAtual === cartoes.length - 1) return;

  // Hides the currently selected card
  esconderCartaoSelecionado();

  // Increments the current card index
  cartaoAtual++;
  // Shows the new current card
  mostrarCartao(cartaoAtual);
});

// Event listener for the "Back" button
btnVoltar.addEventListener("click", function () {
  // Prevents going back if the current card is the first one
  if (cartaoAtual === 0) return;

  // Hides the currently selected card
  esconderCartaoSelecionado();

  // Decrements the current card index
  cartaoAtual--;
  // Shows the new current card
  mostrarCartao(cartaoAtual);
});

document.querySelector("h1").textContent = "GoodBye";
document.getElementById("red").style.color = "orange";

document.getElementById("clickHeader").onclick = function() {
  this.style.color = "brown";
};

document.getElementById("mensaje").textContent = "¡Hola desde JavaScript!";

document.getElementById("mensaje").onclick = function() {
    this.textContent = "¡Hiciste clic!";
};
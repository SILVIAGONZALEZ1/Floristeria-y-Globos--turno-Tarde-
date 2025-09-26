// Simple interacción para mostrar un mensaje cuando se hace clic en los botones
document.addEventListener("DOMContentLoaded", () => {
  const productosBtn = document.querySelector(".btn.primary");
  const contactoBtn = document.querySelector(".btn.secondary");

  productosBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("¡Vas a ver los productos de Pia Rocheta! 🌸");
  });

  contactoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("¡Gracias por querer contactarnos! 💌");
  });
});
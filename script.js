// sección N°2
// filepath: c:\Users\GODOY CRUZ\Desktop\Pia rochet\script.js

const productos = [
  {
    nombre: "Flores Frescas",
    descripcion: "Arreglos florales únicos para cada ocasión especial.",
    detalle: "Nuestros arreglos florales están diseñados con flores frescas seleccionadas cuidadosamente para cada evento. Personaliza tu ramo y sorprende a quien más quieres.",
    imagen: "Pastel con flores.png"
  },
  {
    nombre: "Dulces Artesanales",
    descripcion: "Deliciosos postres hechos con amor y los mejores ingredientes.",
    detalle: "Disfruta de cupcakes, tortas y dulces elaborados artesanalmente. Ingredientes premium y recetas exclusivas para momentos dulces e inolvidables.",
    imagen: "cup cake.png"
  },
  {
    nombre: "Presentes Especiales",
    descripcion: "Regalos únicos y personalizados para momentos inolvidables.",
    detalle: "Elige entre una variedad de presentes personalizados, perfectos para sorprender en cualquier ocasión especial. Envoltorios y detalles únicos.",
    imagen: "presente.png"
  },
  {
    nombre: "Peluches Tiernos",
    descripcion: "Adorables compañeros suaves para regalar cariño y ternura.",
    detalle: "Peluches de alta calidad, suaves y adorables. Ideales para niños y adultos que buscan un regalo lleno de ternura.",
    imagen: "osito.png"
  },
  {
    nombre: "Globos Festivos",
    descripcion: "Globos coloridos y tematicos para celebraciones especiales.",
    detalle: "Globos de diferentes formas y colores para decorar fiestas y eventos. Personaliza tu pedido y haz que tu celebración sea única.",
    imagen: "globos con decoracion.png"
  }
];

function mostrarDetalle(index) {
  const producto = productos[index];
  document.body.innerHTML = `
    <section class="detalle-producto">
      <button id="volver" class="btn-volver">← Volver</button>
      <div class="detalle-card">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="detalle-img">
        <div class="detalle-info">
          <h2>${producto.nombre}</h2>
          <p>${producto.detalle}</p>
        </div>
      </div>
    </section>
  `;
  document.getElementById('volver').onclick = () => location.reload();
}

window.onload = function() {
  document.querySelectorAll('.btn-vermas').forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      // No hacer nada
    };
  });
};
<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Garantizar la calidad de un producto actualmente se ha convertido en un factor competitivo, el cual permite posicionamiento en el mercado y reconocimiento de la marca por parte del consumidor, es por ello que las empresas deben asegurar que su producción, en este caso textil, cumpla con los requisitos de diseño técnico y de la normativa aplicable al sector.
    
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-sm-12.col-lg-8
        .bloque-texto-e.color-primario.p-5.mb-3
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            p.mb-0.text-white.fw-bold El control de procesos se aplica en todo tipo de industria, incluida la de la manufactura, en la cual se aplican sistemas de control que permiten documentar y hacer seguimiento a todo el proceso productivo, esto incluye “procedimientos documentados para todos los procesos clave; entendimiento claro del equipo y ambiente de trabajo adecuados para vigilar y controlar las características críticas de la calidad; procesos de aprobación para el equipo; criterios para la realización del trabajo como normas escritas, muestras o ilustraciones, y actividades de mantenimiento
            i.fas.fa-quote-right
          .row.align-items-start
            .col
              .bloque-texto-e__autor 
                p.mb-0.text-white (Evans & Lindsay, 2005).

        p.mb-0 En este sentido, identificar los requisitos de calidad exigidos de acuerdo con las especificaciones de la ficha técnica, lleva al área de producción a planificar el proceso de confección de acuerdo con la línea de producción y las especificaciones del producto, permitiendo así que el producto final se convierta en un producto de calidad que satisface por completo las necesidades del cliente y del mercado.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

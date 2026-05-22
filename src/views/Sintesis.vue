<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Para integrar y visualizar los conceptos descritos, a continuación, se presenta un esquema de síntesis que estructura los ejes temáticos de este componente formativo. Este mapa ilustra la articulación entre el proceso general de control en calidad, el uso de la ficha técnica junto con la muestra física, y la implementación de puntos de control estratégicos a lo largo de las etapas de confección y gestión de compras. Su propósito es brindar una perspectiva global de las herramientas y procedimientos necesarios para asegurar que la producción textil cumpla con los estándares normativos y garantice la satisfacción del cliente.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El diagrama se estructura en cuatro ejes principales: el proceso de control en calidad, la ficha técnica y la muestra física, los puntos de control en el proceso de confección, y los puntos de control en las compras de materiales e insumos. De cada categoría temática se desprenden los subtemas, normativas y formatos de registro específicos requeridos para su adecuada gestión.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

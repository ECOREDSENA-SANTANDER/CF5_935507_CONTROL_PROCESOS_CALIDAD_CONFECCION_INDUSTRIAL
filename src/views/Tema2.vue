<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Ficha técnica y muestra física
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Concepto y uso de ficha técnica
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Partes de ficha técnica
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.3 Manejo e interpretación ficha técnica
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.4 Definición y características de la muestra física
      
        

  </template>

<script>
export default {
  name: 'Tema1',
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

<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Puntos de control de calidad en el proceso de confección
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Puntos de control en patronaje
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 Puntos de control en trazo y corte
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.3 Puntos de control en confección
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.4 Puntos de control en confección de lote piloto
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.5 Puntos de control en compras: materiales e insumos
      
        

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

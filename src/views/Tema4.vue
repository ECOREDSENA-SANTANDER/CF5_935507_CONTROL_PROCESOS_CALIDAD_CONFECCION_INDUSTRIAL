<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Documentación de calidad
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.1 Ficha técnica
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.2 Orden de corte
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.3 Master de textiles e insumos
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.4 Registro de inspección de producto en proceso
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.5 Registro de inspección de producto terminado
      Separador
      #t_4_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.6 Registro de inspección de lote piloto
      
        

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

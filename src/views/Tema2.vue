<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Ficha técnica y muestra física
      
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/2.png', alt='')
        .col-sm-12.col-lg-7
          .row.justify-content-center.mb-5
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/1.svg', alt='')
            .col-sm-12.col-lg-10
                p.mb-0 Recuerde que para el control de los procesos se utiliza la ficha técnica, una guía fundamental para establecer controles de producción y calidad, la cual se adecúa según el proceso desarrollado y describe la información de la referencia a producir, el modelo, número de piezas, medidas de patrones y prenda, materia prima e insumos, ruta operacional y especificaciones de calidad.
          p.mb-0 A partir de la ficha técnica se desarrolla la muestra física, es decir la demostración física del producto a fabricar, el cual se convierte en la guía del proceso productivo y en el elemento clave de las ventas.

      
      
      
      
      
      
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Concepto y uso de ficha técnica
      
      p.mb-5(data-aos='fade-right') La ficha técnica es la mejor herramienta en la empresa de confección, porque es la guía que contiene todas las especificaciones y requisitos en cada uno de los procesos para así poder desarrollar la producción de determinada referencia o modelo.

      .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.br-1.mb-0(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/3.png')})` }")
        
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 Este instrumento toma importancia en el proceso de confección ya que permite estandarizar el producto, controlar la calidad y la producción, establecer una adecuada organización de líneas de producción y proporciona la información para la gestión de compras de materiales, aspectos fundamentales para el logro de la calidad de los productos terminados.
          p.mb-0 La ficha técnica se usa conforme el proceso que se está desarrollando, los inspectores de calidad, los supervisores, los jefes de calidad, producción y compras requieren de la información contenida en este formato, para que comunique de manera concreta, clara y precisa los requisitos de la prenda con el fin de prevenir los defectos, y también el flujo operacional óptimo obteniendo la productividad proyectada.

      
      
      
      
      
      
      
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Partes de ficha técnica
      
      
      p.mb-5(data-aos='fade-right') Vale mencionar nuevamente que las partes de una ficha técnica son:
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/4.png', alt='')
        .col-sm-12.col-lg-6
          LineaTiempoD.color-acento-contenido
            .row(numero="1" titulo="Rótulo o encabezado de la ficha técnica ")
              .col-12
                p.mb-0 Describe la información de la empresa.
            
            .row(numero="2" titulo="Cuerpo de la ficha")
              .col-12
                p.mb-0 Contiene la mayor información, especificando según el proceso las características de la prenda.
            .row(numero="3" titulo="Tablas y dibujos")
              .col-12
                p.mb-0 Con el fin de ser un apoyo visual, teniendo en cuenta que la ficha técnica es una aplicación de la técnica de Poka -Yoke. Con la utilización de tablas y dibujos es más fácil describir medidas, hoja de ruta, modelo, planos y piezas.
            .row(numero="4" titulo="Control del documento")
              .col-12
                p.mb-0 Identifica a los responsables en el proceso de elaboración de la ficha técnica.
            .row(numero="5" titulo="Glosario")
              .col-12
                p.mb-0 Lista los términos y expresiones utilizadas en el documento, de forma que permita su total comprensión.
      
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5
          .titulo-sexto.color-secundario.mb-3
            h5 Figura 6. 
            span Ejemplo ficha técnica
          figure
              img(src='@/assets/curso/temas/t2/5.svg', alt='Ejemplo ficha técnica, perteneciente al Centro Industrial del Diseño y la Manufactura del SENA. El formato expone las especificaciones técnicas para una blusa camisera de línea femenina, incluyendo campos para la descripción de la prenda, referencias y talla base. Además, presenta ilustraciones en plano del diseño con vistas frontal, posterior y detalles del cuello, finalizando en la parte inferior con secciones destinadas a las firmas de las personas encargadas de elaborar, revisar y aprobar el documento.')

      
      p.mb-0 Tenga en cuenta que el orden de la ficha debe estar conformado según el orden de los procesos de confección, es decir ficha de diseño, patronaje, producción y calidad; así mismo es necesario anexar fotografías para apoyar el proceso de control de calidad y el glosario de términos con el fin de convenir y aclarar los términos técnicos que pueden variar, por ejemplo, en diferentes zonas del país.
      
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.3 Manejo e interpretación ficha técnica
      
      p.mb-5(data-aos='fade-right') Una vez se crea el formato el diligenciamiento de este es realizado por el personal encargado del área de diseño y desarrollo de producto.
      
      
      .bloque-texto-g.bloque-texto-g.bg-color-4.p-3.p-sm-4.p-md-5.br-3.mb-0(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/6.png')})` }")
        
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 El inspector de calidad es quien maneja la ficha técnica del producto, debe entender las medidas de los patrones y cuando la prenda está terminada hacer las inspecciones tanto en el desarrollo del proceso como en la prenda terminada.
          p.mb-0 En el proceso de confección la hoja de ruta es primordial, ya que permite interpretar el paso a paso de cada operación, para realizar las inspecciones del producto terminado y del producto en proceso.

      
      
      
      
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.4 Definición y características de la muestra física
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/7.png', alt='')  
        .col-sm-12.col-lg-7
          p.mb-4 La muestra física es la demostración tangible del producto a fabricar, expone de manera real lo que es el producto para fabricar o vender y debe ser fiel a la ficha técnica y viceversa. La muestra física hace parte del paquete técnico, que junto con el patronaje de la prenda aseguran el desarrollo óptimo del proceso, además la muestra de la referencia a producir debe mostrar los requisitos de calidad, para que así mismo sea la guía en los diferentes procesos de confección.
          p.mb-4 Respecto a lo anterior la muestra debe estar disponible tanto al cliente por parte del vendedor quien la da a conocer, y en la planta de producción en el módulo donde se confeccionará para analizar y comparar las diferentes operaciones que la componen.
          p.mb-0 Es importante tener en cuenta que la muestra física junto con la ficha técnica es necesaria para la gestión de la producción y del control de la calidad.


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

<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Puntos de control de calidad en el proceso de confección
      
      p.mb-5(data-aos='fade-right') Dada la competitividad del sector de la confección industrial, es muy importante que todo el personal que trabaja en la planta de producción esté al tanto a la estrategia global del negocio, de la importancia que tiene cada uno de los clientes y de los costos de producción; de esta forma pueden comprender la dimensión de los errores que se pueden causar en el proceso de manufactura.


      .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.br-1.mb-0(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/1.png')})` }")
        
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-0 Con este precedente, es necesario que cada operador de la línea de producción se enfoque para que el producto fabricado cuente con las especificaciones técnicas definidas para el proceso y las expectativas del cliente, ya que, de la calidad del producto recibida, dependerá la continuidad del cliente y por ende de las ventas. Para cumplir con este objetivo, es fundamental tener en cuenta los puntos de control dentro del proceso de manufactura del producto y que se explican a continuación.



      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Puntos de control en patronaje
      
      .row.justify-content-center.mb-0.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/2.png')  
        .col-sm-12.col-lg-7
          p.mb-4 Se debe establecer la diferencia entre los puntos de control y los puntos de control crítico, para tener claridad en el control de calidad de la prenda. Una vez se analiza el flujo de los procesos mediante los diagramas de operaciones y flujogramas, se determina en el proceso y en la prenda, los puntos a inspeccionar según su relevancia y así se establece la clasificación.
          p.mb-4 En el patronaje se debe inspeccionar el número de piezas, anchos de costuras, medidas de patrón y de prenda terminada. Además, las medidas en cortes para la unión de piezas, cada lado a unir debe corresponder exactamente, se debe disponer del tiempo necesario para realizar la revisión sea en un patrón manual o en el programa especializado.
          p.mb-0 En el momento del desarrollo del producto se debe realizar la inspección, de tal forma que se compare junto con la muestra y así pueda ser aprobada y pasar a los procesos de producción.


      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 Puntos de control en trazo y corte
      
      p.mb-5(data-aos='fade-right') En el momento de desarrollar el trazo, antes de imprimir en el caso que sea digital y antes de realizar el extendido de la tela; se debe inspeccionar el trazo, revisando la correspondencia de piezas y distribución de tallas teniendo en cuenta el orden de producción, ancho de trazo y ancho de tela.

      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t3/3.png')
        .col-sm-12.col-lg-7.mx-0.px-0
          .bg-color-5.p-4
            img.mb-4.wcus-2.d-none.d-lg-block(src='@/assets/curso/temas/t3/4.svg')
            p.mb-4 En el corte se debe revisar una vez se termina de extender y antes de iniciar el corte las unidades de capas y alineación del tendido, la apariencia de la tela, también tener cuidado de la separación del corte, sobre todo en el caso de si se han extendido diferentes rollos de tela en el mismo corte. Se debe revisar el cumplimiento de tiempos de reposo.
            p.mb-5 En la separación, tiqueteado y paqueteo de las piezas, el inspector de calidad debe revisar el corte de las piezas al comparar con el patronaje de la pieza, contar las piezas del paquete, el sistema de amarre y rotulado. Es importante disponer de un puesto de trabajo para la inspección con excelente luz y limpieza para determinar defectos en la tela y en el corte de las piezas. Así mismo, la disposición de las piezas para evitar contaminaciones del paquete con otros colores, por ejemplo, de la referencia.



      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.3 Puntos de control en confección
      
      p.mb-3(data-aos='fade-right') Teniendo en cuenta los procesos dentro de la confección de las prendas, comprendidos por operaciones de preparación, ensamble y terminados, así mismo se establecen puntos de control en las áreas, es importante establecer los puestos de calidad, en donde se realizan las inspecciones por el inspector de calidad; en el caso que el sistema de la planta sea modular, cada módulo debe disponer del puesto de calidad.

      p.mb-5(data-aos='fade-right') Cada puesto debe disponer de las herramientas para realizar mediciones y formatos, además de una ubicación estratégica dentro del área.


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/5.png')
        .col-sm-12.col-lg-9
          .row.justify-content-center.mb-5
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/6.svg')
            .col-sm-12.col-lg-7
              .bg-color-2.p-4
                .titulo-tercer-nivel.mb-5
                  img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
                  h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Puntos de control en producto en proceso
                p.mb-1.text-white Aunque es importante la implementación de auto calidad en cada operario, de igual manera se deben realizar las inspecciones llamadas “en pie de máquina”; se realizan mientras el operario desarrolla la operación en su puesto de trabajo, con el fin de detectar de manera temprana defectos, además de establecer acciones de mejora.

          p.mb-0 Cuando al producto se le realizan procesos de estampación o bordados se requiere establecer puntos de control de esos procesos, los cuales son puntos de control críticos.



      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Puntos de control en producto terminado

      .row.justify-content-center.mb-0.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/7.svg')
        .col-sm-12.col-lg-11
            p.mb-0 Al finalizar la confección en cada módulo de producción o línea de la referencia, se revisa el producto terminado antes de realizar los procesos de planchado, de lavandería, empaque y embalaje; pero igualmente se debe inspeccionar una vez se realice el planchado si es requerido y su empaque.
            p.mb-0 Se deben establecer las medidas para la atención de prendas que no fueron aceptadas en las inspecciones y las acciones para su tratamiento.

      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.4 Puntos de control en confección de lote piloto
      
      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/8.png')
        .col-sm-12.col-lg-8
          .cajon.color-acento-contenido.p-5
            p.mb-0 El lote piloto son unas unidades que se confeccionan con el fin de simular la producción de cierta referencia nueva. Es necesario una vez se desarrolla el producto nuevo, realizar simulaciones para prever fallas en la producción; la información proporcionada una vez se realice el lote piloto brinda confianza y señala las estrategias a efectuar en el momento de la producción de la prenda.

      
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.5 Puntos de control en compras: materiales e insumos
      
      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t3/9.png')(data-aos='fade-right')
      p.mb-0(data-aos='fade-right') En las áreas de bodegas y almacenes se deben realizar las inspecciones necesarias antes de la integración del producto, en donde se realiza el alistamiento de los insumos necesarios para la confección y se integran al paquete de las unidades cortadas, según las unidades establecidas. En el caso de telas se puede apoyar el control con equipos como revisadoras de telas para inspeccionar los defectos.

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

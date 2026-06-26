<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Documentación de calidad
      
      img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t4/1.png', alt='')(data-aos='fade-right')
      p.mb-0(data-aos='fade-right') Documentar los procesos permite tener un marco claro de trabajo en las operaciones de producción, y proporciona evidencias para el logro de la calidad esperada en el producto; es por ello que cada empresa puede diseñar su documentación con el fin de centrar sus procesos en la eficiencia y crear registros que documenten los procesos y se ajusten a la documentación solicitada en los estándares de calidad.
      
      
      
      
      
      
      
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.1 Ficha técnica
      
      p.mb-3 Como ya se ha mencionado este documento contiene las especificaciones de producción de las prendas, la información contenida en ella puede tener anexos como videos para especificar los métodos del desarrollo de la prenda. El formato puede ser diseñado y utilizado en programas de office como Word o Excel y los espacios creados deben ser diligenciados, tamaño y estilo de letra según normas APA.

      p.mb-5 Así mismo, las partes que componen la ficha técnica de producción deben cumplir con unos criterios de calidad:
      
      .bg-fondo-2.mb-5.p-4
        .tarjeta.bg-color-8.p-4
          SlyderA(tipo="b")
            .row.justify-content-center.mb-0.pt-4
              .col-sm-12.col-lg-5
                h4.mb-3 Ficha técnica de diseño
                p.mb-0 Especifica el diseño y muestra el dibujo plano, se pueden utilizar lupas para el acercamiento, desarrollado en programas como Corel, Illustrator o Audaces, el tamaño y dibujo es importante para guiar visualmente a la referencia correspondiente con la muestra física.
              .col-sm-12.col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/2.png', alt='')
            .row.justify-content-center.mb-0.pt-4
              .col-sm-12.col-lg-5
                h4.mb-3 Ficha técnica de patronaje
                p.mb-0 El dibujo del despiece de las prendas puede copiarse del programa donde se desarrolló, debe ser de tamaño visible y claro, la información de las medidas proporciona el insumo para las inspecciones en los puntos de control. Es importante que se incluya la descripción del método de toma de medidas, de tal forma que sea unificado y no difiera según la persona que inspeccione.
              .col-sm-12.col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/3.png', alt='')
            .row.justify-content-center.mb-0.pt-4
              .col-sm-12.col-lg-5
                h4.mb-3 Ficha técnica de producción
                p.mb-0 Incluye listados en los que describe la materia prima e insumos requeridos en la prenda, especificando consumos para realizar el alistamiento en el almacén de insumos y el proceso de corte. En el listado de hoja de ruta se especifica el orden de las operaciones, el tiempo estándar, unidades meta por hora, maquinaria, utilización de plantillas, guías, pies, aditamentos y fólderes.
              .col-sm-12.col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/4.png', alt='')
            .row.justify-content-center.mb-0.pt-4
              .col-sm-12.col-lg-5
                h4.mb-3 Ficha técnica de calidad
                p.mb-0 Describe los requisitos de confección de la prenda, acompañada de imágenes fotográficas, donde se puede visualizar la prenda terminada, en determinada operación y proceso. Indica los puntos de la prenda de más atención a controlar. Hace parte de la ficha de calidad, el anexo de la revisión de la prenda, para explicar el paso a paso del método de revisión, es un documento de apoyo para el inspector de calidad.
              .col-sm-12.col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/5.png', alt='')
            
            
      
      
      
      
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.2 Orden de corte
      
      p.mb-5 Es un formato también llamado orden de producción, al diligenciar contiene la información de las unidades a confeccionar, la distribución por tallas y por colores, el consumo de las telas; brinda información para el control de inventarios.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .titulo-sexto.color-secundario.mb-3
            h5 Figura 7. 
            span Formato orden de corte
          figure
              img(src='@/assets/curso/temas/t4/6.svg', alt='El formato presenta secciones estructuradas para registrar datos generales de la solicitud, especificaciones técnicas y consumo de la tela, distribución de unidades por talla, registro de ejecución de las diferentes etapas del proceso y áreas finales para observaciones y las firmas correspondientes.')
      
      .bg-full-width.bg-color-7.br-4.mb-5(data-aos='fade-right')
        .p-full-width-2
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/18.svg', alt='')
            .col-lg-9.mb-cus
               h2.mb-3.text-white Formato orden de corte
               p.mb-0.text-white Puede descargar este formato en PDF para su uso.
            .col-lg-2
               a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo1_Formato_orden_de_corte.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download 
      
      
      
      
      
      
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.3 Master de textiles e insumos
      
      
      p.mb-5 El formato registra la información de los textiles e insumos que se utilizan o se proyecta usar en las referencias de las prendas, con el fin de guiar en las compras de estos. La descripción de unidades, composiciones y normas aplicables, son los datos comprendidos en este documento que se desarrolla para cada insumo y tela.
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .titulo-sexto.color-secundario.mb-3
            h5 Figura 8. 
            span Formato master de insumos.
          figure
              img(src='@/assets/curso/temas/t4/7.svg', alt='El formato presenta un diseño para registrar detalladamente las especificaciones técnicas de los materiales, incluyendo campos para la descripción, el fabricante, las unidades de medida, el embalaje, los usos y los colores; además, cuenta con espacios designados para anexar una imagen, observaciones y una muestra física.')
      
      .bg-full-width.bg-color-7.br-4.mb-5(data-aos='fade-right')
        .p-full-width-2
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/18.svg', alt='')
            .col-lg-9.mb-cus
               h2.mb-3.text-white Formato master de insumos
               p.mb-0.text-white Puede descargar este formato en PDF para su uso.
            .col-lg-2
               a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo2_Formato_master_insumos.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download 
      p.mb-0 El compendio de todos los textiles o insumos forman el máster, según la clasificación puede ser de textiles o de insumos.
      
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.4 Registro de inspección de producto en proceso
      
      
      p.mb-5 En la inspección a pie de máquina, se debe tener claro el proceso para diligenciar el formato los requisitos de calidad exigidos, para registrar los defectos observados. Se muestra un ejemplo del formato, es guía para la documentación de la empresa y contribuye en la gestión de calidad.
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .titulo-sexto.color-secundario.mb-3
            h5 Figura 9. 
            span Formato de inspección de producto en proceso.
          figure
              img(src='@/assets/curso/temas/t4/8.svg', alt='El formato presenta una estructura diseñada para el registro de inspección de productos en proceso, la cual incluye columnas para documentar la fecha, el módulo o personal instructor, el personal operario, el producto, el color y la operación, así como para contabilizar las unidades revisadas y no conformes, describir los defectos encontrados y anotar observaciones generales.')
      
      .bg-full-width.bg-color-7.br-4.mb-5(data-aos='fade-right')
        .p-full-width-2
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/18.svg', alt='')
            .col-lg-9.mb-cus
               h2.mb-3.text-white Formato de inspección de producto en proceso
               p.mb-0.text-white Puede descargar este formato en PDF para su uso.
            .col-lg-2
               a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo3_Formato_inspeccion_producto_proceso.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download 
      
      
      
      
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.5 Registro de inspección de producto terminado
      
      
      p.mb-5 Es necesario codificar o tener un listado de defectos para diligenciar hojas de inspecciones. La recolección de la información entrega un indicador que luego se utiliza en la presentación de informes y el proceso de toma de decisiones para la mejora continua. 
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .titulo-sexto.color-secundario.mb-3
            h5 Figura 10. 
            span Formato inspección de producto terminado.
          figure
              img(src='@/assets/curso/temas/t4/9.svg', alt='El formato consta de un diseño para el control de calidad, la cual incluye un campo inicial para identificar a la persona responsable de la inspección, seguido de columnas para registrar la fecha, quien realiza la revisión, el producto, el color, la cantidad de la muestra, el número y porcentaje de unidades no conformes, así como un área destinada a observaciones generales.')
      
      .bg-full-width.bg-color-7.br-4.mb-0(data-aos='fade-right')
        .p-full-width-2
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/18.svg', alt='')
            .col-lg-9.mb-cus
               h2.mb-3.text-white Formato inspección de producto terminado
               p.mb-0.text-white Puede descargar este formato en PDF para su uso.
            .col-lg-2
               a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo4_Formato_inspeccion_producto_terminado.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download 
      
      
      
      
      
      
      Separador
      #t_4_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.6 Registro de inspección de lote piloto
      
      p.mb-5 Durante el proceso de desarrollo de producto se realizan ensayos o premuestras, la confección de un lote de unidades con el fin de obtener la muestra aprobada de la referencia para poder dar inicio a la producción de la prenda; de igual forma el proceso debe estar acompañado de inspecciones, el formato de registro de la inspección debe recolectar los defectos presentados, las causas y las recomendaciones para obtener la muestra y disminuir los riesgos de generación de errores durante la producción.
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .titulo-sexto.color-secundario.mb-3
            h5 Figura 11. 
            span Formato registro de inspección de lote piloto
          figure
              img(src='@/assets/curso/temas/t4/10.svg', alt='El formato incluye campos iniciales para identificar a la persona responsable de la inspección o auditoría y el producto; seguido de esto, presenta columnas detalladas para registrar la fecha, el módulo o personal instructor, el personal operario, el número de unidad, el defecto detectado, su cantidad y causa, además de la acción realizada y las recomendaciones pertinentes.')
      
      .bg-full-width.bg-color-7.br-4.mb-0(data-aos='fade-right')
        .p-full-width-2
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/18.svg', alt='')
            .col-lg-9.mb-cus
               h2.mb-3.text-white Formato registro de inspección de lote piloto
               p.mb-0.text-white Puede descargar este formato en PDF para su uso.
            .col-lg-2
               a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo5_Formato_registro_inspeccion_lote_piloto.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download   

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

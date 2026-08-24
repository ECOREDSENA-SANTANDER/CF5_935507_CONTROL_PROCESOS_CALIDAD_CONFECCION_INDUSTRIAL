<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los aprendices sobre los conceptos básicos relacionados con el control de calidad, la evolución de la calidad, la calidad 4.0, la gestión de calidad total, el ciclo PHVA, la cultura de calidad, los círculos de calidad, las metodologías Kaizen y <i>Six Sigma</i>, los costos de calidad, la norma ISO 9001:2015, la ficha técnica, la muestra física, los puntos de control en el proceso de confección y la documentación necesaria para apoyar las inspecciones y la mejora continua en la producción.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la finalidad principal del control en calidad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar la conformidad y emprender acciones correctivas cuando sea necesario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar la planeación de los procesos productivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar la ficha técnica por la muestra física.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar únicamente actividades de empaque y despacho.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuáles son los tres componentes básicos de un sistema de control?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseño, patronaje y confección.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una norma o meta, un medio para medir resultados y la comparación con retroalimentación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tela, insumos y maquinaria.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Compras, empaque y ventas.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Según el componente, ¿qué idea engloba el concepto de calidad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fabricar productos sin considerar al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Adecuar el producto a las características especificadas y cumplir requisitos que satisfacen al cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Revisar solo el precio final de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Usar siempre el mismo proceso para todas las referencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué se entiende por control de la calidad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un proceso de técnicas estadísticas para analizar variaciones y establecer mejoras.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un formato exclusivo para registrar devoluciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una actividad aplicada solo después del empaque.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una estrategia para omitir inspecciones durante la producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué son los requisitos en un proceso de control de calidad?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los defectos que siempre se aceptan en la prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La traducción de las necesidades y expectativas del cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Los nombres comerciales de las telas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los registros que reemplazan la ficha técnica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es un beneficio de implementar herramientas de control de calidad en confección?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar desperdicios y reprocesos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir costos, defectos y mejorar la ejecución de los procesos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la documentación del proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la estandarización de productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿A qué se refiere la calidad 4.0?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'A la calidad relacionada con tecnologías como <i>big data</i>, inteligencia artificial e internet de las cosas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'A la inspección manual sin apoyo de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'A la eliminación del control de procesos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'A la revisión exclusiva de productos terminados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál es el orden correcto del ciclo PHVA?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producir, Hilar, Vender y Almacenar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Planear, Hacer, Verificar y Actuar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Patronar, Cortar, Coser y Empacar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Prevenir, Evaluar, Fallar y Corregir.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué son los círculos de calidad?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Equipos voluntarios que trabajan en la mejora continua del producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Formatos usados solo para calcular costos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Máquinas especializadas para revisar telas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Defectos internos ocasionados por reprocesos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Cuál es el objetivo del método Kaizen?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la participación del personal en las mejoras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Maximizar la producción mediante la mejora continua de los procesos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aplicar únicamente auditorías externas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar los puntos de control de la prenda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué busca <i>Six Sigma</i> en los procesos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la variación y dispersión del proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir la variación para minimizar o eliminar defectos y fallos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir las herramientas estadísticas por observación informal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el contacto con las necesidades del cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Cuáles son las etapas de la metodología DMAMC?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar, Marcar, Alistar, Medir y Coser.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Definir, Medir, Analizar, Mejorar y Controlar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diagnosticar, Montar, Aceitar, Mantener y Cortar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Documentar, Comprar, Revisar, Empacar y Vender.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es un ejemplo de costo de no calidad por fallo interno?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mantenimiento de máquinas.', esCorrecta: false },
            { id: 'b', texto: 'Capacitación del personal.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Productos defectuosos o reprocesos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Auditorías internas y externas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué busca el sistema de gestión de la calidad según la ISO 9001:2015?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Integrar procesos para cumplir necesidades y expectativas del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar la información documentada de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Certificar únicamente el diseño gráfico de las prendas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar los requisitos reglamentarios del sector.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Para qué sirve la ficha técnica en la empresa de confección?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para contener especificaciones y requisitos que guían la producción de una referencia o modelo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para reemplazar la muestra física del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para registrar únicamente las quejas del cliente externo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para eliminar la organización de las líneas de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Cuáles son partes de una ficha técnica?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Rótulo, cuerpo, tablas y dibujos, control del documento y glosario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cliente, precio, publicidad, ventas y descuentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Máquina, aceite, aguja, motor y volante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Empaque, transporte, devolución, demanda y sanción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué es la muestra física en el proceso de confección?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un listado de defectos externos de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La demostración tangible del producto a fabricar, fiel a la ficha técnica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un formato exclusivo para calcular consumo de telas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una acción correctiva posterior a la auditoría.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué se revisa en los puntos de control de patronaje?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Número de piezas, anchos de costura, medidas de patrón y prenda terminada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente el empaque y la etiqueta comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo la agenda diaria de inspecciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El costo de devoluciones y sanciones legales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Para qué se realizan inspecciones a pie de máquina?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para detectar tempranamente defectos y establecer acciones de mejora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para omitir la auto calidad de los operarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para aprobar compras de textiles e insumos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para reemplazar la orden de corte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Qué permite la documentación de calidad en confección?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tener evidencias, registros y un marco claro para las operaciones de producción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evitar el seguimiento del proceso productivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar los puntos de control en la prenda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Trabajar sin formatos ni registros de inspección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

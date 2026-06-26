export default {
  global: {
    Name: 'Fundamentos de calidad y ficha técnica',
    Description:
      'Este componente aborda los fundamentos del control de calidad en la confección industrial, la interpretación de la ficha técnica y la muestra física, la identificación de puntos de control en patronaje, corte y confección, y la documentación requerida para registrar, inspeccionar y mejorar los procesos productivos de acuerdo con especificaciones técnicas y requisitos de calidad.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El proceso de control en calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Control de calidad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Gestión de calidad total',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sistema de gestión de la calidad: norma ISO 9001:2015',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ficha técnica y muestra física',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y uso de ficha técnica',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Partes de ficha técnica',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Manejo e interpretación ficha técnica',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Definición y características de la muestra física',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Puntos de control de calidad en el proceso de confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Puntos de control en patronaje',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Puntos de control en trazo y corte',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Puntos de control en confección',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Puntos de control en confección de lote piloto',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Puntos de control en compras: materiales e insumos',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Documentación de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Ficha técnica',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Orden de corte',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Master de textiles e insumos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Registro de inspección de producto en proceso',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Registro de inspección de producto terminado',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Registro de inspección de lote piloto',
            hash: 't_4_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: '<i>Big data</i>',
      significado:
        'gran volumen de datos complejos, los cuales mediante aplicaciones informáticas son utilizados para diversas aplicaciones para facilitar el análisis y toma de decisiones.',
    },
    {
      termino: '<i>Deep learning</i>',
      significado:
        'denominado en español aprendizaje profundo. método específico de aprendizaje automático (<i>machine learning</i>) que se puede ver en aplicaciones de reconocimiento de voz e imágenes.',
    },
    {
      termino: 'Defecto',
      significado:
        'es una no conformidad en características requeridas por el cliente o una norma y que causa incumplimiento del requisito y por tanto insatisfacción del cliente.',
    },
    {
      termino: 'Desviación estándar',
      significado:
        'es la medida de dispersión más utilizada, muestra el nivel de los datos dispersos referente a la media (resultado del promedio de un conjunto de datos), mientras mayor sea la desviación estándar, mayor será la dispersión de los datos.',
    },
    {
      termino: '<i>In situ</i>',
      significado:
        'es la expresión del idioma latino para decir “en el sitio”.',
    },
    {
      termino: 'Inteligencia artificial',
      significado:
        'son los diversos programas y mecanismos que funcionan parecido a los humanos, es decir, muestran comportamientos inteligentes, como por ejemplo realizar análisis predictivos con los datos obtenidos.',
    },
    {
      termino: 'Internet de las cosas',
      significado:
        'creado para conectar los objetos a internet con el fin de mejorar sus funciones en dichos objetos.',
    },
    {
      termino: 'ISO',
      significado:
        ' Organización Internacional de Estandarización, ubicada en Ginebra, Suiza, y con presencia en 193 países. promueve y desarrolla normas para estandarizar productos y servicios.',
    },
    {
      termino: 'Lote de producción',
      significado:
        'número establecido para una parte de la producción, la cual tiene características comunes y se agrupa dependiendo de un objetivo determinado; además, permite la trazabilidad del producto y de su proceso productivo.',
    },
    {
      termino: '<i>Machine learning</i> o aprendizaje automático',
      significado:
        'es una forma de inteligencia artificial utilizada con el fin de mejorar la precisión de los modelos predictivos.',
    },
    {
      termino: 'Muestra',
      significado:
        'número representativo de prendas del lote de producción; por medio de ella se deduce el cumplimiento de los requisitos de calidad de todo el lote.',
    },
    {
      termino: 'Punto de control',
      significado:
        'son partes del proceso determinadas con la metodología de árbol de decisión. son las operaciones, fases o procesos en los que se requiere realizar inspecciones para controlar la ocurrencia de defectos, lo cual es una medida preventiva.',
    },
    {
      termino: 'Punto de control crítico',
      significado:
        'operaciones, fases o procesos que requieren de riguroso control debido a que representan alto riesgo de presentar defectos y por tanto no cumplir con los requisitos.',
    },
    {
      termino: 'Requisitos',
      significado:
        'se consideran explicitos (declarados por el cliente), implícitos (necesarios para que cumplan una función), legales o reglamentarios (de acuerdo con cumplir leyes) y de la empresa (según las políticas de una organización).',
    },
    {
      termino: '<i>Sigma (σ)</i>',
      significado:
        'letra del alfabeto griego utilizada para representar la desviación estándar (unidad estadística de medición). representa la dispersión o variabilidad de un conjunto de datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias de Valencia, A. (1978). Qué es control de calidad. Servicio Nacional de Aprendizaje (SENA).',
    },
    {
      referencia:
        'Crosby P. (1994). La Calidad es libre. Madrid. Mc Graw Hill.',
    },
    {
      referencia:
        'Deming, W. (1989). Calidad, Productividad y Competitividad. Díaz de Santos.',
    },
    {
      referencia:
        'Evans, J. R., & Lindsay, W. M. (2005). Administración y control de calidad. Thomson.',
    },
    {
      referencia:
        'Feigenbaum, A. V. (2000). Control total de la calidad (3.ª ed.). Compañía Editorial Continental.',
    },
    {
      referencia:
        'International Organization for Standardization. (2005). Sistemas de gestión de la calidad—Fundamentos y vocabulario (ISO 9000:2005).',
    },
    {
      referencia:
        'Ishikawa K. (1994). Introducción al Control de Calidad. Díaz de Santos.',
    },
    {
      referencia:
        'Juran, J. Gryna, F.M. (1993). Manual de Control de Calidad. Mc Graw Hill.',
    },
    {
      referencia:
        'León Lefcovich, M. (2009). Preguntas y respuestas sobre Seis Sigma. El Cid Editor | apuntes.',
    },
    {
      referencia:
        'Mejía, M.M. (1991). Control de calidad total: una manera diferente de orientar la dirección de la empresa [E-book]. Servicio Nacional de Aprendizaje (SENA).',
    },
    {
      referencia:
        'OBS Business School. (s.f.). OBS Business School. Obtenido de Project Management.',
    },
    {
      referencia: 'Six Sigma Lean solutions. (2020). [Blog].',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Cecilia Gutiérrez',
          cargo: 'Experta temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

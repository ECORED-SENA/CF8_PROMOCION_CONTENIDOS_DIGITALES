export default {
  global: {
    componenteFormativo: 'Fundamentos de analítica web',
    descripcionCurso:
      'La analítica web es el conjunto de técnicas para la medición del tráfico en un sitio web cuyo propósito es lograr la optimización de su uso para el internauta. En el presente componente profundizaremos en los conceptos, tipos y técnicas de los principales temas de la analítica web abarcando los siguientes temas: métricas, engagement, interacción, reacciones, comentarios, seguidores y reporte.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/imagen1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/imagen2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/imagen3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/imagen4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/imagen5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/imagen6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/imagen7.png'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/imagen8.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Métricas (KPI)',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Engagement',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Interacción',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Reacciones',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Comentarios',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Seguidores',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Reporte',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Armstrong, G., y Kotler, P. (2003). Mercadotecnia: una introducción. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Bertolotti, P. (2009). Conceptos básicos comunicación digital. Universidad Nacional de Misiones.',
      link: '',
    },
    {
      referencia:
        'Cabero, A., J., y Llorente, C, M. D. C. (2007). La interacción en el aprendizaje en red: uso de herramientas, elementos de análisis y posibilidades educativas. Revista Iberoamericana de Educación a Distancia, 10 (2), 97-123.',
      link: '',
    },
    {
      referencia: 'Chai, W., & Irei, A. (s.f.). Network protocol.',
      link: 'https://searchnetworking.techtarget.com/definition/protocol',
    },
    {
      referencia:
        'Gálvez, A., y Tirado, F. (2006). Sociabilidad en pantalla. Un estudio de la interacción en los entornos virtuales. UOC.',
      link: '',
    },
    {
      referencia:
        'Jenkins, H. (2001). La cultura se vuelve global. Revisión de Tecnología, 104(6), 89-89.',
      link: '',
    },
    {
      referencia:
        'ithin. (2016). Common Network Protocols and Their Ports. Interserver.',
      link:
        'https://www.interserver.net/tips/kb/common-network-protocols-ports/ ',
    },
    {
      referencia: 'Kotler, P. (1997). Marketing Management. Prentice-Hall. ',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Alcance orgánico',
      significado:
        'porcentaje que evalúa el impacto y el número de personas que han visto una publicación de manera natural, sin ningún tipo de promoción o publicidad de pago. ',
    },
    {
      termino: 'Alcance viral ',
      significado:
        'calcula la evolución y la interacción de una publicación en cualquier tipo de formato, especialmente las redes sociales.',
    },
    {
      termino: 'Analítica web ',
      significado:
        'forma de medir y analizar los datos de tráfico de un sitio web.',
    },
    {
      termino: 'Cookies',
      significado:
        'pequeños fragmentos de información que quedan registrados en el navegador cuando se visita un sitio web y que permiten a este sitio seguir el rastro de la actividad de los usuarios.',
    },
    {
      termino: 'Engagement ',
      significado:
        'sensación de pertenencia y unión emocional entre una marca y un usuario. Es el objetivo de toda marca o empresa en redes sociales a través de basar la estrategia en marketing de contenidos y generar en cada una de las redes la mayor participación posible.',
    },
    {
      termino: 'Fanpage',
      significado:
        'también llamada “página de fans”, es la plataforma que ofrece Facebook a las empresas, marcas u organizaciones para visibilizar y conectar con los usuarios. A diferencia de un perfil, una fan page no tiene límite de fans y es posible tener acceso a la información estadística de la página.',
    },
    {
      termino: 'Hashtag ',
      significado:
        'etiqueta formada por una palabra o un conjunto de palabras precedidas por el símbolo numeral (#) que transmite una idea, un nombre o un concepto que, normalmente, va asociado con un mensaje o texto. Su uso se ha extendido principalmente en redes sociales como Twitter, Instagram o Google Plus.',
    },
    {
      termino: 'Influenciador',
      significado:
        'en social media es aquella persona que tiene capacidad para viralizar y compartir contenidos con un amplio número de personas.',
    },
    {
      termino: 'KPI',
      significado:
        'siglas de Key Performance Indicator; son indicadores y herramientas de medición de los cuales se obtiene información útil del nivel de rendimiento de una campaña o estrategia de social media marketing.',
    },
    {
      termino: 'Reputación online',
      significado:
        'conjunto de opiniones y experiencias (positivas o negativas) de usuarios y consumidores que giran en torno a una marca, un producto o una empresa, generados en el entorno 2.0 y en las redes sociales.',
    },
    {
      termino: 'Retargeting ',
      significado:
        'nueva técnica de publicidad que consiste en mostrar al usuario productos afines, una especie de filtro personalizado de productos y servicios en los que se está más receptivo a recibir información. Este tipo de prácticas se hacen posibles si, y solo si, los usuarios admiten voluntariamente que aceptan cookies cuando navegan en determinado sitio.',
    },
    {
      termino: 'ROI',
      significado:
        'siglas en inglés de return on investment, que significa retorno de la inversión. Es un indicador que mide el beneficio frente al gasto de la inversión de un proyecto de social media marketing en función de los objetivos y las metas logrados.',
    },
    {
      termino: 'Storytelling ',
      significado:
        'técnica de marketing cuyo objetivo es conectar y vincular al usuario directamente con el contenido contado en forma de historia gráfica o audiovisual.',
    },
  ],
  complementario: [
    {
      tema: '1. Métricas (KPI)',
      referencia:
        'Kotler, P., y Armstrong, G. (2003). Fundamentos de marketing. Pearson Educación.',
      tipo: 'Libro',
      link:
        'http://sgpwe.izt.uam.mx/files/users/uami/love/Marketing_I/Marketing_I_trim11P/Capitulo_1.pdf',
    },
    {
      tema: '2. Engagement',
      referencia:
        'Lane, K., y Kotler, P. (2006). Dirección de marketing. Editorial Pearson.',
      tipo: 'Libro',
      link: 'http://biblioteca.udgvirtual.udg.mx/jspui/handle/123456789/3652',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

export default {
  global: {
    componenteFormativo: 'Las imágenes y la fotografía',
    descripcionCurso:
      'Las imágenes y las fotografías poseen diferentes características que deben ser tenidas en cuenta cuando se realicen producciones gráficas, en este componente se describirán características como estructuras y composición de la imagen, así como los planos fotográficos y las técnicas de composición de la misma. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'La imagen',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de estructuras',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Composición',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Jerarquías en los elementos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La fotografía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación de la fotografía',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Planos fotográficos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Técnicas de composición',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Consejos prácticos para tomar fotografías',
            hash: 't_2_4',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF2_52410394_DU.pdf',
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
  complementario: [
    {
      tema: '2. La fotografía',
      referencia: '(s,f) La fotografía digital a su alcance. ',
      tipo: 'PDF',
      descarga: 'downloads/Manual_Fotografia_Digital.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Composición',
      significado:
        'Distribución o disposición de todos los elementos que se incluirán en un diseño, fotografía, pintura, escultura.',
    },
    {
      termino: 'Encuadre',
      significado: 'Espacio que capta en cada toma el objetivo de una cámara.',
    },
    {
      termino: '<em>Flash</em>',
      significado:
        'Aparato que, mediante un destello, da la luz precisa para hacer una fotografía instantánea.',
    },
    {
      termino: 'Fotografía',
      significado:
        'Procedimiento o técnica que permite obtener imágenes fijas de la realidad mediante la acción de la luz sobre una superficie sensible o sobre un sensor.',
    },
    {
      termino: 'Imagen',
      significado: 'Representación visual de algo real o imaginado.',
    },
    {
      termino: 'Imagen análoga',
      significado:
        'Imagen conseguida mediante un proceso fotográfico tradicional.',
    },
    {
      termino: 'Plano fotográfico',
      significado:
        'Parte de la imagen capturada que muestra lo que hay a cierta distancia de la cámara.',
    },
    {
      termino: 'Retrato',
      significado: 'Fotografía donde el objeto principal es una persona.',
    },
    {
      termino: '<i>Zoom</i>',
      significado:
        'Capacidad de acercar o alejar la imagen de la cámara sin tener que mover físicamente más cerca o más lejos del sujeto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alfeo, J. (2011). Información audiovisual, elementos de la composición de la imagen. Madrid: Universidad Nacional de Educación a Distancia.',
      link: '',
    },
    {
      referencia:
        'Alves, L. Japiassu, R. Hetkwoski, T. (2012). Trabajo colaborativo en la red. Madrid: Universidad Nacional de Educación a Distancia.',
      link: '',
    },
    {
      referencia:
        'Aparici, R. García A. (1989). Lectura de imágenes. Madrid: Ediciones la torre.',
      link: '',
    },
    {
      referencia:
        'Belting, H. Vélez, G. (2007). Antropología de la imagen. Buenos Aires: Katz editores.',
      link: '',
    },
    {
      referencia:
        'Cuadrado, A. Romo, M. (2011). Estudio de medios comunicativos. Madrid: Universidad Nacional de Educación a Distancia.',
      link: '',
    },
    {
      referencia:
        'Feltrero, R. (2007). El software libre y la construcción ética de la sociedad del conocimiento. Barcelona: Icaria editorial.',
      link: '',
    },
    {
      referencia:
        'Swenson, L. (1984). Teorías del aprendizaje. Buenos Aires: Paidós.',
      link: '',
    },
    {
      referencia:
        'Tamayo, M. (1999). Serie Aprender a Investigar, Módulo 2: La investigación. Colombia: ICFES.',
      link: '',
    },
    {
      referencia:
        'Valera, J. (2012). Productividad digital avanzada. Universidad Nacional de Educación a Distancia. Madrid: Universidad Nacional de Educación a Distancia.',
      link: '',
    },
    {
      referencia:
        'Winn, W.D. (1994). Contributions of perceptual and cognitive processes to the comprehension of graphics. En Schnotz, W. y Kulliavy, R.W. (eds.), Comprehension of graphics. Advances in psychology. Amsterdam: Elsevier Science B.V.',
      link: '',
    },
    {
      referencia:
        'Wong, W. (1995). Fundamentos del diseño. Madrid: Editorial Gustavo Gili.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jhon Milton Zarate Martínez',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Johana Melina Montoya Piriachi',
          cargo: 'Asesora pedagógica',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Carolina Jiménez Suescun',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suárez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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

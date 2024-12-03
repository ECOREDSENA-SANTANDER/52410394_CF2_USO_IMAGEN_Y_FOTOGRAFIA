<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La imagen
    p Una imagen es la representación visual de algo concreto o abstracto, imaginario o real, es decir, la simulación de una figura, un objeto, una escena o un concepto que se aprecia con la vista. Son ejemplos de imágenes las fotografías, las ilustraciones, las obras de arte y diseño, así como lo que refleja un espejo.
    p En la producción de imágenes se debe tener en cuenta elementos estructurales que definen la distribución y la organización de las formas. Esto permite crear piezas simétricas a partir una variedad de combinaciones en sus componentes.
    
    Separador
    #t_1_1.titulo-segundo.color-primario
      h2 1.1 Tipos de estructuras
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-10
        .bloque-texto-f.color-secundario.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto.p-4 Según Wong (1995), #[i “todos los diseños tienen una estructura que gobierna la posición de las formas en una composición. Esta estructura impone orden y predetermina las relaciones internas de las formas”.] (pág. 27)
        
      .mn.p-5.bg-slyder.mb-5
        .tarjeta.bg-color-1.p-5
          SlyderA(tipo='b')
            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7.mb-0
                h4 Estructura formal: 
                p Se compone de líneas estructurales que aparecen construidas de manera rígida o matemática. Guían la formación completa del diseño: tipos repetición, gradación, radiación.
              .col-sm-12.col-lg-4.mb-0: img(src='@/assets/curso/temas/t1/1.png', alt='')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7.mb-0
                h4 Estructura semi formal:
                p Este tipo de estructura se caracteriza por seguir un trazo regular con algunas irregularidades. Aquí no existe rigidez, al contrario, se muestra una variación simple.
              .col-sm-12.col-lg-4.mb-0: img(src='@/assets/curso/temas/t1/3.png', alt='')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7.mb-0
                h4 Estructura informal:
                p Esta estructura no se basa en líneas estructurales y la organización de los elementos se presenta de manera indefinida.
              .col-sm-12.col-lg-4.mb-0: img(src='@/assets/curso/temas/t1/4.png', alt='')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7.mb-0
                h4 Estructura activa/ inactiva:
                p La estructura inactiva equivale a líneas conceptuales que sirven de guías para las formas. Estas líneas no se involucran con los componentes del diseño. Por otro lado, la estructura activa es un conjunto de líneas también conceptuales que son partícipes del diseño.
              .col-sm-12.col-lg-4.mb-0: img(src='@/assets/curso/temas/t1/5.png', alt='')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7.mb-0
                h4 Estructura visible/invisible:
                p En la mayoría de los casos, la estructura es invisible, pero también puede hacerse partícipe del diseño haciéndose visible ya sea en positivo o en negativo.
              .col-sm-12.col-lg-4.mb-0: img(src='@/assets/curso/temas/t1/6.png', alt='')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7.mb-0
                h4 Variaciones en estructuras
                p #[b Forma:] Cualquier variación que altere la retícula o los elementos que contiene, puede ser en color, distribución de celdas, proporciones, etc.
              .col-sm-12.col-lg-4.mb-0: img(src='@/assets/curso/temas/t1/7.png', alt='')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7.mb-0
                h4 Gradación:
                p Exige un cambio gradual ya sea en color forma o tamaño de manera ordenada. Genera ilusión óptica y crea una sensación de progresión. Conduce (culminaciones).
              .col-sm-12.col-lg-4.mb-0: img(src='@/assets/curso/temas/t1/8.png', alt='')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7.mb-0
                h4 Variaciones en estructuras
                p #[b Radiación:] es un caso especial de repetición. Los módulos repetidos o las subdivisiones estructurales giran alrededor de un centro común, pueden aplicar además otros tipos de gradaciones.
              .col-sm-12.col-lg-4.mb-0: img(src='@/assets/curso/temas/t1/9.png', alt='')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7.mb-0
                h4 Variaciones en estructuras
                p #[b Anomalía:] es la presencia de la irregularidad en un diseño, en el cual aún prevalece la regularidad. Marca cierto grado de desviación de la conformidad general, lo que resulta en una interrupción, leve o considerable. A veces la anomalía es solo un elemento singular dentro de una organización uniforme.
              .col-sm-12.col-lg-4.mb-0: img(src='@/assets/curso/temas/t1/10.png', alt='')
    
    Separador
    #t_1_2.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 1.2 Composición
    p Se define como una distribución o disposición de todos los elementos que se incluirán en un diseño, fotografía, pintura, escultura, etc., de una manera equilibrada y acorde con el mensaje. Existen diversos tipos de composición:
    .mn.p-5.bg-slyder.mb-5
      .tarjeta.bg-color-1.p-5
        SlyderA(tipo='b')
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-7.mb-0
              h4 Composición estática
              p Existe cuando la imagen huye de todo lo que le suponga inestabilidad, movimiento o transformación. En ella se buscan factores como la armonía, la uniformidad, la tensión o la simetría.
            .col-sm-12.col-lg-4.mb-0: img(src='@/assets/curso/temas/t1/11.png', alt='Ejemplo de composición estática')

          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-7.mb-0
              h4 Composición dinámica
              p En este tipo de composición hay asimetría, ritmo, conflicto y contraste. Se jerarquiza el espacio visual. En ningún momento una composición dinámica implica una composición confusa, es por eso por lo que un diseño dinámico debe estar sometido a establecer un orden en el encuadre.
            .col-sm-12.col-lg-4.mb-0: img(src='@/assets/curso/temas/t1/12.png', alt='Ejemplo de composición dinámica')

          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-7.mb-0
              h4 Equilibrio
              p El equilibrio es una sensación intuitiva, inherente a la percepción del hombre, por lo tanto, la horizontal y vertical son la relación básica de lo construido con el entorno. Para lograr equilibrio se debe tener muy en cuenta la distribución de los elementos, los cuales han de ser ubicados según su "peso visual". Este término se refiere a la mancha o masa, al volumen y el peso con el cual se asocia a cada elemento de acuerdo con los conocimientos del diseñador o artista.
            .col-sm-12.col-lg-4.mb-0: img(src='@/assets/curso/temas/t1/13.png', alt='Ejemplo de equilibrio en composición')
          .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7.mb-0
                h4 Simetría
                p La simetría consiste en la separación de una imagen de uno de sus ejes. Estos dos ejes son iguales y se reflejan como un espejo. Dentro del manejo de la imagen, la simetría es más general y se refiere a la equivalencia de pesos que hay entre los elementos de una imagen tanto de un eje como del otro. 
                p Existen diversos tipos de simetría. La simetría rígida es la disposición de las imágenes con absoluta similitud con respecto al eje real. En la simetría variable, la correspondencia de las partes es más libre y elástica, hay mayor libertad, puede traducirse en un cambio de posiciones o actividades de ambos lados del eje central.
              .col-sm-12.col-lg-4.mb-0: img(src='@/assets/curso/temas/t1/14.png', alt='Ejemplo de simetría')

          .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7.mb-0
                h4 Asimetría
                p Es la distribución libre de los elementos dentro del formato, pero sin perder el equilibrio o la unidad de la imagen. Es característico de la fotografía de paisajes o de cualquier composición que intente reflejar agitación, dinamismo o vitalidad.
              .col-sm-12.col-lg-4.mb-0: img(src='@/assets/curso/temas/t1/15.png', alt='Ejemplo de asimetría')
    

    Separador
    #t_1_3.titulo-segundo.color-primario
      h2 1.3 Jerarquías en los elementos
    p Una composición acertada puede ayudar a transmitir de forma clara las sensaciones que se pretenden. Entre los aspectos formales está el manejo de la proporción, esta se encuentra directamente relacionada con el encuadre, la perspectiva, sensación de profundidad y equilibrio. Hace referencia además al peso y a la forma de distribuir los elementos en el formato. Una jerarquía se da por peso de una masa respecto a otras y por el valor tonal de una masa respecto a otra.
    p Las formas geométricas simples son más pesadas que las formas geométricas irregulares, por tal motivo, para que estas se equilibren, las formas geométricas irregulares deben ser, más luminosas, de mayor tamaño o estar en un primer plano.
    p.mb-5 A continuación, se presentan algunos ejemplos de jerarquización.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-12
        .titulo-sexto.color-primario
          h5 Figura 1.
          span  Ejemplos de jerarquización.
        .row.justify-content-center.align-items-center.mb-0
          .col-sm-12.col-lg-6.mb-0
            img(src='@/assets/curso/temas/t1/16.png', alt='La figura presenta dos imágenes que ejemplifican la jerarquía en los elementos de una fotografía, en una se muestra una estatua de un caballo con arboles y cielo en el fondo; la segunda presenta el dedo pulgar de un hombre y una araña pequeña aproximándose.')
          .col-sm-12.col-lg-6.mb-0
            img(src='@/assets/curso/temas/t1/17.png', alt='La figura presenta dos imágenes que ejemplifican la jerarquía en los elementos de una fotografía, en una se muestra una estatua de un caballo con arboles y cielo en el fondo; la segunda presenta el dedo pulgar de un hombre y una araña pequeña aproximándose.')



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

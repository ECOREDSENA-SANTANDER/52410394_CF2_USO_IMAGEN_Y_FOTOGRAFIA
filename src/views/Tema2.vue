<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 La fotografía
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        p Según el diccionario de la Real Academia Española, la fotografía es el arte de fijar y reproducir por medio de reacciones químicas, en superficies convenientemente preparadas, las imágenes recogidas en el fondo de una cámara oscura.
        p Pero con la fotografía digital ese concepto está desactualizado y se puede decir entonces que la fotografía es el proceso de capturar una imagen y almacenarla en un medio físico o digital.
        p.mb-0 Una fotografía sirve como referente, recuerdo o testigo, es decir, un punto clave capturado en el tiempo que es capaz de traspasar barreras generacionales y mantenerse siempre vigente.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/1.png', alt='')
    Separador
    #t_2_1.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 2.1 Clasificación de la fotografía
    p Según el modelo o la escena que se esté capturando se puede clasificar la fotografía de la siguiente manera:
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/2.png', alt='')
      .col-sm-12.col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-primario")
          .row(titulo="Retrato")
            .col-sm-12.col-lg-9
              p.mb-0 El retrato es la fotografía donde el objeto principal es una persona. Este tipo de fotografía es muy común verlo en obras como biografías, donde se quiere hacer énfasis en la persona de quien se habla.
              p.mb-0 Se pueden ver cientos de retratos en nuestros álbumes familiares. La foto de los papás, de los abuelos, la del grado, todas esas imágenes son retratos que muestran la grandeza de las personas.
            .col-sm-12.col-lg-3
              img(src='@/assets/curso/temas/t2/3.png', alt='').d-none.d-lg-block
          .row(titulo="El bodegón")
            .col-sm-12.col-lg-9
              p.mb-3 Este tipo de fotografía es también conocido como "Naturaleza muerta", ya que captura objetos inanimados formando una composición en la escena. Muchas personas tienen la concepción errada que al hablar de bodegones solo se habla de objetos relacionados con comida, pero están equivocados, ya que este tipo de fotografía abarca tanto objetos naturales como objetos creados por el hombre.
              p.mb-0 Lo más valioso del bodegón es la libertad que le da al fotógrafo de intervenir con la escena, los objetos, la luz, y así lograr composiciones muy interesantes, dándole vida y realce a objetos que quizá por la cotidianidad muchas veces se ignora.
            .col-sm-12.col-lg-3
              img(src='@/assets/curso/temas/t2/4.png', alt='').d-none.d-lg-block

          .row(titulo="El paisaje")
            .col-sm-12.col-lg-9
              p.mb-0 Básicamente un paisaje es una extensión de terreno que se puede observar desde un punto, involucrando así dos partes: un observador y algo que está siendo observado. Este puede ser rural, urbano, espacial, microscópico, artificial, natural, etc. Lo importante es la magnitud de la toma, ya que en la fotografía de paisajes no se está enfocando un objeto específico sino la totalidad de un algo.
            .col-sm-12.col-lg-3
              img(src='@/assets/curso/temas/t2/5.png', alt='').d-none.d-lg-block

          .row(titulo="Fotografía nocturna")
            .col-sm-12.col-lg-9
              p.mb-3 Se interpreta como fotografía nocturna la que es tomada en condiciones de luz un tanto complejas, ya sea al anochecer, a lo largo de la noche o en el momento del amanecer.
              p.mb-0 Estas fotografías son muy difíciles de lograr, pero muy satisfactorias cuando se obtiene el objetivo. Lo más recomendable para tener buenas imágenes nocturnas es utilizar la cámara fija con trípode y en lo posible no usar #[i flash].
            .col-sm-12.col-lg-3
              img(src='@/assets/curso/temas/t2/6.png', alt='').d-none.d-lg-block

          .row(titulo="Fotografía deportiva")
            .col-sm-12.col-lg-9
              p.mb-3 La fotografía en este campo exige bastantes retos. Pero algo que muchas veces no se tiene en cuenta y es indispensable, es conocer las reglas básicas del deporte. Esto va a ayudar a tener buenas tomas y saber el momento propicio para obturar.  Es muy importante considerar el movimiento de los objetos o de las personas y tener la capacidad de anticiparse. Dependiendo de la situación, un trípode sería de gran utilidad. 
              p.mb-0 Se requiere bastante paciencia y al mismo tiempo agilidad para capturar un momento clave. Algunas cámaras ofrecen la opción de varios disparos consecutivos en aras de capturar secuencias.

            .col-sm-12.col-lg-3
              img(src='@/assets/curso/temas/t2/7.png', alt='').d-none.d-lg-block

          .row(titulo="Fotografía arquitectónica")
            .col-sm-12.col-lg-9
              p.mb-0 Este tipo de fotografía es muy empleado como documental, ya que ofrece detalles exclusivos y permite enmarcar un contexto generacional alrededor de sus características. Evoca lugares, culturas, momentos específicos y también puede georreferenciar fácilmente en un momento en el tiempo.
            .col-sm-12.col-lg-3
              img(src='@/assets/curso/temas/t2/8.png', alt='').d-none.d-lg-block






    Separador
    #t_2_2.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 2.2 Planos fotográficos
    p En fotografía, un plano es la proporción del objeto que se captura. Esto ayuda a determinar qué parte del objeto es más relevante para la fotografía para realizar los cortes correspondientes, sin descuidar proporciones ni la estética final.
    p.mb-5 Estos son algunos de los más conocidos y utilizados, organizados del plano más abierto al más cerrado: general, americano (tres cuartos), medio, primer plano, primerísimo primer plano y detalle.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-6
        .titulo-sexto.color-primario
          h5 Figura 2.
          span  Planos fotográficos.
        img(src='@/assets/curso/temas/t2/9.png', alt='La figura presenta 6 fotografías, donde se mencionan los diferentes tipos de planos: general, americano (tres cuartos), medio, primer plano, primerísimo primer plano y detalle.')
    .row.justify-content-center.mb-5
      .col-lg-12
        TabsA.color-acento-botones
          .tarjeta.bg-color-2.p-4(titulo="Plano general") 
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-9
                p.mb-3 El plano general es el más abierto, ya que permite mayor cobertura de la escena. Se usa cuando se quiere abarcar un gran conjunto de cosas, en la composición lograda por el conjunto, mas no se quiere hacer énfasis en ningún detalle específico. Este plano logra hacer un mayor énfasis en una situación que en un sujeto en particular. Al ser el plano más abierto es el ideal para tomar paisajes, conciertos, caravanas y demás situaciones similares.
                p.mb-0 También se pueden considerar dos variantes al plano general que son: el plano general corto y el plano general conjunto. El plano general corto es la toma que se le hace a una persona u objeto en medio de un gran fondo, y el plano general conjunto es el que se toma a un grupo numeroso de personas u objetos donde prácticamente enmarcan la fotografía.
              .col-sm-12.col-lg-3
                img(src='@/assets/curso/temas/t2/10.png', alt='')

          .tarjeta.bg-color-2.p-4(titulo="Plano americano (tres cuartos)")
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-9
                p.mb-3 El plano americano es el que se les toma a las personas haciendo el corte a la altura de las rodillas.
                p.mb-3 Su uso inicia en las películas western, ante la necesidad de enfocar los encuentros de pistoleros de forma que se resaltara al máximo la acción al desenfundar el revólver.
                p.mb-0 Es un buen plano para tomar grupos de personas, no muy numerosos y de similares características, ya que resalta las personas y las hace ver muy bien.
              .col-sm-12.col-lg-3
                img(src='@/assets/curso/temas/t2/11.png', alt='')

          .tarjeta.bg-color-2.p-4(titulo="Plano medio")
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-9
                p.mb-3 El plano medio es aquel que corta la toma por la cintura de la persona, razón por la cual es muy empleado para la fotografía de retrato. En televisión es muy utilizado en las entrevistas y en los noticieros.
                p.mb-3 Este plano realza las características del modelo por lo tanto es muy usado en las fotografías de moda, al hacer uso de este plano en un formato vertical, el fondo pasa por desapercibido.
                p.mb-0 Existe una variante llamada plano medio corto o plano de busto, y como su nombre lo indica hace un corte mayor, desde el nivel del pecho a la cabeza. Esta característica lo hace mucho más subjetivo y genera una mayor identificación emocional con el observador.
              .col-sm-12.col-lg-3
                img(src='@/assets/curso/temas/t2/12.png', alt='')

          .tarjeta.bg-color-2.p-4(titulo="Primer Plano")
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-9
                p.mb-3 De aquí en adelante el fondo pierde cualquier grado de importancia en la fotografía. La fotografía de primer plano es aquella que corta la imagen a nivel de los hombros. Es una fotografía muy íntima dado su grado de cercanía con el modelo.
                p.mb-0  El usarla de forma vertical es ideal para la fotografía de rostros y de forma horizontal cuando existe juego alguno de manos o de algún objeto que intervenga en escena.

              .col-sm-12.col-lg-3
                img(src='@/assets/curso/temas/t2/13.png', alt='')

          .tarjeta.bg-color-2.p-4(titulo="Primerísimo primer plano")
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-9
                p.mb-3 Quizá es el plano más emocional que existe, ya que corta el rostro desde la base del mentón hasta desaparecer parte superior de la cabeza.
                p.mb-0 Logra darle un significado muy personal a la fotografía y sentir la emoción que expresa el modelo, acentuando la carga emotiva y conduciendo la atención totalmente al sujeto fotografiado.
              .col-sm-12.col-lg-3
                img(src='@/assets/curso/temas/t2/14.png', alt='')

          .tarjeta.bg-color-2.p-4(titulo="Plano detalle")
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-9
                p.mb-3 Este plano muestra un "detalle" específico que en otro tipo de plano quizá pasaría desapercibido. Es un plano totalmente artístico y difícil de manejar, que exige que muchas veces puede confundir al espectador, ya que puede descontextualizar fácilmente una imagen. Es totalmente expresivo y muchas veces se pierde en la importancia del contexto o del cuerpo al que pertenece el detalle.
                p.mb-0 Siendo un plano tan cerrado suele ser confundido con la fotografía macro, pero no necesariamente lo es. La fotografía macro enfoca objetos con bastante cercanía a la cámara, pero en diferencia a ello el plano detalle puede tomar objetos enteros, por ejemplo, un monumento famoso representante de una ciudad, y aun así no deja de ser un plano detalle.
              .col-sm-12.col-lg-3
                img(src='@/assets/curso/temas/t2/15.png', alt='')





    Separador
   
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-9
        #t_2_3.titulo-segundo.color-primario(data-aos="zoom-in-left")
          h2 2.3 Técnicas de composición
        p.mb-3 Con el auge actual de las cámaras digitales, muchas veces se piensa que se debe tener la última cámara para obtener las mejores fotografías y esto no es así. La cámara no hace una buena fotografía, la hace el fotógrafo.
        p.mb-3 Por ello la importancia de la composición en la fotografía, puesto que no solo es necesario disparar muchas veces, sino pensar que se está obteniendo en cada toma. Cada fotografía es única e irrepetible, lo importante es capturar el momento propicio de la forma adecuada. La composición le da un toque más interesante a la fotografía, le agrega un gran valor artístico y la hace más agradable a la vista.
        p.mb-0 A continuación, encontrará una serie de normas de composición que dan una mejor idea a la hora de tomar nuestras fotografías. Entre las técnicas más utilizadas se encuentran: el encuadre, la compensación, la regla de los tercios, la regla del horizonte, la regla de la mirada y la convergencia de diagonales.
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/16.png', alt='')

    .banner-title.d-flex.align-items-center.mb-4
      .img-banner 
        img(src='@/assets/curso/temas/t2/17.svg', alt='')
      .texto-banner
        h3.my-0 El encuadre

    p.mb-3  El encuadre es fundamental para una buena foto, puesto que hace pensar en los objetos que se ven en escena. Se ve fácilmente si falta algo, parte de algo o si por el contrario hay objetos que sobran.
    p.mb-5 También ayuda a determinar si el elemento que más queremos resaltar está bien ubicado o no y si se guardan correctas proporciones en cuanto al ancho y alto de la imagen.

      

    .banner-title.d-flex.align-items-center.mb-4
      .img-banner 
        img(src='@/assets/curso/temas/t2/17.svg', alt='')
      .texto-banner
        h3.my-0 La compensación
    p.mb-0 La composición de la escena debe ser compensada, guardar un sutil equilibrio entre fondo y objeto, o si es un plano cerrado entre los objetos que allí aparecen.
    p.mb-5 En caso de haber descompensación intencional en la fotografía se deben conservar los detalles que mantengan el significado que se quiere trasmitir al espectador.


   
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        .banner-title.d-flex.align-items-center.mb-4
          .img-banner 
            img(src='@/assets/curso/temas/t2/17.svg', alt='')
          .texto-banner
            h3.my-0 La regla de los tercios
        p.mb-3 La regla de los tercios es quizá la mejor ayuda que tiene a la hora de hacer una fotografía. Consiste en hacer una división imaginaria al marco que delimita la escena que se va a capturar, se divide el campo en tres filas y tres columnas para poner los puntos de atención, es decir, los cuatro puntos de intersección de estas divisiones.
        p.mb-3 Estos cuatro puntos de interés son llamados puntos fuertes. De esta manera se logra desviar el punto de atención del acostumbrado centro y jugar con los demás elementos en escena.
        p.mb-0 Si existen dos puntos de interés, lo mejor es ubicar cada uno en uno de esos puntos y ojalá opuestos formando una diagonal entre ellos. De esta manera el espectador suele sentirse más atraído por la fotografía.
      .col-sm-12.col-lg-4
        img(src='@/assets/curso/temas/t2/18.png', alt='')

    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        .banner-title.d-flex.align-items-center.mb-4
          .img-banner 
            img(src='@/assets/curso/temas/t2/17.svg', alt='')
          .texto-banner
            h3.my-0 La regla de horizonte
        p.mb-3 Esta recomendación consiste en ubicar el horizonte de la fotografía sobre uno de los tercios de esta. Para lo cual se divide la fotografía en tres filas y basándose en esas divisiones se ubica el horizonte.
        p.mb-0 De esta manera se dejan dos tercios de la imagen para el elemento principal y un tercio para el resto. Esto garantiza una fotografía con suficiente aire, equilibrada y da la sensación de no estar incompleta.
      .col-sm-12.col-lg-4
        img(src='@/assets/curso/temas/t2/19.png', alt='')

    .banner-title.d-flex.align-items-center.mb-4
      .img-banner 
        img(src='@/assets/curso/temas/t2/17.svg', alt='')
      .texto-banner
        h3.my-0 La regla de la mirada
    p.mb-3 Este concepto indica que en la fotografía se debe guardar más aire en el espacio al cual se dirige la mirada del modelo. En otras palabras, se le debe dar mayor espacio al frente que a la parte trasera del personaje fotografiado.
    p.mb-5 Se presenta una situación similar cuando se tiene un objeto en movimiento, aquí lo importante es que quede más espacio libre en la parte delantera, que es hacia donde se dirige el objeto, generando así una sensación de entrada en la fotografía.

    .banner-title.d-flex.align-items-center.mb-4
      .img-banner 
        img(src='@/assets/curso/temas/t2/17.svg', alt='')
      .texto-banner
        h3.my-0 Convergencia de diagonales
    .row.justify-content-center.mb-5
      .col-lg-8
        p.mb-3 En toda fotografía que se tenga se pueden ver líneas imaginarias que marcan un horizonte y muchas veces existen puntos de convergencia entre esas líneas. Al tomar por ejemplo una torre desde su parte baja se puede ver cómo las líneas parecen unirse más adelante, o en el típico ejemplo de la carrilera del tren, se evidencia cómo las líneas tienen la misma tendencia.
        p.mb-3 Para generar fotografías interesantes se puede jugar con la posición respecto a las líneas de convergencia, haciendo que se desplacen por la imagen diagonalmente. La ubicación y la simetría ayudan a generar imágenes de mayor impacto.
        p.mb-0 Teniendo en cuenta que las líneas convergentes no dirigen siempre hacia un punto, se encuentre o no dentro de la imagen, se puede tomar ese punto como el centro de interés de la fotografía. Así mismo, al ubicar el elemento que se quiera destacar, las líneas inevitablemente llevarán al espectador al objetivo establecido.
      .col-lg-4
        img(src='@/assets/curso/temas/t2/20.png', alt='')

    Separador
    #t_2_4.titulo-segundo.color-primario
      h2 2.4 Consejos prácticos para tomar fotografías
    p.mb-3 En esta última parte se han recopilado algunos pequeños y prácticos consejos, que ayudarán a obtener fotografías más interesantes y mejorarán su criterio como fotógrafo.
    p.mb-5 Son cosas sencillas que se deben tener en cuenta al tomar una fotografía, muchas veces prestando un poco más de atención a cada elemento que incida en la escena.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/21.png', alt='')
      .col-sm-12.col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-primario")
          .row(titulo="Buscar un objeto llamativo")
            .col-sm-12.col-lg-12
              p.mb-3 Cuando se está tomando fotografías a escenarios monótonos, siempre es bueno buscar un objeto que sea llamativo, algo que robe la atención. Para que el objeto sea diferente al resto, basta con que sea de diferente tamaño, diferente forma o incluso diferente color.
              p.mb-3 Si usted quiere hacer un retrato, es ideal que el atuendo de la persona juegue de esta forma con los demás elementos de la escena. También puede destacar a una persona en un grupo numeroso, por ejemplo, una persona alta entre otras más bajas, alguien de buzo rojo en medio de un grupo con buzo azul o una mujer ejecutiva entre hombres trabajadores de una construcción.
              p.mb-0 En escenarios naturales, una flor de colores vivos en medio de un verde del resto de vegetación llamaría bastante la atención. En un parqueadero de autos nuevos dejar intencionalmente un auto antiguo. Estos son tan solo algunos ejemplos de lo que se puede lograr resaltando un punto de atención.

          .row(titulo="La dirección de los objetos")
            .col-sm-12.col-lg-12
              p.mb-3 Siempre que se toma una fotografía en un plano abierto se nota cómo se forman líneas imaginarias que se direccionan hacia un punto, llamado en arte “el punto de fuga”. Al tener la mayor parte de las líneas direccionadas hacia este punto, se puede ubicar un objeto en ese sentido, captando la atención sobre él.
              p.mb-3 En un plano más cerrado se puede jugar de la misma forma con los objetos, por ejemplo, un grupo de motos mirando hacia la izquierda y en algún punto una moto hacia la derecha. En este caso no existen las líneas imaginarias que convergen hacia un punto, pero se aprovecha la dirección de los objetos en escena.
              p.mb-0 Otros ejemplos, son tomar tres rostros, dos mirando hacia el frente y el tercero mirando hacia arriba. Una toma a un grupo de cubiertos donde están perfectamente alineados y de pronto se presenta un tenedor torcido. Una fila de postes de luz donde se encuentra uno inclinado o a punto de caer. Todos estos casos describen el impacto que se puede lograr.

          .row(titulo="Estabilidad de la imagen")
            .col-sm-12.col-lg-12
              p.mb-3 Las imágenes corridas es un mal que al parecer se ha incrementado con las cámaras digitales. Al ver las fotos reveladas o en el computador, se nota que estas no son legibles.
              p.mb-3 Este efecto es causado por la fuerza que se hace al obturar, cuando se acciona la cámara muchas veces se hace mucha fuerza y se mueve la cámara. Al mover la cámara en el momento en que se captura la imagen se arruina la fotografía.
              p.mb-3 Para evitar este problema en cámara análoga se debe oprimir muy suavemente el obturador, además sujetarla firmemente incluso desde su base o costados. En las cámaras digitales es más común dado a su escaso peso, razón por la cual la mayoría de los fabricantes incluyen una opción para estabilizar la imagen, la cual ayuda a corregir este problema.
              p.mb-0 Independientemente del tipo de cámara que se utilice, usted puede usar un trípode y como complemento, dependiendo las opciones de la cámara, es útil tener un temporizador, ya que al dispararse sola es nula la posibilidad de un movimiento que arruine la toma.

          .row(titulo="Marco natural")
            .col-sm-12.col-lg-12
              p.mb-3 Los marcos siempre ayudan a delimitar, y en el caso particular de la fotografía, pueden centrar la atención. Ya sean muy notorios o sutiles, pueden ser emplearlos para mejorar la imagen. 
              p.mb-3 Para buscar marcos en su entorno, usted se puede tomar una fotografía a un paisaje desde una ventana o a una persona recargada en el marco de una puerta. También se puede hacer uso de marcos mediante a una fotografía a un objeto reflejado en un espejo o un perro asomándose en la ventana de un automóvil, entre otros. 
              p.mb-0 Aunque no siempre se debe ser tan explícito al intentar enmarcar una toma, también se obtienen muy buenos resultados de forma sutil, por ejemplo, las ramas de un árbol en un extremo, una persona sentada sobre el piso en una esquina de la imagen, un grupo de montañas en el horizonte o el curso de un río son muchas las variables que pueden ayudar a generar esa sensación. 
          .row(titulo="Repetición de elementos")
            .col-sm-12.col-lg-12
              p.mb-3 La repetición da la sensación de uniformidad, de armonía y de ecuanimidad. Esta sensación es muy agradable para el espectador y se puede hacer más interesante cuando se vuelve parte de la composición.
              p.mb-3 La grilla de partida en una carrera, un banco de aves migrando, una galería de trofeos, una caravana de autos o un jardín de rosas son objetos repetidos enmarcados en un contexto y forman una composición entre ellos, lo cual enriquece la fotografía.
              p.mb-0 Adicionalmente hay una curiosa percepción que se genera al ver grupos de objetos impares en las fotografías, incluso esta sensación aumenta cuando el grupo es de tres objetos. Por ejemplo, un solo objeto dentro de una fotografía puede dar la sensación de soledad, mientras que dos objetos se sienten bien equilibrados y cuatro ya son bastantes, lo que hace que el tres sea un número más neutro.

          .row(titulo="Espacio vacío")
            .col-sm-12.col-lg-12
              p.mb-3 Lo normal en una fotografía es llenar el encuadre con objetos o con el modelo a fotografiar. El espacio vacío es otra forma poderosa de centrar la atención en un punto deseado y además enmarca al espectador dentro de una temática fácilmente.
              p.mb-3 Este es un elemento netamente compositivo, en el que hay fondos simples y homogéneos, abarcando gran parte de la imagen, y además el objeto centro de interés está ubicado en uno de los puntos fuertes de los tercios (Regla de los tercios).
              p.mb-0 Esto logrará que el observador guíe inmediatamente su atención al punto de interés, además le puede generar una sensación de calma, aislamiento o soledad. Es necesario tener en cuenta la uniformidad y simplicidad del fondo, ya que si este contiene elementos distractores se pierde el efecto deseado.

          .row(titulo="Errores en fotografía digital")
            .col-sm-12.col-lg-12
              p.mb-3 Estos son algunos de los errores más comunes en fotografía digital:
            ul.lista-ul
              li
                i.fas.fa-circle
                |  No leer el manual de instrucciones de la cámara, desaprovechándola así.
              li
                i.fas.fa-circle
                |  Usar el #[i flash] para objetos grandes o lejanos, este solo sirve a 4-5 metros.
              li
                i.fas.fa-circle
                |  No hacer copias de seguridad de las fotografías.
              li
                i.fas.fa-circle
                |  Colocar el dedo sobre el #[i flash] o sobre el sensor de enfoque.
              li
                i.fas.fa-circle
                |  Mover bruscamente la cámara en el momento de obturar.
              li
                i.fas.fa-circle
                |  Hacer uso del #[i zoom] digital, ya que la calidad de la imagen disminuye.
              li
                i.fas.fa-circle
                |  No recargar las baterías o no llevar baterías de repuesto en su defecto.
              li
                i.fas.fa-circle
                |  No desocupar la memoria de la cámara antes de salir de casa.
              li
                i.fas.fa-circle
                |  No tener un estuche o forro que proteja a la cámara o el lente de un accidente.





</template>

<script>
export default {
  name: 'Tema2',
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

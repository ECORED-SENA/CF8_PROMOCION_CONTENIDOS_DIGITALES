<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Métricas (KPI)

    .row.p-5.cont_tema1_1
      .col-md-6
        p(data-aos="fade-in") Las métricas son la representación numérica de los objetivos como resultado de su seguimiento, valoración y comparación en un período de tiempo determinado. 
        p.mt-4(data-aos="fade-in") El KPI - #[em Key Performance Indicator] significa Indicador Clave de Desempeño. Y el desempeño, como en toda estrategia o proyecto, no es más que la representación o esquematización de la información como resultado de una serie de acciones implementadas en un período determinado y con un objetivo definido. Así, un conjunto de indicadores representa las métricas de una estrategia.

    .cont_background_tema11.pb-5(style="position:relative")
      p.mt-5(data-aos="fade-up" style="position:relative;") La Implementación de KPI requiere de factores claves, por lo tanto, se requiere para su implementación en primera instancia resolver los siguientes interrogantes:

      .row.mt-5(style="position:relative")
        .col-md-4.mb-3(style="position:relative")
          .tarjeta-avatar-b(style="position:relative;height:100%;")
            .tarjeta-avatar-b__img(style="position:relative")
              img(src='@/assets/curso/tema1/3.svg' alt='' style="position:relative")
            .tarjeta.tarjeta--azul(style="place-self:center;background-color:#C9F0EE;height:100%;")
              .p-5(style="position:relative")
                p.mb-0(data-aos="fade-up" style="position:relative") #[strong(style="color:#1169E3;font-size:18px;") ¿Qué se quiere medir?]
        .col-md-4.mb-3(style="position:relative")
          .tarjeta-avatar-b(style="position:relative;height:100%;")
            .tarjeta-avatar-b__img(style="position:relative")
              img(src='@/assets/curso/tema1/4.svg' alt='' style="position:relative")
            .tarjeta.tarjeta--azul(style="place-self:center;background-color:#C9F0EE;height:100%;")
              .p-5(style="position:relative")
                p.mb-0(data-aos="fade-up" style="position:relative") #[strong(style="color:#1169E3;font-size:18px;") ¿Por qué se mide específicamente esa acción?]
        .col-md-4.mb-3(style="position:relative")
          .tarjeta-avatar-b(style="position:relative;height:100%;")
            .tarjeta-avatar-b__img(style="position:relative")
              img(src='@/assets/curso/tema1/5.svg' alt='' style="position:relative")
            .tarjeta.tarjeta--azul(style="place-self:center;background-color:#C9F0EE;height:100%;")
              .p-5(style="position:relative")
                p.mb-0(data-aos="fade-up" style="position:relative") #[strong(style="color:#1169E3;font-size:18px;") ¿Esa acción permite el seguimiento de alguno de los objetivos con sus resultados?]

      .row.mt-5(style="position:relative")
        .col-md-4.mb-3(style="position:relative")
          .tarjeta-avatar-b(style="position:relative;height:100%;")
            .tarjeta-avatar-b__img(style="position:relative")
              img(src='@/assets/curso/tema1/6.svg' alt='' style="position:relative")
            .tarjeta.tarjeta--azul(style="place-self:center;background-color:#C9F0EE;height:100%;")
              .p-5(style="position:relative")
                p.mb-0(data-aos="fade-up" style="position:relative") #[strong(style="color:#1169E3;font-size:18px;") ¿La acción es un factor clave para la empresa?]
        .col-md-4.mb-3(style="position:relative")
          .tarjeta-avatar-b(style="position:relative;height:100%;")
            .tarjeta-avatar-b__img(style="position:relative")
              img(src='@/assets/curso/tema1/7.svg' alt='' style="position:relative")
            .tarjeta.tarjeta--azul(style="place-self:center;background-color:#C9F0EE;height:100%;")
              .p-5(style="position:relative")
                p.mb-0(data-aos="fade-up" style="position:relative") #[strong(style="color:#1169E3;font-size:18px;") ¿Quién es el responsable de los resultados de la acción?]
        .col-md-4.mb-3(style="position:relative")
          .tarjeta-avatar-b(style="position:relative;height:100%;")
            .tarjeta-avatar-b__img(style="position:relative")
              img(src='@/assets/curso/tema1/8.svg' alt='' style="position:relative")
            .tarjeta.tarjeta--azul(style="place-self:center;background-color:#C9F0EE;height:100%;")
              .p-5(style="position:relative")
                p.mb-0(data-aos="fade-up" style="position:relative") #[strong(style="color:#1169E3;font-size:18px;") ¿Con qué frecuencia se realizará la supervisión de los resultados de la acción?]

      p.mt-5(data-aos="fade-up" style="position:relative") Igualmente, es importante conocer las ventajas de su utilización:

      .row.mt-5.col-md-10.m-auto(style="position:relative")
        .col-lg-8(style="position:relative;padding:0px;")
          .row(style="position:relative;padding:0px;")
            .col-auto(style="position:relative;padding:0px;")
              div(style="position:relative;background-color:#0C487B;width:24px;height:100%;")
            .col(style="position:relative;background-color:#D2E1F1;padding:0px;")
              p.mb-0.p-3(data-aos="fade-up" style="position:relative;border-bottom:1px #DEE4F0 solid;") Suministran información útil y de manera oportuna.
          .row(style="position:relative;padding:0px;")
            .col-auto(style="position:relative;padding:0px;")
              div(style="position:relative;background-color:#7B9AB4;width:24px;height:100%;")
            .col(style="position:relative;background-color:#D2E1F1;padding:0px;")
              p.mb-0.p-3(data-aos="fade-up" style="position:relative;border-bottom:1px #DEE4F0 solid;") Permiten la medición de variables y sus resultados. 
          .row(style="position:relative;padding:0px;")
            .col-auto(style="position:relative;padding:0px;")
              div(style="position:relative;background-color:#6D91AF;width:24px;height:100%;")
            .col(style="position:relative;background-color:#D2E1F1;padding:0px;")
              p.mb-0.p-3(data-aos="fade-up" style="position:relative;border-bottom:1px #DEE4F0 solid;") Permite el análisis de a información por cada estrategia. 
          .row(style="position:relative;padding:0px;")
            .col-auto(style="position:relative;padding:0px;")
              div(style="position:relative;background-color:#9DB5CA;width:24px;height:100%;")
            .col(style="position:relative;background-color:#D2E1F1;padding:0px;")
              p.mb-0.p-3(data-aos="fade-up" style="position:relative;border-bottom:1px #DEE4F0 solid;") Permiten la comparación de la información para la formulación de acciones correctivas.
          .row(style="position:relative;padding:0px;")
            .col-auto(style="position:relative;padding:0px;")
              div(style="position:relative;background-color:#CEDAE4;width:24px;height:100%;")
            .col(style="position:relative;background-color:#D2E1F1;padding:0px;")
              p.mb-0.p-3(data-aos="fade-up" style="position:relative;border-bottom:1px #DEE4F0 solid;") Facilita el proceso de toma de decisiones. 
        .col-lg-4(style="position:relative;padding:0px;")
          figure(style="position:relative")
            img(src="@/assets/curso/tema1/9.svg" data-aos="fade-left" style="position:relative")

    br
    .mt-5.cont_background_tema12.pb-5(style="position:relative")
      p(data-aos="fade-up" style="position:relative") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;") Tipos de KPI]

      .row.mt-5
        .col-md-8
          figure
            img(src="@/assets/curso/tema1/11.svg" data-aos="fade-right" style="position:relative")
        .col-md-4
          p.mt-4(data-aos="fade-left" style="position:relative") Definir o clasificar un indicador depende del objetivo proyectado que se quiere controlar. Dentro del esquema del <em>marketing</em> digital hay varios tipos de KPI y a nivel empresarial estarán determinados conforme a la estructura orgánica de una compañía y las metas proyectadas. Las principales características de un indicador son:

      SlyderF.mt-5(columnas="col-lg-6 col-xl-6" style="position:relative")
        .tarjeta.color-acento-contenido.p-4.cont_slyder1(style="background-color:#C9F0EE;height:100%;")
          .row.justify-content-center.mb-3
            .col-8.text-center
              img(src='@/assets/curso/tema1/12.svg' alt='' style="max-width:110px;display:inline;")
          h2.text-center(style="color:#12263F;font-size:18px;") KPI específico 
          p.text-center(style="color:#12263F;") Hace referencia a un tema en particular. Se caracteriza por ser muy concreto permitiendo el seguimiento y control a los objetivos trazados.

        .tarjeta.color-acento-contenido.p-4.cont_slyder1(style="background-color:#C9F0EE;height:100%;")
          .row.justify-content-center.mb-3
            .col-8.text-center
              img(src='@/assets/curso/tema1/13.svg' alt='' style="max-width:110px;display:inline;")
          h2.text-center(style="color:#12263F;font-size:18px;") KPI medible
          p.text-center(style="color:#12263F;") Hace referencia a los resultados obtenidos. Se caracteriza por permitir un control más exhaustivo sobre los objetivos proyectados en tiempo real.

        .tarjeta.color-acento-contenido.p-4.cont_slyder1(style="background-color:#C9F0EE;height:100%;")
          .row.justify-content-center.mb-3
            .col-8.text-center
              img(src='@/assets/curso/tema1/14.svg' alt='' style="max-width:110px;display:inline;")
          h2.text-center(style="color:#12263F;font-size:18px;") KPI temporal
          p.text-center(style="color:#12263F;") Hace referencia a los tiempos de cumplimiento de cada objetivo propuesto. Se caracteriza porque permite la comparación con otros objetivos a corto, mediano y largo plazo. 

        .tarjeta.color-acento-contenido.p-4.cont_slyder1(style="background-color:#C9F0EE;height:100%;")
          .row.justify-content-center.mb-3
            .col-8.text-center
              img(src='@/assets/curso/tema1/15.svg' alt='' style="max-width:110px;display:inline;")
          h2.text-center(style="color:#12263F;font-size:18px;") KPI relevante
          p.text-center(style="color:#12263F;") Hace referencia al análisis de información que verdaderamente interesa. Se caracteriza por identificar las necesidades de la empresa y definir los KPI que permitirán el cumplimiento de objetivos.

    br
    p.mt-5(data-aos="fade-up") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;") Tipos de indicadores]

    p.mt-5(data-aos="fade-up") Definir el indicador para cada área de la empresa es primordial en la consecución de los objetivos proyectados en un período de tiempo. A continuación, se presentan los siguientes KPI considerados como los más importantes:

    TabsC.color-primario
      .p-5(titulo="KPI financieros" style="background-color:#D7E4F6;")
        .row
          .col-md-5.mb-4.mb-md-0
            h4 KPI financieros 
            p Su función es medir la inversión realizada, confrontar los gastos sobre resultados. 
            p.mt-4 #[span(style="color:#1169E3;") Algunos ejemplos son:] tasa de crecimiento, tasa de retorno, beneficio neto.
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/16.svg', alt='')

      .p-5(titulo="KPI logística" style="background-color:#D7E4F6;")
        .row
          .col-md-5.mb-4.mb-md-0
            h4 KPI logística 
            p Su función es medir la eficiencia en la entrega de productos una vez realizada la compra conforme a las condiciones establecidas.
            p.mt-4 #[span(style="color:#1169E3;") Algunos ejemplos son:] tiempos de entrega, devoluciones, costo de transporte.
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/17.svg', alt='')

      .p-5(titulo="KPI producción" style="background-color:#D7E4F6;")
        .row
          .col-md-5.mb-4.mb-md-0
            h4 KPI producción 
            p Su función es medir la productividad de los procesos.
            p.mt-4 #[span(style="color:#1169E3;") Algunos ejemplos son:] tiempos de producción, tasa de trabajo, volumen de producción.
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/18.svg', alt='')

      .p-5(titulo="<em>KPI e-commerce marketing</em> digital" style="background-color:#D7E4F6;")
        .row
          .col-md-5.mb-4.mb-md-0
            h4 <em>KPI e-commerce marketing</em> digital
            p Su función es medir las actividades del comercio electrónico. 
            p.mt-4 #[span(style="color:#1169E3;") Algunos ejemplos son:] tráfico, fuentes de tráfico, #[em coste por leads] (adquisición), tasa de conversión, tiempo medio de visitas, visitas nuevas vs. visitas recurrentes, páginas vistas, entorno social.
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/19.svg', alt='')

      .p-5(titulo="KPI de ventas" style="background-color:#D7E4F6;")
        .row
          .col-md-5.mb-4.mb-md-0
            h4 KPI de ventas
            p Su función es medir las ventas de un producto específico.
            p.mt-4 #[span(style="color:#1169E3;") Algunos ejemplos son:] la satisfacción del cliente, nivel de facturación, cierres comerciales.
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/20.svg', alt='')

      .p-5(titulo="KPI de redes sociales" style="background-color:#D7E4F6;")
        .row
          .col-md-5.mb-4.mb-md-0
            h4 KPI de redes sociales
            p Su función es medir los resultados de los tipos de medios, pagados, ganados y propios. 
            p.mt-4 #[span(style="color:#1169E3;") Algunos ejemplos son:] número de seguidores, alcance, #[em engagement].
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/21.svg', alt='')

    br
    br
    .row.mt-5(style="position:relative")
      .col-md-3(style="position:relative")
        figure(style="position:relative")
          img(src="@/assets/curso/tema1/22.png" data-aos="zoom-in")
      .col-md-9(style="position:relative")
        .row(style="position:relative")
          .col-md-5.order-1.order-sm-0(style="position:relative")
            figure(style="position:relative")
              img(src="@/assets/curso/tema1/23.png" data-aos="zoom-in")
          .col-md-7(style="position:relative")
            p.mt-4(data-aos="fade-up") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;") Estándares]

            p.mt-4.parrafo_1(data-aos="fade-up" style="position:relative;z-index:1;") El establecimiento de indicadores conforme a los objetivos trazados depende del patrón o punto de referencia que se quiera medir dentro del segmento de mercado establecido. Cuando el indicador permite determinar una característica en particular de un grupo determinado de usuarios o público, se puede afirmar que hay un estándar identificado. Por ejemplo, la mayoría de usuarios que dieron #[em Like] a una última publicación, fue entre las edades de 18 a 24 años, el estándar identificado es jóvenes.
        p.mt-3(data-aos="fade-up") Las técnicas de medición para las estrategias del <em>marketing</em> digital determinan el tiempo y el alcance que obtuvo una publicación en los medios digitales. Establecer un KPI para determinar la técnica que se utilizará para su medición depende del objetivo a alcanzar, por lo tanto, debe cumplir con ciertas características básicas. Por ejemplo, entre las técnicas para medir el comportamiento de las publicaciones en las redes sociales están Facebook Analytics, Google Analytics, Twitter Analytics, etc. 

    p.mt-5(data-aos="fade-up") Algunas de las características del objetivo a medir son las siguientes:

    .cont_background_tema13.pb-5.mt-5(style="position:relative")
      LineaTiempoB.color-acento-contenido.col-md-11.m-auto.p-5(:datos="datosLineaTiempoB" style="position:relative;background-color:#E4F6F5;border-radius:15px;")

      br
      .row.mt-5(style="position:relative")
        p.mt-4(data-aos="fade-up") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;") Tasa de conversión]
        .col-md-4.order-2.order-sm-0(style="position:relative")
          figure(style="position:relative")
            img.mt-2(src="@/assets/curso/tema1/30.svg" data-aos="zoom-in")
        .col-md-8.order-1.order-sm-0(style="position:relative")
          p(data-aos="fade-up") El embudo en <em>marketing</em> digital representa el proceso de conversión de un internauta una vez es atraído por alguna publicación en cualquier canal digital. 
          p.mt-4(data-aos="fade-up") La tasa de conversión permitirá establecer el nivel de efectividad logrado en períodos de tiempo y aplicar #[em benchmarking].

          .mt-4.p-4(style="background-color:#C9F0EE;border-radius:15px;")
            .row(style="position:relative")
              .col-md-3(style="position:relative")
                figure.text-center(style="position:relative")
                  img(src="@/assets/curso/tema1/31.svg" data-aos="zoom-in" style="display:inline;max-width:150px;")
              .col-md-9(style="position:relative")
                h5(style="color:#1169E3;") Cálculo. La tasa de conversión se calcula dividiendo:
                p.mb-0(data-aos="fade-up" style="text-align:center;color:black;background-color:white;padding: 10px 30px;box-shadow:0px 0px 10px rgba(0,0,0,.1);border-radius:50px;font-weight:bold;") Número de conversiones totales / Número de visitas totales
                p.mt-1.mb-0(data-aos="fade-up") Un ejemplo claro del proceso de conversión es un seguidor a un cliente. Este se hace cuando un seguidor toma la decisión de realizar una compra por cualquier plataforma #[em e-commerce], a este paso se le denomina conversión.

    .row.mt-5.p-5(style="border-radius:5px;background-color:#ECF2F2;")
      .col-md-7
        p(data-aos="fade-up") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;") Volumen de tráfico ]
        p.mt-4.mb-0(data-aos="fade-up") El volumen de tráfico está determinado especialmente por la cantidad de accesos que un contenido logra obtener durante un tiempo determinado una vez es publicado en un sitio #[em web], página o #[em blog].
        p.mt-4.mb-0(data-aos="fade-up") Esta métrica permite analizar el impacto de la estrategia de <em>marketing</em> digital conforme al tráfico que se obtenga de manera orgánica y el que se logre utilizando medios pagados. 
      .col-md-5
        figure.mt-4
          img(src="@/assets/curso/tema1/32.png" data-aos="zoom-in-up")

    .row.mt-5.p-5(style="border-radius:5px;background-color:#ECF2F2;")
      .col-md-5
        figure.mb-4
          img(src="@/assets/curso/tema1/33.png" data-aos="zoom-in-up")
      .col-md-7
        p(data-aos="fade-up") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;") Número de visitas]
        p.mt-4.mb-0(data-aos="fade-up") El número de visitantes a un sitio #[em web], página o #[em blog] permite aumentar las posibilidades de mayor alcance del contenido de manera orgánica.
        p.mt-4.mb-0(data-aos="fade-up") En la medida que el contenido genere un valor para cada visitante, este replicará nuestro contenido a manera de información. 
        p(data-aos="fade-up") Un ejemplo de esta práctica son los #[em links] de suscripción a cursos virtuales gratuitos.

    .row.mt-5.p-5(style="border-radius:5px;background-color:#ECF2F2;")
      .col-md-7
        p(data-aos="fade-up") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;") Tasa de rebote ]
        p.mt-4.mb-0(data-aos="fade-up") El comportamiento de los internautas cuando visitan un sitio #[em web] o página depende mucho del contenido y del valor agregado que esta pueda aportar, su permanencia e interacción está sujeto al interés que podamos despertar en él. 
        p.mt-4.mb-0(data-aos="fade-up") La tasa de rebote es entonces aquella que calcula el porcentaje de usuarios que dejan un sitio #[em web], página o #[em blog] antes de interactuar con esta de alguna forma.
      .col-md-5
        figure.mt-4
          img(src="@/assets/curso/tema1/34.png" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") El siguiente video tiene como propósito ampliar el concepto y usabilidad de Google Analytics y la integración con los conceptos relacionados con los indicadores, veámoslo:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/a3hYA2ielE8" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)






</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
    datosLineaTiempoB: [
      {
        titulo: 'Que sea específico',
        texto: 'Identifica qué, dónde, cómo y cuándo se mide.',
        icono: require('@/assets/curso/tema1/25.svg'),
      },
      {
        titulo: 'Que sea medible',
        texto:
          'Permite cuantificar las medidas y los beneficios que se esperan.',
        icono: require('@/assets/curso/tema1/26.svg'),
      },
      {
        titulo: 'Que sea alcanzable',
        texto:
          'Posibles. No tiene sentido elegir indicadores que sean imposibles de conseguir con los recursos asignados.',
        icono: require('@/assets/curso/tema1/27.svg'),
      },
      {
        titulo: 'Que sea pertinente',
        texto:
          'Dependiendo de los objetivos que se busquen será mejor una métrica u otra.',
        icono: require('@/assets/curso/tema1/28.svg'),
      },
      {
        titulo: 'Que sea limitado en el tiempo',
        texto:
          'Un indicador de rendimiento clave debe estar supeditado a un período temporal concreto.',
        icono: require('@/assets/curso/tema1/29.svg'),
      },
    ],
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
<style lang="sass">
.cont_tema1_1
  background: url(../assets/curso/tema1/1.svg)
  background-repeat: no-repeat
  background-size: cover
  border-radius: 15px
.cont_background_tema11:before
  content: ''
  position: absolute
  height: 100%
  width: 115%
  left: -4%
  background-repeat: no-repeat
  background: url(../assets/curso/tema1/2.png)
.cont_background_tema12:before
  content: ''
  position: absolute
  height: 100%
  width: 115%
  left: -7%
  background-repeat: no-repeat
  background-size: 1100px !important
  background: url(../assets/curso/tema1/10.svg)
.cont_slyder1:hover
  background-color: #1169E3 !important
  cursor: pointer
.cont_slyder1:hover h2, .cont_slyder1:hover p
  color: white !important
.tabs-c.color-primario .tabs-c__tab--active
  border-bottom-color: #3BC192 !important
.tabs-c.color-primario .tabs-c__tab--active:before
  border-top-color: #3BC192 !important
.tabs-c.color-primario .tabs-c__tab--active span
  font-weight: bold
.tabs-c__header
  margin-bottom: 0px
.parrafo_1:before
  content: ''
  position: absolute
  width: 55%
  height: 45%
  right: 0
  z-index: -1
  top: -2%
  background-color: #E2EAF5
.cont_background_tema13:before
  content: ''
  position: absolute
  height: 100%
  width: 115%
  left: -4%
  background: url(../assets/curso/tema1/24.png)
  background-size: 1500px
  background-repeat: no-repeat
@media screen and (min-width: 1024px)
  .linea-tiempo-b__icon img
    width: 70%
  .tarjeta-avatar-b__img
    min-width: 50%
  .linea-tiempo-b.color-acento-contenido .linea-tiempo-b__icon
    background-color: #29C4BB
    max-width: 60%
    max-height: 60%
    margin: 0 auto
  .linea-tiempo-b__icon
    padding-top: 60%
    border-radius: 50%
    position: relative
</style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Interacción

    .row(style="position:relative")
      .col-md-6(style="position:relative")
        figure
          img(src="@/assets/curso/tema3/1.png" data-aos="zoom-in-up")
      .col-md-6(style="position:relative")
        p.parrafo_31(data-aos="fade-in" style="position:relative;z-index:1;") “Una de las ventajas que se le incorpora a la red como instrumento para la formación, es la posibilidad que nos ofrece para la interacción y la comunicación de manera sincrónica y asincrónica entre las personas” (Cabero y Llorente, 2007).
        p.mt-4(data-aos="fade-in") La interacción ocurre cuando el usuario, a través de los diferentes canales digitales, hace contacto y se obtiene información acerca de él. Es la manera de expresar las emociones en el ciberespacio al consumir algún tipo de contenido que es de interés.
        p.mt-4(data-aos="fade-in")  La interacción #[em on line] se puede definir como aquella que se origina por la influencia del contenido (#[em lead magnet]) en el ciberespacio que tiene como propósito resolver un problema específico a un público específico a cambio de un #[em opt-in]; por ejemplo, datos de contacto, #[em e-mail], etc.

    .row.mt-5.p-4(style="background-color:#C9F0EE;border-radius:15px;")
      .col-auto
        figure
          img(src="@/assets/curso/tema2/9.svg" data-aos="zoom-in-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") #[strong ¿Qué es un #[em lead magnet]?]
        p.mb-0(data-aos="fade-up") En su traducción al español significa “imán de plomo”, en el mundo #[em web] hace referencia a esa pequeña oferta (imán) para atraer un cibernauta. #[span(style="color:#1169E3;") Por ejemplo: Haz este curso de 5 semanas en (tema) y conviértete en experto. Regístrate en el siguiente #[em link]].

    p.mt-5(data-aos="fade-up") Para comprender mejor este término, se presentan las características más destacadas a nivel presencial.

    .cont_background_tema31.pb-5(style="position:relative")
      .row
        .col-md-8
          .p-4(style="border-radius:20px;background-color:#D7E4F6;")
            ul.lista-ul
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Interacción de los actores en el espacio y el tiempo.
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Límites para el número de personas implicadas en la interacción.
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Audiencia bajo cierto control.
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Identificación clara del interlocutor.
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | El contexto físico-material es relevante.
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | La interacción predominante es la verbal.
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | La comunicación no verbal se basa en gestos, miradas, etc., y no pertenece al mismo plano que la verbal.
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Estructura organizacional de la interacción estable. 
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Interacción con modalidades comunicativas limitadas y excluyentes. 
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Puesta en escena de la persona que rápidamente es cosificada. 
        .col-md-4(style="place-self:center")
          figure
            img(src="@/assets/curso/tema3/3.png" data-aos="zoom-in-up")

      br
      p.mb-0.text-center.col-md-8.m-auto.p-3.mt-5(style="background-color:#1169E3;border-radius:10px;color:white;position:relative;margin-bottom:-20px !important;z-index:1;") Por su parte, en la interacción en entornos virtuales se destacan estos elementos:
      LineaTiempoB.color-acento-contenido.col-md-10.m-auto.p-5(:datos="datosLineaTiempoB" style="position:relative;background-color:#E4F6F5;border-radius:15px;")

    p.mt-5(data-aos="fade-up" style="position:relative") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;") Tiempos]

    p.mt-4(data-aos="fade-up") El tiempo en la interacción está relacionado con el proceso de optimización del valor del cliente haciendo referencia a los pasos a seguir como estrategia del marketing de contenidos. A continuación, se presenta el paso a paso en la optimización del valor del cliente para incentivar su interacción.

    figure.mt-5.col-md-10.m-auto
      img(src="@/assets/curso/tema3/14.svg" data-aos="zoom-in-up")




</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
    datosLineaTiempoB: [
      {
        titulo: '',
        texto:
          'Apertura para el número de personas implicadas en la interacción. ',
        icono: require('@/assets/curso/tema3/4.svg'),
      },
      {
        titulo: '',
        texto: 'Presencia manifiesta de la tecnología',
        icono: require('@/assets/curso/tema3/5.svg'),
      },
      {
        titulo: '',
        texto: 'Identificación efímera del interlocutor. ',
        icono: require('@/assets/curso/tema3/6.svg'),
      },
      {
        titulo: '',
        texto: 'Audiencia inabarcable ',
        icono: require('@/assets/curso/tema3/7.svg'),
      },
      {
        titulo: '',
        texto:
          'La interacción se da a través de un conjunto de textos escritos, imágenes y sonidos cuyo parámetro establece la simulación. ',
        icono: require('@/assets/curso/tema3/8.svg'),
      },
      {
        titulo: '',
        texto: 'El contexto relevante es el  de la simulación. ',
        icono: require('@/assets/curso/tema3/9.svg'),
      },
      {
        titulo: '',
        texto: 'Estabilidad estructural flexible (estructura disipativa).',
        icono: require('@/assets/curso/tema3/10.svg'),
      },
      {
        titulo: '',
        texto:
          'La comunicación no verbal está en el mismo plano que la verbal. ',
        icono: require('@/assets/curso/tema3/11.svg'),
      },
      {
        titulo: '',
        texto:
          'Puesta en pantalla que admite un alto nivel de invención, construcción y reconstrucción.',
        icono: require('@/assets/curso/tema3/12.svg'),
      },
      {
        titulo: '',
        texto:
          'Interacción plurimodal, puede incluir múltiples modalidades comunicación y tipos de contenidos. ',
        icono: require('@/assets/curso/tema3/13.svg'),
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
.parrafo_31:before
  content: ''
  position: absolute
  width: 65%
  height: 105%
  left: -2%
  z-index: -1
  top: -3%
  background-color: #C9F0EE
.cont_background_tema31:before
  content: ''
  position: absolute
  height: 100%
  width: 115%
  left: -4%
  background-repeat: no-repeat
  background: url(../assets/curso/tema3/2.png)
.linea-tiempo-b__icon img
  width: 60%
</style>

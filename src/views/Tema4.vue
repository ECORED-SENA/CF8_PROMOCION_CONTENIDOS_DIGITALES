<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Reacciones

    .row.p-5.cont_tema4_1
      .col-md-6
        p.mt-5.mb-5(data-aos="fade-in") Los internautas, especialmente los #[em social media], están constantemente en interacción con sus comunidades utilizando las redes sociales, esta continua comunicación ha llevado a la creación de nuevas formas de expresión con el propósito de optimizar el tiempo en las conversaciones cuando se interactúa a través de un dispositivo móvil o una #[em laptop], es decir, se está en la era del ciberlenguaje.

    p.mt-5(data-aos="fade-up") Una reacción es aquella forma de expresión gráfica que permite al internauta manifestarse a través de las redes sociales o aplicaciones de una manera corta y como respuesta emocional a una publicación utilizando un dispositivo electrónico mediante el uso del internet.

    br
    br
    .cont_tema4_2.pb-5(style="position:relative;")
      p.mt-5(data-aos="fade-up" style="position:relative") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;") Tipos]
      p.mt-4(data-aos="fade-up" style="position:relative") El tiempo en la interacción está relacionado con el proceso de optimización del valor del cliente haciendo referencia a los pasos a seguir como estrategia del #[em marketing] de contenidos. A continuación, se presenta el paso a paso en la optimización del valor del cliente para incentivar su interacción. 
      .row.mt-5
        .col-md-4
          figure
            img(src="@/assets/curso/tema4/2.svg" data-aos="zoom-in-up" style="position:relative")
        .col-md-7(style="place-self:center;")
          p(data-aos="fade-up" style="position:relative") Las campañas en las redes sociales bajo el parámetro de las reacciones permiten evaluar las publicaciones con base en las emociones de los clientes o usuarios. La utilización de íconos o #[em emojis] se ha convertido en un centro de validación de información muy útil a la hora de conocer qué piensa el consumidor sobre determinado producto o servicio; la red social Facebook permite a través de sus algoritmos realizar este tipo de mediciones. 
      p.mt-5(data-aos="fade-up" style="position:relative") Los íconos más reconocidos son:

      .row.mt-5
        .col-lg-2.col-md-4.mb-3
          figure
            img(src="@/assets/curso/tema4/3.svg" data-aos="zoom-in-up" style="position:relative;")
          h4.mt-2.mb-0(data-aos="fade-up" style="position:relative;color:#1169E3;") Me gusta
          p(data-aos="fade-up" style="position:relative") Pulgar hacia arriba.
        .col-lg-2.col-md-4.mb-3
          figure
            img(src="@/assets/curso/tema4/4.svg" data-aos="zoom-in-up" style="position:relative;")
          h4.mt-2.mb-0(data-aos="fade-up" style="position:relative;color:#1169E3;") Amor
          p(data-aos="fade-up" style="position:relative") Corazón que late.
        .col-lg-2.col-md-4.mb-3
          figure
            img(src="@/assets/curso/tema4/5.svg" data-aos="zoom-in-up" style="position:relative;")
          h4.mt-2.mb-0(data-aos="fade-up" style="position:relative;color:#1169E3;") Jaja
          p(data-aos="fade-up" style="position:relative") Cara riendo.
        .col-lg-2.col-md-4.mb-3
          figure
            img(src="@/assets/curso/tema4/6.svg" data-aos="zoom-in-up" style="position:relative;")
          h4.mt-2.mb-0(data-aos="fade-up" style="position:relative;color:#1169E3;") Wow
          p(data-aos="fade-up" style="position:relative") Cara sorprendida.
        .col-lg-2.col-md-4.mb-3
          figure
            img(src="@/assets/curso/tema4/7.svg" data-aos="zoom-in-up" style="position:relative;height:175px;")
          h4.mt-2.mb-0(data-aos="fade-up" style="position:relative;color:#1169E3;") Triste
          p(data-aos="fade-up" style="position:relative") Cara llorando, mostrando una lágrima animada.
        .col-lg-2.col-md-4.mb-3
          figure
            img(src="@/assets/curso/tema4/8.svg" data-aos="zoom-in-up" style="position:relative;height:175px;")
          h4.mt-2.mb-0(data-aos="fade-up" style="position:relative;color:#1169E3;") Enojado
          p(data-aos="fade-up" style="position:relative") Cara roja / enojada / haciendo pucheros.

    br
    br
    p.mt-5(data-aos="fade-up" style="position:relative") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;") Tipos de redes sociales]
    p.mt-4(data-aos="fade-up" style="position:relative") Para complementar los conocimientos sobre la temática de redes, lo invito a ver el siguiente video que nos explica los tipos de redes sociales: 

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Vu_jQSLPGnk" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
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
.cont_tema4_1
  background: url(../assets/curso/tema4/1.png)
  background-repeat: no-repeat
  background-size: cover
  border-radius: 15px
.cont_tema4_2:before
  content: ''
  position: absolute
  height: 108%
  width: 115%
  left: -7%
  top: -2%
  background-color: #EAF1FA
</style>

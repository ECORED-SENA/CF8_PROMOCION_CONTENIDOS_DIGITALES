<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Engagement

    .row
      .col-md-4
        p(data-aos="fade-in") Es un término en inglés que traduce compromiso. En el marketing de contenidos hace referencia a la conexión que se logra con el público mediante la promoción de contenido. Por ejemplo, hay compromiso cuando un usuario envía un link por algún medio digital a los miembros de su comunidad virtual para que conozcan un producto o servicio de determinada marca.
      .col-md-4.p-0
        figure
          img(src="@/assets/curso/tema2/1.png" data-aos="zoom-in-up")
      .col-md-4.p-0
        .p-3(style="background-color:#C9F0EE;height:100%;")
          figure.d-none.d-md-block
            img(src="@/assets/curso/tema2/2.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-3(data-aos="fade-in") Es el compromiso o conexión que se logra con los usuarios mediante el contenido que se presenta de los productos o servicios en diferentes medios digitales.

    p.mt-5(data-aos="fade-up" style="position:relative") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;") Beneficios del engagement]

    p.mt-4(data-aos="fade-up") En la medida que se logra un mayor engagement los beneficios que se obtienen son los siguientes:

    .row.mt-5
      .col-md-3.mb-3
        .p-4.cont_tema21(style="height:100%;")
          .p-3.d-flex.align-items-center(style="background-color:#ffffff;border-radius:10px;box-shadow:0px 0px 10px rgba(0,0,0,.25);height:100%;")
            p.text-center.mb-0(data-aos="fade-in") #[strong(style="color:#1169E3;") Incrementa] la tasa de interacción en poco tiempo de los usuarios por las redes sociales siendo el principal espacio de comunicación para despejar dudas de la marca.
      .col-md-3.mb-3
        .p-4.cont_tema22(style="height:100%;")
          .p-3.d-flex.align-items-center(style="background-color:#ffffff;border-radius:10px;box-shadow:0px 0px 10px rgba(0,0,0,.25);height:100%;")
            p.text-center.mb-0(data-aos="fade-in") #[strong(style="color:#1169E3;") Aumenta] la confianza de la marca por su contenido valioso.
      .col-md-3.mb-3
        .p-4.cont_tema23(style="height:100%;")
          .p-3.d-flex.align-items-center(style="background-color:#ffffff;border-radius:10px;box-shadow:0px 0px 10px rgba(0,0,0,.25);height:100%;")
            p.text-center.mb-0(data-aos="fade-in") #[strong(style="color:#1169E3;") Aumenta] la lealtad del cliente. 
      .col-md-3.mb-3
        .p-4.cont_tema24(style="height:100%;")
          .p-3.d-flex.align-items-center(style="background-color:#ffffff;border-radius:10px;box-shadow:0px 0px 10px rgba(0,0,0,.25);height:100%;")
            p.text-center.mb-0(data-aos="fade-in") #[strong(style="color:#1169E3;") El good will] de la marca se posesiona.

    p.mt-5(data-aos="fade-up") Es importante generar acciones que permitan aumentar el engagement dentro de la comunidad o público objetivo con la que se tiene planeado interactuar.

    p.mt-4(data-aos="fade-up") En el siguiente video se presentan cinco acciones como estrategias para incrementar el engagement:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-5(data-aos="fade-up") La importancia del engagement es lograr establecer qué tan comprometidos están los usuarios o público objetivo con la marca o la comunidad a la que pertenecen, por lo anterior se hace necesario conocer la tasa de engagement mediante el alcance y los seguidores utilizando técnicas matemáticas para su cálculo, como se muestra a continuación:

    .row.col-md-10.m-auto.p-5.mt-5(style="background-color:#D7E4F6;box-shadow:0px 0px 15px rgba(0,0,0,.3);")
      .col-md-6.p-4(style="border-right:2px #12263F solid;")
        h4(data-aos="fade-up") Cálculo del engagement según el alcance
        p.mt-3(data-aos="fade-up") Es importante resaltar que solo puede hacerse a través de cuentas propias.
        figure.mt-5
          img(src="@/assets/curso/tema2/7.svg" data-aos="zoom-in-up")

      .col-md-6.p-4
        h4(data-aos="fade-up") Cálculo del engagement según los seguidores
        p.mt-3(data-aos="fade-up") Es importante resaltar que puede hacerse a través de cuentas propias y ajenas.
        figure.mt-5
          img(src="@/assets/curso/tema2/8.svg" data-aos="zoom-in-up")

    .row.mt-5.p-4(style="background-color:#C9F0EE;border-radius:15px;")
      .col-auto
        figure
          img(src="@/assets/curso/tema2/9.svg" data-aos="zoom-in-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") Para concluir, la técnica implica sumar todas las interacciones (me gustas, comentarios, compartir, retweets, etc.), de una publicación o de varias en un periodo de tiempo, luego esa suma se divide por el número de personas que vieron la publicación (alcance) y finalmente se multiplica por cien. El mismo procedimiento aplica para los seguidores. 





</template>

<script>
export default {
  name: 'Tema2',
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
.cont_tema21
  background: url(../assets/curso/tema2/3.svg)
.cont_tema22
  background: url(../assets/curso/tema2/4.svg)
.cont_tema23
  background: url(../assets/curso/tema2/5.svg)
.cont_tema24
  background: url(../assets/curso/tema2/6.svg)
</style>

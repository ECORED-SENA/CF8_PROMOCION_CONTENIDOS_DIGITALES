<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Comentarios

    .row
      .col-md-3
        figure
          img(src="@/assets/curso/tema5/1.svg" data-aos="zoom-in")
      .row.col-md-9
        .col-md-4.order-2.order-sm-0(style="place-self:center;")
          figure
            img.mt-3(src="@/assets/curso/tema5/2.svg" data-aos="zoom-in")
        .col-md-8.order-1.order-sm-0
          p.mt-3(data-aos="fade-up") En las redes sociales los comentarios son considerados una métrica para evaluar el grado de aceptación de los usuarios con relación al contenido publicado. Los #[em blog] o los #[em web-blog] son uno de los canales digitales con mayor grado de participación de usuarios con comentarios teniendo en cuenta que su propósito es lograr la mayor interacción posible a través de la publicación constante de temas de interés para un público en particular. 
          .cajon.color-primario.p-4.mt-4(style="background-color:#D7E4F6;")
            p.mb-0(data-aos="fade-up") Los comentarios son los textos que los usuarios dejan en un #[em blog] con relación a un contenido publicado durante un período de tiempo determinado. Un #[em blog] es un sitio #[em web] que permite la constante interacción con el público de una comunidad basado en la continua publicación de información que resaltan algunos temas de interés específico.
        .col-md-12.order-3.order-sm-0
          p.mt-3(data-aos="fade-up") Los comentarios también se pueden evaluar en diferentes canales digitales diferentes al #[em blog]; por ejemplo, la red social Facebook.

    br
    .cont_tema5_1.pb-5.mt-5(style="position:relative;")
      .col-md-10.m-auto.row(style="position:relative")
        .col-lg-6.p-5(style="position:relative")
          .p-5.pb-1.ps-2.pe-2.row.cont_before1(style="background-color:#0C487B;height:100%;box-shadow:rgb(0,0,0,.3) 11px 16px 20px;position:relative;border-radius:20px;")
            .col.ps-5.pe-5.m-auto.text-center(style="position:relative")
              figure.text-center(style="position:relative")
                img(src="@/assets/curso/tema5/3.svg" data-aos="zoom-in-up" style="position:relative;max-width:100px;display:inline;")
            .col-auto.ps-5.pe-5.m-auto.text-center(style="position:relative")
              p.mt-5(data-aos="fade-up" style="position:relative") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;display:inline;") Protocolos]
            p.mt-4.ps-4.pe-4(data-aos="fade-up" style="position:relative;color:white;") Hace referencia al manual de respuestas para todo tipo de comentarios; es decir, la persona encargada de interactuar con los usuarios debe estar capacitada y preparada para dar respuesta a todo tipo de preguntas, inclusive, hasta el punto de llegar a tomar la decisión de bloquear a un usuario de ser necesario por su comportamiento poco amigable y hostil. 
            h1.text-end.mb-0(style="color:rgb(199,219,245,.31);font-size:100px;") 01
        .col-lg-6.p-5(style="position:relative")
          .p-5.pb-1.ps-2.pe-2.row.cont_before1(style="background-color:#0C487B;height:100%;box-shadow:rgb(0,0,0,.3) 11px 16px 20px;position:relative;border-radius:20px;")
            .col.ps-5.pe-5.m-auto.text-center(style="position:relative")
              figure.text-center(style="position:relative")
                img(src="@/assets/curso/tema5/4.svg" data-aos="zoom-in-up" style="position:relative;max-width:100px;display:inline;")
            .col-auto.ps-5.pe-5.m-auto.text-center(style="position:relative")
              p.mt-5(data-aos="fade-up" style="position:relative") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;display:inline;") Plantillas]
            p.mt-4.ps-4.pe-4(data-aos="fade-up" style="position:relative;color:white;") Son los formularios disponibles en diferentes plataformas digitales para medir o evaluar la satisfacción del cliente, obtener información importante o relevante sobre algún tema en particular y, finalmente, para registrar una queja o reclamo. 
            h1.text-end.mb-0(style="color:rgb(199,219,245,.31);font-size:100px;") 02

    p.mt-5(data-aos="fade-up") Algunos ejemplos de plantillas de formularios son:

    .row.mt-5
      .col-sm-6.col-xl-2.col-lg-2.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false" style="border-radius:0px;" data-aos="fade-in")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              figure
                img(src="@/assets/curso/tema5/5.png")
            .tarjeta-slide__img.p-4.d-flex.align-items-center.justify-content-center
              h3.text-center(style="color:#1169E3;font-size:18px;") Formulario de comentarios de clientes.
      .col-sm-6.col-xl-2.col-lg-2.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false" style="border-radius:0px;" data-aos="fade-in")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              figure
                img(src="@/assets/curso/tema5/6.png")
            .tarjeta-slide__img.p-4.d-flex.align-items-center.justify-content-center
              h3.text-center(style="color:#1169E3;font-size:18px;") Formulario de contacto.
      .col-sm-6.col-xl-2.col-lg-2.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false" style="border-radius:0px;" data-aos="fade-in")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              figure
                img(src="@/assets/curso/tema5/7.png")
            .tarjeta-slide__img.p-4.d-flex.align-items-center.justify-content-center
              h3.text-center(style="color:#1169E3;font-size:18px;") Formulario de solicitud de empleo.
      .col-sm-6.col-xl-2.col-lg-2.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false" style="border-radius:0px;" data-aos="fade-in")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              figure
                img(src="@/assets/curso/tema5/8.png")
            .tarjeta-slide__img.p-4.d-flex.align-items-center.justify-content-center
              h3.text-center(style="color:#1169E3;font-size:18px;") Formulario de membresía.
      .col-sm-6.col-xl-2.col-lg-2.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false" style="border-radius:0px;" data-aos="fade-in")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              figure
                img(src="@/assets/curso/tema5/9.png")
            .tarjeta-slide__img.p-4.d-flex.align-items-center.justify-content-center
              h3.text-center(style="color:#1169E3;font-size:18px;") Formulario de comentarios evaluación de un producto o servicio.
      .col-sm-6.col-xl-2.col-lg-2.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false" style="border-radius:0px;" data-aos="fade-in")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              figure
                img(src="@/assets/curso/tema5/10.png")
            .tarjeta-slide__img.p-4.d-flex.align-items-center.justify-content-center
              h3.text-center(style="color:#1169E3;font-size:18px;") Formulario de registro de inconformidades en el producto o servicio.

    p.mt-5(data-aos="fade-up") Una herramienta muy eficaz para este tipo de trabajo digital es la plataforma Google Forms que permite crear, compartir formularios y realizar encuestas en línea para su análisis en tiempo real.

    br
    .cont_tema5_2.pb-5(style="position:relative;")
      p.mt-5(data-aos="fade-up" style="position:relative") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;display:inline;") Mensajes]
      .row.mt-5
        .col-md-6
          div(style="height:100%;")
            figure
              img(src="@/assets/curso/tema5/11.svg" data-aos="zoom-in-up" style="position:relative")
        .col-md-6(style="place-self:center;position:relative;height:100%;")
          .p-5(style="background-color:#D7E4F6;height:100%;")
            p(data-aos="fade-up" style="position:relative") Los mensajes son comentarios (la opinión de un usuario) que mediante el uso de plataformas especializadas permite la interacción de manera corta. En ocasiones con el propósito de no saturar los canales digitales las empresas utilizan este tipo de herramienta digital para solicitar información mediante mensaje de texto (SMS) a los usuarios con relación a un producto o servicio que ya han adquirido. Esta práctica se realiza a través de dispositivos móviles.

      .cont_tema5_3.pt-5.pb-5.mt-5(style="position:relative")
        p(data-aos="fade-up" style="position:relative") Existen dos tipos de mensajes:
        figure.col-md-10.m-auto
          img(src="@/assets/curso/tema5/12.png" data-aos="zoom-in-up" style="position:relative")

      p.mt-5(data-aos="fade-up" style="position:relative") Un ejemplo de esta práctica de mensajería digital la realizan con frecuencia las empresas de telefonía móvil después que un cliente ha recibido algún servicio y se le solicita responder una encuesta de cinco preguntas con respuestas numéricas para fácil desarrollo del proceso.
      p.mt-5(data-aos="fade-up" style="position:relative") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;display:inline;") Plataformas]
      p.mt-4(data-aos="fade-up" style="position:relative") A continuación, se relacionan tres plataformas para enviar mensajes SMS de forma gratuita y frecuente uso:

      .row.col-md-11.m-auto.mt-5
        .col-md-3.mx-auto
          .ps-1.pe-1.pt-4.pb-4.row(style="background-color:#1169E3;border-radius:25px;box-shadow:rgb(0,0,0,.3) 0px 3px 10px;position:relative;height:100%;")
            .col-auto
              figure
                img(src="@/assets/curso/tema5/13.svg" data-aos="zoom-in" style="position:relative;")
            .col
              h5.text-white.mb-0(style="position:relative" data-aos="fade-up") #[em Globfone]
              p.text-white(style="position:relative" data-aos="fade-up") Se caracteriza por permitir que el remitente sea anónimo. No es necesario registrarse.
        .col-md-1(style="place-self:center")
          figure.text-center
            img(src="@/assets/curso/tema5/14.svg" data-aos="fade-in" style="position:relative;display:inline;max-width:45px;")
        .col-md-3.mx-auto
          .ps-1.pe-1.pt-4.pb-4.row(style="background-color:#1169E3;border-radius:25px;box-shadow:rgb(0,0,0,.3) 0px 3px 10px;position:relative;height:100%;")
            .col-auto
              figure
                img(src="@/assets/curso/tema5/15.svg" data-aos="zoom-in" style="position:relative;")
            .col
              h5.text-white.mb-0(style="position:relative" data-aos="fade-up") #[em SendSMSNow]
              p.text-white(style="position:relative" data-aos="fade-up") Se caracteriza por no tener un límite geográfico. Se debe hacer registro para usarla.
        .col-md-1(style="place-self:center")
          figure.text-center
            img(src="@/assets/curso/tema5/14.svg" data-aos="fade-in" style="position:relative;display:inline;max-width:45px;")
        .col-md-3.mx-auto
          .ps-1.pe-1.pt-4.pb-4.row(style="background-color:#1169E3;border-radius:25px;box-shadow:rgb(0,0,0,.3) 0px 3px 10px;position:relative;height:100%;")
            .col-auto
              figure
                img(src="@/assets/curso/tema5/16.svg" data-aos="zoom-in" style="position:relative;")
            .col
              h5.text-white.mb-0(style="position:relative" data-aos="fade-up") #[em Open Texting Online]
              p.text-white(style="position:relative" data-aos="fade-up") Se caracteriza por prestar sus servicios en varios países. No es necesario hacer registro y permite el anonimato.
      Separador.mt-4




</template>

<script>
export default {
  name: 'Tema5',
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
.cont_tema5_1:before
  content: ''
  position: absolute
  height: 108%
  width: 115%
  left: -7%
  top: -3%
  background-color: #B0C8CB
.cont_before1:hover
  background-color: #D7E4F6 !important
  cursor: pointer
.cont_before1:hover p
  color: #12263F !important
.cont_before1:hover h1
  color: rgb(199,219,245) !important
.cont_before1:before
  content: ''
  position: absolute
  width: 73px
  height: 50px
  background-color: #b0c8cb
  border-radius: 100px
  left: -45px
.tarjeta-slide.color-acento-contenido .tarjeta-slide__img
  background-color: #C9F0EE
.cont_tema5_2:before
  content: ''
  position: absolute
  height: 108%
  width: 115%
  left: -7%
  top: -4%
  background-color: #EAF1FA
.cont_tema5_3:before
  content: ''
  position: absolute
  height: 108%
  width: 115%
  left: -7%
  top: -8%
  background-color: #C9F0EE
</style>

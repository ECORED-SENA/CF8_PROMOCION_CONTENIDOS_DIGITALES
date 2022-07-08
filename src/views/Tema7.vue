<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Reporte

    .row
      .col-md-6
        .cajon.color-primario.p-4
          p(data-aos="fade-up") Los reportes en las empresas son esenciales para la toma de decisiones, así, conocer y entender el estado actual y el comportamiento de los objetivos propuestos permitirá a través de su seguimiento implementar acciones correctivas.
        p.mt-4(data-aos="fade-up") En el mundo #[em web] los medios digitales traen inmersa esta herramienta administrativa del análisis de datos en tiempo real, es el caso de las redes sociales Facebook, Instagram y Twitter que contemplan la analítica de datos (estadísticas).
      .col-md-6
        figure
          img(src="@/assets/curso/tema7/1.png" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") En términos generales un reporte hace referencia al conjunto de datos compilados en un informe que detalla el comportamiento de las variables de estudio de manera cuantitativa para su análisis y posterior toma de decisiones. Su característica principal es mostrar el comportamiento de las variables en un periódo de tiempo establecido.
    p.mt-4(data-aos="fade-up") Los resultados de las investigaciones pueden ser cuantitativas y cualitativas en esta oportunidad se hace referencia a informes de datos cuantitativos.

    br
    .cont_tema7_1.pb-5.mt-5(style="position:relative;")
      .row
        .col-md-3.mb-3
          figure
            img(src="@/assets/curso/tema7/2.png" data-aos="zoom-in-up" style="position:relative")
        .col-md-3.mb-3
          figure
            img(src="@/assets/curso/tema7/3.png" data-aos="zoom-in-up" style="position:relative")
        .col-md-6
          p.mt-3(data-aos="fade-up" style="position:relative") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;display:inline;") Técnica]
          p.mt-4.parrafo_before1(data-aos="fade-up" style="position:relative;z-index:1") La retención y monetización de los clientes, usuarios, consumidores o público objetivo son el propósito de toda marca, empresa o comunidad virtual que presta un servicio o que promociona un determinado producto por sus canales digitales. Es necesario, entonces, generar los reportes adecuados de las métricas para el análisis del comportamiento de nuestro público. A continuación, se presentan dos técnicas como ejemplo:
      .row.mt-5
        .col-auto
          figure
            img(src="@/assets/curso/tema7/5.png" data-aos="fade-right" style="position:relative")
        .col(style="place-self:center;")
          h3(data-aos="fade-up" style="position:relative") Reporte por retención de membresías
      .row.mt-4
        .col-md-7
          p(data-aos="fade-up" style="position:relative") Esta técnica aplica especialmente para los modelos de negocio cuya sostenibilidad en el mercado depende del número de suscriptores (miembros). Por ejemplo, las plataformas de películas como Netflix, Amazon Prime.
          p.mb-0.mt-4(data-aos="fade-up" style="position:relative;font-weight:bold;") Ecuación para el cálculo
          p.mb-0(data-aos="fade-up" style="position:relative;font-weight:bold;") Variables
          p.mb-0(data-aos="fade-up" style="position:relative;") #[strong MF] = Miembros al final del periódo.
          p.mb-0(data-aos="fade-up" style="position:relative;") #[strong MN] = Miembros nuevos adquiridos durante el periódo.
          p.mb-0(data-aos="fade-up" style="position:relative;") #[strong MS] = Miembros al comienzo del periódo.
          p.mb-0.mt-4(data-aos="fade-up" style="position:relative;font-weight:bold;") Ecuación (( MF – MN) / MS) * 100 
        .col-md-5
          figure
            img(src="@/assets/curso/tema7/6.png" data-aos="fade-left" style="position:relative")

      .row.mt-5
        .col-auto
          figure
            img(src="@/assets/curso/tema7/7.png" data-aos="fade-right" style="position:relative")
        .col(style="place-self:center;")
          h3(data-aos="fade-up" style="position:relative") Retorno en la inversión REI

      p.mt-4(data-aos="fade-up" style="position:relative") Es importante lograr medir el tráfico y determinar si la inversión realizada en cada campaña está arrojando los resultados esperados. La siguiente tabla presenta el esquema para poder llevar el seguimiento y control en un periódo determinado de una red social:

      p.mb-0.mt-5(data-aos="fade-up" style="position:relative;font-weight:bold;") Tabla 3
      p.mb-0(style="font-style:italic;position:relative" data-aos="fade-up") REI por tráfico

      .tabla-a.color-acento-contenido.mt-4(style="position:relative")
        table(style="position:relative")
          thead(style="position:relative;")
            tr
              th.text-center Campaña
              th.text-center Costo total ($)
              th.text-center Clics totales
              th.text-center Ganancias ($)
              th.text-center GPS ($)
              th.text-center GPC ($) #[br] #[span(style="font-weight:500;") (semanal)]
              th.text-center REI (%)
              th.text-center #[em Leads]
          tbody
            tr
              td.text-center.p-4.bg-white Campaña 1
              td.text-center.p-4.bg-white 20.000
              td.text-center.p-4.bg-white 100.000
              td.text-center.p-4.bg-white 60.000
              td.text-center.p-4.bg-white 0.6
              td.text-center.p-4.bg-white 0.28
              td.text-center.p-4.bg-white 200
              td.text-center.p-4.bg-white 40.000
            tr
              td.text-center.p-4.bg-white Campaña 2
              td.text-center.p-4.bg-white 5.000
              td.text-center.p-4.bg-white 8.000
              td.text-center.p-4.bg-white 3.200
              td.text-center.p-4.bg-white 0.4
              td.text-center.p-4.bg-white 0.05
              td.text-center.p-4.bg-white -36
              td.text-center.p-4.bg-white 0
            tr
              td.text-center.p-4.bg-white Campaña 3
              td.text-center.p-4.bg-white 30.000
              td.text-center.p-4.bg-white 75.000
              td.text-center.p-4.bg-white 28.000
              td.text-center.p-4.bg-white 0.37
              td.text-center.p-4.bg-white 0.32
              td.text-center.p-4.bg-white -7
              td.text-center.p-4.bg-white 30.000
            tr
              td.text-center.p-4.bg-white Campaña 4
              td.text-center.p-4.bg-white 20.000
              td.text-center.p-4.bg-white 40.000
              td.text-center.p-4.bg-white 50.000
              td.text-center.p-4.bg-white 1.25
              td.text-center.p-4.bg-white 0.27
              td.text-center.p-4.bg-white 150
              td.text-center.p-4.bg-white 0

    p.mt-5(data-aos="fade-up") Los siguientes conceptos integran los elementos básicos que se incluyen en el retorno de la inversión:

    .row.col-md-10.m-auto
      .col-md-6
        LineaTiempoD.color-acento-contenido
          p(numero="1" titulo="Campaña") Hace referencia al nombre de la campaña. Por ejemplo, Promoción Curso en Colombia.
          p(numero="2" titulo="Costo total") La inversión realizada en la campaña.
          p(numero="3" titulo="<em>Clics</em> totales") Número de usuarios que dieron #[em clic] en el #[em link] de la publicación y llegaron al sitio #[em web].
          p(numero="4" titulo="Ganancias") Valor en dinero que refleja la utilidad obtenida.
      .col-md-6
        figure
          img(src="@/assets/curso/tema7/8.png" data-aos="fade-left")

    .cont_tema7_2.pb-5.mt-4(style="position:relative;")
      .row.col-md-10.m-auto
        .col-md-6
          figure
            img(src="@/assets/curso/tema7/9.png" data-aos="fade-right" style="position:relative")
        .col-md-6
          LineaTiempoD.color-acento-contenido(style="position:relative")
            p(numero="5" titulo="GPC (totales)" style="position:relative") Es la división de las ganancias entre la cantidad de #[em clics] obtenidos. Ganancias por #[em clic].
            p(numero="6" titulo="GPS (semanal)" style="position:relative") Es un reporte que genera la plataforma de la red social directamente, para obtenerlo se debe ingresar al panel de control de la red. Por ejemplo, Facebook Analytics. Ganancias por #[em clic] semanal.
            p(numero="7" titulo="REI (Retorno en la Inversión)" style="position:relative") Es el excedente o faltante de restar las ganancias con la inversión y posterior a ello se realiza el cálculo para determinar porcentualmente si la utilidad es positiva o negativa. 
            p(numero="8" titulo="<em>Leads</em>" style="position:relative") Permite establecer cuántos nuevos usuarios llegaron a la publicación y hacer el análisis respectivo comparando con los #[em clics] totales y el REI.

      p.mt-5(data-aos="fade-up" style="position:relative") Hay muchas más técnicas para presentar reportes de métricas de datos como resultado de la implementación de estrategias de #[em marketing] digital y será decisión de la marca y los estrategas cuál ejecutar con miras al cumplimiento de los objetos trazados.

      p.mt-5(data-aos="fade-up" style="position:relative") #[span(style="padding:10px 25px;background-color:#1169E3;border-radius:50px;font-weight:bold;color:white;font-size:20px;display:inline;") Estructura]

      p.mt-4(data-aos="fade-up" style="position:relative") El formato de los reportes puede ser impreso, digital e incluso audiovisual. A continuación, se enuncian algunos de los aspectos más relevantes de la estructura de un reporte, esta puede variar conforme a la estrategia de #[em marketing] implementada.

      .row.mt-4
        .col-md-6
          figure
            img(src="@/assets/curso/tema7/10.png" data-aos="fade-right" style="position:relative")
        .col-md-6
          .cajon.color-primario.p-4
            ul.lista-ul
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Nombre de la campaña. 
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Periódo de medición de los datos.
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Nombre de la red social o canal digital que ejecuta la estrategia.
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Nombre del responsable de la estrategia.
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Objetivo a cumplir.
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Establecer las métricas cuantitativas y cualitativas.
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Presentación del análisis de los datos.
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Conclusiones.
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Recomendaciones.
              li(data-aos="fade-up" style="position:relative")
                i.fas.fa-dot-circle(style="color:#29C4BB;")
                | Planteamiento de la nueva estrategia.







</template>

<script>
export default {
  name: 'Tema7',
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
.cajon.color-primario
  background-color: #D7E4F6
.cont_tema7_1:before
  content: ''
  position: absolute
  height: 100%
  width: 115%
  left: -7%
  background-repeat: no-repeat
  background: url(../assets/curso/tema7/4.png)
.cont_tema7_2:before
  content: ''
  position: absolute
  height: 100%
  width: 115%
  left: -4%
  background-repeat: no-repeat
  background: url(../assets/curso/tema7/11.png)
.parrafo_before1:before
  content: ''
  position: absolute
  width: 50%
  height: 50%
  background-color: #D8F3F3
  z-index: -1
  left: -1%
  top: -2%
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #CBEDEB
.linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #CBEDEB !important
  color: #12263F !important
</style>

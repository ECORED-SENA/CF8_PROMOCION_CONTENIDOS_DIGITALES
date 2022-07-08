<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-up") El análisis de los datos se ha convertido en una herramienta fundamental para la toma de decisiones, pues permite conocer el comportamiento y el rendimiento de las acciones que la empresa ha trazado para cumplir con los objetivos propuestos. El área del #[em marketing] y, especialmente, la estrategia digital requieren de un seguimiento y un análisis constante en función de la conducta de los consumidores y/o usuarios frente a los productos y servicios ofertados, esta tarea se ejecuta a través de las métricas o comúnmente llamados indicadores (KPI).
    p.mt-4(data-aos="fade-up") Peter Drucker se hizo célebre por la siguiente frase: “Lo que no se puede medir no se puede controlar; lo que no se puede controlar no se puede gestionar; lo que no se puede gestionar no se puede mejorar”; en este sentido, las acciones en el mundo digital requieren de medición constante para su control y posterior mejoramiento. A continuación, se invita a ver el video de introducción a la temática del componente:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/In4EbGlAmM8" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

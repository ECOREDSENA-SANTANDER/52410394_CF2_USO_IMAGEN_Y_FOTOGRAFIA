<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 La fotografía
    Separador
    #t_2_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.1 Clasificación de la fotografía
    
    Separador
    #t_2_2.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.2 Planos fotográficos
    
    Separador
    #t_2_3.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.3 Técnicas de composición
    
    Separador
    #t_2_4.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.4 Consejos prácticos

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

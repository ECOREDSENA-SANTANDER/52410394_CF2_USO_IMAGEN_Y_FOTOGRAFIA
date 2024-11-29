<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 1. La imagen
    
    Separador
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 1.1 Tipos de estructuras
    
    Separador
    #t_1_2.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 1.2 Composición
    
    Separador
    #t_1_3.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 1.3 Jerarquías en los elementos
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Para obtener o producir una buena imagen o fotografía, es importante tener en cuentas características como estructura, composición y jerarquía de las formas, así como los planos fotográficos y algunas técnicas de composición de la fotografía. En el siguiente cuadro se mencionan y relacionan los principales temas que conforman el componente formativo:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El diagrama presenta los principales temas tratados en el componente: tipos de estructuras, composición y jerarquías en los elementos de una imagen; y clasificación, planos, técnicas de composición y consejos prácticos para conseguir una buena fotografía.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

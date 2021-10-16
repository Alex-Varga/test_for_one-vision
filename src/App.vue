<template>
  <div id="app">
    <Header/>

    <Content/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
export default {
  name: 'App',
  components: {
    Header, Content
  },
};
</script>

<style lang="scss">
  @font-face {
    font-family: 'Helvetica Neue';
    src: local('Helvetica Neue'), local('Helvetica-Neue-Light'),
        url('../src/assets/font/HelveticaNeue-CondensedRegular.woff') format('woff'),
        url('../src/assets/font/HelveticaNeue-CondensedRegular.ttf') format('ttf'),
        url('../src/assets/font/HelveticaNeue-CondensedRegular.svg') format('svg'),
        url('../src/assets/font/HelveticaNeue-CondensedRegular.eot') format('eot');
    font-weight: 300;
    font-style: normal;
  }
  * {
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Helvetica Neue';
    background: #2E2F32;
  }
  body.modal-open {
    overflow: hidden;
  }
</style>

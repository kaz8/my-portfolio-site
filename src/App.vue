<template>
  <body>
    <div id="main">
      <Header></Header>
      <router-view/>
      <Footer class="app-footer"></Footer>
    </div>
  </body>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  }
};
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";

body,
#main {
  font-family: fot-tsukuardgothic-std, sans-serif;
  line-height: 1.5;
  font-size: 14px;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-footer {
  margin-top: auto;
}
</style>

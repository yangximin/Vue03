<template>
  <div id="app">
    <HeaderView />
    <router-view />
    <FooterView v-show="!$route.meta.isHide" />
  </div>
</template>

<script>
import HeaderView from "./components/Header";
import FooterView from "./components/Footer";
export default {
  name: "App",
  components: {
    HeaderView,
    FooterView,
  },
  mounted() {
    this.$store.dispatch("categoryList");
  }
};
</script>

<style></style>

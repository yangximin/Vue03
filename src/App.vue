<template>
  <div id="app">
    <HeaderView />
    <router-view />
    <FooterView />
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
};
</script>

<style>
</style>

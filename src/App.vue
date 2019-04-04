<template>
  <div id="app">
    <App/>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import App from "@/components/App";
export default {
  components: {
    App
  }
};
</script>

<style>
#app {
  font-family: "Karla", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

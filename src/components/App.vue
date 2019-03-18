<template>
  <div>
    <Menu/>
    <Carousel/>
    <Content/>
    <Footer />
  </div>
</template>

<script>
import Menu from "./Menu";
import Carousel from "./Carousel";
import Content from "./Content";
import Footer from "./Footer";

export default {
  data() {
    return {
    };
  },

  methods: {
  },

  components: {
    Menu,
    Carousel,
    Content,
    Footer,
  }
};
</script>

<style>
</style>


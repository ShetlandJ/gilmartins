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
import OpeningHours from "./OpeningHours";

export default {
  data() {
    return {
    };
  },

  components: {
    Menu,
    Carousel,
    Content,
    Footer,
    OpeningHours
  }
};
</script>

<style>
</style>


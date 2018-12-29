<template>
  <div id="carousel">
    <b-carousel
      id="carousel"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      background="#ababab"
      :interval="5000"
      img-width="1024"
      img-height="380"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block"
          height="380"
          src="https://www.theosthinktank.co.uk/assets/generated/articles/page/e89590efeeb0e6c8dd2067e9e70f59c0.jpg"
          alt="image slot"
        >
      </b-carousel-slide>

      <b-carousel-slide>
        <img
          slot="img"
          class="d-block"
          height="380"
          src="http://www.maisanosbakery.com/wp-content/uploads/2018/01/DSC01984-1.jpg"
          alt="image slot"
        >
      </b-carousel-slide>

      <b-carousel-slide>
        <img
          slot="img"
          class="d-block"
          height="380"
          src="https://www.rosettabakery.com/wp-content/uploads/2016/07/2320-copy-1560x740.jpg"
          alt="image slot"
        >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style>
#carousel {
  max-height: 480px;
}
</style>
<!-- carousel-1.vue -->
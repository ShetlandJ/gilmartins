<template>
  <div @click="clicked = true" v-if="!clicked" id="footer">
    <strong>
      <p id="footer-text">We are open 8am - 8pm today!</p>
    </strong>
    <button type="button" class="btn btn-dark btn-sm">Opening hours</button>

  </div>

  <div v-else id="opening-hours-screen">

    <div id="hours"  @click="clicked = false">
      <h2>Opening hours</h2>
      <p>Monday: 8am-7pm</p>
      <p>Tuesday: Closed</p>
      <p>Wednesday: 8am-7pm</p>
      <p>Thursday: 8am-7pm</p>
      <p>Friday: 8am-9pm</p>
      <p>Saturday: 8am-9pm</p>
      <p>Sunday: 10am-5pm</p>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      clicked: false
    }
  }
};
</script>

<style>
#footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 75px;
  background: white;
  color: black;
  display: grid;
  justify-content: center;
  align-content: center;
  transition: all 0.5s;

}

#opening-hours-screen {
  z-index: 9999;
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  transition: 0.5s ease-in;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}

.fade-enter, .fade-leave-to {
  height: 0px;
  opacity: 0;
  transition: all 0.5s
}

#hours {
 color: rgba(0, 0, 0, 0.5);
}

#footer-text {
  margin: 0;
   color: rgba(0, 0, 0, 0.5);

}
</style>

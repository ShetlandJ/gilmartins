<template>
  <div>
    <Menu/>
    <img id="steph-picture" src="@/assets/steph.png" alt>

    <div id="steph-details">
      <h3>Stephanie Stewart</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam lum alias eos iure dignissimos, praesentium est deserunt accusamus eligendi? Amet consequuntur facilis laborum dicta minima ducimus aut repellendus, sapiente iste?</p>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  components: {
    Menu
  }
};
</script>

<style scoped>
#steph-picture {
  margin-top: 10px;
  width: 75%;
  height: 75%;
}

#steph-details {
  margin: 0px 10px 0px 10px;
}
</style>

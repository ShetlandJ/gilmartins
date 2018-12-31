<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-brand to="/">Gilmartin's</b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Home</b-nav-item>

        <b-nav-item>Menu</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
</style>


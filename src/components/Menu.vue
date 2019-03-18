<template>
  <b-navbar toggleable="md" class="navbar-dark bg-dark menu">
    <b-navbar-brand to="/" class="name">Gilmartin's Bakery</b-navbar-brand>
    <b-navbar-toggle class="hamburger" target="nav_collapse">☰</b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="menu-item" href="#">Home</b-nav-item>

        <b-nav-item class="menu-item">Menu</b-nav-item>
        <b-nav-item to="/about" class="menu-item">About</b-nav-item>
        <b-nav-item href="#" class="menu-item">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
.menu {
  background-color: #fee6e3 !important;
}

.navbar-brand {
  color: black !important;
}

.hamburger {
  color: black !important;
}

.navbar-dark .navbar-nav .nav-link {
 color: rgba(0, 0, 0, 0.5);
}
</style>


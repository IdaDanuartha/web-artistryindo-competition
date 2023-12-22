<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
</script>

<template>
  <div>
    <NavbarComponent></NavbarComponent>
  </div>
  <router-view/>
</template>

<style>
body {
  background-color: rgba(250, 245, 238, 1);
}

a {
  text-decoration: none !important;
}
@import '/src/assets/css/style.css';
/* @import '/src/assets/css/bootstrap.min.css'; */
</style>

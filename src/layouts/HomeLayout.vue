<script setup>
import NavbarComponent from '../components/NavbarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import { ref } from "vue";

let active = ref(false);

const activeSidebar = () => {
  active.value = !active.value;
};

</script>

<template>
  <div>
    <NavbarComponent :active="active" @active-sidebar="activeSidebar"></NavbarComponent>
  </div>
  <router-view/>
  <FooterComponent></FooterComponent>
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

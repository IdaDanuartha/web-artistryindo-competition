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
/* @import '/src/assets/css/bootstrap.min.css'; */
@import '/src/assets/css/style.css';
@import '../assets/css/swiperPagination.css';
</style>

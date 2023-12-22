<script setup>
import NavbarComponent from '../components/NavbarComponent.vue';
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
</template>

<style>
/* @import '/src/assets/css/bootstrap.min.css'; */
@import '/src/assets/css/style.css';
</style>

<script setup>
</script>

<template>
  <div>
    <nav class="navbar">
      <div class="container d-flex justify-content-between align-items-center">
          <div class="navbar-link d-flex align-items-center">
              <a href="#">
                  <img src="./assets/images/brand/logo-brand.svg" alt="Logo Brand" class="img-fluid" width="56">
              </a>
              <a href="#" class="link-item d-none d-md-inline-block {{ Request::is('/') ? 'active' : '' }}">Home</a>
              <a href="#" class="link-item d-none d-md-inline-block {{ Request::is('/about') ? 'active' : '' }}">About</a>
              <a href="#" class="link-item d-none d-md-inline-block {{ Request::is('/category') ? 'active' : '' }}">Category</a>
              <a href="#" class="link-item d-none d-md-inline-block {{ Request::is('/blog') ? 'active' : '' }}">Blog</a>
          </div>
          <button type="button" class="navbar-button d-md-none d-flex flex-column justify-content-center align-items-center gap-1">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
          </button>
          <a href="#" class="button-primary-small d-none d-md-inline-block">Explore Now</a>
      </div>
    </nav>

    <nav class="navbar-list d-flex justify-content-center align-items-center">
      <div class="list-wrapper text-center d-flex flex-column align-items-center gap-3">
        <a href="#" class="list-item {{ Request::is('/') ? 'active' : '' }}">Home</a>
        <a href="#" class="list-item {{ Request::is('/about') ? 'active' : '' }}">About Us</a>
        <a href="#" class="list-item {{ Request::is('/category') ? 'active' : '' }}">Category Art</a>
        <a href="#" class="list-item {{ Request::is('/blog') ? 'active' : '' }}">Blog ArtistryIndo</a>
        <a href="#" class="button-primary mt-3 w-100">Explore Now</a>
      </div>
    </nav>
  </div>
  <router-view/>
</template>

<style>
body {
  background-color: rgba(250, 245, 238, 1);
}

a {
  text-decoration: none;
}
@import '/src/assets/css/style.css';
@import '/src/assets/css/bootstrap.min.css';
</style>

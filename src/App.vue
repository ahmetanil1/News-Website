<template>
  <div class="header-container">
    <h2>News Website</h2>
  </div>
  <div class="nav-container">
    <navPage />
  </div>
  <div class="content-container">
    <router-view />
  </div>
</template>

<script setup>
import navPage from "./components/navPage.vue";
</script>
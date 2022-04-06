<script setup>
import {RouterView} from 'vue-router';
import NavigationBar from './components/NavigationBar.vue';

</script>

<template>
  <NavigationBar />
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
body {
  background-color: aliceblue;
}
img {
  max-width: 200px;
}
</style>

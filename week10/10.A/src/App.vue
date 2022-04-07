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
  background-color: #bee3db;
  margin: 1rem;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
img {
  max-width: 200px;
}

.albumContainer {
  display: inline-flex;
  justify-content: space-between;
  min-width: 400px;
  width: 300px;
  text-decoration: none;
} 
.tr {
  display: flex;
  align-items: center;
  font-size: 1.75em;
  color: #555b6e;
  text-decoration: none;
  padding: 1rem;
}
.tr:hover {
    background: #fdfdff;
    color: #2b2d42;
}
.album-name {
  padding: 10px;
}
.nav-bar {
  font-size: 2rem;
  color: #2b2d42;
  text-align: center;
  padding: 10px;
}
.nav-bar a {
  text-decoration: none;
  color: #2b2d42;
}

.nav-bar a:hover {
  color: #555b6e;
  text-decoration: 2px wavy underline #555b6e;
}

h1 , h2{
  color: #555b6e;
  text-align: center;
}
</style>

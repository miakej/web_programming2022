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
  background-color: #fdfdff;
  margin: 1rem;
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
    background: #bee3db;
    color: #2b2d42;
}
.album-name {
  padding: 10px;
}
.nav-bar {
  font-size: 2rem;
  color: #2b2d42;
}
.nav-bar a {
  text-decoration: none;
  color: #555b6e;
}

.nav-bar a:hover {
  color: #2b2d42;
  text-decoration: 2px wavy underline #2b2d42;
}

h1 {
        color: #2b2d42;
    }
</style>

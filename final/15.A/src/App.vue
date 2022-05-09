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
/* global styles  */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;1,200&family=Syncopate:wght@400;700&display=swap');

  body {
    margin: 0;
    font-family: "Montserrat";
    font-weight: 300;
  }
  .nav-bar {
    font-size: 2rem;
    font-weight: 700;
    font-family: "Syncopate";
    color: #2b2d42;
    text-align: left;
    padding: 2rem;
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
    font-family: "syncopate";
    text-align: center;
  }
  h3 {
    font-size: 1.25em;
    color: #2b2d42;
    padding: 0;
  }
  h4 {
    font-size: 1.25em;
    color: #555b6e;
    padding: 0;
    line-height: 1em;
  }

/* collection page style */
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
    font-size: 1.25em;
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

/* home style */
  video {
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
      object-fit: cover;
    -o-object-position: center;
      object-position: center;
  z-index: -2;
  }
  .content {
    position: fixed;
    z-index: -1;
    top: 100px;
    color: #2b2d42;
    width: 45%;
    padding: 0 2rem;
    margin: 0 auto;
    text-align: left;
    font-size: 1.25em;
    font-weight: 300;
  }
  .content a {
    text-decoration: none;
    color: #2b2d42;
  }
  .content a:hover {
      color: white;
      text-decoration: wavy underline;
  } 
</style>

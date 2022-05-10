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

  :root {
    --main: red;
    --secondary: blue;
    --mainhover: green;
    --accent: orange;
    --overlay: rgba(255, 255, 255, 0.9);
    --body: black;
  }

  body {
    margin: 0;
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-weight: 300;
  }
  .nav-bar {
    font-size: 2rem;
    font-weight: 700;
    font-family: "Syncopate";
    color: var(--accent);
    padding: 2rem;
  }
  .nav-bar a {
    text-decoration: none;
    color: var(--main);
  }
  .nav-bar a:hover {
    color: var(--mainhover);
    text-decoration: 2px wavy underline var(--mainhover);
  }
  h1 , h2{
    color: var(--secondary);
    font-family: "syncopate";
    text-align: center;
  }
  h3 {
    font-size: 1.25em;
    color: var(--accent);
    padding: 0;
    line-height: 1em;
  }
  h4 {
    text-align: center;
  }

/* home style */
  video {
  position: fixed;
    z-index: -2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 10%;
  }
  .content {
    position: fixed;
    z-index: -1;
    top: 100px;
    width: 30%;
    background: var(--overlay);
    padding: 0 2rem;
    margin: 0 2rem;
    border: 1px solid var(--accent);
    box-shadow: 5px 5px var(--accent);
  }
  .content p {
    color: var(--body);
    font-size: 1.2em;
    font-weight: 700;
  }
  .content a {
    text-decoration: none;
    color: var(--body);
  }
  .content a:hover {
      color: var(--mainhover);
      text-decoration: wavy underline;
  } 


/* collection page style */

  img {
    max-width: 200px;
  }
  .albumContainer {
    display: inline-flex;
    justify-content: left;
    width: 400px;
    text-decoration: none;
    border: 1px solid var(--accent);
    box-shadow: 5px 5px var(--accent);
    margin: 1rem;
  } 
  .tr {
    display: flex;
    align-items: flex-start;
    color: var(--secondary);
    text-decoration: none;
    padding: 1rem;
  }
  .tr:hover {
      background: var(--secondary);
      color: white;
      border: px solid var(--secondary);
  }
  .album-name {
    padding-left: 10px;
    font-size: 1.5em;
  }

</style>

<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to ="/">Home</RouterLink> |
    <RouterLink to ="/alpaca">Alpaca</RouterLink> |
    <RouterLink to ="/llama">Llama</RouterLink>
  </nav>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<style>
  html {
    font-size: 16px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  body, #app {
    margin: 0;
  }
  nav {
    width: 100%;
    height: 45px;
    background: rgb(34, 40, 68);
    text-align: center;
  }
  nav a, nav a:hover, nav a:link, nav a:active, nav a:visited {
    color: white;
    font-weight: 900;
    font-size: 24px;
    line-height: 1.75;
    text-decoration: none;
  }
  nav a.router-link-active {
    text-decoration: underline;
    color: rgb(240, 240, 184)
  }
  h1 {
    text-align: center;
    font-size: 48px;
  }
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 50px;
  }
  .container p, h3 {
    width: 1000px;
    font-size: inherit;
    padding-left: 100px;
  }
  .container img {
    display: block;
    max-width: 1000px;
    width: 100%;
    margin: 20px auto 20px;
  }
</style>

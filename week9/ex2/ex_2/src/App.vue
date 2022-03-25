<script setup>
 // javascript here
 const isWorking = true;
</script>

<template>
<!-- html here--> 
<!-- most important. every component needs at least a template. -->
<div class="container">
  <h1>My first compiled Vue app</h1>
  <p v-if="isWorking">It is working</p>
</div>
</template>

<style>
/* css here */ 
.container {
  width: 600px;
  margin: 200px auto 0;
  text-align: center;
  font-size: 18px;
}
.container p {
  font-size: 18px;
}
</style>

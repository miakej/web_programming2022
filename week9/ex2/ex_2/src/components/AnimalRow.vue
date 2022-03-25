<script setup>
    const props = defineProps(['animal']);
    console.log(props.animal);
</script>

<template>
  <div class="animal-row">
    <h5>{{props.animal.name}}</h5>
    <img v-bind:src="props.animal.image" v-bind:alt="props.animal.commonName"/>
    <p>{{props.animal.caption}}</p>
  </div>
</template>

<style scoped>
h5 {
  text-align: center;
  font-size: 18px;
}
p {
  font-size: 18px;
  text-align: center;
}
.animal-row {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border: 1px solid black;
    margin: 10px;
    border-radius: 5px;
}
.animal-row img{
  max-width: 300px;
  display: block;
  margin: 5px auto 0;
}
</style>
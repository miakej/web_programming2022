<script setup>
    const props = defineProps(['animal']);
    console.log(props.animal);
    const triggerConsole = (animal) => {
        console.log("you clicked", animal.commonName);
    }
</script>

<template>
  <div class="animal-row">
    <h5 @click="$emit('headlineClick', props.animal.commonName)">{{props.animal.commonName}}</h5>
    <img v-bind:src="props.animal.image" v-bind:alt="props.animal.commonName"/>
    <p>{{props.animal.binomialName}}</p>
    <p>{{props.animal.order}}</p>
    <p>{{props.animal.genus}}</p>
    <p>{{props.animal.species}}</p>
    <p>{{props.animal.family}}</p>
    <button class="clear" type="button" v-on:click="$emit('deleteRow', props.animal)">Delete</button>
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
    text-align: center;
}
.animal-row img{
  max-width: 300px;
  display: block;
  margin: 5px auto 0;
}

.clear {
  margin: 0 auto 1rem;
  color: red;
}
</style>
<script setup>
 // javascript here
 import {reactive} from "vue";
 import AnimalRow from './components/AnimalRow.vue';
 const isWorking = true;
 let animals = [
      {
        commonName: "Lama",
        binomialName: "Lama glama",
        order: "Artiodactyla",
        family: "Camelidae",
        genus: "Lama",
        species: "L. glama",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_lying_down.jpg/220px-Llama_lying_down.jpg",
        id: 1
        },
      {
        commonName: "Alpaca",
        binomialName: "Vicugna pacos",
        order: "Artiodactyla",
        family: "Camelidae",
        genus: "Vicugna",
        species: "V. pacos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/440px-Alpaca_%2831562329701%29.jpg",
        id: 2
      },
    ];
  const state = reactive({animals});
  function handleRowDelete(animal) {
    state.animals = state.animals.filter(item => {
      return item !== animal;
    });
  }
</script>

<template>
  <div class="container">
    <h1>Animals</h1>
    <AnimalRow 
      v-for="animal in state.animals" 
      :key="animal.id" 
      :animal="animal" 
      @delete-row="handleRowDelete" />
  </div>
</template>

<style> 
  .container {
    width: 600px;
    margin: 200px auto 0;
    font-family: Impact;
  }
</style>

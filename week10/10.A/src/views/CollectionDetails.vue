<script setup>
    import ConsoleList from "../data/vinyls.json";
    import { useRoute } from "vue-router";

    const route = useRoute ();
    const paramId = route.params.id * 1;
    console.log("the id is", paramId);
    const item = VinylList.find(item => {
        return item.id === paramId;
    })
</script>
<template>
    <h1>{{item.name}}</h1>
    <p>{{item.body}}</p>
    <img :src="item.image" :alt="item.name" />
</template>
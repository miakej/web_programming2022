<script setup>
    import VinylList from "../data/vinyls.json";
    import { useRoute } from "vue-router";

    const route = useRoute ();
    const paramId = route.params.id * 1;
    console.log("the id is", paramId);
    const album = VinylList.find(album => {
        return album.id === paramId;
    })
</script>
<template>
    <h1>{{album.artist}}</h1>
    <p>{{album.album}}</p>
    <img :src="album.cover" :alt="album.album" />
</template>
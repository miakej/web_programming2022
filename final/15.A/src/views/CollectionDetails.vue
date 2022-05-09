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
    <div class="detailBox">
        <h1>{{album.artist + ', ' + album.album}}</h1>
        <h2>Rank: #{{album.rank}} Greatest Album of All Time</h2>
        <img :src="album.cover" :alt="album.album" />
        <p>{{album.body1}}</p>
        <p>{{album.body2}}</p>
        <p>{{album.body3}}</p>
        <p>{{album.body4}}</p>
    </div>
</template>

<style scoped>
    h2 {
        color: 
        #2b2d42;
    }
    img {
        float: right;
        padding: 0 0 2rem 2rem;
        max-width: 40%;
        max-height: 400px;
    }
    p {
        color: rgb(82, 138, 190);
        font-family: sans-serif;
    }
    .detailBox {
        padding: 6rem 2rem;
    }

</style>
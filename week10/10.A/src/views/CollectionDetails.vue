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
        <img :src="album.cover" :alt="album.album" />
        <div class="detailRight">
            <h1>Rank: #{{album.rank}}</h1>
            <h2>{{album.artist + ', ' + album.album}}</h2>
            <p>{{album.body}}</p>
        </div>
    </div>
</template>

<style scoped>
    h2 {
        color: 
        #2b2d42;
    }
    img {
        max-width: 50%;
        max-height: 600px;
    }
    p {
        color: rgb(82, 138, 190);
    }
    .detailBox {
        padding: 1rem 0;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .detailRight {
        max-width: 45%;
    }
</style>
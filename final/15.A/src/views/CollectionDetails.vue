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
        <div class="audioplayer">
            <h4>play album sample:</h4>
            <audio controls>
                <source :src="album.audio" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        </div>
        <img :src="album.cover" :alt="album.album" />
        <p>{{album.body1}}</p>
        <p>{{album.body2}}</p>
        <p>{{album.body3}}</p>
        <p>{{album.body4}}</p>
    </div>
</template>

<style scoped>
    .audioplayer {
        display: flex;
        justify-content: center;
        gap: 1rem
    }
    h2 {
        color: 
        var(--mainhover);
    }
    img {
        float: right;
        padding: 1.5rem 0 2rem 2rem;
        max-width: 40%;
        max-height: 400px;
    }
    .detailBox {
        padding: 0 2rem;
    }

</style>
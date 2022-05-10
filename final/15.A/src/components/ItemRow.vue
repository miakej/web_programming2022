<script setup>
    import { RouterLink } from 'vue-router';
    const props = defineProps (["album", "index"]);
    console.log('the album', props.album); 
</script>

<template>
<RouterLink :to="'/collection/' + album.id" class="albumContainer"> 
    <div class="tr">
        <div class="album-cover">
            <img :src="album.cover" :alt="album.artist + ' ' + album.album"></div>
        <div class="album-name"><strong>{{'#' + album.rank + '. ' +  album.album + ' ————— '}}</strong>
        <div class="artist-name">{{album.artist}}</div></div>
    </div>
</RouterLink>
</template>

<style scoped>
</style>
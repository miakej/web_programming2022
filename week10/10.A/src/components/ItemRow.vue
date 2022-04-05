<script setup>
    import { RouterLink } from 'vue-router';
    const props = defineProps (["album", "index"]);
    console.log('the album', props.album); 
</script>

<template>
<RouterLink :to="'/collection/' + album.id" class="album-container"> 
    <div class="tbody">
        <div class="tr" v-bind:class="{tr: true, even: index % 2 === 0, odd: index % 2 !== 0}">
            <div class="td album-cover">
                <img :src="album.cover" :alt="album.artist + ' ' + album.album"></div>
            <div class="td album-name">{{album.album}}</div>
            <div class="td artist-name">{{album.artist}}</div>
            <div class="td album-year">{{album.year}}</div>
            <div class="td album-owned">{{album.owned}}</div>
        </div>
    </div>
</RouterLink>
</template>

<style scoped>
.album-container {
    border: 1px solid black;
    width: 300px;
} 
</style>
<script setup>
    defineProps (["album"]);
    console.log('the album', album); 
</script>

<template>

    <div class="collectionRow">
        <div class="cell cover-image">
            <img :title="album.album" :src="album.cover" :alt="album.artist + ' ' + album.album + ' cover art'"></div>
        <div class="cell album-name">{{album.album}}</div>
        <div class="cell album-artist">{{album.artist}}</div>
        <div class="cell album-year">{{album.year}}</div>
        <div class="cell owned">{{album.owned}}</div>
        <div class="cell actions">
            <button type="button" v-on:click="deleteItem(album)">Delete</button> 
        </div>
    </div>
</template>
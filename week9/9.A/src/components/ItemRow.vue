<script setup>
    const props = defineProps (["album"]);
    console.log('the album', props.album); 
</script>

<template>
    <div class="tbody">
        <div class="tr">
            <div class="td album-cover">
                <img :title="album.album" :src="album.cover" :alt="album.artist + ' ' + album.album + ' cover art'"></div>
            <div class="td album-name">{{album.album}}</div>
            <div class="td artist-name">{{album.artist}}</div>
            <div class="td album-year">{{album.year}}</div>
            <div class="td album-owned">{{album.owned}}</div>
            <div class="td cellActions">
                <button type="button" v-on:click="$emit('deleteRecord', item)">Delete</button> 
            </div>
        </div>
    </div>
</template>
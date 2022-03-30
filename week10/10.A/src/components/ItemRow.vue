<script setup>
    import 
    const props = defineProps (["album", "index"]);
    console.log('the album', props.album); 
</script>

<template>
<RouterLink :to="/collection/" + item.id=" class="item-container"> //didn't catch this part
    <div class="tbody">
        <div class="tr" v-bind:class="{tr: true, even: index % 2 === 0, odd: index % 2 !== 0}">
            <div class="td album-cover">
                <img :title="album.album" :src="album.cover" :alt="album.artist + ' ' + album.album + ' cover art'"></div>
            <div class="td album-name">{{album.album}}</div>
            <div class="td artist-name">{{album.artist}}</div>
            <div class="td album-year">{{album.year}}</div>
            <div class="td album-owned">{{album.owned}}</div>
        </div>
    </div>
</RouterLink>
</template>

<style scoped>
.collectionRow {
    border: 1px solid black
} 
</style>
<script setup>
    import VinylList from "../data/vinyls.json";
    import ItemRow from "../components/ItemRow.vue";
</script>

<template>
    <ItemRow v-for="(album, index) in VinylList" :key="index" :album="album" />
</template>
<script setup>
    import VinylList from "../data/vinyls.json";
    import ItemRow from "../components/ItemRow.vue";

    console.log(VinylList);
</script>

<template>
    <h1>Vinyl List</h1>
    <ItemRow v-for="(album, index) in VinylList" :key="index" :item="album" />
</template>
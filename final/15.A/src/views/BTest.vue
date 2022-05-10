<script setup>
    import VinylList from "../data/vinyls.json";
    import ItemRow from "../components/ItemRow.vue";
    import { reactive } from 'vue';
    // console.log(VinylList);
    
    const vinyls = [VinylList];
    const newVinylObj = {
        cover: " ",
        artist: " ",
        album: " ",
        year: " ",
        owned: "not yet",
        };
    const state = reactive({vinyls ,newVinylObj});

    function addNewVinyl () {
        state.vinyls.push({
            cover: state.newVinylObj.cover,
            artist: state.newVinylObj.artist,
            album: state.newVinylObj.album,
            id: state.vinyls.length + 1,
        });
        state.newVinylObj.cover = "";
        state.newVinylObj.artist = "";

        state.newVinylObj.owned = "not yet";
    }


</script>

<template>
    <div class="full-wrapper">
        <ItemRow 
            v-for="(album, index) in VinylList" 
            v-bind:key="index" 
            v-bind:album="album" 
            v-bind:index="index"
        />
        <div class="add-vinyl-form">
            <form v-on:submit.prevent="addNewVinyl" class="new-vinyl-form">
                <fieldset>
                    <legend>Add a vinyl to the collection</legend>
                    <div>
                        <label for="cover">Cover Art (URL)</label>
                        <input id="cover" type="text" v-model="newVinylObj.cover">
                    </div>
                    <div>
                        <label for="album">Album</label>
                        <input id="album" type="text" v-model="newVinylObj.album">
                    </div>
                    <div>
                        <label for="artist">Artist</label>
                        <input id="artist" type="text" v-model="newVinylObj.artist">
                    </div>

                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    </div>
</template>